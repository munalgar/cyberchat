import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider } from "@/components/ui/sidebar";
import "../styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const isMobile = useIsMobile();

  return (
    <RootDocument>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
