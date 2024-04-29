export default function FrontEndLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow container px-4 m-auto">{children}</main>;
}
