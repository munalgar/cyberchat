import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/group-chats")({
  component: GroupChats,
});

function GroupChats() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Group Chats</h1>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Group chats will be displayed here.
        </p>
      </div>
    </div>
  );
}
