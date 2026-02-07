"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Compass,
  MessageSquare,
  User,
  Zap,
} from "lucide-react";

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isMobile = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full h-full bg-slate-900 text-white flex flex-col">
      {/* TEST Header - باکس نارنجی برای اطمینان از render شدن */}
      <div className="w-full h-20 bg-orange-500 flex items-center justify-center shrink-0">
        <h1 className="text-2xl font-bold">RAAVI MENU</h1>
      </div>

      {/* Logo Header */}
      <div className="p-6 bg-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Zap size={22} className="text-white" fill="white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">راوی</h2>
            <span className="text-xs text-slate-400">RAAVI Platform</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          <Link
            href="/dashboard"
            onClick={handleClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              pathname === "/dashboard"
                ? "bg-orange-500 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="text-sm">داشبورد</span>
          </Link>

          <Link
            href="/events"
            onClick={handleClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              pathname === "/events"
                ? "bg-orange-500 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Compass size={20} />
            <span className="text-sm">کاوش رویدادها</span>
          </Link>

          <Link
            href="/chat"
            onClick={handleClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              pathname === "/chat"
                ? "bg-orange-500 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <MessageSquare size={20} />
            <span className="text-sm">چت‌ها</span>
          </Link>

          <Link
            href="/dashboard/profile"
            onClick={handleClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              pathname === "/dashboard/profile"
                ? "bg-orange-500 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <User size={20} />
            <span className="text-sm">پروفایل کاربری</span>
          </Link>
        </div>

        {/* Success Box */}
        <div className="mt-8 p-4 bg-green-500 rounded-lg">
          <p className="text-white text-sm font-bold">
            ✅ Sidebar کار می‌کند!
          </p>
        </div>

        {/* Offer Box */}
        <div className="mt-4 p-4 bg-slate-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={20} className="text-yellow-400" />
            <span className="text-sm font-bold">پیشنهاد ویژه</span>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            کارگاه ویژه تیم‌سازی اصفهان با ۵۰٪ تخفیف
          </p>
          <button className="w-full py-2 bg-white text-slate-900 text-xs font-bold rounded-lg hover:bg-orange-50 hover:text-orange-600">
            مشاهده پیشنهاد
          </button>
        </div>
      </div>
    </div>
  );
}
