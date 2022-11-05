import React from "react";
import styles from './Catalog.module.css'
import PropTypes from 'prop-types';
import {Filters} from './Filters';
import {queryState} from "./query-state";
import {getProductsList} from "./api";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ProductsListItem} from "./ProductsListItem";


export class Catalog extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productsQueryStatus: queryState.initial,
            queryStateError: null,

            titleFilterValue: '',
            priceFilterMin: 0,
            priceFilterMax: 1000,
            filterIsNew: '',
            filterIsInStock: '',
            filterIsSale: '',

        }
    }


    handleChangTitleFilter = (titleFilterValue) => {
        this.setState({
            titleFilterValue
        })
    }
    handleChangPriceFilter = (priceFilterMin, priceFilterMax) => {
        this.setState({
            priceFilterMin,
            priceFilterMax
        })
    }
    handleChangIsNewFilter = (filterIsNew) => {
        this.setState({
            filterIsNew
        })
    }

    handleChangIsInStockFilter = (filterIsInStock) => {
        this.setState({
            filterIsInStock
        })
    }

    handleChangIsSaleFilter = (filterIsSale) => {
        this.setState({
            filterIsSale
        })
    }

    componentDidMount() {
        this.loadProductsList()
    }

    loadProductsList() {
        this.setState({
            productsQueryStatus: queryState.loading
        })
        getProductsList().then((productsList) => {
            this.setState({
                products: productsList,
                productsQueryStatus: queryState.success,
                queryStateError: null,
            })
        }).catch((error) => {
            this.setState({
                productsQueryStatus: queryState.error,
                queryStateError: error,
            })
        })
    }

    getFilteredProducts() {
        const {
            products,

            titleFilterValue,
            priceFilterMin,
            priceFilterMax,
            filterIsNew,
            filterIsInStock,
            filterIsSale
        } = this.state

        return products.filter((product) => {
            let isPass = true;
            if (titleFilterValue.trim() !== '') {
                let isMatch = product.title.toLocaleLowerCase().includes(titleFilterValue.toLocaleLowerCase())
                isPass = isPass && isMatch
            }

            const price = parseFloat(product.price)
            isPass = isPass && (
                price >= priceFilterMin && price <= priceFilterMax
            )

            if (filterIsNew) {
                isPass = isPass && product.isNew
            }

            if (filterIsInStock) {
                isPass = isPass && product.isInStock
            }

            if (filterIsSale) {
                isPass = isPass && product.isSale
            }

            return isPass
        })
    }

    render() {
        const {
            products,
            productsQueryStatus,
            queryStateError,
            titleFilterValue,
            priceFilterMin,
            priceFilterMax,
            filterIsNew,
            filterIsInStock,
            filterIsSale

        } = this.state

        const {setCartItems, setCart} = this.props

        const isLoading = productsQueryStatus === queryState.loading || productsQueryStatus === queryState.initial
        const IsSuccess = productsQueryStatus === queryState.success
        const isError = productsQueryStatus === queryState.error

        const filteredProducts = this.getFilteredProducts()

        const onAddToCard = (obj) => {

            setCartItems((cartItems) => {

                return [...cartItems, obj]
            })
        }

        const seeToCart = (obj)=>{
            setCart( [obj] )
        }

        return (
            <div className={styles.container}>
                <div>
                    {isLoading && (
                        <div>Loading...</div>
                    )}
                    {!isLoading && IsSuccess && (
                        <div>
                            <h2>Found {filteredProducts.length} of {products.length}</h2>
                            <Grid container>
                                <Grid item xs={2} sx={{}}>
                                    <Typography>
                                        <Filters
                                            titleFilterValue={titleFilterValue}
                                            priceFilterMin={priceFilterMin}
                                            priceFilterMax={priceFilterMax}
                                            filterIsNew={filterIsNew}
                                            filterIsInStock={filterIsInStock}
                                            filterIsSale={filterIsSale}
                                            handleChangTitleFilter={this.handleChangTitleFilter}
                                            handleChangPriceFilter={this.handleChangPriceFilter}
                                            handleChangIsNewFilter={this.handleChangIsNewFilter}
                                            handleChangIsInStockFilter={this.handleChangIsInStockFilter}
                                            handleChangIsSaleFilter={this.handleChangIsSaleFilter}
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item container spacing={2} xs={10}>
                                    {filteredProducts.map((products) => (
                                        <ProductsListItem
                                            key={products.id}
                                            products={products}
                                            onPlus={() => onAddToCard(products)}
                                            onSee={()=>seeToCart(products)}
                                        />
                                    ))}
                                </Grid>

                            </Grid>
                        </div>
                    )}
                    {!isLoading && isError && (
                        <div style={{color: 'red'}}>
                            {queryStateError?.message || 'Something went error'}
                        </div>
                    )}

                </div>
            </div>

        )
    }
}


Catalog.propTyps = {}

Catalog.defaultProps = {}