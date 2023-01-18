import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
            <Header />
            <main className="flex-1 flex flex-col p-4 bg-slate-500">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
