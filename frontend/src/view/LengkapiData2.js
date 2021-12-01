// page setelah komfirmasi di signup halaman2

import { Button, 
    makeStyles, 
    Paper, 
    Typography, 
    TextField, 
    Grid, 
    FormControl, 
    RadioGroup, 
    FormControlLabel, 
    FormGroup, 
    Icon} from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import { ReactComponent as LogoBack} from '../Asset/LogoBack.svg'
//import {ReactComponent as LogoIg} from '../Asset/IGUngu.svg'
//import tiktok from '../Asset/TiktokUngu.svg'
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
root:{
    display: 'flex',
    flexWrap: 'wrap',
},
paperBox:{
    elevation: 30,
    padding: 20,
    display: 'flex',
    flexDirection:"column",
    flexWrap: 'wrap',
    height:'400px', 
    width:'700px',
    margin:'10px auto',
    backgroundColor: '#ffffff',
},
buttonBack:{
    margin:'30px auto',
    display: 'flex',
    width:'700px',
    height: 60,
    alignContent: 'flex-start',
    elevation: 10,
    backgroundColor: '#ffffff',
},
buttonNext:{
    textAlign:'center'
},
textField:{
    borderRadius: 5,
    backgroundColor: '#F7EFFC'
}

}))



export default function LengkapiDataNext(){
const style = useStyles();

return(
    // <Button> buat tombol diatas paper
    <><Button className={style.buttonBack}
        variant='contained'
        startIcon={<LogoBack
            style={{ height: 53, width: 36 }} />}
    >Akun Media Sosial
    </Button>
    {/* <Paper> = bagian form yang harus diisi */}
    <Paper className={style.paperBox} variant='outlined'>
        <form noValidate autoComplete='off'>
            <Stack direction='column' spacing={1} style={{margin: 30}}>
                <Typography variant='body1'  component="div" gutterBottom>
                    <InstagramIcon style={{position: 'relative', top: '7px', color: '#7C22B9'}}/>  Akun Histagram
                </Typography>
                <TextField
                    variant='outlined'
                    id='akunIG'
                    placeholder='Tulis username Instagram Anda tanpa “@”. Contoh: awkarin'
                    fullWidth
                    />
                <Typography variant='body1'  component="div" gutterBottom>
                    {/* <Icon><img src={tiktok} alt="Logo" height={25} width={25}/></Icon> */} 
                    Akun Tiktok
                </Typography>
                <TextField
                    variant='outlined'
                    id='akunIG'
                    placeholder='Tulis username TikTok Anda tanpa “@”. Contoh: khabylame'
                    fullWidth
                    />
            </Stack>
            <Stack justifyContent='center' alignItems='center' style={{margin: 30}}>
                <Button className={style.buttonNext}
                    type='submit'
                    variant='contained'
                    style={{backgroundColor: '#21B709',
                    color: '#ffffff', borderRadius: 8, height: 40, width: 200}}
                    >
                    SELESAI  
                </Button>
            </Stack>
           
        </form>
    </Paper>
    </>
 )
}