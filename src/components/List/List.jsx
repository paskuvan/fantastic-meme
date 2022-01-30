import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('farmacias');
    const [rating, setRating] = useState('');

    const places = [
        { name: 'Limpio '},
        { name: 'Excelente atención '},
        { name: 'Buenos productos '},
        { name: 'Limpio '},
        { name: 'Excelente atención '},
        { name: 'Buenos productos '},
        { name: 'Limpio '},
        { name: 'Excelente atención '},
        { name: 'Buenos productos '}
    ];

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
           <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
            ))}
           </Grid>
       </div>
    );
}

export default List;