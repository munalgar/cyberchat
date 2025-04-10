import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inbox")({
  component: Inbox,
});

function Inbox() {
  // Sample email data
  const selectedEmail = {
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    date: "09:34 AM",
    content: `Hi team,

Just a reminder about our meeting tomorrow at 10 AM.

Please come prepared with your project updates. We'll be discussing the current progress, upcoming milestones, and addressing any blockers you might be facing.

Thanks,
William`,
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b px-6 py-4">
        <h2 className="text-2xl font-bold">{selectedEmail.subject}</h2>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-medium">
                {selectedEmail.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
            </div>
            <div>
              <div className="font-medium">{selectedEmail.name}</div>
              <div className="text-sm text-muted-foreground">
                {selectedEmail.email}
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {selectedEmail.date}
          </div>
        </div>
      </div>
      <div className="p-6 whitespace-pre-wrap text-sm flex-1 overflow-auto">
        {selectedEmail.content}
      </div>
    </div>
  );
}
