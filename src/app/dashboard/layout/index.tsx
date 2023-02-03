import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100">
        <Sidebar>
          <Header />
          <main className="bg-black text-white">{children}</main>
        </Sidebar>
      </body>
    </html>
  );
}
