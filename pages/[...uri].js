import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Category from "../components/Category/Category";
import { useRouter } from "next/router";

export default function MainScreen() {
  const router = useRouter();
  const [screenLayout, setScreenLayout] = useState("");

  useEffect(() => {
    setScreenLayout(selectLayout());
  }, [""]);

  const selectLayout = function () {
    const { pid, sid } = router.query;
    if (pid || sid) {
      return "Product";
    }
    return "Category";
  };

  const RenderLayout = () => {
    return "Category" === screenLayout ? <Category /> : <Product />;
  };

  return <RenderLayout />;
}
