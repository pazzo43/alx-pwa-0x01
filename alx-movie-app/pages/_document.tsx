// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the manifest file in your /public folder */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for the browser address bar and PWA UI */}
        <meta name="theme-color" content="#0070f3" />
        
        {/* iOS specific tags for a better PWA experience */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


manifest.json

public/

href="/manifest.json"

app/
manifest.ts
manifest.json
app/

apple-touch-icon
