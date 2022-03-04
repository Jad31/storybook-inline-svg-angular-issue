// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// // Export a function. Accept the base config as the only param.
// module.exports = async ({ config }) => {
//   config.resolve.extensions.push('.svg');

//   config.module.rules = config.module.rules.map((data) => {
//     if (/svg\|/.test(String(data.test)))
//       data.test =
//         /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
//     return data;
//   });

//   // config.module.rules.push({
//   // 	test: /\.svg$/,
//   // 	use: [{ loader: 'svg-inline-loader' }]
//   // });

//   return config;
// };
