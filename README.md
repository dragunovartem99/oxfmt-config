# Personal Oxfmt Config

<a href="https://github.com/dragunovartem99/oxfmt-config/blob/main/oxfmt.config.ts" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/View_Configuration-red"></a>
<img alt="NPM Version" src="https://img.shields.io/npm/v/@dragunovartem99/oxfmt-config?color=orange">

This configuration uses **explicit** style, to maintain readability and minimize mistakes, for example:

- Semicolons
- Arrow function parentheses
- Reasonable print width (100 chars)
- Double quotes (some kind of C "vibe")

And it uses tabs (or 4 spaces in formats like YAML)

## Installation

```shell
npm install --save-dev @dragunovartem99/oxfmt-config
```

## Usage

1. Create `oxfmt.config.ts` in your project root:

```ts
export { default } from "@dragunovartem99/oxfmt-config";
```

2. Add scripts to your project's `package.json`:

```json
{
    "scripts": {
        "format": "oxfmt --write",
        "format:check": "oxfmt --check"
    }
}
```

3. Run the formatter:

```shell
npm run format
```

Or check formatting without modifications:

```shell
npm run format:check
```

## Creating your own configuration

For creating similar configurations, see:

- [oxfmt's configuration docs](https://oxc.rs/docs/guide/usage/formatter/config.html)
- [npm's documentation on scoped packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
