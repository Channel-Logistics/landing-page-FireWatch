export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`min-h-[100dvh] flex items-center justify-center snap-center ${className}`}
    >
      <div className="w-full">{children}</div>
    </section>
  );
}
