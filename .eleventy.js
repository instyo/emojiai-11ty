module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("dateDisplay", function(date) {
    const d = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  });

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk"
  };
};
