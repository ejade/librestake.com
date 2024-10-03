import Link from 'next/link'
import { Button } from "../components/ui/button"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="py-6 px-4 bg-background">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">librestake</Link>
            <div className="space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-6 px-4 bg-background mt-12">
          <div className="container mx-auto text-center text-muted-foreground">
            © 2023 librestake. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}