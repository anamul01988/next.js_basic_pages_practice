import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://banner2.cleanpng.com/20180304/wpe/kisspng-web-development-http-404-world-wide-web-website-we-blue-cartoon-monster-5a9c0ec981df50.615012421520176841532.jpg"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
