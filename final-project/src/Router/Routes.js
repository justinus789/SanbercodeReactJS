import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import LayoutComponent from "../Component/Landing Page/LayoutComponent";
import JobsDetail from "../Component/Landing Page/Jobs/JobsDetail";
import JobsLayout from "../Component/Landing Page/Jobs/JobsLayout";
import { AppProvider } from "../Context/AppContext";
import Register from "../Component/Auth/Register";
import Login from "../Component/Auth/Login";
import Cookies from "js-cookie";
import DashboardLayout from "../Component/Dashboard/DashboardLayout";
import Dashboard from "../Component/Dashboard/Dashboard/Dashboard";
import JobsList from "../Component/Dashboard/Dashboard/JobsList";
import JobsForm from "../Component/Dashboard/Dashboard/JobsForm";
import Profile from "../Component/Dashboard/Dashboard/Profile";
import ChangePassword from "../Component/Dashboard/Dashboard/ChangePassword";
import NotFound404 from "../Component/NotFound404";
import JobsLayoutSearch from "../Component/Landing Page/Jobs/JobsLayoutSearch";
import JobsListSearch from "../Component/Dashboard/Dashboard/JobsListSearch";

const Routes = () => {
    const UserNotLoginRoute = ({ ...props }) => {

        if (Cookies.get('token') === undefined) {
            return <Route {...props} />
        } else if (Cookies.get('token') !== undefined) {
            return <Redirect to="/dashboard" />
        }

    }

    const UserLoginRoute = ({ ...props }) => {

        if (Cookies.get('token') === undefined) {
            return <Redirect to="/login" />
        } else if (Cookies.get('token') !== undefined) {
            return <Route {...props} />
        }

    }

    return (
        <Router>
            <AppProvider>
                <Switch>

                    <UserNotLoginRoute path='/' exact>
                        <LayoutComponent>
                            <JobsLayout/>
                        </LayoutComponent>
                    </UserNotLoginRoute>

                    <UserNotLoginRoute path='/job-vacancy/search' exact>
                        <LayoutComponent>
                            <JobsLayoutSearch/>
                        </LayoutComponent>
                    </UserNotLoginRoute>

                    <UserNotLoginRoute path='/register' exact>
                        <LayoutComponent>
                            <Register/>
                        </LayoutComponent>
                    </UserNotLoginRoute>

                    <UserNotLoginRoute path='/login' exact>
                        <LayoutComponent>
                            <Login/>
                        </LayoutComponent>
                    </UserNotLoginRoute>

                    <UserNotLoginRoute path='/job-vacancy/:id' exact>
                        <LayoutComponent>
                            <JobsDetail/>
                        </LayoutComponent>
                    </UserNotLoginRoute>

                    <UserLoginRoute path='/dashboard' exact>
                        <DashboardLayout>
                            <Dashboard/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/dashboard/list-job-vacancy' exact>
                        <DashboardLayout>
                            <JobsList/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/dashboard/list-job-vacancy/search' exact>
                        <DashboardLayout>
                            <JobsListSearch/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/dashboard/list-job-vacancy/form' exact>
                        <DashboardLayout>
                            <JobsForm/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/dashboard/list-job-vacancy/edit/:id' exact>
                        <DashboardLayout>
                            <JobsForm/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/profile' exact>
                        <DashboardLayout>
                            <Profile/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <UserLoginRoute path='/change-password' exact>
                        <DashboardLayout>
                            <ChangePassword/>
                        </DashboardLayout>
                    </UserLoginRoute>

                    <Route path='*' exact component={NotFound404} />

                </Switch>
            </AppProvider>
        </Router>
    )
}

export default Routes