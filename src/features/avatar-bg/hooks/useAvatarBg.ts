import { useAvatarBgStore } from "../stores";

export const useAvatarBg = () => {
  const isOpen = useAvatarBgStore(({ isOpen }) => isOpen);
  const idea = useAvatarBgStore(({ idea }) => idea);
  const items = useAvatarBgStore(({ items }) => items);
  const activeId = useAvatarBgStore(({ activeId }) => activeId);
  const status = useAvatarBgStore(({ status }) => status);
  const progress = useAvatarBgStore(({ progress }) => progress);

  const ideaHistory = useAvatarBgStore(({ ideaHistory }) => ideaHistory);
  const historyIndex = useAvatarBgStore(({ historyIndex }) => historyIndex);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex >= 0 && historyIndex < ideaHistory.length - 1;

  return {
    isOpen,
    idea,
    items,
    activeId,
    progress,
    isGenerating: status === "generating",

    canUndo,
    canRedo,

    open: useAvatarBgStore(({ open }) => open),
    close: useAvatarBgStore(({ close }) => close),
    setIdea: useAvatarBgStore(({ setIdea }) => setIdea),
    regenerateIdea: useAvatarBgStore(({ regenerateIdea }) => regenerateIdea),

    undoIdea: useAvatarBgStore(({ undoIdea }) => undoIdea),
    redoIdea: useAvatarBgStore(({ redoIdea }) => redoIdea),

    setActive: useAvatarBgStore(({ setActive }) => setActive),
    generate: useAvatarBgStore(({ generate }) => generate),
  };
};
