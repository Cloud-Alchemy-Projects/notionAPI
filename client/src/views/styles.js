import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    mainContainer: {
        width: '100%',
        height: '97vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    wrapper: {
        // marginTop: '20px',
        width: '90%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    emojiContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '20px'
    }
}));