import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-upliftPink/20 via-hopeLavender/10 to-growthMint/20">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Outlet />
      </main>
      <footer className="mt-16 py-10 text-center text-sm text-steadyCharcoal/70">
        © {new Date().getFullYear()} Uplyfted — Empowerment by action.
      </footer>
    </div>
  );
}
