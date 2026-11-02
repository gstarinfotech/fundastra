
"use client";

import { useEffect } from "react";

type Props = {
    enabled: boolean;
    headCode: string;
    bodyStartCode: string;
    bodyEndCode: string;
};

type Position = "append" | "prepend";

function injectCode(
    target: HTMLElement,
    code: string,
    position: Position
): () => void {
    if (!code.trim()) {
        return () => { };
    }

    const range = document.createRange();
    range.selectNodeContents(target);
    const fragment = range.createContextualFragment(code);
    const insertedNodes = Array.from(fragment.childNodes);
    const scripts = Array.from(
        fragment.querySelectorAll("script")
    );

    scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");

        Array.from(oldScript.attributes).forEach((attribute) => {
            newScript.setAttribute(attribute.name, attribute.value);
        });

        newScript.textContent = oldScript.textContent;

        oldScript.replaceWith(newScript);
    });
    if (position === "prepend") {
        target.insertBefore(fragment, target.firstChild);
    } else {
        target.appendChild(fragment);
    }
    return () => {
        insertedNodes.forEach((node) => {
            if (node.parentNode === target) {
                target.removeChild(node);
            }
        });
    };
}

export default function TrackingScripts({
    enabled,
    headCode,
    bodyStartCode,
    bodyEndCode,
}: Props) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const cleanupHead = injectCode(
            document.head,
            headCode,
            "append"
        );

        const cleanupBodyStart = injectCode(
            document.body,
            bodyStartCode,
            "prepend"
        );

        const cleanupBodyEnd = injectCode(
            document.body,
            bodyEndCode,
            "append"
        );

        return () => {
            cleanupBodyEnd();
            cleanupBodyStart();
            cleanupHead();
        };
    }, [
        enabled,
        headCode,
        bodyStartCode,
        bodyEndCode,
    ]);

    return null;
}
