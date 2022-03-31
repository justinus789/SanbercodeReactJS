import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Tugas10 from "../Tugas-10/Tugas-10";
import Tugas11 from "../Tugas-11/Tugas-11";
import Tugas12 from "../Tugas-12/Tugas-12";
import Mahasiswa from "../Tugas-13/Mahasiswa";
import { MahasiswaProvider } from "./MahasiswaContext";
import MahasiswaForm from "./MahasiswaForm";
import MahasiswaList from "./MahasiswaList";
import Nav from "./Nav";

const Routes = () => {

    return (
        <Router>
            <MahasiswaProvider>
                <Nav/>

                <Switch>
                    <Route path='/' exact component={Tugas10} />
                    <Route path='/tugas11' exact component={Tugas11} />
                    <Route path='/tugas12' exact component={Tugas12} />
                    <Route path='/tugas13' exact component={Mahasiswa} />
                    <Route path='/tugas14' exact component={MahasiswaList} />
                    <Route path='/tugas14/create' exact component={MahasiswaForm} />
                    <Route path='/tugas14/edit/:slug' exact component={MahasiswaForm} />
                </Switch>

            </MahasiswaProvider>
        </Router>
    )
}

export default Routes
