import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/routes/layout'
import HomePage from '@/routes/home/page'
import ShowcasePage from '@/routes/showcase/page'
import NotFoundPage from '@/routes/not-found/page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'showcase',
        element: <ShowcasePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router
