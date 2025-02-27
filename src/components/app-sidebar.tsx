"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import router & pathname
import { IconHome, IconServer, IconChartLine, IconSword, IconBrandSteam } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<string>("home");

  const items = useMemo(() => [
    { id: "home", title: "Startsida", url: "/", icon: IconHome },
    { id: "servers", title: "Servrar", url: "/servers", icon: IconServer },
    { id: "stats", title: "Statistik", url: "/stats", icon: IconChartLine },
    { id: "skinchanger", title: "Skinchanger", url: "/skinchanger", icon: IconSword }
  ], []);

  useEffect(() => {
    const savedActive = localStorage.getItem("activeMenu");
    if (savedActive) {
      setActive(savedActive);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeMenu", active);
  }, [active]);

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname);
    if (currentItem) {
      setActive(currentItem.id);
    }
  }, [items, pathname]);

  const handleNavigation = (url: string, id: string) => {
    setActive(id);
    router.push(url);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex mt-2 text-center justify-center items-center">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <a href="https://github.com/eliteservers/eliteservers">
                <span className="ml-2 text-2xl font-bold">ELITE SERVERS</span>
              </a>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton isActive={active === item.id} size="lg" asChild>
                    <button onClick={() => handleNavigation(item.url, item.id)} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex justify-center mb-4">
              <Button variant="outline">
                <IconBrandSteam />
                <a href="/login" className="font-semibold">Logga in med Steam</a>
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}