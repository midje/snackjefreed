import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full bg-cover bg-[url('/bg-burgir.png')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
