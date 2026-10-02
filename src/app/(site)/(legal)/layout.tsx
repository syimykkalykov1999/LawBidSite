export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative px-5 pt-36 pb-24">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(201,162,74,0.14),transparent)]" />
      {children}
    </div>
  );
}
