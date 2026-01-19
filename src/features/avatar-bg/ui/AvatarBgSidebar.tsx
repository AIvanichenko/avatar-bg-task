import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/shared/ui/Icon";
import sparkle2Url from "@/assets/icons/sparkle-2.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { useAvatarBg } from "../hooks/useAvatarBg";
import { SidebarHeader } from "./SidebarHeader";
import { PromptEditor } from "./PromptEditor";
import { BackgroundGrid } from "./BackgroundGrid";

export function AvatarBgSidebar() {
  const {
    isOpen,
    close,
    idea,
    setIdea,
    regenerateIdea,
    isGenerating,
    generate,

    canUndo,
    canRedo,
    undoIdea,
    redoIdea,
  } = useAvatarBg();

  return (
    <Sheet open={isOpen} onOpenChange={(v) => (!v ? close() : undefined)}>
      <SheetContent className="w-[400px] p-0 sm:max-w-[400px] [&>button.absolute]:hidden">
        <SheetHeader className="sr-only">
          <SheetTitle>Change background</SheetTitle>
          <SheetDescription>
            Generate and select an avatar background.
          </SheetDescription>
        </SheetHeader>

        <div className="flex h-full flex-col">
          <SidebarHeader />

          <ScrollArea className="flex-1">
            <div className="px-6 pt-9 pb-6">
              <PromptEditor
                value={idea}
                onChange={setIdea}
                onRegenerate={regenerateIdea}
                disabled={isGenerating}
                onUndo={undoIdea}
                onRedo={redoIdea}
                canUndo={canUndo}
                canRedo={canRedo}
              />

              <Button
                type="button"
                onClick={generate}
                disabled={isGenerating}
                className="mt-5 h-12 w-full rounded-full font-semibold"
              >
                <Icon src={sparkle2Url} size={16} />
                {isGenerating ? "Generating..." : "Generate BG for 1 credit"}
              </Button>

              <BackgroundGrid />
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
