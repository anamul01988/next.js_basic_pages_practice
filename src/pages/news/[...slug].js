import { useRouter } from "next/router";
import React from "react";

const CatchAllRoutes = () => {
  const router = useRouter();
  return (
    <div>
      <h3>This is for catchAllRoutes/filteringy : {router.query.slug}</h3>
    </div>
  );
};

export default CatchAllRoutes;
