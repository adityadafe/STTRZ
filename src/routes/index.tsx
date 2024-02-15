import { createFileRoute } from "@tanstack/react-router";
import { useIndexStore } from "../store";

function HomePage() {
  const { count, increaseCount } = useIndexStore((state) => ({
    count: state.count,
    increaseCount: state.increaseCount,
  }));
  return (
    <div className="text-white">
      this is {count}
      <br />
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
