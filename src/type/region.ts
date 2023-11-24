export const AppRegions = ['US'] as const

export type AppRegions = (typeof AppRegions)[number]
