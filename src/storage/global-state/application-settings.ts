import {create} from 'zustand'
import {ApplicationLanguages} from '@/type/language.ts'
import {ApplicationThemes} from '@/type/theme.ts'

type ApplicationSettings = {
  language: ApplicationLanguages
  theme: ApplicationThemes
  reducedMotion: boolean
  utteranceEnabled: boolean
}

export const useApplicationSettings = create<ApplicationSettings>()(set => ({
  language: 'en-US',
  theme: 'luna-min-light',
  reducedMotion: false,
  toggleReducedMotion: () =>
    set(state => ({reducedMotion: !state.reducedMotion})),
  utteranceEnabled: false,
  toggleUtteranceEnabled: () =>
    set(state => ({utteranceEnabled: !state.utteranceEnabled})),
}))
