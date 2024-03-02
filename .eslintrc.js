module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next'],
    rules: {
        'indent': [
            2,
            4,
            {
                offsetTernaryExpressions: true,
            },
        ],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react/jsx-indent': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/no-deprecated': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
};
