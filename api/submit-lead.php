<?php

$NOTIFY_TO   = "hello@fundastra.in";
$FROM_EMAIL  = "hello@fundastra.in";
$FROM_NAME   = "Fundastra Website";

$SMTP_ENABLED  = true;
$SMTP_HOST     = "smtp.titan.email";
$SMTP_PORT     = 465;
$SMTP_USER     = "hello@fundastra.in";

$SMTP_PASSWORD = getenv('FUNDASTRA_SMTP_PASSWORD') ?: '';
$privateConfig = dirname(__DIR__, 2) . '/fundastra-smtp.php';

if ($SMTP_PASSWORD === '' && is_file($privateConfig)) {
    $cfg = require $privateConfig;
    $SMTP_PASSWORD = is_array($cfg) ? (string)($cfg['password'] ?? '') : '';
}

if ($SMTP_ENABLED && $SMTP_PASSWORD === '') {
    error_log("Fundastra: SMTP password not found (env FUNDASTRA_SMTP_PASSWORD or {$privateConfig})");
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "ok" => false,
        "error" => "Method not allowed"
    ]);
    exit;
}

function cleanHeader($value) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', (string)$value));
}

function prettyLabel($key) {
    return ucwords(trim(preg_replace('/(?<!^)[A-Z]/', ' $0', str_replace('_', ' ', $key))));
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "error" => "Invalid or missing JSON body"
    ]);
    exit;
}

$source = trim($input['source'] ?? '');

if ($source === '') {
    http_response_code(422);
    echo json_encode([
        "ok" => false,
        "error" => "Source is required"
    ]);
    exit;
}

$submission = [
    "id" => uniqid("lead_", true),
    "source" => $source,
    "fullName" => trim($input['fullName'] ?? $input['name'] ?? ''),
    "email" => trim($input['email'] ?? ''),
    "phone" => trim($input['phone'] ?? ''),
    "message" => trim($input['message'] ?? ''),
    "submitted_at" => date("c")
];

foreach ($input as $key => $value) {
    if (
        !array_key_exists($key, $submission) &&
        $key !== 'submittedAt'
    ) {
        $submission[$key] = is_string($value)
            ? trim($value)
            : $value;
    }
}

$dataDir = __DIR__ . '/../data';

if (!is_dir($dataDir)) {
    if (!mkdir($dataDir, 0775, true)) {
        http_response_code(500);
        echo json_encode([
            "ok" => false,
            "error" => "Could not create data directory"
        ]);
        exit;
    }
}

$dataFile = $dataDir . '/lead-submissions.json';

$existing = [];

if (file_exists($dataFile)) {
    $existing = json_decode(
        file_get_contents($dataFile),
        true
    ) ?: [];
}

$existing[] = $submission;

$saved = file_put_contents(
    $dataFile,
    json_encode(
        $existing,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    ),
    LOCK_EX
);

if ($saved === false) {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "Could not save submission"
    ]);
    exit;
}

$name        = cleanHeader($submission['fullName'] ?: 'Website Visitor');
$leadEmail   = filter_var($submission['email'], FILTER_VALIDATE_EMAIL) ?: '';
$sourceLabel = cleanHeader($submission['source']);

$subject = "New Enquiry: {$sourceLabel} - {$name}";

$rows = '';
foreach ($submission as $key => $value) {
    if (is_array($value)) {
        $value = implode(', ', array_map('strval', $value));
    }
    $rows .= '<tr>'
        . '<td style="padding:8px 12px;border:1px solid #e5e2dc;background:#fbf9f6;font-weight:600;">'
        . htmlspecialchars(prettyLabel($key), ENT_QUOTES, 'UTF-8') . '</td>'
        . '<td style="padding:8px 12px;border:1px solid #e5e2dc;">'
        . nl2br(htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8')) . '</td>'
        . '</tr>';
}

$htmlBody = '<html><body style="font-family:Arial,sans-serif;color:#000f09;">'
    . '<h2 style="color:#052e26;">New enquiry from Fundastra website</h2>'
    . '<table style="border-collapse:collapse;font-size:14px;">' . $rows . '</table>'
    . '</body></html>';

$mailSent = false;
$autoload  = __DIR__ . '/../vendor/autoload.php';
$manualDir = __DIR__ . '/phpmailer/src';
$phpmailerReady = false;

if (file_exists($autoload)) {
    require $autoload;
    $phpmailerReady = true;
} elseif (file_exists($manualDir . '/PHPMailer.php')) {
    require $manualDir . '/Exception.php';
    require $manualDir . '/PHPMailer.php';
    require $manualDir . '/SMTP.php';
    $phpmailerReady = true;
}

if ($SMTP_ENABLED && !$phpmailerReady) {
    error_log("Fundastra: SMTP enabled but PHPMailer not found, falling back to mail()");
}

if ($SMTP_ENABLED && $phpmailerReady) {
    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = $SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = $SMTP_USER;
        $mail->Password   = $SMTP_PASSWORD;
        $mail->SMTPSecure = ($SMTP_PORT === 465)
            ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $SMTP_PORT;
        $mail->CharSet    = 'UTF-8';
        $mail->Timeout    = 15;

        $mail->setFrom($FROM_EMAIL, $FROM_NAME);
        $mail->addAddress($NOTIFY_TO);
        if ($leadEmail !== '') {
            $mail->addReplyTo($leadEmail, $name);
        }

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->send();
        $mailSent = true;
    } catch (Exception $e) {
        error_log("Fundastra SMTP error: " . $e->getMessage());
    }
} else {
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$FROM_NAME} <{$FROM_EMAIL}>\r\n";
    if ($leadEmail !== '') {
        // Reply dabane par seedha lead ko jayega
        $headers .= "Reply-To: {$name} <{$leadEmail}>\r\n";
    }

    $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    $mailSent = @mail($NOTIFY_TO, $encodedSubject, $htmlBody, $headers, "-f{$FROM_EMAIL}");
}

if (!$mailSent) {
    error_log("Fundastra: lead {$submission['id']} saved but email failed");
}

http_response_code(200);

echo json_encode([
    "ok" => true,
    "message" => "Lead submitted successfully",
    "id" => $submission["id"],
    "mailSent" => $mailSent
]);