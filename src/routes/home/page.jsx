import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import App from '@/App'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/theme-switcher'

function HomePage() {
  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <ThemeSwitcher />
        <Button asChild variant="outline" className="shadow-sm backdrop-blur">
          <Link to="/showcase">
            Open Showcase
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </div>
      <App />
    </div>
  )
}

export default HomePage
