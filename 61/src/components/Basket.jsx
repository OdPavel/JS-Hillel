import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

export const Basket =(props)=>{
    const{
        cartOpen,
        closeCart = Function.prototype,
        order,
        removeFromOrder
    } = props

    return (
        <Drawer
        anchor="right"
        open={cartOpen}
        onClose={closeCart}
        >
            <List sx={{width:'400px'}}>
                <listItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                        <ListItemText primary="Корзина"/>
                    </ListItemIcon>
                </listItem>
                <Divider/>
                {/*{!order.length ? <ListItem>Корзина пуста</ListItem>  : <ListItem>123</ListItem>}*/}


            </List>
        </Drawer>
    )
}