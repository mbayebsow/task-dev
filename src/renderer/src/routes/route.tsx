import { createHashRouter, RouteObject } from 'react-router-dom'
import PlannerTaskPage from '@renderer/pages/planner-task.page'
import MeetPage from '@renderer/pages/meet.page'
import TodayTaskPage from '@renderer/pages/today-task.page'
import ConfigPage from '@renderer/pages/config.page'
import ProjectLayout from '@renderer/layouts/project.layout'
import AppLayout from '@renderer/layouts/app.layout'
import ErrorPage from '@renderer/pages/error.page'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'today-task',
        element: <TodayTaskPage />
      },
      {
        path: 'config',
        element: <ConfigPage />
      },
      {
        path: 'meet-note',
        element: <MeetPage />
      },
      {
        path: 'planner',
        element: <PlannerTaskPage />
      },
      {
        path: 'project',
        element: <ProjectLayout />,
        children: [
          {
            path: ':project-id',
            children: [
              {
                path: ':task-id',
                element: <div>task id</div>
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createHashRouter(routes)
export default router
