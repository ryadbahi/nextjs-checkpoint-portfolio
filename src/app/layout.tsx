import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
            <main className="pt-16 w-full max-w-screen">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
