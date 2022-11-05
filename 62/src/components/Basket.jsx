import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export const Basket = (props) => {

    const {
        cartOpen,
        closeCart = Function.prototype,
        order,
        removeFromOrder,
        items,
        deleteCart,
    } = props

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                        <ListItemText primary="Корзина"/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                {items.map((item) => (
                    <CardContent key={item.id}>
                        <Card sx={{
                            maxWidth: 345,
                            my: 2,
                            height: "100%",
                            display: "flex"
                        }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={item.photo}
                                alt={item.title}
                            />
                            <Box sx={{position:"relative"}}>

                                    <Typography gutterBottom variant="subtitle2" component="div">
                                        {item.title}
                                    </Typography>

                                    <Typography variant="subtitle1" color="text.danger">
                                        {item.price}$
                                    </Typography>

                                    <Button
                                        variant="text"
                                        size="small"
                                        sx={{
                                            position: "absolute",
                                            bottom: 1,
                                            right: -17,
                                        }}
                                    >
                                        <DeleteOutlineOutlinedIcon onClick={()=>deleteCart(item.id)}/>
                                    </Button>

                            </Box>
                        </Card>
                    </CardContent>


                    ))}

                {!items.length ? <Typography>Корзина пуста</Typography> : null}


            </List>
        </Drawer>
    )
}