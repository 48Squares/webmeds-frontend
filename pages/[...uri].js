import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Category from "../components/Category/Category";
import { useRouter } from "next/router";

export default function MainScreen() {
  const router = useRouter();
  const [screenLayout, setScreenLayout] = useState("");
  const [LayoutComponent, setLayoutComponent] = useState(null);

  useEffect(() => {
    setScreenLayout(selectLayout());
    setLayoutComponent(RenderLayout());
    debugger;
  }, [""]);

  const selectLayout = function () {
    const { pid, sid } = router.query;
    if (pid || sid) {
      return "Product";
    }
    return "Category";
  };

  const RenderLayout = () => {
    return "Category" === screenLayout ? Category : Product;
  };

  return LayoutComponent;
}
