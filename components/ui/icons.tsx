import * as React from "react";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 24,
  height: 24,
};

export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 3v4" />
      <path d="M10 5h4" />
      <path d="m9 13-2 7 5-3 5 3-2-7 5-3h-6L12 4l-2 6H4z" />
    </svg>
  );
}

export function PaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 3a9 9 0 0 0-9 9c0 4.45 3.08 7 6 7 .7 0 1.26-.56 1.26-1.26 0-.66-.48-1.13-.48-1.99 0-1.07 1.08-2.05 2.22-2.05h3.83c1.67 0 3.17-1.14 3.17-2.8A8 8 0 0 0 12 3Z" />
      <path d="M7.5 10.5h.01" />
      <path d="M10.5 7.5h.01" />
      <path d="M13.5 10.5h.01" />
      <path d="M16.5 7.5h.01" />
    </svg>
  );
}

export function TimerResetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 8v4l2.5 2.5" />
      <path d="M21 12A9 9 0 1 1 3 12" />
      <path d="M7 4V2" />
      <path d="M17 4V2" />
      <path d="M3 3l2.5 2.5L8 6" />
    </svg>
  );
}

export function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 22c4.8-2 8-5.5 8-10V5l-8-3-8 3v7c0 4.5 3.2 8 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function MonitorSmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <rect x="2" y="3" width="15" height="14" rx="2" />
      <path d="M17 8h1a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-4" />
      <path d="M9 18h6" />
    </svg>
  );
}

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="m5 12 5 5 9-9" />
    </svg>
  );
}

export function DownloadCloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15" />
      <path d="M12 12v9" />
      <path d="m8 17 4 4 4-4" />
    </svg>
  );
}

export function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 3.25 14.45 8l5.3.77-3.83 3.73.9 5.26L12 15.77 7.18 17.76l.9-5.26L4.25 8.77 9.55 8z" />
    </svg>
  );
}
