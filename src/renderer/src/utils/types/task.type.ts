export interface TaskType {
  id: string
  projectId: string
  subTaskIds: string[]
  timeSpentOnDay: { string: number }
  timeSpent: number
  timeEstimate: number
  isDone: boolean
  doneOn: number
  title: string
  notes: string
  tagIds: string[]
  parentId: any
  reminderId: any
  created: number
  repeatCfgId: any
  plannedAt: any
  _showSubTasksMode: number
  attachments: any[]
  issueId: any
  issueProviderId: any
  issuePoints: any
  issueType: any
  issueAttachmentNr: any
  issueLastUpdated: any
  issueWasUpdated: any
  issueTimeTracked: any
}
