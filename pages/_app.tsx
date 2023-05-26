import type { AppProps } from 'next/app'
import { init } from "@socialgouv/matomo-next";
import React, { useEffect } from "react";

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init({ url: 'https://a.webmethod.nl', siteId: '16' });
  }, []);

  return <Component {...pageProps} />
}
