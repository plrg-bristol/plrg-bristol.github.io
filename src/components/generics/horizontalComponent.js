import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { assert } from "../../utils";
import GenericComponent from "./genericComponent";

const HorizontalComponent = ({
  components,
  centerCols = [], // Enter column indexes to center
  smColWidth = 12,
  mdColWidth = 4,
  lgColWidth = 3,
  xlColWidth = 2,
  colWidthOverrides = [],
  verticalCenter = true,
  smallScreenIndexPriorities = [], // Add up to 4 indexes, the remaining will all be behind these
}) => {
  const noOfComps = components.length;
  if (colWidthOverrides.length > 0) {
    assert(
      colWidthOverrides.length === noOfComps,
      `Number of column width overrides must be equal to number of components (${noOfComps})`
    );
    // Asssert that the sum of col widths is 12:
    const total = colWidthOverrides.reduce((a, b) => a + b, 0);
    assert(total === 12, `Sum of column widths must be 12, actual: ${total}`);
  }
  assert(smallScreenIndexPriorities.length <= 4, "Max 4 indexes");

  const getColVal = (width) => {
    const maxPerLine = Math.floor(12 / width);
    if (noOfComps <= maxPerLine) {
      return Math.floor(12 / noOfComps);
    }
    return width;
  };

  const classNames = classnames("row justify-content-center", {
    "align-items-center": !!verticalCenter,
  });

  return (
    <div className={classNames}>
      {components.map((subComp, index) => {
        const colClassNames =
          colWidthOverrides.length > 0
            ? `col-sm-${colWidthOverrides[index]}` // Using sm as want all single columns on tiny screens
            : `col-${getColVal(smColWidth)}  col-md-${getColVal(
                mdColWidth
              )} col-lg-${getColVal(lgColWidth)} col-xl-${getColVal(
                xlColWidth
              )}`;

        let orderingClassNames = "order-md-5";
        if (smallScreenIndexPriorities.includes(index)) {
          orderingClassNames += ` order-${
            smallScreenIndexPriorities.indexOf(index) + 1
          }`;
        }

        const centerClassName = centerCols.includes(index) ? "text-center" : "";

        return (
          <div
            className={`${colClassNames} ${orderingClassNames} ${centerClassName}`}
            key={index}
          >
            <GenericComponent component={subComp} />
          </div>
        );
      })}
    </div>
  );
};

HorizontalComponent.propTypes = {
  components: PropTypes.array.isRequired,
  centerCols: PropTypes.array,
  colWidthOverrides: PropTypes.array,
  verticalCenter: PropTypes.bool,
  smColWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  lgColWidth: PropTypes.number,
  xlColWidth: PropTypes.number,
  smallScreenIndexPriorities: PropTypes.array,
};

export default HorizontalComponent;
