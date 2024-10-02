import TaskList from '@renderer/components/feature/task-list.tsx'
import Header from '@renderer/components/layout/Header'
import { Outlet } from 'react-router-dom'

function ProjectLayout() {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <Header />

      {/* Content area */}
      <main className="flex-1 p-3 pt-0 h-full overflow-hidden">
        <div className="flex gap-3 h-full w-full">
          <div className="bg-white rounded-lg border border-gray-200 p-2 w-1/3 h-full">
            <TaskList />
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-2 w-2/3 h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectLayout
