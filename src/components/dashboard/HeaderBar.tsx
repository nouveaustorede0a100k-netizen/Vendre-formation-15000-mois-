import { getInitials } from "@/lib/utils";

interface HeaderBarProps {
  userName?: string | null;
  userEmail?: string | null;
}

export function HeaderBar({ userName, userEmail }: HeaderBarProps) {
  const initials = getInitials(userName || userEmail);

  return (
    <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-[#E5E7EB] bg-white px-6">
      <p className="text-sm text-[#6B7280]">Session Janvier 2026</p>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-bold text-white">
        {initials}
      </div>
    </header>
  );
}
