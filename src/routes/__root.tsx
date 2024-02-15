/* @global-imports */
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
/* @local-imports */
import "./../index.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="mb-10">
        <Nav />
      </div>

      <div className="mt-20 text-white">This is Layout Page</div>
      <Outlet />
      <Footer /> 
      <TanStackRouterDevtools />
    </>
  ),
});
