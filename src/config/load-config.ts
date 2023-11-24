'use client'

import {loadAppSettings} from '@/config/app-settings-loader/load-app-settings.ts'

export const loadConfig = () => {
  void loadAppSettings()
}
