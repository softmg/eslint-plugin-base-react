# @softmg/eslint-plugin-base-react

A comprehensive linting solution that sweeps your code clean

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@softmg/eslint-plugin-base-react`:

```sh
npm install @softmg/eslint-plugin-base-react --save-dev
```

## Usage

### Legacy config

Suitable for ESLint version < 9

##### Full config

It's recommended for new projects or if you want to see all ESLint errors and warnings for existing projects.

Add `@softmg/eslint-plugin-base-react` to the extends or plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:
```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "ignorePatterns": [
    "**/*",
    "node_modules"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "fragment": "Fragment",
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "extends": [
    "plugin:base-react/recommended"
  ],
  "plugins": [
    "base-react"
  ]
}
 ```

##### Incrementally improvements

If you have existing project big/old/etc. you can apply `base-react` config setting incrementally:
- `plugin:base-react/common`
- `plugin:base-react/prettier`
- `plugin:base-react/import`
- `plugin:base-react/simpleImportSort`
- `plugin:base-react/react`
- `plugin:base-react/promise`
- `plugin:base-react/unicorn`
- `plugin:base-react/sonarjs`
- `plugin:base-react/typescript`
- `plugin:base-react/perfectionist`

```json
{
  ...
  "extends": [
    "plugin:base-react/common",
    "plugin:base-react/prettier",
    ...
  ],
  "plugins": [
    "base-react"
  ]
}
```

### Flat config

Suitable for ESLint >= 9

##### Full config
`eslint.config.js` from **javascript** project

```javascript
import baseReactPlugin from "@softmg/eslint-plugin-base-react";
import globals from "globals";

const config = [
  ...baseReactPlugin.configs.flat.recommended,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.js` from **typescript** project

```typescript
import baseReactPlugin from "@softmg/eslint-plugin-base-react";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...baseReactPlugin.configs.flat.recommended,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

##### Incrementally improvements

If you have existing project big/old/etc. you can apply `base-react` config setting incrementally:
- `baseReactPlugin.configs.flat.common`
- `baseReactPlugin.configs.flat.prettier`
- `baseReactPlugin.configs.flat.import`
- `baseReactPlugin.configs.flat.simpleImportSort`
- `baseReactPlugin.configs.flat.react`
- `baseReactPlugin.configs.flat.reactHooks`
- `baseReactPlugin.configs.flat.jsxA11y`
- `baseReactPlugin.configs.flat.promise`
- `baseReactPlugin.configs.flat.unicorn`
- `baseReactPlugin.configs.flat.sonarjs`
- `baseReactPlugin.configs.flat.typescript`
- `baseReactPlugin.configs.flat.perfectionist`
- `baseReactPlugin.configs.flat.testingLibrary`

`eslint.config.js` from **javascript** project

```javascript
import baseReactPlugin from "@softmg/eslint-plugin-base-react";
import globals from "globals";

const config = [
    ...baseReactPlugin.configs.flat.common,
    ...baseReactPlugin.configs.flat.prettier,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.js` from **typescript** project

```typescript
import baseReactPlugin from "@softmg/eslint-plugin-base-react";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...baseReactPlugin.configs.flat.common,
  ...baseReactPlugin.configs.flat.prettier,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

##### Separate rules

For flexible customization you can also use separate rules in your configs:
- `baseReactPlugin.rules.recommended`
- `baseReactPlugin.rules.common`
- `baseReactPlugin.rules.import`
- `baseReactPlugin.rules.sonarjs`
- `baseReactPlugin.rules.prettier`
- `baseReactPlugin.rules.react`
- `baseReactPlugin.rules.reactHooks`
- `baseReactPlugin.rules.reactRefresh`
- `baseReactPlugin.rules.promise`
- `baseReactPlugin.rules.unicorn`
- `baseReactPlugin.rules.perfectionist`
- `baseReactPlugin.rules.typescriptRules`

`eslint.config.js` from **javascript** project

```javascript
import baseReactPlugin from "eslint-plugin-base-react";
import globals from "globals";

const config = [
    ...({
      ...baseReactPlugin.configs.flat.common,
      rules: {
        ... baseReactPlugin.rules.common,
        // Your rules
      }
    }),
    ...baseReactPlugin.configs.flat.prettier,
    // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.js` from **typescript** project

```typescript
import baseReactPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...({
    ...baseReactPlugin.configs.flat.common,
    rules: {
      ... baseReactPlugin.rules.common,
      // Your rules
    }
  }),
  // OR
  {
    rules: {
      ...baseReactPlugin.rules.flat.typescript,
    },
  },
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

#### Prettier settings (optional)

If you don't have a `.prettierrc` config, please add it (for example):
   ```prettier
   {
      "singleQuote": true,
      "printWidth": 150,
      "useTabs": false,
      "tabWidth": 2,
      "trailingComma": "all",
      "semi": false
    }
   ```
