import React from "react";
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
import BasicRating from "./Rating";


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
    return (

        <Grid item xs md={4}>
            <Card sx={{
                maxWidth: 345,
                my: 2,
                height: "100%"
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={photo}
                    alt={title}
                />

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

                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="small">Basket</Button>
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