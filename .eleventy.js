const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({"dist/**/*.min.css": '/css'});
	eleventyConfig.addPassthroughCopy({"11ty-site/_assets": '/'});
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addFilter("sortByTitle", function(collection) {
    return collection.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
  });
	return {
		dir: {
			pathPrefix: 'bootstrap-extensions',
      input: "11ty-site",
			includes: "_includes",
      layouts: "_includes/layouts",
      output: "docs",
		},
	};
};