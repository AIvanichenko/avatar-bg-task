import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@/shared/ui/Icon";
import sparkleUrl from "@/assets/icons/sparkle.svg";
import actionBackUrl from "@/assets/icons/action-back.svg";
import actionNextUrl from "@/assets/icons/action-next.svg";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onRegenerate: () => void;
  disabled?: boolean;

  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
};

export function PromptEditor({
  value,
  onChange,
  onRegenerate,
  disabled = false,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
}: Props) {
  return (
    <div>
      <div className="text-sm font-semibold">Background idea</div>

      <div className="mt-3 rounded-2xl border bg-white p-4">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Describe your background..."
          className="min-h-[120px] resize-none border-0 p-0 shadow-none focus-visible:ring-0"
        />

        <div className="mt-4 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            className="px-2 text-xs font-semibold"
            onClick={onRegenerate}
            disabled={disabled}
          >
            <Icon src={sparkleUrl} size={20} />
            Regenerate
          </Button>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              className="h-9 w-9 p-0"
              onClick={onUndo}
              aria-label="Undo"
              disabled={disabled || !onUndo || !canUndo}
            >
              <Icon src={actionBackUrl} size={20} />
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="h-9 w-9 p-0"
              onClick={onRedo}
              aria-label="Redo"
              disabled={disabled || !onRedo || !canRedo}
            >
              <Icon src={actionNextUrl} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
