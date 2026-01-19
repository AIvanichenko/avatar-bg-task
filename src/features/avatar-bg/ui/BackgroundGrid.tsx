import { useAvatarBg } from "../hooks/useAvatarBg";
import { BackgroundProgressThumb } from "./BackgroundProgressThumb";
import { BackgroundThumb } from "./BackgroundThumb";

export function BackgroundGrid() {
  const { items, activeId, setActive, isGenerating, progress } = useAvatarBg();
  const two = items.slice(0, 2);

  return (
    <div>
      <div className="mt-6 text-sm font-semibold">Your backgrounds</div>

      <div className="mt-2 grid grid-cols-3 gap-3 pb-6">
        {isGenerating && (
          <BackgroundProgressThumb percent={progress} caption="1 minute left" />
        )}

        {two.map((it) => (
          <BackgroundThumb
            key={it.id}
            isActive={it.id === activeId}
            previewUrl={it.previewUrl}
            onClick={() => setActive(it.id)}
          />
        ))}
      </div>
    </div>
  );
}
