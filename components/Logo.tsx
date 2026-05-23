/*
  Logo — the CEIG brand lockup as crisp inline SVG + wordmark.
  Fully monochrome: the hexagon mark and the "CEIG" wordmark both inherit the
  current text colour, so the lockup renders solid black on the white nav and
  adapts anywhere it's placed. Geometry matches app/icon.svg.
*/

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <polygon
          points="16,5 25.1,10.5 25.1,21.5 16,27 6.9,21.5 6.9,10.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <polygon
          points="16,10 20.7,12.75 20.7,18.25 16,21 11.3,18.25 11.3,12.75"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.45"
        />
        <circle cx="16" cy="16" r="1.7" fill="currentColor" />
      </svg>
      <span className="text-xl font-bold tracking-[0.18em]">CEIG</span>
    </span>
  );
}
