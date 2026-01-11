"use client";

import React from "react";

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  extraClassName?: string;
  onlynumber?: boolean;
};

export default function CustomInput({
  extraClassName,
  onlynumber,
  onChange,
  onKeyDown,
  ...props
}: CustomInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onlynumber) {
      const allowedKeys = [
        "Backspace",
        "Tab",
        "Enter",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
      ];
      if (
        !allowedKeys.includes(e.key) &&
        !/^[0-9]$/.test(e.key) &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        e.preventDefault();
      }
    }
    if (onKeyDown) onKeyDown(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlynumber) {
      e.target.value = e.target.value.replace(/\D/g, "");
    }
    if (onChange) onChange(e);
  };

  return (
    <>
      <input
        {...props}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`custom-input ${extraClassName ?? ""}`}
      />

      <style jsx>{`
        .custom-input {
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #ccc;
          box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
          transition: 300ms ease-in-out;
          color: #111;
          font-size: 15px;
        }

        .custom-input::placeholder {
          color: #555;
          font-size: 14px;
        }

        .custom-input:focus {
          background-color: var(--color-background);
          transform: scale(1.05);
          box-shadow: 13px 13px 40px #969696, -13px -13px 40px #ffffff;
        }

        /* ===== DARK THEME ===== */
        :global(.dark) .custom-input {
          background-color: #555;
          color: #f5f5f5;
          box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.6);
        }

        :global(.dark) .custom-input::placeholder {
          color: #cfcfcf;
        }

        :global(.dark) .custom-input:focus {
          background-color: var(--color-background);
          box-shadow: 13px 13px 40px #3a3a3a,
            -13px -13px 40px var(--color-medium-gray);
        }
      `}</style>
    </>
  );
}
