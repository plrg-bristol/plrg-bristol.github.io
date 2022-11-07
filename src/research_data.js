export const createResearchDataUrl = (
  keywords,
  { maxNum = null, year = null, pageNum = 1 } = {}
) => {
  var feed = "*"; // Not sure exactly what the * does but it seems to work correctly
  var url = `https://www.bristol.ac.uk/research/research-data/feed/${feed}/full`;

  var params = { keywords, offset: pageNum - 1 };
  if (year !== null) {
    params["year"] = year;
  }
  if (maxNum !== null) {
    params["show"] = maxNum;
  }

  // Return the url with all the get params:
  return url + "?" + new URLSearchParams(params).toString();
};
