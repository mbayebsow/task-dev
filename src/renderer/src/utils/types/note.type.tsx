export interface NoteType {
  id: string
  projectId: string
  isPinnedToToday: boolean
  content: string
  created: number
  modified: number
}
