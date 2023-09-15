/* eslint-env node */
const path = require('path')

const eslintCommand = filenames =>
  `next lint --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const formatCommand = 'npm run format'
module.exports = {
  '*.{js,ts,tsx}': [formatCommand, eslintCommand],
  '*.{css,scss}': [formatCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
}
