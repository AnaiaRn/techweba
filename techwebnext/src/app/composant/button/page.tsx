import { ReactNode } from "react";

export default function Boutton({
  label,
  icon,
}: {
  label: string;
  icon: ReactNode;
}) {
  return (
    <button className="w-[300px] h-9 lg:h-12 bg-gray-950 text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer">
      {label}  {icon}
    </button>
  );
}
