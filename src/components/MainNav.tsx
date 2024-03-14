"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: "/",
      label: "About",
      active: pathname === "/",
    },
    {
      href: "/feature",
      label: "Feature",
      active: pathname === "/feature",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
  ];

  return (
    <nav className={cn("flex gap-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
