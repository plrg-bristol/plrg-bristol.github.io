import React from "react";
import PageContainer from "../components/pageContainer";
import Image from "../components/images/image";
import Button from "../components/generics/buttonComponent";

const NotFoundPage = () => {
  return (
    <PageContainer title="Page Not Found" horizontalCenter>
      <div>
        <Image alt="Home" src="images/404.svg" height="300px" width="300px" />
        <h3>This page has changed location or does not exist.</h3>
        <Button size="lg" className="my-3" link="/">
          Home
        </Button>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
