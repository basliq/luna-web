'use client'

import * as idb from 'idb'
import {AppSettings} from '@/storage/global-state/app-settings.ts'
import {
  IDB_DB_LUNA_APPLICATION,
  IDB_DOS_COMMON,
  IDB_KEY_SETTINGS,
} from '@/storage/idb/constants.ts'

export const CommonIDB = {
  openDB: async () => {
    return await idb.openDB(IDB_DB_LUNA_APPLICATION, 1, {
      upgrade(db) {
        db.createObjectStore(IDB_DOS_COMMON)
      },
    })
  },

  loadAppSettings: async (): Promise<Partial<AppSettings>> => {
    const db = await CommonIDB.openDB()
    const settings = (await db.get(
      IDB_DOS_COMMON,
      IDB_KEY_SETTINGS,
    )) as AppSettings
    if (settings) return settings
    await db.delete(IDB_DOS_COMMON, IDB_KEY_SETTINGS)
    return {}
  },

  storeAppSettings: async (applicationSettings: AppSettings) => {
    const db = await CommonIDB.openDB()
    await db.put(IDB_DOS_COMMON, applicationSettings, IDB_KEY_SETTINGS)
  },
}
