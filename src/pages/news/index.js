import { Button } from "antd";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div>
      <h3>This is news page</h3>
      <Button>
        <Link href="/">Back to home page</Link>
      </Button>
    </div>
  );
};

export default NewsPage;
