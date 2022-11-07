import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import classnames from "classnames";

import Footer from "./footer";
import NavBar from "./nav";
import Slide from "../animations/slide";
import styles from "../scss/pageContainer.module.scss";

const Div = (props) => <div {...props} />;

// Content should be some sort of element to be shown
const PageContainer = ({
  title,
  children,
  renderTitle = true,
  titleCenter = false,
  containerClass = "container-lg", // Bootstrap container, e.g. container-fluid is width 100% at all viewport sizes
  horizontalCenter = false, // Defaults to left aligned, text-center/horizontal-content-center if true
  verticalCenter = true, // Moves the content a third down in its container (if there is available space)
  animate = true,
  navComp = <NavBar />, // Can be set to null to not render one
  extraContentBelow = null, // Content between main content (min size 100vh) and footer
  footerComp = <Footer />, // Can be set to null to not render one
  ...restOfProps
}) => {
  const ContainerComp = animate ? Slide : Div;
  const containerProps = {
    ...restOfProps,
    className: classnames(
      restOfProps.className,
      containerClass,
      "flex-grow-1",
      "my-2",
      {
        "text-center": horizontalCenter,
        "justify-content-center": horizontalCenter,
        [styles.verticalThirdLowerContainer]: verticalCenter,
      }
    ),
  };
  // Adding in the Slide specific props:
  if (animate) {
    containerProps.axis = "y";
    containerProps.slidePercentage = 3;
  }

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {/* Main content (children) that fills the entire screen */}
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="align-self-center container-lg p-0 m-0">{navComp}</div>

        <div className="d-flex justify-content-center">
          <ContainerComp {...containerProps}>
            {/* Add title if needed: */}
            {renderTitle ? (
              <h1 className={`my-3 ${titleCenter ? "text-center" : ""}`}>
                {title}
              </h1>
            ) : null}
            {children}
          </ContainerComp>
        </div>
      </div>

      {/* Extra content above footer but outside of the initial main content full screen */}
      {extraContentBelow}
      {footerComp}
    </main>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string,
  horizontalCenter: PropTypes.bool,
  verticalCenter: PropTypes.bool,
  animate: PropTypes.bool,
  renderTitle: PropTypes.bool,
  titleCenter: PropTypes.bool,
  fullWidth: PropTypes.bool,
  navComp: PropTypes.node,
  extraContentBelow: PropTypes.node,
  footerComp: PropTypes.node,
  restOfProps: PropTypes.any,
};

export default PageContainer;
