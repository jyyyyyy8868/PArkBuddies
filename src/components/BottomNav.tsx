// Bottom navigation bar
import { NavLink } from "react-router-dom";
import { Compass, Heart, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/garden", label: "My Buddies", icon: Heart },
  { to: "/records", label: "Records", icon: BookOpen },
  { to: "/profile", label: "Me", icon: User },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] bg-white/95 backdrop-blur-md border-t border-sage-100 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-stretch justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-0.5 flex-1 text-xs transition-colors",
                  isActive
                    ? "text-sage-500 font-medium"
                    : "text-sage-300 hover:text-sage-400"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isActive && "scale-110"
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
