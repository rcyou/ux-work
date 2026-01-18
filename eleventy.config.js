const sass = require('sass');
const path = require('node:path');
const moment = require('moment');
const pluginRss = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("rootURL", "https://ux.ryancyoung.com");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/auth/*")
  eleventyConfig.addPassthroughCopy("src/js/*")
  eleventyConfig.addPassthroughCopy("src/images/**/**")
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/BingSiteAuth.xml");
  eleventyConfig.addPassthroughCopy("src/googlec6dede463ff3417e.html")
  eleventyConfig.addPassthroughCopy("src/pretty-feed-v3.xsl")

  eleventyConfig.addFilter("utcDate", function(value, arg) { 
    return moment(value).utc().format(arg);
  });

  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  // New in RSS 1.2.0
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);
};