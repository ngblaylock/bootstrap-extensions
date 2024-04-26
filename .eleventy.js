const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addFilter("sortByTitle", function(collection) {
		console.log(collection);
    return collection.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
  });
	return {
		dir: {
      input: "pages",
			includes: "_includes",
      layouts: "_layouts",
      output: "docs",
		},
	};
};