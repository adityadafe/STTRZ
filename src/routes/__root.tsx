/* @global-imports */
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
/* @local-imports */
import "./../index.css";
import { NavigationMenuDemo } from "@/components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavigationMenuDemo />
      <div className="text-white">This is Layout Page</div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
