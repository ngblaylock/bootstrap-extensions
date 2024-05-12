const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');

module.exports = function (eleventyConfig) {
	// Passthrough File Copy
	eleventyConfig.addPassthroughCopy({"dist/**/*.min.css": '/css'});
	eleventyConfig.addPassthroughCopy({"11ty-site/_assets": '/'});
	
	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyHelmetPlugin);
	
	// Filters
	eleventyConfig.addFilter("sortByTitle", function(collection) {
		return collection.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
  });
	
	// Server Options
	eleventyConfig.setServerOptions({
    watch: ['docs/css/site.min.css', 'dist/bootstrap-5/scss/*.scss']
  })

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