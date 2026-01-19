type Props = { percent: number; caption: string };

export function BackgroundProgressThumb({ percent, caption }: Props) {
  const p = Math.max(0, Math.min(100, percent));

  const size = 65;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (p / 100) * c;

  return (
    <div className="relative h-[198px] w-[112px] overflow-hidden rounded-[18px] bg-black">
      <div className="absolute inset-0 flex flex-col items-center px-3 py-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth={stroke}
                fill="transparent"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke="rgba(110,231,183,1)"
                strokeWidth={stroke}
                fill="transparent"
                strokeDasharray={`${dash} ${c}`}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-[14px]">{p}%</div>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-1 text-xs text-white font-semibold">
          {caption}
        </div>
      </div>
    </div>
  );
}
