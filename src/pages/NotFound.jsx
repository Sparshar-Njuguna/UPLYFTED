
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="text-center py-20">
      <h2 className="font-[Poppins] text-4xl font-bold mb-3">Page not found</h2>
      <p className="mb-6 text-steadyCharcoal/80">Let’s take you back to a safe place.</p>
      <Link to="/" className="inline-block rounded-pill px-6 py-3 text-white bg-empowerCoral">Go Home</Link>
    </section>
  );
}
