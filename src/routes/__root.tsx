/* @global-imports */
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
/* @local-imports */
import "./../index.css";
import HeroComponent from "@/components/threejs";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeroComponent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
