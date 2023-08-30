import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { data } from './data';


export default function SelectMovies() {

    const [OpcionSeleccionada, setOpcionSeleccionada] = useState("")
    const handleChange = (event) => {
        setOpcionSeleccionada(event.target.value);
    }
    useEffect(() => {
        setOpcionSeleccionada(data);
      }, []);
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Peliculas</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={OpcionSeleccionada}
                label="Vacio"
                onChange={handleChange}
            >
                {data.map((pelicula) => (
                    <MenuItem  value={pelicula.titulo}>
                        {pelicula.titulo}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );
}

