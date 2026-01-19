import { OpenSidebarButton } from "@/shared/ui/OpenSidebarButton";
import { AvatarBgSidebar } from "@/features/avatar-bg/ui/AvatarBgSidebar";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <OpenSidebarButton />
      <AvatarBgSidebar />
    </div>
  );
}
