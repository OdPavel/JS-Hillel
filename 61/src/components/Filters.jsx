import React from "react";
import {Catalog} from "./Catalog";
import PropTypes from 'prop-types';

export function Filters(props) {
    const {
        titleFilterValue,
        priceFilterMin,
        priceFilterMax,
        filterIsNew,
        filterIsInStock,
        filterIsSale,
        handleChangTitleFilter,
        handleChangPriceFilter,
        handleChangIsNewFilter,
        handleChangIsInStockFilter,
        handleChangIsSaleFilter
    } = props

    const onChangeTitle = (e) => {
        const value = e.target.value
        handleChangTitleFilter(value)
    }
    const onChangeIsNew = () => {
        handleChangIsNewFilter(!filterIsNew)
    }

    const onChangeIsInStock = () => {
        handleChangIsInStockFilter(!filterIsInStock)
    }

    const onChangeIsSale = ()=>{
        handleChangIsSaleFilter(!filterIsSale)
    }

    const onChangeMin = ({target}) => {
        let value = parseInt(target.value)
        value = Number.isNaN(value) ? 0 : value
        handleChangPriceFilter(value, priceFilterMax)
    }

    const onChangeMax = ({target}) => {
        let value = parseInt(target.value)
        value = Number.isNaN(value) ? 0 : value
        handleChangPriceFilter(priceFilterMin, value)
    }

    return (
        <div className=''>
            <div>
                <input type="text" value={titleFilterValue} onChange={onChangeTitle}/>
            </div>
            <div>
                <div>
                    <label>
                        <input type="checkbox" checked={filterIsNew} onChange={onChangeIsNew}/>
                        <span>Show only new</span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" checked={filterIsSale} onChange={onChangeIsSale}/>
                        <span>Show only is sale</span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" checked={filterIsInStock} onChange={onChangeIsInStock}/>
                        <span>Show only is in stock</span>
                    </label>
                </div>

                <div>
                    Filter by price:
                </div>
                <div>
                    <span>From: <input onChange={onChangeMin} placeholder="Price from" type="number"
                                       value={priceFilterMin} min={0}
                                       max={priceFilterMax}/></span>
                    <span>To: <input onChange={onChangeMax} placeholder="Price to" type="number" value={priceFilterMax}
                                     min={priceFilterMax + 1}/></span>

                </div>

            </div>
        </div>
    )
}

Filters.propTyps = {
    titleFilterValue: PropTypes.number,
    priceFilterMin: PropTypes.number,
    priceFilterMax: PropTypes.number,
    filterIsNew: PropTypes.bool,
    handleChangTitleFilter: PropTypes.func,
    handleChangPriceFilter: PropTypes.func,
    handleChangIsNewFilter: PropTypes.func,
    handleChangIsInStockFilter: PropTypes.func,
    handleChangIsSaleFilter: PropTypes.func,
}

Filters.defaultProps = {}