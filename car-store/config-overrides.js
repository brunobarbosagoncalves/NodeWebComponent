const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function override(config, env) {
  config.entry = {
    main: './src/index.js',
    'car-2': `./src/components/carMode2/filegen.js`,
    'car-1': `./src/components/carMode1/filegen.js`,
  };
  config.resolve = {
    ...config.resolve,
    extensions: ['.js', '.css'],
  };

  config.output = {
    ...config.output,
    publicPath: `/`, // looks like http://localhost:3000/[car].bundle.js when running locally
    filename: `[name].bundle.js`,
  };

  config.watch = true;

  config.plugins.push(
    new MiniCssExtractPlugin(
      {
        filename: '[name].bundle.css',
        ignoreOrder: false,
        experimentalUseImportModule: undefined,
        runtime: true,
        chunkFilename: 'static/css/[name].css',
      },
      {
        insert: undefined,
        linkType: 'text/css',
        attributes: undefined,
      }
    )
  );

  // config.module.rules.push({
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     MiniCssExtractPlugin.loader, // extract css into files
  //     'css-loader', // convert css to js string css
  //     'sass-loader', // convert sass to css
  //   ],
  // });

  console.log(config.module.rules);

  // return false;

  return config;
};
