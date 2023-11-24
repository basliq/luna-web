export const AppThemes = ['luna-min-light'] as const

export type AppThemes = (typeof AppThemes)[number]
