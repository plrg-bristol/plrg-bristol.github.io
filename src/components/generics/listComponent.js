import React from "react";
import PropTypes from "prop-types";

import GenericComponent from "./genericComponent";
import { List, ListItem } from "../list";

const ListComponent = ({ components, alternatingColors = true }) => {
  return (
    <List className="mx-2">
      {components.map((component, index) => {
        return (
          <ListItem key={index} alternatingColors={alternatingColors}>
            <GenericComponent component={component} />
          </ListItem>
        );
      })}
    </List>
  );
};

ListComponent.propTypes = {
  components: PropTypes.array.isRequired,
  alternatingColors: PropTypes.bool,
};

export default ListComponent;
