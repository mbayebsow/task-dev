import { RouterProvider } from 'react-router-dom'
import router from './routes/route'

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
