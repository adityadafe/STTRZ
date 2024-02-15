import { createFileRoute } from "@tanstack/react-router";
import { useIndexStore } from "../store";
import { Button } from "@/components/ui/button";

function HomePage() {
  const { count, increaseCount } = useIndexStore((state) => ({
    count: state.count,
    increaseCount: state.increaseCount,
  }));
  return (
    <div className="text-white">
      this is {count}
      <br />
      <Button onClick={increaseCount} variant="default">
        Increase
      </Button>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
