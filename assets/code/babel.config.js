module.exports = (api) => {
  const isProduction = api.env("production");

  const transformImportsPluginServer = [
    "transform-imports",
    {
      aegisv2: {
        transform: 'aegisv2/${member}', // eslint-disable-line
        preventFullImport: true
      }
    }
  ];

  const transformImportsPluginClient = [
    "transform-imports",
    {
      "redux-form": {
        transform: 'redux-form/es/${member}', // eslint-disable-line
        preventFullImport: true
      },
      aegisv2: {
        transform: 'aegisv2/${member}', // eslint-disable-line
        preventFullImport: true
      }
    }
  ];

  const styledPlugin = [
    "styled-components",
    {
      displayName: !isProduction,
      preprocess: false,
      ssr: true,
      minify: false,
      pure: isProduction
    }
  ];

  const plugins = [
    transformImportsPluginClient,
    styledPlugin,
    "lodash",
    "recharts",
    "transform-inline-environment-variables",
    "react-hot-loader/babel",
    "@babel/plugin-proposal-export-default-from",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    [
      "inline-import-data-uri",
      {
        extensions: [".jpg"]
      }
    ],
    "@babel/plugin-proposal-optional-chaining"
  ];

  const getTargets = () => {
    if (process.env.LAMBDAS) {
      console.log(
        "Detected lambda env var, using `target: node` in babel config",
      );
      return {
        node: "current"
      };
    }

    if (isProduction) {
      return [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"];
    }

    return [
      "last 2 chrome versions",
      "last 2 firefox versions",
      "last 2 edge versions"
    ];
  };

  const getPlugins = () => {
    if (process.env.LAMBDAS) {
      return ["babel-plugin-source-map-support", ...plugins];
    }

    return plugins;
  };

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          targets: getTargets()
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    env: {
      test: {
        presets: ["@babel/preset-env"],
        plugins: [
          styledPlugin,
          "@babel/plugin-transform-modules-commonjs",
          "dynamic-import-node"
        ]
      },
      server: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: "current"
              }
            }
          ]
        ],
        plugins: [
          styledPlugin,
          "dynamic-import-node",
          transformImportsPluginServer,
          [
            "module-resolver",
            {
              root: ["./crehana/frontdev/jsx"],
              extensions: [".js", ".jsx", ".ts", ".tsx", ".graphql", ".gql"],
              alias: {
                react: "./node_modules/react",
                aegisv2: "./crehana/frontdev/jsx/AegisV2",
                "styled-components": "./node_modules/styled-components",
                "react-transition-group/CSSTransitionGroup":
                  "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroup.js",
                crehui: "./crehana/frontdev/jsx/libs/crehana-ui/src",
                "crehana-ui": "./crehana/frontdev/jsx/libs/crehana-ui/src",
                "crehana-icons":
                  "./crehana/frontdev/jsx/libs/crehana-icons/src",
                Icons: "./crehana/frontdev/jsx/libs/crehana-icons/src",
                "crehana-player":
                  "./crehana/frontdev/jsx/libs/crehana-player/src",
                Jsx: "./crehana/frontdev/jsx/",
                Auth: "./crehana/frontdev/jsx/Auth/",
                Shared: "./crehana/frontdev/jsx/Shared/",
                Constants: "./crehana/frontdev/jsx/constants/",
                Components: "./crehana/frontdev/jsx/Components/",
                Containers: "./crehana/frontdev/jsx/containers/",
                Actions: "./crehana/frontdev/jsx/actions/",
                Reducers: "./crehana/frontdev/jsx/reducers/",
                Api: "./crehana/frontdev/jsx/Api/",
                Types: "./crehana/frontdev/jsx/types/",
                Utils: "./crehana/frontdev/jsx/Utils/",
                Styles: "./crehana/frontdev/scss/",
                Catalog: "./crehana/frontdev/jsx/Catalog/",
                CourseDetail: "./crehana/frontdev/jsx/CourseDetail/",
                CourseUpload: "./crehana/frontdev/jsx/CourseUpload/",
                UserDashboard: "./crehana/frontdev/jsx/UserDashboard/",
                SharedCareers: "./crehana/frontdev/jsx/SharedCareers/",
                MainFooter: "./crehana/frontdev/jsx/MainFooter/",
                LandingCareers: "./crehana/frontdev/jsx/LandingCareers/",
                Membership: "./crehana/frontdev/jsx/Membership/",
                MembershipOnboarding:
                  "./crehana/frontdev/jsx/MembershipOnboarding/",
                MarketingContent: "./crehana/frontdev/jsx/MarketingContent/",
                MainMenu: "./crehana/frontdev/jsx/MainMenu/",
                ShoppingCart: "./crehana/frontdev/jsx/ShoppingCart/",
                Checkout: "./crehana/frontdev/jsx/Checkout/",
                Precheckout: "./crehana/frontdev/jsx/Precheckout/",
                Landings: "./crehana/frontdev/jsx/Landings/",
                Jobs: "./crehana/frontdev/jsx/Jobs/",
                Transmissions: "./crehana/frontdev/jsx/Transmissions",
                ResourceDetail: "./crehana/frontdev/jsx/ResourceDetail/"
              }
            }
          ],
          "import-graphql"
        ]
      },
      production: {
        plugins: [
          styledPlugin,
          "@babel/plugin-transform-react-constant-elements",
          "transform-react-remove-prop-types",
          /**
           * Hey!
           * we need a polyfill to use this plugin!!!
           */
          "@babel/plugin-transform-react-inline-elements",
          ["transform-remove-console", { exclude: ["error", "warn"] }],
          "babel-plugin-transform-remove-debugger"
        ]
      }
    },
    plugins: getPlugins()
  };
};
