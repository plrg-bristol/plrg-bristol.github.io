import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

import PageContainer from "../pageContainer";
import GenericComponent from "./genericComponent";

// Requires: "data"
const PageComponent = ({ title, components, titleCenter = false }) => {
  const ref = useRef();

  return (
    <PageContainer title={title} className="mx-2" titleCenter={titleCenter}>
      <div ref={ref}>
        {components.map((component, index) => (
          <div key={index} className="my-3">
            <GenericComponent component={component} isTopLevel={true} />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

PageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  components: PropTypes.array.isRequired,
  titleCenter: PropTypes.bool,
};

export default PageComponent;
