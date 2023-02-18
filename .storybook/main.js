module.exports = {
  //exampleを非表示にするため、コメントアウトし、componentsに絞る
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "stories": [ '../src/components/**/*.stories.jsx' ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
