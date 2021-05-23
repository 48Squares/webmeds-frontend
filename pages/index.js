import React, {useState} from "react";
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

export default function App({featuredProducts}) {
    const [sideNav, setSideNav] = useState(false);
    const [discountForYou, setDiscountForYou] = useState(featuredProducts);

    const sideNavCallback = function () {
        setSideNav(false);
    }

    return (
        <div className="bg-indigo-50">
            <MetaHeader/>

            <MobileNavigation
                sideNav={sideNav}
                callback={sideNavCallback}
                onClick={() => setSideNav(!sideNav)}
            />

            <DesktopNavigation/>

            <DesktopMenuBar/>

            <DesktopSlider/>

            <DiscountForYou products={discountForYou}/>

            <TrendingBrands/>

            <TrendingProducts/>

            <FeaturedBrands/>

            {/*<section className="flex flex-nowrap space-x-4 overflow-x-auto py-1 scrollbar-none">*/}
            {/*    {this.state.featuredCategories.map((product, index) =>*/}
            {/*        <img className="w-20 h-20 rounded-full" src={product.url} alt="" key={index}/>*/}
            {/*    )}*/}
            {/*</section>*/}

            <Banner/>

            <HomePageSeo/>

            <CopyRight/>

        </div>
    );
}

export async function getStaticProps() {
    const data = await fetch('http://mgmt.webmeds.in/api/home')
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                new Error('ServerError');
            }
        })
        .then(res => res.json())
        .then(json => json.data)
        .catch(err => {
            return [];
        })

    return {
        props: {
            ...data
        }
    };
}
