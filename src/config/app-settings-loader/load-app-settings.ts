'use client'

import {
  AppSettings,
  useAppSettings,
} from '@/storage/global-state/app-settings.ts'
import {loadAppSettingsFromIDB} from '@/config/app-settings-loader/load-app-settings-from-idb.ts'

const appSettings = useAppSettings.getState()

const initialAppSettings: Partial<AppSettings> = {}
export const loadAppSettings = async () => {
  const IDBAppSettings = await loadAppSettingsFromIDB(
    initialAppSettings,
    appSettings,
  )

  // TODO
  // load some values from user browser preferences e.g. reducedMotion and theme

  // populating the global state with data gathered from IDB
  // if the property is undefined, we assign the default values of the state
  useAppSettings.setState({
    language: IDBAppSettings.language ?? appSettings.language,
    region: IDBAppSettings.region ?? appSettings.region,
    theme: IDBAppSettings.theme ?? appSettings.theme,
    utteranceEnabled:
      IDBAppSettings.utteranceEnabled ?? appSettings.utteranceEnabled,
    reducedMotion: IDBAppSettings.reducedMotion ?? appSettings.reducedMotion,
  })
}
