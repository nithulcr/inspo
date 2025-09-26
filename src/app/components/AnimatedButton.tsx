"use client";

import { useRef } from "react";
import clsx from "clsx";

type AnimatedButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  imgOrSvg?: React.ReactNode;
  disabled?: boolean;
};

export default function AnimatedButton({
  label,
  className = "",
  onClick,
  href,
  type,
  imgOrSvg,
  disabled,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  // Removed mouse move handlers and useEffect

  // Determine if link is external
  const isExternal = href && /^https?:\/\//i.test(href);

  if (type) {
    return (
      <button
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={clsx("button", className)}
      >
        <div className="button-outline"></div>
        <div ref={outlineRef} className="button-text flex items-center gap-2">
          {label}
          {imgOrSvg && (
            <span className="img_or_svg z-9">{imgOrSvg}</span>
          )}
        </div>
      </button>
    );
  }

  return (
    <a
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      onClick={onClick}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={clsx("button", className)}
      download={href?.endsWith(".pdf") ? true : undefined}
    >
      <div className="button-outline"></div>
      <div ref={outlineRef} className="button-text flex items-center gap-2">
        {label} {imgOrSvg && (
          <span className="img_or_svg z-9">{imgOrSvg}</span>
        )}
      </div>
    </a>
  );
}
