"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const recommendedRules = {
    /** eslint */
    ...require('./rules/common'),

    /** eslint-plugin-prettier */
    ...require('./rules/prettier'),

    /** eslint-plugin-import */
    ...require('./rules/import'),

    /** eslint-plugin-react */
    ...require('./rules/react'),

    /** eslint-plugin-react-hooks */
    ...require('./rules/react-hooks'),

    /** eslint-plugin-promise */
    ...require('./rules/promise'),

    /** eslint-plugin-unicorn */
    ...require('./rules/unicorn'),

    /** eslint-plugin-sonarjs */
    ...require('./rules/sonarjs'),

    /** @typescript-eslint-* */
    ...require('./rules/typescript'),
}

const baseConfig = {
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:sonarjs/recommended-legacy",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic"
    ],
    plugins: [
        "prettier",
        "import",
        "sonarjs",
        "react",
        "react-hooks",
        "testing-library",
        "jsx-a11y",
        "promise",
        "unicorn",
        "@typescript-eslint",
    ],
    rules: {
        ...recommendedRules,
    },
}

const commonConfig = {
    extends: [
        "eslint:recommended",
    ],
    rules: {
        /** eslint */
        ...require('./rules/common'),
    },
}
const prettierConfig = {
    extends: [
        "prettier",
    ],
    plugins: [
        "prettier",
    ],
    rules: {
        /** eslint-plugin-prettier */
        ...require('./rules/prettier'),
    },
}
const importConfig = {
    extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    plugins: [
        "import",
    ],
    rules: {
        /** eslint-plugin-import */
        ...require('./rules/import'),
    },
}
const reactConfig = {
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended",
    ],
    plugins: [
        "react",
        "react-hooks",
        "testing-library",
        "jsx-a11y",
    ],
    rules: {
        /** eslint-plugin-react */
        ...require('./rules/react'),

        /** eslint-plugin-react */
        ...require('./rules/react-hooks'),
    },
}
const promiseConfig = {
    extends: [
        "plugin:promise/recommended",
    ],
    plugins: [
        "promise",
    ],
    rules: {
        /** eslint-plugin-promise */
        ...require('./rules/promise'),
    },
}
const unicornConfig = {
    extends: [
        "plugin:unicorn/recommended",
    ],
    plugins: [
        "unicorn",
    ],
    rules: {
        /** eslint-plugin-unicorn */
        ...require('./rules/unicorn'),
    },
}
const sonarConfig = {
    extends: [
        "plugin:sonarjs/recommended-legacy",
    ],
    plugins: [
        "sonarjs",
    ],
    rules: {
        /** eslint-plugin-sonarjs */
        ...require('./rules/sonarjs'),
    },
}
const typescriptConfig = {
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
    ],
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        /** @typescript-eslint-* */
        ...require('./rules/typescript'),
    },
}

const configs = {
    recommended: {
        ...baseConfig,
    },
    common: {
        ...commonConfig,
    },
    prettier: {
        ...prettierConfig,
    },
    import: {
        ...importConfig,
    },
    react: {
        ...reactConfig,
    },
    promise: {
        ...promiseConfig,
    },
    unicorn: {
        ...unicornConfig,
    },
    sonarjs: {
        ...sonarConfig,
    },
    typescript: {
        ...typescriptConfig,
    },
}

module.exports = {
    configs,
};
