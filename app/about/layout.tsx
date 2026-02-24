
export default function AboutLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="relative h-svh overflow-y-auto overscroll-contain">
      {children}
    </div>
  );
}
