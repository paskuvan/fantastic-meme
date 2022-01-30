import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('farmacias');
    const [rating, setRating] = useState('');

    return (
       <div className={classes.container}>
           <Typography variant="h4">Farmacias Knop cerca de tu lugar</Typography>
           <FormControl className={classes.formControl}>
                <InputLabel>Tipo</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="farmacias">Farmacias</MenuItem>
                    <MenuItem value="emporio">Emporio</MenuItem>
                    <MenuItem value="cosmetica">Cosmetica</MenuItem>
                </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>Todos</MenuItem>
                    <MenuItem value={3}>Sobre de 3</MenuItem>
                    <MenuItem value={4}>Sobre de 4</MenuItem>
                </Select>
           </FormControl>
       </div>
    );
}

export default List;