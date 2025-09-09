export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`min-h-[100dvh] flex items-center justify-center
                 snap-center
                 scroll-mt-[calc(64px+env(safe-area-inset-top))] md:scroll-mt-15
                ${className}`}
    >
      <div className="w-full">{children}</div>
    </section>
  );
}
