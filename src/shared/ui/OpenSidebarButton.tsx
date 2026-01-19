import { Button } from "@/components/ui/button";
import { useAvatarBg } from "@/features/avatar-bg/hooks/useAvatarBg";

export function OpenSidebarButton() {
  const { open } = useAvatarBg();
  return <Button onClick={open}>Open sidebar</Button>;
}
