import neostandard from 'neostandard'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
  ...neostandard({
    ignores: ['docs/**/*', 'metadata.js', 'schema.js', 'types.js', 'enum.js'],
  }),
  jsdoc.configs['flat/recommended']
]
