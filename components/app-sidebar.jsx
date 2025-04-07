"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BarChart3, Globe, Home, LifeBuoy, LogOut, Map, Settings, Ship, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { PageTransition } from "@/components/page-transition"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [userName, setUserName] = useState("User")
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    // Get user info from mock auth
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("mockUserName")
      if (name) {
        setUserName(name)
      }
    }
  }, [])

  const handleLogout = () => {
    // Clear mock auth
    if (typeof window !== "undefined") {
      localStorage.removeItem("mockAuthToken")
      localStorage.removeItem("mockUserName")
      localStorage.removeItem("mockUserEmail")

      setPageTransition(true)
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    }
  }

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Route Planner",
      href: "/dashboard/route-planner",
      icon: Map,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Weather",
      href: "/dashboard/weather",
      icon: Globe,
    },
    {
      title: "Fleet",
      href: "/dashboard/fleet",
      icon: Ship,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <>
      {pageTransition && <PageTransition />}
      <Sidebar>
        <SidebarHeader className="flex flex-col gap-2 px-4 py-2">
          <div className="flex items-center gap-2 py-2">
            <Ship className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NaviPath</span>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarMenu>
            {routes.map((route) => (
              <SidebarMenuItem key={route.href}>
                <Link href={route.href} passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === route.href} tooltip={route.title}>
                    <route.icon className="h-5 w-5" />
                    <span>{route.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard/profile" passHref legacyBehavior>
                <SidebarMenuButton isActive={pathname === "/dashboard/profile"} tooltip="Profile">
                  <User className="h-5 w-5" />
                  <span>{userName}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/support" passHref legacyBehavior>
                <SidebarMenuButton isActive={pathname === "/dashboard/support"} tooltip="Support">
                  <LifeBuoy className="h-5 w-5" />
                  <span>Support</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <ModeToggle />
                <span>Toggle Theme</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

