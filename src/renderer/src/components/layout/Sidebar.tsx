import { Plus, CalendarClock, Sunset, Building2, BookUser, Presentation } from 'lucide-react'
import Divider from '../common/Divider'

function Sidebar() {
  return (
    <div className="w-16 flex flex-col items-center py-4 bg-black">
      <div className="mb-10 bg-white">
        <img src="/api/placeholder/40/40" alt="Logo" className="w-10 h-10 rounded" />
      </div>
      <nav className="flex flex-col items-center space-y-8">
        <Sunset className="text-gray-400 hover:text-white" size={24} />
        <CalendarClock className="text-gray-400 hover:text-white" size={24} />
        <Presentation className="text-gray-400 hover:text-white" size={24} />

        <Divider />

        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full">
            <Plus className="text-gray-400 hover:text-white" size={24} />
          </div>
          <div className="p-2 rounded-md bg-indigo-300">
            <BookUser className="" size={20} />
          </div>
          <div className="p-2 rounded-md bg-orange-300">
            <Building2 className="" size={20} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
