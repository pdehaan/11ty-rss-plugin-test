const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("inspect", require("util").inspect);
  eleventyConfig.addFilter("localeDate", (date) =>
    new Date(date).toLocaleDateString()
  );

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
