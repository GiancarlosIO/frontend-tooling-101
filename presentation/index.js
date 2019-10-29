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
  Link
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
  babelCodeModExample2: require("../assets/babel-code-mod-example-2.png")
};

const ListItemStyled = styled(ListItem)`
  line-height: 1.5;
  font-size: ${(props) => props.size || "32px"} !important;
`;

const TextStyled = styled(Text)`
  font-size: ${(props) => props.size || "32px"} !important;
  line-height: ${(props) => props.lineHeight || "1.5"} !important;
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
          {/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text> */}
        </Slide>
        {/* ============================= 1 =============================== */}
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <List>
            <ListItemStyled>Babel: Presets and ListItemStyled</ListItemStyled>
            <ListItemStyled>Webpack: Loaders and plugins</ListItemStyled>
            <ListItemStyled>Django: Webpack integration</ListItemStyled>
            <ListItemStyled>Web Performance</ListItemStyled>
            <ListItemStyled>SSR</ListItemStyled>
            <ListItemStyled>Tips*</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 2 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Babel</Heading>
          <TextStyled>Babel is a JavaScript compiler.</TextStyled>
          <TextStyled size={20}>It helps to convert modern JavaScript into plain old ES5 JavaScript.</TextStyled>
        </Slide>
        {/* ============================= 3 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Why do you need babel? 🤔</Heading>
          <Image src={images.canIUseES6} />
        </Slide>
        {/* ============================= 4 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>How babel works under the hood?</Heading>
          <TextStyled textAlign="left" size="24px" lineHeight="3">It use <Link textAlign="left" href="https://astexplorer.net/">AST</Link> to transform your javascript code</TextStyled>

        </Slide>
        {/* ============================= 5 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" lineHeight="3">Transform syntax:</TextStyled>
          <Image src={images.babelTrasnformSyntaxExample} />
        </Slide>
        {/* ============================= 6 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" margin="24px 0">Source code transformations (codemods):</TextStyled>
          <Image src={images.babelCodeModExample} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <TextStyled textAlign="left" size="24px" margin="24px 0">Source code transformations (codemods):</TextStyled>
          <Image src={images.babelCodeModExample2} />
        </Slide>
        {/* ============================= 9 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel can do for you? 🤔</Heading>
          <List>
            <ListItemStyled size="24px">And more! (eslint plugins, optimize javascript, etc)</ListItemStyled>
          </List>
        </Slide>
        {/* ============================= 10 =============================== */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textAlign="center" size={6} textColor="primary" caps>Crehana</Heading>
          <TextStyled textColor="white">🔥 Babel setup 🔥</TextStyled>
        </Slide>
        {/* ============================= 11 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel plugins are being used in crehana? 🤔</Heading>
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
        {/* ============================= 12 =============================== */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textAlign="left" size={6} textColor="primary" caps>What babel plugins are being used in crehana? 🤔</Heading>

        </Slide>
      </Deck>
    );
  }
}