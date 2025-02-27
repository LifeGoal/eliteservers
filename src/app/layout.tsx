import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/ui/footer"
 
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Elite Servers",
  description: "A web app for managing and displaying all of Elite Servers gameservers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <SidebarTrigger />
              {children}
              <SiteFooter />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}