import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Welcome</h2>
          <p className="text-sm text-muted-foreground mb-2">
            This application uses TanStack Router with a shadcn UI sidebar for
            navigation.
          </p>
          <p className="text-sm text-muted-foreground">
            Use the sidebar on the left to navigate between different sections.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Navigation</h2>
          <p className="text-sm text-muted-foreground">
            The sidebar items are currently linked to placeholder routes. You
            can customize these links to point to actual routes in your
            application.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Responsive</h2>
          <p className="text-sm text-muted-foreground">
            The sidebar is fully responsive and adapts to different screen
            sizes. Try resizing your browser window to see it in action.
          </p>
        </div>
      </div>
    </div>
  );
}
