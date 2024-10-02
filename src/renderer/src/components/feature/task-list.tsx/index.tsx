import { Check, NotebookPen, Play } from 'lucide-react'
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

interface Task {
  id: string
  content: string
}

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `Implementer un composant d'ErrorBundary`
  }))

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(getItems(40))

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const newTasks = Array.from(tasks)
    const [reorderedItem] = newTasks.splice(result.source.index, 1)
    newTasks.splice(result.destination.index, 0, reorderedItem)

    setTasks(newTasks)
  }

  return (
    <div className="flex flex-col justify-between w-full h-full overflow-hidden space-y-1">
      <div className="w-full p-0">
        <input type="text" placeholder="Recherche" className="border w-full px-2 py-1 rounded-md" />
      </div>

      <div className="h-full overflow-y-auto border-b py-1">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="taskList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-1 p-2 bg-gray-50 rounded"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">{task.content}</div>

                          <div className="flex space-x-3 text-gray-500 w-12">
                            <button className=" hover:visible">
                              <Play size={15} />
                            </button>
                            <button className=" hover:visible">
                              <Check size={15} />
                            </button>
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="w-full p-0">
        <button className="border w-full py-1 rounded-md bg-black text-white">
          Ajouter une nouvelle tache
        </button>
      </div>
    </div>
  )
}

export default TaskList
