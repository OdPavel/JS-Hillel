import React from "react";
import PropTypes from "prop-types";
import {ProductsListItem} from "./ProductsListItem";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import {Filters} from "./Filters";

export function ProductsList({products, allProductsAmount}) {
    return (
        <div>
            <h2>Found {products.length} of {allProductsAmount}</h2>
            <Grid container>
                <Grid item xs={2}>
                    <Typography>
                        Filters
                    </Typography>
                </Grid>
                <Grid item container spacing={2} xs={10}>
                    {products.map((products)=>(
                        <ProductsListItem key={products.id} products={products}/>
                    ))}
                </Grid>
            </Grid>

        </div>

    )

}

ProductsList.propTypse = {
    products: PropTypes.arrayOf(PropTypes.object),

    allProductsAmount: PropTypes.number,
};

ProductsList.defaultProps = {
    products: [],
    allProductsAmount: 0,
}
