import React from "react";
import { useParams } from "react-router-dom";

import PAGES from "../config/pages";
import NotFoundPage from "../pages/404";
import { HOME_PAGE_KEY } from "../utils.js";

const TemplatePage = () => {
  // If missing (i.e. is home route, defaults to HOME_PAGE_KEY)
  const { templateName = HOME_PAGE_KEY } = useParams();

  if (templateName in PAGES) {
    return PAGES[templateName];
  }
  return <NotFoundPage />;
};

export default TemplatePage;
