module.exports = function(eleventyConfig) {
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("static/image");
    eleventyConfig.setServerOptions({
      watch: ["_site/**/*.css"],
    });

    
  };