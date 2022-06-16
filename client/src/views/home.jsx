import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {Paper, Button, TextField, Alert, Snackbar} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {getTabla} from "../actions/index"
import {sendData} from "../actions/index"

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    // const tabla = useSelector(state => state.tabla)
    const vertical = "top";
    const horizontal = "center";
    const [postInfo, setPostInfo] = useState({'nombre': '', 'encargado': '', 'cliente': ''});
    const [errorMessage, seterrorMessage] = useState(false);
    const [informationSend, setinformationSend] = useState(false);

    const handleSubmit = async (e) =>{
        if (postInfo.nombre == '' || postInfo.encargado == '' || postInfo.cliente == '') {
            seterrorMessage(true)
            e.preventDefault()
        } else{
            e.preventDefault()
            // dispatch(getTabla())
            dispatch(sendData(postInfo))
            setinformationSend(true)
            setPostInfo({'nombre': '', 'encargado': '', 'cliente': ''})
        }
    }
    const handleClose = (event, reason) => {
        if(reason==="clickawy"){
            return;
        }
        seterrorMessage(false)
        setinformationSend(false)
    }

    return (
        <div className={classes.mainContainer}>
            
            <Snackbar anchorOrigin={{vertical, horizontal}} open={errorMessage} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity='error' onClose={handleClose}> Ingresa la informacion </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical, horizontal}} open={informationSend} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity='success' onClose={handleClose}> Informacion mandada </Alert>
            </Snackbar>
            
            <Paper className={classes.wrapper} elevation={1}>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="1"
                            label="Nombre"
                            variant="standard"
                            value={postInfo.nombre}
                            onChange={
                                (e) => setPostInfo({...postInfo, nombre: e.target.value})
                            }
                        />
                        <TextField
                            id="2"
                            label="Encargado"
                            variant="standard"
                            sx={{margin: '0 10px'}}
                            value={postInfo.encargado}
                            onChange={
                                (e) => setPostInfo({...postInfo, encargado: e.target.value})
                            }
                        />
                        <TextField
                            id="3"
                            label="Cliente"
                            variant="standard"
                            value={postInfo.cliente}
                            onChange={
                                (e) => setPostInfo({...postInfo, cliente: e.target.value})
                            }
                        />
                    </div>
                    <div className={classes.buttonWrapper}>
                        <Button type='submit' variant="text" sx={{margin: '50px 0'}}>
                            Enviar
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Home;