import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chats")({
  component: Chats,
});

function Chats() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Chats</h1>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Individual chats will be displayed here.
        </p>
      </div>
    </div>
  );
}
