/* eslint-env node */
const path = require('path')

const eslintCommand = filenames =>
  `next lint --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const formatCommand = 'npm run format'
const lintStyleCommand = 'npm run lint-style'

module.exports = {
  '*.{js,ts,tsx}': [formatCommand, eslintCommand],
  '*.scss': [formatCommand, lintStyleCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
}
