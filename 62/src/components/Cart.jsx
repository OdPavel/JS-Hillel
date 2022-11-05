import styles from './Cart.module.css'
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";



function Cart(props) {
    const {cart} = props

    return (
        <div className={styles.cart}>
            <h1>Cart</h1>
            {cart.map((item) => {
                    return (
                        <Card sx={{
                            maxWidth: 600,
                            my: 2,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                              key={item.id}>

                                <CardMedia
                                    component="img"
                                    image={item.photo}
                                    alt={item.title}
                                />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="h5" color="text.danger">
                                    {item.price}$
                                </Typography>
                                <Typography variant="subtitle1">
                                    Categories: {item.categories}
                                </Typography>



                            </CardContent>

                        </Card>
                    )

                }
            )}

        </div>

    )
}


export default Cart
