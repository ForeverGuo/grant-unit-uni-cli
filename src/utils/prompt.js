module.exports = [
  {
    name: 'version',
    message: 'version(1.0.0)'
  },
  {
    name: 'description',
    message: 'description'
  },
  {
    name: 'author',
    message: 'author'
  },
  {
    type: 'list',
    name: 'preset',
    message: 'Please pick a preset:',
    choices: [
        {
            name: 'Default (Vue2)',
            value: 'vue2',
        },
        {
            name: 'Default (Vue3)',
            value: 'vue3',
        }
    ]
  },
  {
    type: 'list',
    name: 'lint',
    message: 'Please pick an ESLint preset:',
    choices: [
        {
            name: 'none',
            value: 'none',
        },
        {
            name: 'Eslint + Prettier（VScode开发，建议勾选）',
            value: 'eslint',
        }
    ]
  },
  {
    type: 'list',
    name: 'husky',
    message: 'Please pick a husky:',
    choices: [
        {
            name: 'none',
            value: 'none',
        },
        {
            name: 'husky（pre-commit check）',
            value: 'husky',
        }
    ]
  }
]