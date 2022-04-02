import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./component/About/About";
import Footer from "./component/Footer";
import Home from "./component/Home/Home";
import MobileForm from "./component/Mobile/MobileForm";
import MobileList from "./component/Mobile/MobileList";
import Nav from "./component/Nav";
import Search from "./component/Search";
import { AppProvider } from "./context/AppContext";

const Routes = () => {
    return (
        <Router>
            <AppProvider>
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/mobile-list' exact component={MobileList} />
                    <Route path='/mobile-form' exact component={MobileForm} />
                    <Route path='/mobile-form/edit/:Id' exact component={MobileForm} />
                    <Route path='/search/:valueOfSearch' exact component={Search} />
                    <Route path='/about' exact component={About} />
                </Switch>
                <Footer/>
            </AppProvider>
        </Router>
    )
}

export default Routes