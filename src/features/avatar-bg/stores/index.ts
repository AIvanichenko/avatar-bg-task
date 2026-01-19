import { create } from "zustand";
import type { AvatarBgState } from "../types";
import { MOCK_BACKGROUNDS, MOCK_IDEAS } from "../mock";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export const useAvatarBgStore = create<AvatarBgState>((set, get) => ({
  isOpen: false,

  idea: MOCK_IDEAS[0],
  items: MOCK_BACKGROUNDS.slice(0, 2),
  activeId: MOCK_BACKGROUNDS[0]?.id ?? null,

  status: "idle",
  progress: 0,

  ideaHistory: [],
  historyIndex: -1,

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  setIdea: (v) => set({ idea: v }),

  regenerateIdea: () => {
    const next = MOCK_IDEAS[Math.floor(Math.random() * MOCK_IDEAS.length)];
    set({ idea: next });
  },

  undoIdea: () => {
    const { ideaHistory, historyIndex } = get();
    if (historyIndex <= 0) return;

    const nextIndex = historyIndex - 1;
    set({ historyIndex: nextIndex, idea: ideaHistory[nextIndex] });
  },

  redoIdea: () => {
    const { ideaHistory, historyIndex } = get();
    if (historyIndex < 0 || historyIndex >= ideaHistory.length - 1) return;

    const nextIndex = historyIndex + 1;
    set({ historyIndex: nextIndex, idea: ideaHistory[nextIndex] });
  },

  setActive: (id) => set({ activeId: id }),

  generate: async () => {
    if (get().status === "generating") return;

    const { idea, ideaHistory, historyIndex } = get();

    const base = ideaHistory.slice(0, historyIndex + 1);

    const last = base[base.length - 1];
    const nextHistory = last === idea ? base : [...base, idea];
    const nextIndex = nextHistory.length - 1;

    set({
      ideaHistory: nextHistory,
      historyIndex: nextIndex,
      status: "generating",
      progress: 0,
    });

    const startedAt = Date.now();
    const durationMs = 4400;

    const tickMs = 50;
    const timer = window.setInterval(() => {
      const t = (Date.now() - startedAt) / durationMs;

      const eased = 1 - Math.pow(1 - clamp(t, 0, 1), 3);
      const next = Math.round(eased * 100);

      set({ progress: next });

      if (t >= 1) {
        window.clearInterval(timer);
        set({ status: "idle", progress: 0 });
      }
    }, tickMs);
  },
}));
