module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'react', 'import', 'unicorn'],
	rules: {
		// from vite init
		'react-refresh/only-export-components': 'warn',

		// imports
		'import/default': 0,
		'import/no-default-export': 1,
		'import/no-unresolved': 2,

		//variables
		'prefer-const': 1,
		'no-var': 2,

		//base
		camelcase: [
			1,
			{
				ignoreDestructuring: true,
				ignoreImports: true,
				properties: 'never',
			},
		],
		'no-else-return': 2,
		'dot-notation': 2,
		'eol-last': 2,

		// alert, console
		'no-console': 1,
		'no-alert': 2,

		// equals
		eqeqeq: 1,
		'no-eq-null': 2,

		// function
		'max-params': [1, 3],
		'max-lines-per-function': [1, 48],
		'arrow-parens': [2, 'always'],

		// react
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],

		// style
		'jsx-quotes': [1, 'prefer-single'],
		semi: [1, 'always'],
		'no-multi-spaces': 1,
		'space-in-parens': 1,
		'no-multiple-empty-lines': 1,
		'no-unexpected-multiline': 1,

		// typescript
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-explicit-any': 1,
		'@typescript-eslint/consistent-type-imports': 1,
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: { delimiter: 'semi', requireLast: true },
				singleline: { delimiter: 'semi', requireLast: false },
			},
		],

		// unicorn plugin
		'unicorn/filename-case': [
			2,
			{
				cases: { kebabCase: true },
			},
		],
		'unicorn/no-null': 0,
		'unicorn/no-useless-undefined': 0,
		'unicorn/prevent-abbreviations': 1,
		'unicorn/consistent-function-scoping': 1,
		'unicorn/no-for-loop': 1,
		// "unicorn/no-negated-condition": 0,
	},
};
