import './globals.css'

export const metadata = {
  title: 'AIverything',
  description: 'lets automate things for real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
