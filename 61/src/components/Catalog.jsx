import React from "react";
import PropTypes from 'prop-types';
import {Filters} from './Filters';
import {ProductsList} from "./ProductsList";
import {queryState} from "./query-state";
import {getProductsList} from "./api";


export class Catalog extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productsQueryStatus: queryState.initial,
            queryStateError: null,

            titleFilterValue: '',
            priceFilterMin: 0,
            priceFilterMax: 999999,
            filterIsNew: '',
            filterIsInStock: '',
            filterIsSale: ''
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

    handleChangIsSaleFilter= (filterIsSale) =>{
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

        const isLoading = productsQueryStatus === queryState.loading || productsQueryStatus === queryState.initial
        const IsSuccess = productsQueryStatus === queryState.success
        const isError = productsQueryStatus === queryState.error

        const filteredProducts = this.getFilteredProducts()

        return (
            <div className="">
                <div>
                    <Filters
                        titleFilterValue={titleFilterValue}
                        priceFilterMin={priceFilterMin}
                        priceFilterMax={priceFilterMax}
                        filterIsNew={filterIsNew}
                        filterIsInStock={filterIsInStock}
                        handleChangTitleFilter={this.handleChangTitleFilter}
                        handleChangPriceFilter={this.handleChangPriceFilter}
                        handleChangIsNewFilter={this.handleChangIsNewFilter}
                        handleChangIsInStockFilter={this.handleChangIsInStockFilter}
                        handleChangIsSaleFilter={this.handleChangIsSaleFilter}
                    />
                </div>
                <div>
                    {isLoading && (
                        <div>Loading...</div>
                    )}
                    {!isLoading && IsSuccess && (
                        <ProductsList products={filteredProducts} allProductsAmount={products.length}/>
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