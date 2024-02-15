import { createFileRoute } from "@tanstack/react-router";

function HomePage() {
  return (
    <div className="text-transparent text-center bg-gradient-to-r from-cyan-600 via-cyan-200 to-green-500 bg-clip-text text-6xl font-play font-bold relative z-20 -mt-14 ">
      A Cool Landing Page
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
