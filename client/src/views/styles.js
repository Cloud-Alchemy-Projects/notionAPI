import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    mainContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '60%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
}));