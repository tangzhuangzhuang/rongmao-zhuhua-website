import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
    },
  },
]
