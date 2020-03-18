module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      module: true,
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["warn", 2], // 缩进2个空格
    quotes: ["warn", "single"], // 使用单引号
    semi: ["warn", "never"], // 结尾无需分号;
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-alert": 0, //禁止使用alert confirm prompt
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-func-assign": 2, //禁止重复的函数声明
    "no-var": 0, //禁用var，用let和const代替
    "default-case": 2, //switch语句最后必须有default
    eqeqeq: 2 //必须使用全等
  }
};
