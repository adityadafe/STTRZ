/* @global-imports */
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
/* @local-imports */
import "./../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="text-white flex items-center gap-2">
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <Link to="/temp">temp</Link>
      </div>
      <hr />
      <div className="text-white">This is Layout Page</div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
