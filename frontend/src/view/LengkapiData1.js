// page setelah komfirmasi di signup halaman1

import { Button, 
        makeStyles, 
        Paper, 
        Typography, 
        TextField, 
        Grid, 
        FormControl, 
        RadioGroup, 
        FormControlLabel, 
        Radio, 
        Checkbox, 
        FormGroup } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import { ReactComponent as LogoBack} from '../Asset/LogoBack.svg'

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
        height:'750px', 
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
    }

}))



export default function LengkapiData(){
    const style = useStyles();
    
    return(
        // <Button> buat tombol diatas paper
        <><Button className={style.buttonBack}
            variant='contained'
            startIcon={<LogoBack
                style={{ height: 53, width: 36 }} />}
        >Data profil
        </Button>
        {/* <Paper> = bagian form yang harus diisi */}
        <Paper className={style.paperBox}
            variant='outlined'>
                 <form noValidate autoComplete='off'>
                     <Stack direction='column' spacing={1} style={{margin: '10px auto'}}>
                         <Typography variant='body1'  component="div" gutterBottom>
                             Nama Lengkap (sesuai kartu identitas)
                         </Typography>
                         <TextField  
                            className={style.textField}
                            variant='outlined'
                            id='fullname'
                            placeholder='Nama lengkap'
                            fullWidth
                            />
                        <Typography variant='body1'  component="div" gutterBottom>
                             Tanggal lahir
                         </Typography>
                         <TextField  
                            className={style.textField}
                            id='date'
                            type='date'/>
                        <Typography variant='body1'  component="div" gutterBottom>
                             Kota
                         </Typography>
                         <TextField  
                            className={style.textField}
                            variant='outlined'
                            id='fullname'
                            placeholder='Kota'
                            fullWidth
                            />
                        <Typography variant='body1'  component="div" gutterBottom>
                             Nomor telepon
                         </Typography>
                         <TextField  
                            className={style.textField}
                            variant='outlined'
                            id='fullname'
                            placeholder='Nomor telepon'
                            fullWidth
                            />
                        <Grid container spacing={2} direction='row'>
                            <Grid item xs={4}>
                                <Typography variant='body1'  component="div" gutterBottom>
                                    Jenis kelamin
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <FormControl component='fieldset'>
                                    <RadioGroup aria-label='gender'>
                                        <FormControlLabel value='Laki-laki' control={<Radio />} label="Laki-laki"  color="secondary"/>
                                        <FormControlLabel value='Perempuan' control={<Radio />} label="perempuan"  color="secondary"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} direction='row'>
                            <Grid item xs={4}>
                                <Typography variant='body1'  component="div" gutterBottom>
                                    Kategori influencer
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                               
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Entertainment" />
                                            <FormControlLabel control={<Checkbox />} label="Health & Sport" />
                                            <FormControlLabel control={<Checkbox />} label="Lifestyle & Travel" />
                                            <FormControlLabel control={<Checkbox />} label="Technology" />
                                        </FormGroup>
                                    
                            </Grid>
                            <Grid item xs={4}>
                                
                                    
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Family & Parenting" />
                                            <FormControlLabel control={<Checkbox />} label="Food & Beverages" />
                                            <FormControlLabel control={<Checkbox />} label="Beauty & Fashion" />
                                            <FormControlLabel control={<Checkbox />} label="Gaming" />
                                        </FormGroup>
                                    
                                
                            </Grid>
                        </Grid>
                     </Stack>
                     <Button className={style.buttonNext}
                            type='submit'
                            variant='contained'
                            style={{backgroundColor: '#8122B3',
                                color: '#ffffff'}}
                            >
                                Selanjutnya  
                        </Button>
                 </form>
            </Paper></>
    )
}