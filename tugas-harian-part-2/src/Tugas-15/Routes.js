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
import { MahasiswaProvider15 } from "./MahasiswaContext";
import MahasiswaForm15 from "./MahasiswaForm";
import MahasiswaForm from "../Tugas-14/MahasiswaForm";
import MahasiswaList15 from "./MahasiswaList";
import MahasiswaList from "../Tugas-14/MahasiswaList";
import Nav from "./Nav";
import { MahasiswaProvider } from "../Tugas-14/MahasiswaContext";
import Register from "../Auth/register";
import Login from "../Auth/login";

const Routes = () => {

    return (
        <Router>
            <MahasiswaProvider>
                <MahasiswaProvider15>

                <Nav/>
                <Switch>
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/' exact component={Tugas10} />
                    <Route path='/tugas11' exact component={Tugas11} />
                    <Route path='/tugas12' exact component={Tugas12} />
                    <Route path='/tugas13' exact component={Mahasiswa} />
                    <Route path='/tugas14' exact component={MahasiswaList} />
                    <Route path='/tugas14/create' exact component={MahasiswaForm} />
                    <Route path='/tugas14/edit/:slug' exact component={MahasiswaForm} />
                    <Route path='/tugas15' exact component={MahasiswaList15} />
                    <Route path='/tugas15/create' exact component={MahasiswaForm15} />
                    <Route path='/tugas15/edit/:slug' exact component={MahasiswaForm15} />
                </Switch>

                </MahasiswaProvider15>
            </MahasiswaProvider>
        </Router>
    )
}

export default Routes
