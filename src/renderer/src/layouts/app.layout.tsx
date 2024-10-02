import Sidebar from '@renderer/components/layout/Sidebar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="flex h-screen bg-gradient-to-t from-gray-100 to-indigo-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
