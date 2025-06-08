import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventyHelmetPlugin from "eleventy-plugin-helmet";
import mdAttrs from "markdown-it-link-attributes";

export default function (eleventyConfig) {
  // Passthrough File Copy
  eleventyConfig.addPassthroughCopy({ "dist/**/*.min.css": "/css" });
  eleventyConfig.addPassthroughCopy({ "11ty-site/_assets": "/" });

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

  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mdAttrs, mdAttrsOptions)
  );

  // Filters
  eleventyConfig.addFilter("sortByTitle", function (collection) {
    return collection.sort((a, b) => (a.data.title > b.data.title ? 1 : -1));
  });

  return {
    pathPrefix: "/bootstrap-extensions/",
    dir: {
      input: "11ty-site",
      includes: "_includes",
      layouts: "_layouts",
      output: "docs",
    },
  };
}