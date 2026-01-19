export type BgItem = {
  id: string;
  previewUrl: string;
  badge?: string;
};

export type AvatarBgStatus = "idle" | "generating";

export type AvatarBgState = {
  isOpen: boolean;

  idea: string;
  items: BgItem[];
  activeId: string | null;

  status: AvatarBgStatus;
  progress: number;
  ideaHistory: string[];
  historyIndex: number;

  open: () => void;
  close: () => void;

  setIdea: (v: string) => void;
  regenerateIdea: () => void;

  undoIdea: () => void;
  redoIdea: () => void;

  setActive: (id: string) => void;
  generate: () => Promise<void>;
};
