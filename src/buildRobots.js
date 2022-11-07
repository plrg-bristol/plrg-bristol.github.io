// Providing a stub to ignore scss/css imports:
require.extensions[".scss"] = () => {};
require.extensions[".css"] = () => {};

// Setting up the script to compile es6 and jsx correctly:
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
require("@babel/register")({
  presets: ["@babel/preset-env", "babel-preset-react-app"],
});

// Needed to build sitemap
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// To switch between localhost:3000 and production url for robots and sitemap urls:
const isProd = process.env.PROD === "True";

// Page config:
const { default: PAGES } = require("./config/pages.js");
const { HOME_PAGE_KEY } = require("./utils.js");
// Get the base url from the package.json config file as will always be defined in there:
const { homepage: BASE_URL } = require("../package.json");

// Add in the sitemap config using all the pages in the config:
const links = Object.keys(PAGES).map((templateName) => ({
  // NOTE: when adding template urls, adding in an extra /?/{path} before the url path, this is because of the way google handles redirect links, this forces google to actually index the required path.
  // See the bottom of: https://github.com/rafgraph/spa-github-pages
  url: templateName === HOME_PAGE_KEY ? "/" : `/?/${templateName}`,
  changefreq: "monthly",
  priority: templateName === HOME_PAGE_KEY ? 1.0 : 0.8,
}));

// Now, create the robots.txt file:
const fs = require("fs");
const path = require("path");
const sitemapName = "sitemap.xml";
const baseUrl = isProd ? BASE_URL : "http://localhost:3000";

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
Sitemap: ${baseUrl}/${sitemapName}
User-agent: *
Disallow:`;

// Save the robotsTxt file to the public folder:
fs.writeFileSync(path.join(__dirname, "..", "public", "robots.txt"), robotsTxt);

const stream = new SitemapStream({ hostname: baseUrl });
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  const sitemap = data.toString();
  // Save the siteMap file to the public folder:
  fs.writeFileSync(path.join(__dirname, "..", "public", sitemapName), sitemap);
});
