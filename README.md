JavaScript Webpack "babel-preset-env" Demo
==========================================

使用`babel-preset-env`可以告诉webpack在编译代码的时候，按照什么样的浏览器或者node版本来编译，
可以选择不同的策略，使得最终生成的代码既可以在指定的平台上运行，转换的内容也尽量少。

```
npm install
npm run ie11
```

## ie 11

生成的`dist/bundle.js`中关键代码如下，由于ie11不支持原代码中的模板语法，所以进行了转换：

```
eval("var name = 'babel';\nconsole.log(\"Hello, \".concat(name, \"!\"));\n\n//# sourceURL=webpack:///./entry.js?");
```

## edge 16

```
npm run edge16
```

生成的`dist/bundle.js`中关键代码如下，注意其模板语法并未转换：

```
eval("const name = 'babel';\nconsole.log(`Hello, ${name}!`);\n\n//# sourceURL=webpack:///./entry.js?");
```
