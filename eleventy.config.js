const sass = require('sass');
const path = require('node:path');
const moment = require('moment');

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("rootURL", "https://ux.ryancyoung.com");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("docs");

  eleventyConfig.addPassthroughCopy("src/auth/*")
  eleventyConfig.addPassthroughCopy("src/js/*")
  eleventyConfig.addPassthroughCopy("src/images/**/**")
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/BingSiteAuth.xml");
  eleventyConfig.addPassthroughCopy("src/googlec6dede463ff3417e.html")

  eleventyConfig.addFilter("utcDate", function(value, arg) { 
    return moment(value).utc().format(arg);
  });

};