/* eslint-env node */
const path = require('path')

const eslintCommand = filenames =>
  `next lint --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const formatCommand = 'npm run format'
const stylelintCommand = 'stylelint --allow-empty-input "**/*.scss"'
module.exports = {
  '*.{js,ts,tsx}': [formatCommand, eslintCommand],
  '*.scss': [formatCommand, stylelintCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
}
