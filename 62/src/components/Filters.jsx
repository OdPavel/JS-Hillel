import React from "react";
import {Catalog} from "./Catalog";
import PropTypes from 'prop-types';
import {Box, FormControlLabel, Switch, TextField, Slider} from '@mui/material';

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

    const onChangeIsSale = () => {
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
            <Box sx={{
                '& > :not(style)': {m: 1, width: '20ch'},
            }}>
                <TextField label="Enter text" variant="standard" value={titleFilterValue} onChange={onChangeTitle}/>
            </Box>

            <div>
                <div>
                    <label>
                        <FormControlLabel control={<Switch checked={filterIsNew} onChange={onChangeIsNew}/>}
                                          label="Show only new"/>
                    </label>

                </div>

                <div>
                    <label>
                        <FormControlLabel control={<Switch checked={filterIsSale} onChange={onChangeIsSale}/>}
                                          label="Show only is sale"/>

                    </label>
                </div>

                <div>
                    <label>
                        <FormControlLabel control={<Switch checked={filterIsInStock} onChange={onChangeIsInStock}/>}
                                          label="Show only is in stock"/>
                    </label>
                </div>
                <div>
                    Filter by price:
                </div>

                <Box sx={{width: 175}}>

                    <Slider
                        value={priceFilterMin}
                        min={0}
                        max={priceFilterMax}
                        onChange={onChangeMin}
                        valueLabelDisplay="auto"
                    />

                    <span>From: <input
                        onChange={onChangeMin}
                        type="number"
                        value={priceFilterMin} min={0}
                        max={priceFilterMax}/>
                    </span>
                </Box>

                <Box sx={{width: 175}}>
                    <Slider
                        value={priceFilterMax}
                        max={1000}
                        onChange={onChangeMax}
                        valueLabelDisplay="auto"
                    />

                    <span>To: <input
                        onChange={onChangeMax}
                        type="number"
                        value={priceFilterMax}
                        min={priceFilterMax + 1}/>
                    </span>

                </Box>


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