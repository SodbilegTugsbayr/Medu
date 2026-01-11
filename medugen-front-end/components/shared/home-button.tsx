"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import * as React from "react";

export default function HomeButton() {
  const { theme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute top-14 left-20 w-[59px] h-[23px] rounded-[12px] bg-[#d6d6d6]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Link href="/" className="absolute top-14.5 left-20 z-10 group">
      <div className={`holo-button ${isDark ? "dark-mode" : ""}`}>
        <p className="text-sm font-normal z-10 relative">Home</p>
        <div className="holo-glow" />
      </div>

      <style jsx>{`
        .holo-button {
          position: relative;
          width: 61px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;

          /* Default (Light) Styles - matching toggle unchecked */
          background: rgba(0, 30, 60, 0.4);
          border: px solid rgba(0, 150, 255, 0.3);
          box-shadow: 0 0 15px rgba(2, 43, 131, 0.32),
            inset 0 0 4px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          color: rgba(9, 0, 177, 0.6);
          text-shadow: 0 0 5px rgba(0, 102, 255, 0.87);
        }

        .holo-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              ellipse at center,
              rgba(0, 80, 255, 0.1) 0%,
              rgba(0, 0, 0, 0) 70%
            ),
            linear-gradient(
              90deg,
              rgba(0, 60, 120, 0.1) 0%,
              rgba(0, 30, 60, 0.2) 100%
            );
          opacity: 0.6;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Dark Mode Styles - matching toggle checked */
        .holo-button.dark-mode {
          background: rgba(0, 60, 30, 0.4);
          border-color: rgba(0, 255, 150, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 150, 0.2),
            inset 0 0 10px rgba(0, 0, 0, 0.8);
          color: rgba(0, 255, 150, 0.6);
          text-shadow: 0 0 5px rgba(0, 255, 100, 0.4);
        }

        .holo-button.dark-mode::before {
          background: radial-gradient(
              ellipse at center,
              rgba(0, 255, 150, 0.1) 0%,
              rgba(0, 0, 0, 0) 70%
            ),
            linear-gradient(
              90deg,
              rgba(0, 120, 60, 0.1) 0%,
              rgba(0, 60, 30, 0.2) 100%
            );
        }

        .holo-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 150, 255, 0.2) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          filter: blur(5px);
          opacity: 0.5;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 0;
        }

        .holo-button.dark-mode .holo-glow {
          background: radial-gradient(
            ellipse at center,
            rgba(0, 255, 150, 0.2) 0%,
            rgba(0, 0, 0, 0) 70%
          );
        }

        /* Hover States */
        .holo-button:hover {
          box-shadow: 0 0 20px rgba(0, 150, 255, 0.3),
            inset 0 0 10px rgba(0, 0, 0, 0.8);
        }

        .holo-button.dark-mode:hover {
          box-shadow: 0 0 20px rgba(0, 255, 150, 0.3),
            inset 0 0 10px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </Link>
  );
}
