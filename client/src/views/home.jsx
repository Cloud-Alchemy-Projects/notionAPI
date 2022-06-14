import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {Paper, Button, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {getTabla} from "../actions/index"

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const tabla = useSelector(state => state.tabla)
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");

    useEffect(()=> {
        dispatch(getTabla())
    },[dispatch])

    console.log(tabla);
    // function submitToNotion(){
    //     console.log("submit");
    //     fetch("http://localhost:1010/submit", {
    //         method: 'post',
    //         headers: {
    //             "Accept" : "application/json",
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify({
    //             nombre: nombre,
    //             apellidos: apellidos,
    //             correo: correo
    //         })
    //     }).then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     }).catch((error) =>{
    //         console.log(error);
    //     })
    // }

    return (
        <div className={classes.mainContainer}>
            <Paper className={classes.wrapper} elevation={1}>
                <div>
                    <TextField
                        id="1"
                        label="Nombre"
                        variant="standard"
                        onChange={
                            (e) => setNombre(e.target.value)
                        }
                    />
                    <TextField
                        id="2"
                        label="Apellidos"
                        variant="standard"
                        sx={{margin: '0 10px'}}
                        onChange={
                            (e) => setApellidos(e.target.value)
                        }
                    />
                    <TextField
                        id="3"
                        label="Correo"
                        variant="standard"
                        onChange={
                            (e) => setCorreo(e.target.value)
                        }
                    />
                </div>
                <Button variant="text" sx={{margin: '50px 0'}}>
                    Enviar
                </Button>
            </Paper>
        </div>
    )
}

export default Home;