import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'app.freedgrid.mobile',
  appName: 'FreedGrid',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#191817',
  },
  ios: {
    backgroundColor: '#191817',
  },
}

export default config
