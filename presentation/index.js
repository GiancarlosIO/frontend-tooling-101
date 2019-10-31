// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  Code
} from "spectacle";

// Import theme
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Prism from "prismjs";

Prism.highlightAll();

// // Require CSS
// require("normalize.css");

const images = {
  canIUseES6: require("../assets/can-i-use-es-6-features.png"),
  babelTrasnformSyntaxExample: require("../assets/babel-transform-syntax-example.png"),
  babelPolyfillExample: require("../assets/babel-polyfill-example.png"),
  babelCodeModExample: require("../assets/babel-code-mod-example.png"),
  babelCodeModExample2: require("../assets/babel-code-mod-example-2.png"),
  javascriptModules: require("../assets/javascript-modules.png"),
  babelPluginLodashExample: require("../assets/babel-plugin-lodash.png"),
  babelPluginStyledComponents: require("../assets/babel-plugin-styled-components.png"),
  babelPluginRecharts: require("../assets/babel-plugin-recharts.png"),
  babelPluginTransformInlineVariables: require("../assets/babel-plugin-transform-inline-environment-variables.png"),
  babelPluginProposalExportDefault: require("../assets/babel-plugin-proposal-export-default-from.png"),
  babelPluginProposalDecorators: require("../assets/babel-plugin-proposal-decorators.png"),
  babelPluginProposalClassProperties: require("../assets/babel-plugin-proposal-class-properties.png"),
  babelPresetEnv: require("../assets/babel-preset-env.png"),
  babelPresetEnvEntry: require("../assets/babel-preset-env-entry.png"),
  babelPresetEnvUsage: require("../assets/babel-preset-env-usage.png"),
  babelPresetReact: require("../assets/babel-preset-react.png"),
  babelPresetReactPragma: require("../assets/babel-preset-react-pragma.png"),
  babelPluginTransformReactConstantElements: require("../assets/babel-plugin-react-constant-elements.png"),
  babelPluginTransformReactRemovePropTypes: require("../assets/babel-plugin-transform-react-remove-proptypes.png"),
  babelPluginTransformReactInlineElemens: require("../assets/babel-plugin-transform-react-inline-elements.png"),
  babelPluginTransformRemoveConsoleDebugger: require("../assets/babel-plugin-transform-remove-console-debugger.png"),
  webpack1: require("../assets/webpack-1.png"),
  webpackGraph1: require("../assets/webpack-graph-1.png"),
  webpackGraph2: require("../assets/webpack-graph-2.jpg"),
  webpackGraph3: require("../assets/webpack-graph-3.jpg"),
  webpackGraph4: require("../assets/webpack-graph-4.jpg"),
  webpackGraph5: require("../assets/webpack-graph-5.png"),
  webpackExplanation: require("../assets/webpack-explanation.png"),
  webpackLoader: require("../assets/webpack-loaders.png"),
  webpackLoader1: require("../assets/webpack-loaders-1.png"),
  webpackLoader2: require("../assets/webpack-loaders-2.png"),
  webpackPluginExample1: require("../assets/webpack-plugin-example-1.png"),
  webpackBundleAnalyzer: require("../assets/webpack-bundle-analyzer.png"),
  webpackBundleAnalyzer2: require("../assets/webpack-bundle-analyzer-2.png"),
  webpackDllGraph: require("../assets/webpack-dll-graph.png"),
  finish: require("../assets/finish.jpg")
};

const ListItemStyled = styled(ListItem)`
  line-height: 1.5;
  font-size: ${(props) => props.size || "32px"} !important;
`;

const TextStyled = styled(Text)`
  font-size: ${(props) => props.size || "32px"} !important;
  line-height: ${(props) => props.lineHeight || "1.5"} !important;
  font-weight: ${(props) => props.bold ? 700 : 400};
`;

