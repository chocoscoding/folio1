import { FloatingNav } from "@/components/ui/floating-navbar";

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
];

export function Header() {
  return (
    <header className="flex">
      <FloatingNav navItems={navItems} />
    </header>
  );
}
