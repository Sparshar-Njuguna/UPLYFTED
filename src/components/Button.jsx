
export default function Button({ children, className = "", as:Tag="button", ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-pill px-6 py-3 text-white shadow-md hover:shadow-lg transition-all
      bg-gradient-to-r from-upliftPink to-empowerCoral ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}