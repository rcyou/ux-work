const sass = require('sass');
const path = require('node:path');
const moment = require('moment');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("utcDate", function(value, arg) { 
    return moment(value).utc().format(arg);
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("BingSiteAuth.xml");
  });

};
