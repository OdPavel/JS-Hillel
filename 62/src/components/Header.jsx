import * as React from 'react';
import styles from './Header.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Shop, ShoppingBasket} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

export default function Header(props) {
    const {
        handleCart,
    } = props
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{ mr: 2 }}*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <NavLink to='.'>Music shop</NavLink>
                    </Typography>

                    <nav className={styles.headerNav}>
                        <NavLink to='.'>Home</NavLink>
                        <NavLink to='about'>About</NavLink>
                        <NavLink to='contacts'>Contacts</NavLink>
                    </nav>


                        <NavLink to='basket'>
                            <IconButton
                                sx={{color: "inherit"}}
                                onClick={handleCart}
                            >
                                <ShoppingBasket/>

                            </IconButton>
                        </NavLink>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
