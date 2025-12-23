import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function createIcon(path: JSX.Element) {
  return function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const ArrowUpRight = createIcon(
  <path d="M7 17 17 7m0 0H9m8 0v8" />,
);

export const Shield = createIcon(
  <path d="M12 3 5 6v6a7 7 0 0 0 7 7 7 7 0 0 0 7-7V6l-7-3Z" />,
);

export const Chart = createIcon(
  <>
    <path d="M4 19h16" />
    <path d="M9 17V9" />
    <path d="M15 17V5" />
    <path d="M12 17v-4" />
  </>,
);

export const Layers = createIcon(
  <>
    <path d="m12 3 8 4-8 4-8-4 8-4Z" />
    <path d="m4 11 8 4 8-4" />
    <path d="m4 15 8 4 8-4" />
  </>,
);

export const Clock = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);

export const Phone = createIcon(
  <path d="M6.5 4h2l1.5 4-1.5 1a10.9 10.9 0 0 0 6 6l1-1.5 4 1.5v2A2.5 2.5 0 0 1 17 20.5 14.5 14.5 0 0 1 3.5 7 2.5 2.5 0 0 1 6.5 4Z" />,
);

export const Mail = createIcon(
  <path d="m4 6 8 6 8-6M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
);

export const MapPin = createIcon(
  <>
    <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </>,
);

export const Target = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
  </>,
);

export const Briefcase = createIcon(
  <>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="M9 6h6a1 1 0 0 1 1 1v2H8V7a1 1 0 0 1 1-1Z" />
    <path d="M3 13h18" />
  </>,
);

export const Check = createIcon(
  <path d="m5 13 4 4L19 7" />,
);

export const Calendar = createIcon(
  <>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h16" />
  </>,
);

export const Users = createIcon(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);

export const FileCheck = createIcon(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </>,
);

export const AlertTriangle = createIcon(
  <>
    <path d="M10.29 3.86 1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.72 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </>,
);
