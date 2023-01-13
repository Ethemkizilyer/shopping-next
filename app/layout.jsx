"use client";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import Head from "next/head";

import store from "../store";
import NavBar from "../components/NavBar";
import ReactReduxFirebaseWrapper from "../components/ReactReduxFirebaseProvider";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  *::selection {
    background-color: #b699f2;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <Container>
          <Provider store={store}>
            <ReactReduxFirebaseWrapper>
              <NavBar />
              {children}
            </ReactReduxFirebaseWrapper>
          </Provider>
        </Container>
      </body>
    </html>
  );
}
