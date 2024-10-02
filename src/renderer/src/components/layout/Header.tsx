import { NotebookPen, Play, Plus } from 'lucide-react'

function Header() {
  return (
    <header className="px-4 py-3 flex justify-between items-center space-x-10">
      <div className="">
        <span className="text-sm font-medium">Space name - current task name </span>
      </div>

      <div className="flex-1 text-center">Temps travaille aujourd'hui</div>

      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-4">
          <Plus className="text-white bg-black rounded-full p-1" size={25} />
          <NotebookPen className="text-white bg-black rounded-full p-1" size={25} />
          <Play className="text-white bg-black rounded-full p-1" size={25} />
        </div>
        {/* <div className="flex items-center">
          <span className="ml-2 text-sm font-medium">Mbaye SOW</span>
          <ChevronDown className="ml-1 text-gray-500" size={16} />
        </div> */}
      </div>
    </header>
  )
}

export default Header
