
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
  const [params] = useSearchParams();
  const role = params.get("role"); // "recipient" or "helper"
  const title = useMemo(() => {
    if (role === "helper") return "Sign up to Uplyft";
    if (role === "recipient") return "Sign up to be Uplyfted";
    return "Welcome to Uplyfted";
  }, [role]);

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="font-[Poppins] text-3xl font-bold mb-2">{title}</h2>
      <p className="text-steadyCharcoal/80 mb-6">
        Create an account to access resources, track applications, and join the community.
      </p>

      <form className="space-y-4 bg-white/90 p-6 rounded-2xl shadow-sm ring-1 ring-black/5">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block text-sm font-medium">
            First name
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300" />
          </label>
          <label className="block text-sm font-medium">
            Last name
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300" />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Email
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300" />
        </label>
        <label className="block text-sm font-medium">
          Password
          <input type="password" className="mt-1 block w-full rounded-md border-gray-300" />
        </label>

        <fieldset className="mt-4">
          <legend className="text-sm font-medium mb-2">I want to…</legend>
          <div className="flex flex-wrap gap-3">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="role" value="recipient" defaultChecked={role!=="helper"} />
              be Uplyfted (access help)
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="role" value="helper" defaultChecked={role==="helper"} />
              Uplyft others (offer help)
            </label>
          </div>
        </fieldset>

        <button type="button" className="w-full rounded-pill px-6 py-3 text-white font-semibold bg-gradient-to-r from-upliftPink to-empowerCoral">
          Create account (UI only)
        </button>

        <p className="text-xs text-steadyCharcoal/70">
          By continuing, you agree to our community guidelines and code of care.
        </p>
      </form>
    </section>
  );
}
