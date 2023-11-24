'use client'

import {CommonIDB} from '@/storage/idb/common.idb.ts'
import {AppLanguages} from '@/type/language.ts'
import {AppRegions} from '@/type/region.ts'
import {AppThemes} from '@/type/theme.ts'
import {AppSettings} from '@/storage/global-state/app-settings.ts'

export const loadAppSettingsFromIDB = async (
  initialAppSettings: Partial<AppSettings>,
  appSettings: AppSettings,
) => {
  const appSettingsIDB = await CommonIDB.loadAppSettings()

  if (appSettingsIDB.language && AppLanguages.includes(appSettings.language)) {
    initialAppSettings.language = appSettingsIDB.language
  }

  if (appSettingsIDB.region && AppRegions.includes(appSettings.region)) {
    initialAppSettings.region = appSettingsIDB.region
  }

  if (appSettingsIDB.theme && AppThemes.includes(appSettings.theme)) {
    initialAppSettings.theme = appSettingsIDB.theme
  }

  if (appSettingsIDB.utteranceEnabled !== undefined) {
    initialAppSettings.utteranceEnabled = appSettingsIDB.utteranceEnabled
  }

  if (appSettingsIDB.reducedMotion !== undefined) {
    initialAppSettings.reducedMotion = appSettingsIDB.reducedMotion
  }

  return initialAppSettings
}
