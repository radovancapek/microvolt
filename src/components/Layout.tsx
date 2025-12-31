import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-micro-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}