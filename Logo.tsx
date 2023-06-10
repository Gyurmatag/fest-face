type LogoProps = {
  height: number;
  width: number;
};

export default function Logo({ height, width }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      height={height}
      width={width}
    >
      <circle
        cx="16"
        cy="16"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 16c0 0 6-10 14-10s14 10 14 10-6 10-14 10-14-10-14-10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10,6 8,0 M16,6 16,0 M22,6 24,0"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
