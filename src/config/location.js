import React from "react";
import ListComponent from "../components/generics/listComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";

const addressLines = [
  "Bristol Programming Languages Unit",
  "Merchant Venturers Building",
  "Woodland Road",
  "BS8 1UB, Bristol",
  "United Kingdom",
];

export const createLocation = () => {
  return [
    <HorizontalComponent
      smallScreenIndexPriorities={[1, 0]} // Want the map to show first when single columned
      components={[
        <div>
          <h2 className="mb-4">Location</h2>
          <p>
            We are based in the beautiful Clifton campus as part of the School
            of Computer Science, Electrical and Electronic Engineering, and
            Engineering Maths (SCEEM), Faculty of Engineering, University of
            Bristol.
          </p>
          <div className="primary-font">
            <ListComponent
              alternatingColors={false}
              components={addressLines}
            />
          </div>
        </div>,
        <iframe
          title="Map Location"
          width="100%"
          height="400px"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBYUK4Cnb3Bg9ZC8HR-J8mZv91QY4oLAkQ&q=Merchant+Venturers+Building,Woodland+Rd,Bristol,BS8+1UB,United Kingdom"
        ></iframe>,
      ]}
    />,
  ];
};
