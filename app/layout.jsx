"use client"
import styled, { createGlobalStyle } from "styled-components";


import NavBar from "../components/NavBar";





export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        
          <NavBar />
          {children}
       
      </body>
    </html>
  );
}
