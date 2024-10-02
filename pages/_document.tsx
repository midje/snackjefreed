import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body className="h-full bg-cover bg-[url('/bg-burgir.png')]">
        <Main/>
        <NextScript/>

        <script defer src="https://statisfyer.nl/script.js"
                data-website-id="1c18eaf8-6dbe-4dbb-ac9c-2c99413d409e"></script>
        </body>
    </Html>
  )
}
