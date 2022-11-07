// THE ORIGINAL DATA RESEARCH PULLING SCRIPT
// pulls the data and renders directly to html, the research data component was reverse engineered from this

require.config({
  paths: {
    jquery: "../webjars/jquery/2.1.3/dist/jquery.min",
    "jquery.simplePagination": "../js/jquery.simplePagination",
    handlebars: "../webjars/handlebars/2.0.0/handlebars.min",
    "search.template": "template",
    "simple.template": "template",
    "full.template": "template",
  },
  shim: {
    jquery: {
      exports: "$",
    },
    "jquery.simplePagination": ["jquery"],
    handlebars: {
      exports: "handlebars",
    },
  },
});
define(function (require) {
  var $ = require("jquery"),
    Handlebars = require("handlebars"),
    module = require("module"),
    searchTemplate = require("search.template"),
    simpleTemplate = require("simple.template"),
    fullTemplate = require("full.template"),
    simplePagination = require("jquery.simplePagination");

  // feed 					      default:'*' - if not using searchform
  // type                 default:'simple'
  // baseUri					    default:''
  //
  // searchResultsTarget	default:results
  // searchFormTarget     default:searchform
  // paginationTarget     default:searchpages
  // searchBannerTarget   default:searchbanner
  //
  // searchFormEnabled 		default:false
  // paginationEnabled 		default:true
  //
  // searchButtonCss      optional
  // show                 optional
  // year                 optional
  // username             optional
  //
  // orderSearch          optional
  // typeSearch           optional
  // sizeSearch           optional
  // dateSearch           optional
  //

  function ifNotEmpty(value, options) {
    if (typeof value !== "undefined" && value !== null && value.length > 0) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  function ifOne(value, options) {
    if (typeof value !== "undefined" && value !== null && value.length === 1) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  function ifMoreThanTwo(value, options) {
    if (typeof value !== "undefined" && value !== null && value.length > 2) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  function ifNotEquals(value1, value2, options) {
    if (
      typeof value1 !== "undefined" &&
      typeof value2 !== "undefined" &&
      value1 !== null &&
      value2 !== null &&
      value1 != value2
    ) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  // Load options and set defaults
  var feed = module.config().feed;
  var keywords = module.config().keywords;
  var type = module.config().type || "simple";

  var baseUri =
    module.config().baseUri ||
    "https://www.bristol.ac.uk/research/research-data/";
  var url = baseUri + "feed/" + feed + "/" + type;

  var searchResultsTarget = module.config().searchResultsTarget || "results";

  var searchButtonCss = module.config().searchButtonCss;

  var searchFormEnabled = module.config().searchFormEnabled;
  var searchFormTarget = module.config().searchFormTarget;
  var searchFormTargetDefined = false;

  var paginationEnabled = module.config().paginationEnabled;
  var paginationTarget = module.config().paginationTarget;
  var paginationTargetDefined = false;

  var searchBannerEnabled = true;
  var searchBannerTarget = module.config().searchBannerTarget;
  var searchBannerTargetDefined = false;

  if (typeof searchButtonCss === "undefined") {
    searchButtonCss = "";
  }

  if (typeof searchFormTarget !== "undefined") {
    searchFormEnabled = true;
    searchFormTargetDefined = true;
  } else {
    searchFormTarget = "searchform";
  }
  if (typeof searchFormEnabled === "undefined") {
    searchFormEnabled = true;
  }
  if (typeof paginationEnabled === "undefined") {
    paginationEnabled = true;
  }
  if (typeof paginationTarget !== "undefined") {
    paginationEnabled = true;
    paginationTargetDefined = true;
  } else {
    paginationTarget = "searchpages";
  }

  if (typeof searchBannerTarget !== "undefined") {
    searchBannerEnabled = true;
    searchBannerTargetDefined = true;
  } else {
    searchBannerTarget = "searchbanner";
  }

  // We only want a default feed if we are not using the searchform
  if (!searchFormEnabled && typeof feed === "undefined") {
    feed = "*";
  }

  var spinner = '<img id="loading" src="' + baseUri + 'spinner.gif" />';

  console.log(feed);
  console.log(keywords);
  console.log(url);
  console.log(searchResultsTarget);
  console.log(searchFormEnabled);
  console.log(paginationEnabled);
  console.log(searchFormTarget);

  // Create layout
  var layout = "";
  layout += "<div id='searchresults'></div>";
  if (!paginationTargetDefined && paginationEnabled) {
    layout += "<div id='searchpages'></div>";
  }
  if (!searchFormTargetDefined && searchFormEnabled) {
    layout += "<div id='searchform'></div>";
  }
  if (
    !searchBannerTargetDefined &&
    searchBannerEnabled &&
    searchFormEnabled &&
    paginationEnabled
  ) {
    layout += "<div id='searchbanner'></div>";
  }
  searchResultsTarget = "#" + searchResultsTarget;
  $(searchResultsTarget).html(layout);

  if (searchFormEnabled) {
    $.getJSON(baseUri + "search-data.json?callback=?", {}, function (data) {
      data.feed = module.config().feed;
      data.keywords = module.config().keywords;
      data.type = module.config().type;
      data.year = module.config().year;
      data.show = module.config().show;
      if (typeof module.config().sizeSearch !== "undefined") {
        console.log("sizeSearch = " + module.config().sizeSearch);
        data.sizeSearch = true;
      }
      if (typeof module.config().dateSearch !== "undefined") {
        console.log("dateSearch = " + module.config().dateSearch);
        data.dateSearch = true;
      }
      if (typeof module.config().orderSearch !== "undefined") {
        console.log("orderSearch = " + module.config().orderSearch);
        data.orderSearch = true;
      }
      if (typeof module.config().typeSearch !== "undefined") {
        console.log("typeSearch = " + module.config().typeSearch);
        data.typeSearch = true;
      }
      if (
        data.sizeSearch ||
        data.dateSearch ||
        data.orderSearch ||
        data.typeSearch
      ) {
        data.advancedoptions = true;
      }
      $("#" + searchFormTarget).replaceWith(searchTemplate(data));
      $("#search-publications-button").addClass(searchButtonCss);
      $("form#searchForm").submit(handleSubmit);

      if (data.advancedoptions) {
        $("#advancedoptions-toggle").click(function (e) {
          e.preventDefault();
          var toggle_switch = $(this);
          $("#advancedoptions").toggle("slow", function () {
            if ($(this).css("display") === "none") {
              toggle_switch.html("+ Advanced options");
            } else {
              toggle_switch.html("? Advanced options");
            }
          });
        });
      }
      if (
        typeof data.feed !== "undefined" &&
        typeof data.type !== "undefined"
      ) {
        url = baseUri + "feed/" + data.feed + "/" + data.type;
      }
    });
  }
  var yr = module.config().year;
  var show = module.config().show;
  var username = module.config().username;
  var params = {};
  if (typeof yr !== "undefined") {
    params["year"] = yr;
  }
  if (typeof show !== "undefined") {
    params["show"] = show;
  }
  if (typeof keywords !== "undefined") {
    params["keywords"] = keywords;
  }
  if (typeof username !== "undefined") {
    params["username"] = username;
  }
  url = url + "?" + decodeURIComponent($.param(params));
  renderFeed(url);

  function handleSubmit(event) {
    event.preventDefault();
    var formValues = $(this).serializeArray();
    var feedname;
    var format;
    formValues = $.grep(formValues, function (n) {
      var include = true;
      if (n.name === "feedname") {
        feedname = n.value;
        include = false;
      }
      if (n.name === "format") {
        format = n.value;
        include = false;
      }
      return include;
    });
    if (searchFormEnabled && paginationEnabled) {
      $("#" + searchBannerTarget).empty();
    }
    var feed =
      baseUri + "feed/" + feedname + "/" + format + "?" + $.param(formValues);
    renderFeed(feed);
  }

  function getUrlParameters(url) {
    if (url.indexOf("?") === -1) {
      return {};
    }
    var a1 = url.split("?")[1];
    if (a1 === "") return {};
    var a = a1.split("&");
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p = a[i].split("=");
      if (p.length !== 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  }

  function renderFeed(url) {
    $("#searchresults").html(spinner);
    $.ajax({
      dataType: "jsonp",
      url: url,
      timeout: 10 * 1000,
    })
      .done(function (data) {
        var results = $("#searchresults");
        var banner;
        var pages;
        if (paginationEnabled) {
          if (searchFormEnabled && paginationEnabled) {
            banner = $("#" + searchBannerTarget);
          }
          pages = $("#" + paginationTarget);
        }
        var format = data.metadata.format;
        if (data.metadata.size === 0) {
          results.html(
            '<ul class="list-no-style"><li>No results found</li></ul>'
          );
          if (paginationEnabled) {
            if (searchFormEnabled && paginationEnabled) {
              banner.empty();
            }
            pages.empty();
          }
        } else {
          if (format === "simple") {
            results.html(simpleTemplate(data));
          } else {
            Handlebars.registerHelper("ifNotEmpty", ifNotEmpty);
            Handlebars.registerHelper("ifOne", ifOne);
            Handlebars.registerHelper("ifMoreThanTwo", ifMoreThanTwo);
            Handlebars.registerHelper("ifNotEquals", ifNotEquals);
            results.html(fullTemplate(data));
          }
          if (paginationEnabled) {
            pages.pagination({
              items: data.metadata.records,
              itemsOnPage: data.metadata.itemsPerPage,
              currentPage: data.metadata.from + 1,
              onPageClick: function (pageNumber) {
                results.html(spinner);
                var p = getUrlParameters(url);
                p["offset"] = pageNumber - 1;
                p["show"] = data.metadata.itemsPerPage;
                var feedStart;
                if (url.indexOf("?") === -1) {
                  feedStart = url;
                } else {
                  feedStart = url.split("?")[0];
                }
                var newUrl = feedStart + "?" + decodeURIComponent($.param(p));
                renderFeed(newUrl);
              },
            });
            if (searchFormEnabled && paginationEnabled) {
              banner.empty();
              if (data.metadata.records > 0) {
                bannerContent = $("<p></p>");
                bannerContent.append(data.metadata.records);
                if (data.metadata.records === 1) {
                  bannerContent.append(" result");
                } else {
                  bannerContent.append(" results");
                }
                banner.append(bannerContent);
              }
            }
          }
        }
      })
      .fail(function (err, textStatus) {
        if ("error" === textStatus) {
          $("#searchresults").html(
            '<u class="list-no-style"><li>' +
              err.responseJSON.message +
              "</li></ul>"
          );
        }
        if ("timeout" === textStatus) {
          $("#searchresults").html(
            '<u class="list-no-style"><li>Results are currently unavailable</li></ul>'
          );
        }
      });
  }
});
