module.exports = {
	extends: ["eslint:recommended", 'plugin:@typescript-eslint/recommended', "plugin:prettier/recommended"],
	env: {
		node: true,
		es6: true,
		jest: true
	},
	parser:  '@typescript-eslint/parser',
	root: true,
	plugins: ["node"],
	parserOptions: { ecmaVersion: 2017, sourceType: "module" },
	rules: {
		"no-useless-escape": "off",
		"quote-props": ["error", "as-needed"],
		"no-dupe-keys": "error",
		"no-undef": "error",
		"no-extra-semi": "error",
		"quotes": ["error", "single"],
		"prettier/prettier": ["error", { "singleQuote": true }],
		"quotemark": [
			true,
			"single"
		],
		"semi": "error",
		"no-template-curly-in-string": "error",
		"no-caller": "error",
		"global-require": "off",
		"brace-style": "error",
		"key-spacing": "error",
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"no-extra-bind": "warn",
		"no-empty": "off",
		"no-multiple-empty-lines": "error",
		"no-multi-spaces": "error",
		"no-process-exit": "off",
		"no-trailing-spaces": "error",
		"no-use-before-define": "off",
		"no-unused-vars": ["error", { args: "none" }],
		"no-unsafe-negation": "error",
		"no-loop-func": "warn",
		"space-before-function-paren": ["error", "never"],
		"space-before-blocks": "error",
		"object-curly-spacing": ["error", "always"],
		"object-curly-newline": ["error", { consistent: true }],
		"@typescript-eslint/no-var-requires": "off",
		"keyword-spacing": [
			"error",
			{
				after: true,
				overrides: {
					const: { after: true },
					try: { after: true },
					throw: { after: true },
					case: { after: true },
					return: { after: true },
					finally: { after: true },
					do: { after: true }
				}
			}
		],
		"no-console": "off",
		"valid-jsdoc": "error",
		"eol-last": ["error", "always"],
		"newline-per-chained-call": "off"
	}
};
