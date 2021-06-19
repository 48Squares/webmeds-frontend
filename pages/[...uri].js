import { useRouter } from "next/router";
import React from "react";
import Category from "../components/Category/Category";
import Product from "../components/Product";

export default function MainScreen() {
  const router = useRouter();

  const Layout = (() => {
    const { pid, sid } = router.query;
    return pid || sid ? Product : Category;
  })();

  return <Layout />;
}
