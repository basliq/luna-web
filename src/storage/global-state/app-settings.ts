'use client'

import {create} from 'zustand'
import {AppLanguages} from '@/type/language.ts'
import {AppRegions} from '@/type/region.ts'
import {AppThemes} from '@/type/theme.ts'
import {CommonIDB} from '@/storage/idb/common.idb.ts'

export type AppSettings = {
  language: AppLanguages
  region: AppRegions
  theme: AppThemes
  reducedMotion: boolean
  utteranceEnabled: boolean
}

type AppSettingsActions = {
  setLanguage: (language: AppLanguages) => void
  setRegion: (region: AppRegions) => void
  setTheme: (theme: AppThemes) => void
  toggleReducedMotion: () => void
  toggleUtteranceEnabled: () => void
}

export const useAppSettings = create<AppSettings & AppSettingsActions>()(
  set => ({
    language: 'en',
    setLanguage: (language: AppLanguages) => set({language}),
    region: 'US',
    setRegion: (region: AppRegions) => set({region}),
    theme: 'luna-min-light',
    setTheme: (theme: AppThemes) => set({theme}),
    reducedMotion: false,
    toggleReducedMotion: () =>
      set(state => ({reducedMotion: !state.reducedMotion})),
    utteranceEnabled: false,
    toggleUtteranceEnabled: () =>
      set(state => ({utteranceEnabled: !state.utteranceEnabled})),
  }),
)

useAppSettings.subscribe(state => {
  const saveToIDB = async () => {
    const nonFunctionState = {
      language: state.language,
      region: state.region,
      theme: state.theme,
      utteranceEnabled: state.utteranceEnabled,
      reducedMotion: state.reducedMotion,
    }
    await CommonIDB.storeAppSettings(nonFunctionState)
  }

  void saveToIDB()
})
