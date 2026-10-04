const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // loader: "imgix",
    // path: "/assets/images/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    contentSecurityPolicy: ``,
    // Next 16 只允許 qualities 裡的值，其他會被改成最接近的;圖片頁示範 quality={1}
    qualities: [1, 75],
  },
  // basePath: '/docs',
};
