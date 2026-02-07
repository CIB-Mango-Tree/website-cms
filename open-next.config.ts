// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from '@opennextjs/cloudflare/config'

if (typeof process !== 'undefined' && !process.report?.getReport) {
  // @ts-ignore
  process.report = {
    ...process.report,
    getReport: () => ({}),
  }
}

export default defineCloudflareConfig({})
