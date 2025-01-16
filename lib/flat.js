"use strict";

const sonarjsPlugin = require('eslint-plugin-sonarjs')
const importPlugin = require('eslint-plugin-import');
const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactPlugin = require('eslint-plugin-react');
const testingLibraryPlugin = require('eslint-plugin-testing-library');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const promisePlugin = require('eslint-plugin-promise');
const unicornPlugin = require('eslint-plugin-unicorn');
const tsPlugin = require('typescript-eslint');

/** eslint */
const commonRules = require('./rules/common');
/** eslint-plugin-import */
const importRules = require('./rules/import');
/** eslint-plugin-sonarjs */
const sonarjsRules = require('./rules/sonarjs');
/** eslint-plugin-prettier */
const prettierRules = require('./rules/prettier');
/** eslint-plugin-react */
const reactRules = require('./rules/react');
/** eslint-plugin-react-hooks */
const reactHooksRules = require('./rules/react-hooks');
/** eslint-plugin-promise */
const promiseRules = require('./rules/promise');
/** eslint-plugin-unicorn */
const unicornRules = require('./rules/unicorn');
/** typescript-eslint */
const typescriptRules = require('./rules/typescript');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const recommendedRules = {
    ...commonRules,
    ...importRules,
    ...sonarjsRules,
    ...prettierRules,
    ...reactRules,
    ...reactHooksRules,
    ...promiseRules,
    ...unicornRules,
    ...typescriptRules,
}

const recommended = [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    sonarjsPlugin.configs.recommended,
    eslintPluginPrettierRecommended,
    testingLibraryPlugin.configs['flat/react'],
    reactPlugin.configs.flat.recommended,
    jsxA11yPlugin.flatConfigs.recommended,
    promisePlugin.configs['flat/recommended'],
    ...tsPlugin.configs.recommended,

    {
        plugins: {
            'react-hooks': reactHooksPlugin,
            unicorn: unicornPlugin,
        },
        rules: {
            ...recommendedRules,
        },
    },
];

const common = [
    js.configs.recommended,
    {
        rules: commonRules,
    }
]
const importConfig = [
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        rules: importRules,
    }
]
const sonarjs = [
    sonarjsPlugin.configs.recommended,
    {
        rules: sonarjsRules,
    }
]
const prettier = [
    eslintPluginPrettierRecommended,
    {
        rules: prettierRules,
    }
]
const react = [
    reactPlugin.configs.flat.recommended,
    {
        rules: reactRules,
    }
]
const reactHooks = [
    {
        plugins: {
            'react-hooks': reactHooksPlugin,
        },
        rules: reactHooksRules,
    },
]
const jsxA11y = [
    jsxA11yPlugin.flatConfigs.recommended,
]
const testingLibrary = [
    testingLibraryPlugin.configs['flat/react'],
]
const promise = [
    promisePlugin.configs['flat/recommended'],
    {
        rules: promiseRules,
    }
]
const unicorn = [
    {
        plugins: {
            unicorn: unicornPlugin,
        },
        rules: unicornRules,
    }
]
const typescript = [
    ...tsPlugin.configs.recommended,
    {
        rules: typescriptRules,
    }
]

const configs = {
    recommended,
    common,
    import: importConfig,
    sonarjs,
    prettier,
    react,
    reactHooks,
    jsxA11y,
    testingLibrary,
    promise,
    unicorn,
    typescript,
}

const rules = {
    recommended: recommendedRules,
    common: commonRules,
    import: importRules,
    sonarjs: sonarjsRules,
    prettier: prettierRules,
    react: reactRules,
    reactHooks: reactHooksRules,
    promise: promiseRules,
    unicorn: unicornRules,
    typescript: typescriptRules,
}

module.exports = {
    configs,
    rules,
};
