import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen  bg-background text-foreground flex flex-col items-center justify-center gap-10 px-4 py-16">

      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="relative flex h-32 w-40 items-center justify-center">
          <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-border" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_70%_35%,rgba(56,189,248,0.18),transparent_40%)] blur-2xl" />
          <div className="relative z-10 flex size-20 -rotate-6 items-center justify-center rounded-3xl border bg-card shadow-sm">
            <img
              src={reactLogo}
              className="size-10 animate-spin [animation-duration:10s]"
              alt="React logo"
            />
          </div>
          <div className="relative z-10 -ml-3 flex size-20 rotate-6 items-center justify-center rounded-3xl border bg-card shadow-sm">
            <img
              src={viteLogo}
              className="size-10 drop-shadow-sm"
              alt="Vite logo"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Get started</h1>
          <p className="text-muted-foreground">
            Edit <Badge variant="secondary">src/App.jsx</Badge> and save to test{' '}
            <Badge variant="outline">HMR</Badge>
          </p>
        </div>

        <Button onClick={() => setCount((c) => c + 1)} size="lg">
          Count is {count}
        </Button>
      </section>

      <Separator className="max-w-xl w-full" />

      {/* Next steps */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {/* Docs card */}
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Your questions, answered</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" asChild>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <img src={viteLogo} className="size-4" alt="" />
                Explore Vite
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://react.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <img src={reactLogo} className="size-4" alt="" />
                Learn React
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Community card */}
        <Card>
          <CardHeader>
            <CardTitle>Connect with us</CardTitle>
            <CardDescription>Join the Vite community</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {[
              { href: 'https://github.com/vitejs/vite', label: 'GitHub' },
              { href: 'https://chat.vite.dev/', label: 'Discord' },
              { href: 'https://x.com/vite_js', label: 'X.com' },
              { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky' },
            ].map(({ href, label }) => (
              <Button key={label} variant="ghost" asChild className="justify-start">
                <a href={href} target="_blank" rel="noreferrer">{label}</a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default App
