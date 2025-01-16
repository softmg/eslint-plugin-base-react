"use strict";

const flat = require("./flat");
const legacy = require("./legacy");

module.exports = {
    configs: {
        ...legacy.configs,
        flat: {
            ...flat.configs
        },
    },
    rules: {
        ...flat.rules,
    }
};
