export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="-m-6 flex h-[calc(100vh-3.5rem)] flex-1 overflow-hidden">{children}</div>;
}
