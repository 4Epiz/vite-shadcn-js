import { HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ThemeSwitcher from '@/components/theme-switcher'

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center">
        <Card className="w-full">
          <CardHeader>
            <div className="mb-2 flex justify-end">
              <ThemeSwitcher />
            </div>
            <CardTitle>404</CardTitle>
            <CardDescription>
              The page you requested does not exist in this route tree.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/">
                <HomeIcon data-icon="inline-start" />
                Back Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default NotFoundPage
