type Props = {
  isActive: boolean;
  previewUrl?: string;
  onClick: () => void;
};

export function BackgroundThumb({ isActive, previewUrl, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        "h-[198px] w-[112px] overflow-hidden rounded-[18px] bg-black/5",
        "focus:outline-none focus-visible:outline-none focus-visible:ring-0",
      ].join(" ")}
    >
      {previewUrl ? (
        <img src={previewUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-black/10" />
      )}
    </button>
  );
}
