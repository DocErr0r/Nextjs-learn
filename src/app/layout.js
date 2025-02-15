import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster"
import StoreProvider from "@/components/Proverder";



export const metadata = {
  title: "BlogNits",
  description: "A blog for developers and blogers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <StoreProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
