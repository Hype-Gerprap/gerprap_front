module.exports = {
  publicPath: "/gerprap_front",
  devServer: {
    proxy: "http://localhost:8085/",
  },
};
