import { createFileRoute } from "@tanstack/react-router";

function TempPage() {
  return <div className="text-white">Hello word</div>;
}

export const Route = createFileRoute("/temp")({
  component: TempPage,
});
