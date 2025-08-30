
export default function Logo({ className = "" }) {
  return (
    <div className={`font-[Poppins] font-bold text-xl sm:text-2xl ${className}`}>
      <span className="text-empowerCoral">Up</span>
      <span className="text-steadyCharcoal">lyfted</span>
    </div>
  );
}
