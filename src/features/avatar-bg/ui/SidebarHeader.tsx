import closeUrl from "@/assets/icons/close.svg";
import { Icon } from "@/shared/ui/Icon";
import { useAvatarBg } from "@/features/avatar-bg/hooks/useAvatarBg";

export function SidebarHeader() {
  const { close } = useAvatarBg();

  return (
    <div className="flex items-center justify-between gap-3 px-6 py-5">
      <div className="text-[22px] font-bold">Change background</div>

      <button
        type="button"
        onClick={close}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5"
        aria-label="Close"
      >
        <Icon src={closeUrl} size={24} />
      </button>
    </div>
  );
}
