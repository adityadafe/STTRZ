import { createFileRoute } from "@tanstack/react-router";

function AboutPage() {
  return <div className="text-white">This is about Page</div>;
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
