import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen m-auto lg:max-w-7xl bg-white font-sans text-micro-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}