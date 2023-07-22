import { useRouter } from "next/router";
import React from "react";

const NewsPageDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h3>This is details of : {router.query.newsPageId}</h3>
    </div>
  );
};

export default NewsPageDetails;
