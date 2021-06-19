import React, { useState } from "react";
import MetaHeader from "../components/MetaHeader";
import DesktopNavigation from "../components/DesktopNavigation";
import MobileNavigation from "../components/MobileNavigation";
import DesktopSlider from "../components/DesktopSlider";
import DesktopMenuBar from "../components/DesktopMenuBar";
import DiscountForYou from "../components/DiscountForYou";
import TrendingBrands from "../components/TrendingBrands";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedBrands from "../components/FeaturedBrands";
import Banner from "../components/Banners/Banner";
import HomePageSeo from "../components/Seo/HomePageSeo";
import CopyRight from "../components/etc/CopyRight";

export default function App({ featuredProducts }) {
  const [sideNav, setSideNav] = useState(false);
  const [discountForYou, setDiscountForYou] = useState(featuredProducts);

  const sideNavCallback = function () {
    setSideNav(false);
  };

  return (
    <div className="bg-indigo-50">
      <MetaHeader />

      <MobileNavigation
        sideNav={sideNav}
        callback={sideNavCallback}
        onClick={() => setSideNav(!sideNav)}
      />

      <DesktopNavigation />

      <DesktopMenuBar />

      <DesktopSlider />

      <DiscountForYou products={discountForYou} />

      <TrendingBrands />

      <TrendingProducts />

      <FeaturedBrands />

      <Banner />

      <HomePageSeo />

      <CopyRight />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/hello").then(
    (res) => {
      res.json().then((json) => console.log(json));
    },
    (err) => {
      console.log(err);
    }
  );

  return {
    props: {
      ...data,
    },
  };
}
