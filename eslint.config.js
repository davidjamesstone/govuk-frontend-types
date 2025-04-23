import neostandard from 'neostandard'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
  ...neostandard({
    ignores: ['docs/**/*'],
  }),
  jsdoc.configs['flat/recommended']
]
