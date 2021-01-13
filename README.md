# eslint-config-tic

Common configuration for TIC-80 projects

## Install

```
# Yarn
yarn add eslint-config-tic --dev

# NPM
npm i eslint-config-tic --save-dev
```

## Usage

```JS
module.exports = {
 extends: ['tic']
}
```

## Globals

This configuration contains all globals currently available in TIC-80 `v0.80`

## Rules

 - `no-unused-vars` Constants written in full-caps are considered globals
