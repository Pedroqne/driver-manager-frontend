import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/navbar";

export function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
}