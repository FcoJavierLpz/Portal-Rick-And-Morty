import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import CharacterDetail from './pages/CharacterDetail'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'character/:slug', element: <CharacterDetail /> }
    ]
  }
])

export default router
