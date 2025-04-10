import * as React from "react";
import {
  ArchiveX,
  Command,
  File,
  Inbox,
  Send,
  Trash2,
  Search,
  Home,
  MessageSquare,
  User,
  Settings,
  Package,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: false,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Messages",
      url: "#",
      icon: MessageSquare,
      isActive: false,
    },
    {
      title: "Files",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Profile",
      url: "#",
      icon: User,
      isActive: false,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser: "Hi team, just a reminder about our meeting tomorrow at 10 AM...",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser: "Thanks for the update. The progress looks great so far...",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend...",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser: "I've reviewed the budget numbers you sent over...",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser: "Please join us for an all-hands meeting this Friday at 3 PM...",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts...",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept...",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Vacation Plans",
      date: "1 week ago",
      teaser:
        "Just a heads up that I'll be taking a two-week vacation next month...",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(data.navMain[1]); // Inbox selected by default
  const [mails, setMails] = React.useState(data.mails);
  const { setOpen } = useSidebar();
  const [filterText, setFilterText] = React.useState("");
  const [showUnreadOnly, setShowUnreadOnly] = React.useState(false);

  return (
    <div className="flex h-full">
      {/* First sidebar with navigation icons */}
      <div className="border-r h-full">
        <Sidebar
          collapsible="none"
          className="w-[calc(var(--sidebar-width-icon))] h-full"
        >
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                  <a href="/">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Command className="size-4" />
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent className="px-1.5 md:px-0">
                <SidebarMenu>
                  {data.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        onClick={() => {
                          setActiveItem(item);
                          setOpen(true);
                        }}
                        isActive={activeItem?.title === item.title}
                        className="px-2.5 md:px-2"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>
      </div>

      {/* Second sidebar with inbox/email content */}
      <div className="border-r h-full">
        <Sidebar collapsible="none" className="w-[350px] h-full">
          <SidebarHeader className="flex flex-col gap-2 border-b p-3">
            <div className="flex w-full items-center justify-between">
              <div className="text-foreground text-lg font-semibold">
                {activeItem?.title}
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="unreads"
                  className="shadow-none"
                  checked={showUnreadOnly}
                  onCheckedChange={setShowUnreadOnly}
                />
                <label htmlFor="unreads" className="text-xs cursor-pointer">
                  Unreads
                </label>
              </div>
            </div>
            <div className="relative">
              <Input
                placeholder="Type to search..."
                className="pl-8"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground opacity-70" />
            </div>
          </SidebarHeader>
          <SidebarContent className="p-0">
            <SidebarGroup className="px-0">
              <SidebarGroupContent className="space-y-0">
                {mails.map((mail) => (
                  <a
                    href="/inbox"
                    key={mail.email}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-1 border-b p-3 text-sm leading-tight whitespace-nowrap last:border-b-0"
                  >
                    <div className="flex w-full items-center gap-2">
                      <span className="font-medium">{mail.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {mail.date}
                      </span>
                    </div>
                    <div className="font-medium">{mail.subject}</div>
                    <div className="text-xs text-muted-foreground truncate w-full">
                      {mail.teaser}
                    </div>
                  </a>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </div>
  );
}
