import { DropdownMenu } from "@kobalte/core";
import { Menu, Info, House, Briefcase } from "lucide-solid";
import { For } from "solid-js";
import "./navbar.css";
import { RouterLink, RouterNavigation } from "../../router/router";
import type { LinkType } from "./navbar.type";



export const NavigationComponent = () => {
  const navItems: LinkType[]  = [
    { label: "Home", icon: <House size={20} />, href: "/", desktop: true },
    { label: "Business", icon: <Info size={20} />, href: "/business", desktop: true },
    { label: "Projects", icon: <Briefcase size={20} />, href: "/business1", desktop: true },
    // { label: "Profile", icon: <User size={20} />, href: "/profile", desktop: false },
    // { label: "Settings", icon: <Settings size={20} />, href: "/settings", desktop: false },
  ];

  return (
    <nav class="navbar">
      <div class="navbar__container">
        <a href="/" class="navbar__logo">
          <span>ForAll</span>
        </a>

        <div class="navbar__actions">
          {/* Visible only on Desktop */}
          <div class="navbar__desktop-items">
            <For each={navItems.filter(i => i.desktop)}>
              {(item) => (
                <RouterLink href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </RouterLink>
              )}
            </For>
          </div>

          {/* Menu Trigger (Desktop & Mobile) */}
          <DropdownMenu.Root placement="top-end" gutter={12}>
            <DropdownMenu.Trigger class="navbar__trigger">
              <Menu size={24} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content class="navbar__menu-content">
                {/* Hidden on desktop via CSS, holds items visible outside on desktop */}
                <div class="navbar__menu-mobile-group">
                  <For each={navItems.filter(i => i.desktop)}>
                    {(item) => (
                      <DropdownMenu.Item class="navbar__menu-item" onSelect={() => RouterNavigation({href:item.href})}>
                        {item.icon} <span>{item.label}</span>
                      </DropdownMenu.Item>
                    )}
                  </For>
                </div>
                {/* Items always inside the menu */}
                <For each={navItems.filter(i => !i.desktop)}>
                  {(item) => (
                    <DropdownMenu.Item class="navbar__menu-item" onSelect={() => RouterNavigation({href:item.href}) }>
                      {item.icon} <span>{item.label}</span>
                    </DropdownMenu.Item>
                  )}
                </For>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
};