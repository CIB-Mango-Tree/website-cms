if (typeof process !== 'undefined') {
  if (!process.report) {
    // @ts-ignore
    process.report = { getReport: () => ({}) }
  } else if (!process.report.getReport) {
    // @ts-ignore
    process.report.getReport = () => ({})
  }
}

// @ts-ignore - .open-next/worker.js is generated at build time
import { default as handler } from './.open-next/worker.js'

export default handler
