<?php

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

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "error" => "Invalid or missing JSON body"
    ]);
    exit;
}

// Source tells us which form submitted the data
$source = trim($input['source'] ?? '');

if ($source === '') {
    http_response_code(422);
    echo json_encode([
        "ok" => false,
        "error" => "Source is required"
    ]);
    exit;
}

// Create submission ID
$submission = [
    "id" => uniqid("lead_", true),
    "source" => $source,
    "fullName" => trim($input['fullName'] ?? $input['name'] ?? ''),
    "email" => trim($input['email'] ?? ''),
    "phone" => trim($input['phone'] ?? ''),
    "message" => trim($input['message'] ?? ''),
    "submitted_at" => date("c")
];

// Add all extra fields automatically
// Example: company, capitalRequirementType, facilityQuantum etc.
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

// Data folder
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

// JSON file
$dataFile = $dataDir . '/lead-submissions.json';

// Read existing submissions
$existing = [];

if (file_exists($dataFile)) {
    $existing = json_decode(
        file_get_contents($dataFile),
        true
    ) ?: [];
}

// Add new submission
$existing[] = $submission;

// Save JSON
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

// Success
http_response_code(200);

echo json_encode([
    "ok" => true,
    "message" => "Lead submitted successfully",
    "id" => $submission["id"]
]);