import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { renderError } from "../../utils";

const GenericComponent = ({ component, isTopLevel = false }) => {
  const ref = useRef();

  // Make all links in the page open on a new page (adds target="_blank" even if not specified, saves hassle)
  // runs every render
  useEffect(() => {
    if (isTopLevel && ref.current) {
      // select all anchor tags:
      const anchors = ref.current.querySelectorAll("a");
      for (var i = 0; i < anchors.length; ++i) {
        anchors[i].setAttribute("target", "_blank");
      }
    }
  });

  let comp = null;
  if (typeof component === "string") {
    // Render directly if a string:
    comp = <span dangerouslySetInnerHTML={{ __html: component }} />;
  } else if (React.isValidElement(component)) {
    // Return component if recognised as a react element or jsx:
    comp = component;
  } else {
    comp = renderError(
      `Unknown component entered. Not a react element, jsx or a string.`,
      component
    );
  }

  return <span ref={ref}>{comp}</span>;
};

GenericComponent.propTypes = {
  component: PropTypes.any.isRequired,
  isTopLevel: PropTypes.bool,
};

export default GenericComponent;