const theme = createTheme({
  primary: "#5bd999",
  secondary: "#3f3f3f",
  red: "#eb4549",
  blue: "#2574a9",
  white: "#fffef5",
  yellow: "#eee657",
  darkYellow: "#f9c300",
  blueLight: "#00c0e4",
  orange: "#fe8a71",
  purple: "#8870ff"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* ============================= 0 =============================== */}
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
          🔨 Frontend tooling - 101 🔨
          </Heading>
          {/* <Text margin="10px 0 0" textColor="white" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text> */}
        </Slide>
        {/* ============================= 1 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <List>
            <ListItemStyled>Babel: Presets and Plugins</ListItemStyled>
            <ListItemStyled>Webpack: Loaders and plugins</ListItemStyled>
            <ListItemStyled>Django: Webpack integration</ListItemStyled>
            <ListItemStyled>Web Performance</ListItemStyled>
            <ListItemStyled>SSR</ListItemStyled>
            <ListItemStyled>Tips*</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 2 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} textColor="primary" caps>Babel</Heading>
          <TextStyled>Babel is a JavaScript compiler.</TextStyled>
          <TextStyled size={20}>It helps to convert modern JavaScript into plain old ES5 JavaScript.</TextStyled>
        </Slide>
        {/* ============================= 3 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} textColor="primary" caps>Why do you need babel? 🤔</Heading>
          <Image src={images.canIUseES6} />
        </Slide>
        {/* ============================= 4 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>How babel works under the hood?</Heading>
          <TextStyled textAlign="left" size="24px" lineHeight="3">It use <Link textAlign="left" href="https://astexplorer.net/">AST</Link> to transform your javascript code</TextStyled>

        </Slide>
        {/* ============================= 5 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" lineHeight="3">Transform syntax:</TextStyled>
          <Image src={images.babelTrasnformSyntaxExample} />
        </Slide>
        {/* ============================= 6 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" margin="24px 0">Polyfill features that are missing in your target environment (through @babel/polyfill):</TextStyled>
          <Image src={images.babelPolyfillExample} />
        </Slide>
        {/* ============================= 7 =============================== */}
        <CodeSlide
          transition={["fade", "fade"]}
          code={`'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');

// Array.prototype.includes method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// ====== $includes code source ==== //
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
            `}
          lang="js"
          textSize={24}
          ranges={[
            { loc: [2, 3], title: "Array.prototype.includes polyfill" },
            { loc: [7, 12], title: "Array.prototype.includes polyfill" },
            { loc: [13, 32], title: "Array.prototype.includes polyfill" }
          ]}
        />
        {/* ============================= 8 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" margin="24px 0">Source code transformations (codemods):</TextStyled>
          <Image src={images.babelCodeModExample} />
        </Slide>
        {/* ============================= 9 =============================== */}

        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" margin="24px 0">Source code transformations (codemods):</TextStyled>
          <Image src={images.babelCodeModExample2} />
        </Slide>
        {/* ============================= 10 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <List>
            <ListItemStyled size="24px">And more! (eslint plugins, optimize javascript, etc)</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 11 =============================== */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <TextStyled textColor="white">🔥 Babel setup 🔥</TextStyled>
        </Slide>
        {/* ============================= 12 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel plugins are being used in real web application? 🤔</Heading>
          <List>
            <ListItemStyled size="18px">@babel/preset-env</ListItemStyled>
            <ListItemStyled size="18px">@babel/preset-react</ListItemStyled>
            <ListItemStyled size="18px">@babel/preset-typescript</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-styled-components</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-lodash</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-rechats</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-inline-environment-variables</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-react-hot-loader/babel</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-plugin-proposal-export-default-from</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-proposal-decorators</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-proposal-class-properties</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-syntax-dynamic-import (server)</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-proposal-optional-chaining</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-preset-env: what is a preset?</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-preset-react</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-preset-typescript</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-dynamic-import-node</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-module.resolver</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-import-graphql</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-react-constants-elements</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-react-remove-proptypes</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-react-inline-elements</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-remove-console</ListItemStyled>
            <ListItemStyled size="18px">@babel/plugin-transform-remove-debugger</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 13 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel plugins/presets are being used in crehana? 🤔</Heading>
          <TextStyled textAlign="left">@babel/preset-env</TextStyled>
          <List>
            <ListItemStyled size="9px">@babel/helper-module-imports": "^7.0.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/helper-plugin-utils": "^7.0.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-async-generator-functions": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-dynamic-import": "^7.5.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-json-strings": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-object-rest-spread": "^7.6.2</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-optional-catch-binding": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-proposal-unicode-property-regex": "^7.6.2</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-syntax-async-generators": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-syntax-dynamic-import": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-syntax-json-strings": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-syntax-object-rest-spread": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-syntax-optional-catch-binding": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-arrow-functions": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-async-to-generator": "^7.5.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-block-scoped-functions": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-block-scoping": "^7.6.3</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-classes": "^7.5.5</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-computed-properties": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-destructuring": "^7.6.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-dotall-regex": "^7.6.2</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-duplicate-keys": "^7.5.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-exponentiation-operator": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-for-of": "^7.4.4</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-function-name": "^7.4.4</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-literals": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-member-expression-literals": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-modules-amd": "^7.5.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-modules-commonjs": "^7.6.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-modules-systemjs": "^7.5.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-modules-umd": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-named-capturing-groups-regex": "^7.6.3</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-new-target": "^7.4.4</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-object-super": "^7.5.5</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-parameters": "^7.4.4</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-property-literals": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-regenerator": "^7.4.5</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-reserved-words": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-shorthand-properties": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-spread": "^7.6.2</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-sticky-regex": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-template-literals": "^7.4.4</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-typeof-symbol": "^7.2.0</ListItemStyled>
            <ListItemStyled size="9px">@babel/plugin-transform-unicode-regex": "^7.6.2</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 14 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled>babel.config.js</TextStyled>
        </Slide>
        {/* ============================= 15 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">babel-plugin-styled-components</TextStyled>
          <Image src={images.babelPluginStyledComponents} />
        </Slide>
        {/* ============================= 16 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">babel-plugin-lodash</TextStyled>
          <Image src={images.babelPluginLodashExample} />
        </Slide>
        {/* ============================= 17 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">babel-plugin-recharts</TextStyled>
          <Image src={images.babelPluginRecharts} />
        </Slide>
        {/* ============================= 18 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">babel-plugin-transform-inline-environment-variables</TextStyled>
          <Image src={images.babelPluginTransformInlineVariables} />
        </Slide>
        {/* ============================= 19 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">@babel/plugin-proposal-export-default-from</TextStyled>
          <Image width="800px" src={images.babelPluginProposalExportDefault} />
          <TextStyled margin="32px 0 32px 0">@babel/plugin-proposal-decorators</TextStyled>
          <Image width="800px" src={images.babelPluginProposalDecorators} />
        </Slide>
        {/* ============================= 20 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">@babel/plugin-proposal-class-properties</TextStyled>
          <Image width="800px" src={images.babelPluginProposalClassProperties} />
        </Slide>
        {/* ============================= 21 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 32px 0">@babel/preset-env</TextStyled>
          <Image width="800px" src={images.babelPresetEnv} />
        </Slide>
        {/* ============================= 22 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/preset-env</TextStyled>
          <Code textSize="28px">{"{ useBuiltIns: 'entry' }"}</Code>

          <Image width="800px" src={images.babelPresetEnvEntry} />
        </Slide>
        {/* ============================= 23 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/preset-env</TextStyled>
          <Code textSize="28px">{"{ useBuiltIns: 'usage' }"}</Code>

          <Image width="800px" src={images.babelPresetEnvUsage} />
        </Slide>
        {/* ============================= 24 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/preset-react</TextStyled>
          <TextStyled size="16px" textColor="secondary">@babel/plugin-syntax-jsx</TextStyled>
          <TextStyled size="16px" textColor="secondary">@babel/plugin-transform-react-jsx</TextStyled>
          <TextStyled margin="0 0 32px 0" size="16px" textColor="secondary">@babel/plugin-transform-react-display-name</TextStyled>
          <Image width="800px" src={images.babelPresetReact} />
        </Slide>
        {/* ============================= 25 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/preset-react</TextStyled>
          <Code textSize="28px">{"{ \"pragma\": \"h\" }"}</Code>
          <Image width="721px" src={images.babelPresetReactPragma} />
        </Slide>
        {/* ============================= 26 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/plugin-transform-react-constant-elements (PRODUCTION ONLY)</TextStyled>
          <Image width="721px" src={images.babelPluginTransformReactConstantElements} />
        </Slide>
        {/* ============================= 27 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">babel-plugin-transform-react-remove-prop-types (PRODUCTION ONLY)</TextStyled>
          <Image width="721px" src={images.babelPluginTransformReactRemovePropTypes} />
        </Slide>
        {/* ============================= 28 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">@babel/plugin-transform-react-inline-elements (PRODUCTION ONLY)</TextStyled>
          <Image width="721px" src={images.babelPluginTransformReactInlineElemens} />
        </Slide>
        {/* ============================= 29 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">babel-transform-remove-console</TextStyled>
          <TextStyled margin="0 0 0 0">babel-transform-remove-debugger</TextStyled>
          <Image src={images.babelPluginTransformRemoveConsoleDebugger} />
        </Slide>
        {/* ============================= 30 =============================== */}
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <TextStyled margin="0 0 0 0">Extra babel plugins</TextStyled>
          <List>
            <ListItemStyled>dynamic-import-node</ListItemStyled>
            <ListItemStyled>babel-plugin-module-resolver</ListItemStyled>
            <ListItemStyled>babel-plugin-import-graphql</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 31 =============================== */}
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
          🔥 Webpack 🔥
          </Heading>
        </Slide>
        {/* ============================= 32 =============================== */}
        <CodeSlide
          transition={["fade", "fade"]}
          code={`// Javascript module system

// ES6 Modules
import React from 'react';
export default MyComponent;


// Commonjs
const React = require('react');
module.exports = MyComponent;


// AMD: Async Module Definition
define(['react', 'jquery'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});

// UMD: Universal Module Definition (pattern to configure several module system)
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["react", "jquery"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("react"), require("jquery"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function (react, $) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));

            `}
          lang="js"
          textSize={24}
          ranges={[
            { loc: [2, 5], title: "ES6 Modules" },
            { loc: [7, 10], title: "Commonjs" },
            { loc: [12, 17], title: "Commonjs" },
            { loc: [18, 35], title: "AMD: Async Module Definition" }
          ]}
        />
        {/* ============================= 33 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <TextStyled bold margin="0 0 0 0">What is webpack? 🤔</TextStyled>
          <TextStyled size="20px">Static module bundler for modern JavaScript applications</TextStyled>
          <Image src={images.webpack1} />
        </Slide>
        {/* ============================= 34 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <TextStyled bold margin="0 0 40px 0">Dependency Graph? 🤔</TextStyled>

          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <Image src={images.webpackGraph5} />
            </div>
            <div style={{ width: "50%" }}>
              <Image margin="32px auto 40px auto" src={images.webpackGraph1} />
              <Image margin="0 auto 40px auto" src={images.webpackGraph2} />
              <Image margin="0 auto 40px auto" src={images.webpackGraph3} />
              <Image margin="0 auto 40px auto" src={images.webpackGraph4} />
            </div>
          </div>
        </Slide>
        {/* ============================= 35 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <TextStyled bold margin="0 0 0 0">🔥 Webpack 🔥</TextStyled>
          <TextStyled size="16px">By Sean Larkin</TextStyled>
          <Image margin="0 auto 40px auto" src={images.webpackExplanation} />
        </Slide>
        {/* ============================= 36 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <TextStyled bold margin="0 0 0 0">Webpack loaders</TextStyled>
          <Image margin="0 auto 40px auto" src={images.webpackLoader} />
        </Slide>
        {/* ============================= 37 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <TextStyled bold margin="0 0 0 0">Writing a loader</TextStyled>
          <Image margin="0 auto 40px auto" src={images.webpackLoader} />
        </Slide>
        {/* ============================= 38 =============================== */}
        <CodeSlide
          code={require("raw-loader!../assets/code/webpackLoader.code")}
          lang="js"
          transition={["fade"]}
          textSize={24}
          ranges={[
            { loc: [0, 16], title: "webpack config" },
            { loc: [16, 26], title: "custom loader" },
            { loc: [26, 33], title: "source files" }
          ]}
        />
        {/* ============================= 39 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack plugins</Heading>
          <TextStyled>Plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables</TextStyled>
        </Slide>
        {/* ============================= 40 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack plugins</Heading>
          <List>
            <ListItemStyled>lodash-webpack-plugin</ListItemStyled>
            <ListItemStyled>webpack-bundle-analyer</ListItemStyled>
            <ListItemStyled>optimize-css-assets-webpack-plugin</ListItemStyled>
            <ListItemStyled>terser-webpack-plugin</ListItemStyled>
            <ListItemStyled>Manifest webpack plugin (custom)</ListItemStyled>
            <ListItemStyled>webpack.IgnorePlugin</ListItemStyled>
            <ListItemStyled>webpack.DefinePlugin</ListItemStyled>
            <ListItemStyled>webpack-build-notifier</ListItemStyled>
            <ListItemStyled> webpack-merge</ListItemStyled>
            <ListItemStyled> webpack.NamedModulesPlugin</ListItemStyled>
            <ListItemStyled> webpack.NoEmitOnErrorsPlugin</ListItemStyled>
            <ListItemStyled> webpack-html-plugin</ListItemStyled>
            <ListItemStyled> html-webpack-hard-disk-plugin</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 41 =============================== */}
        <CodeSlide
          code={require("raw-loader!../assets/code/webpackPluginsOptimization.code")}
          lang="js"
          transition={["fade"]}
          textSize={24}
          ranges={[
            { loc: [16, 33], title: "Terser webpack plugin (default)" },
            { loc: [33, 40], title: "Optimize css Assets Plugin" }
          ]}
        />
        {/* ============================= 42 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack Bundle Analyzer 🤗</Heading>
          <Image src={images.webpackBundleAnalyzer} />
        </Slide>
        {/* ============================= 43 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack Bundle Analyzer 😠</Heading>
          <Image src={images.webpackBundleAnalyzer2} />
        </Slide>
        {/* ============================= 44 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack Dll Plugin</Heading>
          <TextStyled>The DllPlugin and DllReferencePlugin provide means to split bundles in a way that can drastically improve build time performance</TextStyled>
        </Slide>
        {/* ============================= 45 =============================== */}
        <CodeSlide
          code={require("raw-loader!../assets/code/webpackDllPlugin.code")}
          lang="js"
          transition={["fade"]}
          textSize={24}
          ranges={[
            { loc: [0, 5], title: "Primary Dll" },
            { loc: [5, 9], title: "Primary Dll" },
            { loc: [9, 19], title: "Primary Dll" },
            { loc: [20, 29], title: "Primary Dll" },
            { loc: [29, 42], title: "Primary Dll" }
          ]}
        />
        {/* ============================= 46 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack Dll Plugin (crehana)</Heading>
          <Image src={images.webpackDllGraph} />
        </Slide>
        {/* ============================= 47 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">⛏️ Webpack + Django ⛏️</Heading>
        </Slide>
        {/* ============================= 48 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} bold margin="0 0 40px 0">Webpack: Django Integration</Heading>
          <TextStyled>¿Can we use webpack-html-plugin? 🤔</TextStyled>
        </Slide>
        {/* ============================= 48 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} bold margin="0 0 40px 0">Webpack Django Integration: Challenges</Heading>
          <List>
            <ListItemStyled size="24px" textAlign="left">Django template tag to use dynamic urls for webpack assets</ListItemStyled>
            <ListItemStyled size="24px" textAlign="left">Change the url for production and development</ListItemStyled>
            <ListItemStyled size="24px" textAlign="left">Handle cache invalidation on webpack side</ListItemStyled>
            <ListItemStyled size="24px" textAlign="left">Handle css files emitted by webpack</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 48 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} bold margin="0 0 40px 0">Webpack Django Integration</Heading>
          <TextStyled textAlign="left">Django template tag to use dynamic urls for webpack assets</TextStyled>
        </Slide>
        {/* ============================= 49 =============================== */}

        <CodeSlide
          lang="html"
          code={require("raw-loader!../assets/code/webpackDjangoUrl.code")}
          textSize="22px"
          ranges={[
            { loc: [0, 14], title: "Django Webpack template tag" }
          ]}
          transition={["fade"]}
        />
        {/* ============================= 50 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} bold margin="0 0 40px 0">Webpack Django Integration</Heading>
          <TextStyled textAlign="left">Handle cache invalidation on webpack side</TextStyled>
        </Slide>
        {/* ============================= 51 =============================== */}
        <CodeSlide
          lang="html"
          code={require("raw-loader!../assets/code/webpackDjangoUrl2.code")}
          textSize="24px"
          ranges={[
            { loc: [0, 14], title: "Django Webpack template tag" }
          ]}
          transition={["fade"]}
        />
        {/* ============================= 52 =============================== */}

        <Slide transition={["fade"]} bgColor="white">
          <Heading textAlign="left" size={6} bold margin="0 0 40px 0">Webpack Django Integration: Handle cache invalidation on webpack side</Heading>
          <TextStyled textAlign="left" size="18px" />
          <TextStyled textAlign="left" size="20px">We get the asset/chunk hash by generating a manifest.json file.</TextStyled>
          <Code style={{ display: "block" }} margin="0 0 32px 0" textAlign="left" textSize="20px">
            {`{
  "js/catalog.min.js": "js/catalog.3498042f.min.js
}`}
          </Code>
          <TextStyled textAlign="left" size="20px">Django replaces the template tag argument. <br />From:</TextStyled>
          <Code style={{ display: "block" }} margin="0 0 32px 0" textAlign="left" textSize="20px">{"<script src=\"{% webpack_static 'js/catalog.min.js' %}\"></script>"}</Code>
          <TextStyled size="20px" textAlign="left">To:</TextStyled>
          <Code style={{ display: "block" }} margin="0 0 32px 0" textAlign="left" textSize="20px">{"<script src=\"https://static.crehana.com/static/js/catalog.3498042f.min.js\"></script>"}</Code>
        </Slide>
        {/* ============================= 53 =============================== */}
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webpackDjangoCssTag.py")}
          textSize="24px"
          ranges={[
            { loc: [0, 13], title: "Handle css files" }
          ]}
          transition={["fade"]}
        />
        {/* ============================= 54 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={6}>That's it</Heading>
          <Image width="800px" src={images.finish} />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="primary" size={4}>Thanks.</Heading>
        </Slide>
      </Deck>
    );
  }
}
