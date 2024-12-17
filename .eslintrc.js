// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,                    // 启用 JSX 解析
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',                        // 使用 React 插件
      'prettier',                     // 使用 Prettier 插件
    ],
    rules: {
      'prettier/prettier': 'error',   // 将 Prettier 格式问题作为 ESLint 错误
      // 其他自定义规则
    },
    settings: {
      react: {
        version: 'detect',             // 自动检测 React 版本
      },
    },
  };
  