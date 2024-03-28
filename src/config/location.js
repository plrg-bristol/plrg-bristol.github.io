import React from "react";
import HorizontalComponent from "../components/generics/horizontalComponent";
import ImageComponent from "../components/generics/imageComponent";

export const createLocation = () => {
  return [
    <HorizontalComponent
      smallScreenIndexPriorities={[1, 0]} // Want the map to show first when single columned
      components={[
        <div>
          <h2 className="mb-4">Location</h2>
          <p>
            We are a research group in the School of Computer Science, which is
            part of the Faculty of Engineering.
          </p>
          <div className="primary-font">
            <p>
              Programming Languages Research Group<br></br>
              Merchant Venturers Building<br></br>
              Woodland Road<br></br>
              BS8 1UB<br></br>
              Bristol<br></br>
              United Kingdom<br></br>
            </p>
          </div>
        </div>,
        <ImageComponent
          alt={
            "Map showing the location of the Merchant Venturers (a pox upon them) Building"
          }
          src={"images/mvb-map.png"}
          maxHeight="400px"
        />,
      ]}
    />,
  ];
};
