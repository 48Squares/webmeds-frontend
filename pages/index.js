import React from "react";
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

export default class App extends React.Component {

    /**
     * @property data
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            sideNav: false,
            data: props.home,
            featuredCategories: [],
        };

        this.toggleSideMenu = this.toggleSideMenu.bind(this);
        this.sideNavCallback = this.sideNavCallback.bind(this);

        console.log(this.state);
    }

    sideNavCallback() {
        this.setState({sideNav: false});
    }

    toggleSideMenu() {
        this.setState({
            sideNav: !this.state.sideNav
        });
    }

    render() {
        return (
            <div className="bg-indigo-50">
                <MetaHeader/>

                <MobileNavigation
                    sideNav={this.state.sideNav}
                    callback={this.sideNavCallback}
                    onClick={this.toggleSideMenu}
                />

                <DesktopNavigation/>

                <DesktopMenuBar/>

                <DesktopSlider/>

                <DiscountForYou products={this.state.data.featuredProducts}/>

                <TrendingBrands/>

                <TrendingProducts/>

                <FeaturedBrands/>

                <section className="flex flex-nowrap space-x-4 overflow-x-auto py-1 scrollbar-none">
                    {this.state.featuredCategories.map((product, index) =>
                        <img className="w-20 h-20 rounded-full" src={product.url} alt="" key={index}/>
                    )}
                </section>

                <Banner/>

                <HomePageSeo/>

                <CopyRight/>

            </div>
        );
    }
}

export async function getStaticProps() {
    const data = await fetch('http://mgmt.webmeds.in/api/home')
        .then(res => res.json())
        .then(json => json.data);

    return {
        props: {
            home: data
        }
    };
}
