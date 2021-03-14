import React from "react";
import MetaHeader from "../components/MetaHeader";
import DesktopNavigation from "../components/DesktopNavigation";
import MobileNavigation from "../components/MobileNavigation";
import DesktopSlider from "../components/DesktopSlider";
import DesktopMenuBar from "../components/DesktopMenuBar";
import DiscountForYou from "../components/DiscountForYou";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sideNav: false,
            featuredCategories: []
        };

        this.toggleSideMenu = this.toggleSideMenu.bind(this);
        this.sideNavCallback = this.sideNavCallback.bind(this);
    }

    updateCircularProduct() {
        fetch('http://localhost:8000/api/home')
            .then(response => response.json())
            .then(json => this.setState({...json.data}));
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

                <DiscountForYou/>

                <section className="flex flex-nowrap space-x-4 overflow-x-auto py-4 scrollbar-none">
                    {this.state.featuredCategories.map((product, index) =>
                        <img className="w-20 h-20 rounded-full" src={product.url} alt="" key={index}/>
                    )}
                </section>

                <section className="top-picks px-3">
                    <div className="py-2">
                        <h6 className="text-gray-600 text-sm font-medium">TOP PICKS</h6>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252156/winter-care-combo-of-dr-morepen-cn-10-compressor-nebuliser-and-dr-morepen-vp-06-breathe-free-vaporizer_bgd0uu.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Blood Test Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252137/sahyog-wellness-2306-multi-function-non-contact-body-object-infra-red-thermometer_btulsr.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Corona Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252141/shfinri5hqat9oza5i7q_k2ezl1.png"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Diabetics Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614251921/dr-morepen-bg-03-gluco-one-blood-glucose-monitoring-system0_aqmi9g.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Sugar Test Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-2">
                        <img
                            className="rounded-sm w-full"
                            src="https://res.cloudinary.com/sq48/image/upload/v1614252069/drbqfde3icmxummenhay0_mc81mn.jpg"
                            alt=""/>
                    </div>
                </section>
            </div>
        );
    }

    componentDidMount() {
        this.updateCircularProduct();
    }
}

export default App;