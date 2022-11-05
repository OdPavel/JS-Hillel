import React, {useState} from "react";
import PropTypes from "prop-types";
import {ProductsList} from "./ProductsList";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Stack, Rating } from "@mui/material";
import {Link} from "react-router-dom";



export function ProductsListItem(props) {
    const {
        createdAt,
        title,
        description,
        price,
        photo,
        isNew,
        isSale,
        isInStock,
        categories,
        rating,

    } = props.products
    const {onPlus, onSee} = props

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        onPlus()
        setIsAdded(!isAdded)
    }

    const onClickCart = ()=>{
        onSee()
    }

    return (


        <Grid item xs md={4}>

            <Card sx={{
                maxWidth: 345,
                my: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
                <Link className='' to='cart'
                      onClick={onClickCart}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={photo}
                        alt={title}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h5" color="text.danger">
                        {price}$
                    </Typography>
                    <Typography variant="subtitle1">
                        Categories: {categories}
                    </Typography>

                    <Box>
                        {isSale && (
                            <Typography variant="р4" component='span' sx={{
                                color: "red",
                                textTransform: "uppercase",
                            }}>
                                sale
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        {isNew && (
                            <Typography variant="р4" component='span' sx={{
                                color: "blue",
                                textTransform: "uppercase",
                            }}>
                                new
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        {isInStock && (
                            <Typography variant="р4" component='span' sx={{
                                color: "green",
                                textTransform: "uppercase",
                            }}>
                                Stock
                            </Typography>
                        )}
                    </Box>
                    <Box>
                        <Stack spacing={2}>
                            <Rating precision={0.5}/>
                        </Stack>
                    </Box>

                </CardContent>
                <CardActions
                    sx={{
                        marginTop: "auto"
                    }}
                >
                    <Button
                        onClick={onClickPlus}
                        variant={isAdded ? "contained" : "outlined"}
                        color={isAdded ? "success" : "primary"}
                        size="small"

                    >{isAdded ? "delete basket" : "add basket"}
                    </Button>
                </CardActions>
            </Card>

        </Grid>


    )
}

ProductsList.propTypse = {
    products: PropTypes.object
};

ProductsList.defaultProps = {
    products: {}
}