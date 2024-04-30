const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	// Passthrough File Copy
	eleventyConfig.addPassthroughCopy({"dist/**/*.min.css": '/css'});
	eleventyConfig.addPassthroughCopy({"11ty-site/_assets": '/'});
	
	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	
	// Filters
	eleventyConfig.addFilter("sortByTitle", function(collection) {
		return collection.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
  });
	
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	return {
		dir: {
			pathPrefix: "/bootstrap-extensions/",
      input: "11ty-site",
			includes: "_includes",
      layouts: "_layouts",
      output: "docs",
		},
	};
};