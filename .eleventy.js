const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');
const mdAttrs = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {
	// Passthrough File Copy
	eleventyConfig.addPassthroughCopy({"dist/**/*.min.css": '/css'});
	eleventyConfig.addPassthroughCopy({"11ty-site/_assets": '/'});
	
	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyHelmetPlugin);

	// Extend Markdown
	const mdAttrsOptions = {
    matcher(href) {
      return href.match(/^https?:\/\//);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  };
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mdAttrs, mdAttrsOptions));
	
	// Filters
	eleventyConfig.addFilter("sortByTitle", function(collection) {
		return collection.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
  });

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