type WaveDividerProps = {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
};

// Signature element: a gentle, hand-drawn-feeling curve used consistently as the
// transition between sections — meant to evoke ease and care rather than a hard
// edge, echoing the "we'll take it from here" feeling of home care itself.
export default function WaveDivider({ toColor = "var(--color-paper)", flip = false }: WaveDividerProps) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[48px] md:h-[72px]">
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,32 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
