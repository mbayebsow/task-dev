export interface ProjectType {
  isHiddenFromMenu: boolean
  isArchived: boolean
  isEnableBacklog: boolean
  backlogTaskIds: any[]
  noteIds: string[]
  advancedCfg: AdvancedCfg
  theme: Theme
  workStart: { string: number }
  workEnd: { string: number }
  breakTime: { string: number }
  breakNr: { string: number }
  taskIds: string[]
  icon: string
  id: string
  title: string
}

export interface AdvancedCfg {
  worklogExportSettings: WorklogExportSettings
}

export interface WorklogExportSettings {
  cols: string[]
  roundWorkTimeTo: any
  roundStartTimeTo: any
  roundEndTimeTo: any
  separateTasksBy: string
  groupBy: string
}

export interface Theme {
  isAutoContrast: boolean
  isDisableBackgroundGradient: boolean
  primary: string
  huePrimary: string
  accent: string
  hueAccent: string
  warn: string
  hueWarn: string
  backgroundImageDark: any
  backgroundImageLight: any
}
