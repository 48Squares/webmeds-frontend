import { useRouter } from "next/router";
import React from "react";
import Category from "../components/Category/Category";
import Product from "../components/Product";

export default function MainScreen() {
  const router = useRouter();

  const ScreenLayout = () => {
    const { pid, sid } = router.query;
    if (pid || sid) {
      return Product;
    }
    return Category;
  };

  const Layout = ScreenLayout();

  return <Layout />;
}
