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
                

            </div>
        );
    }

    componentDidMount() {
        this.updateCircularProduct();
    }
}

export default App;