import PropTypes from 'prop-types';

import {Outlet} from "react-router-dom";
import Header from "./Header";

const MainLayout = ({handleCart}) => {
    return (
        <>
            <Header handleCart={handleCart}/>
            <Outlet/>

        </>
    );
};

MainLayout.propTypes = {};

export default MainLayout;