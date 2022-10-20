import "../styles/globals.css";
import type { AppProps } from "next/app";
import "nextra-theme-docs/style.css";

export default function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
