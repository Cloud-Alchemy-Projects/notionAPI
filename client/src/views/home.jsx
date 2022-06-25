import React, {useState} from 'react'
import useStyles from './styles'
import Picker from 'emoji-picker-react';
import {Paper, Button, TextField, Alert, Snackbar} from '@mui/material'
import {useDispatch} from 'react-redux'
// import {getTabla} from "../actions/index"
import {sendData} from "../actions/index"


const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    // const tabla = useSelector(state => state.tabla)
    const vertical = "top";
    const horizontal = "center";
    const [postInfo, setPostInfo] = useState({'nombre': '', 'encargado': '', 'cliente': '', 'emoji': ''});
    const [errorMessage, seterrorMessage] = useState(false);
    const [informationSend, setinformationSend] = useState(false);
    const [click, setclick] = useState(false);
    const [counter, setcounter] = useState(0);


    const handleSubmit = async (e) =>{
        if (postInfo.nombre === '' || postInfo.encargado === '' || postInfo.cliente === '' || postInfo.emoji === '') {
            seterrorMessage(true)
            e.preventDefault()
        } else{
            e.preventDefault()
            // dispatch(getTabla())
            dispatch(sendData(postInfo))
            setinformationSend(true)
            setPostInfo({'nombre': '', 'encargado': '', 'cliente': '', 'emoji': ''})
            setclick(false)
        }
    }
    const handleClose = (event, reason) => {
        if(reason==="clickawy"){
            return;
        }
        seterrorMessage(false)
        setinformationSend(false)
    }

    
    const clicked = () => {
        setcounter(counter+1)
        if (counter%2===0) {
            setclick(true)
        } else {
            setclick(false)
        }
    }

    const onEmojiClick = (event, emojiObject) => {
        setPostInfo({...postInfo, emoji: emojiObject.emoji})
        setclick(false)
        setcounter(counter+1)
    };

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
                            label="Nombre del Proyecto"
                            variant="standard"
                            value={postInfo.nombre}
                            onChange={
                                (e) => setPostInfo({...postInfo, nombre: e.target.value})
                            }
                        />
                        <TextField
                            id="2"
                            label="Encargado del Proyecto"
                            variant="standard"
                            sx={{margin: '0 10px'}}
                            value={postInfo.encargado}
                            onChange={
                                (e) => setPostInfo({...postInfo, encargado: e.target.value})
                            }
                        />
                        <TextField
                            id="3"
                            label="Nombre del Cliente"
                            variant="standard"
                            value={postInfo.cliente}
                            onChange={
                                (e) => setPostInfo({...postInfo, cliente: e.target.value})
                            }
                        />
                        <div className={classes.emojiContainer}>
                            <Button variant='text' onClick={clicked}>{postInfo.emoji===''?"Emoji":postInfo.emoji}</Button>
                            {
                                click===true?
                                    <Picker onEmojiClick={onEmojiClick} />
                                :<></>
                            }
                        </div>
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