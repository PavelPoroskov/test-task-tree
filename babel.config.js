module.exports = function config(api) {
  api.cache(true);

  const presets = [
    // '@babel/preset-env',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    // 'react-app'
  ];
  const plugins = [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], // `style: true` for less
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ];

  return {
    presets,
    plugins,
  };
};
