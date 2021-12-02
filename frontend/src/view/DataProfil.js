import React from 'react'
import { Grid, Card, CardMedia, Typography, makeStyles, Button, Paper, CardContent, ListItemText, List } from '@material-ui/core'
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { Box, style } from '@mui/system';
import { ReactComponent as LogoBack} from '../Asset/LogoBack.svg'
//import {ReactComponent as LogoIG} from '../Asset/Vector-1.svg'
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root:{
      
      width: '700px',
      margin: '30px auto',
      direction: 'column',
      elevation: 30,
      padding: 20,
      display: 'flex',
      flexDirection:"column",
      flexWrap: 'wrap',
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
  title:{
    marginTop: 5,
    flexGrow: 1,
    textAlign: "center"
  },
  buttonAtas:{
    width: 200,
    height: 50
  },
  editProfil:{
    borderRadius: 10,
    width: '700px',
    height: 50,
    backgroundColor: '#8122B3',
    color: '#ffffff',
    margin:'30px auto',
    display: 'flex',
  },
  subTitle:{
    textAlign: "left",
    marginLeft: 40,
  },
  kalimatKiri:{
      fontWeight: 600
  },
  cardAtas:{
    margin:'30px auto',
    display: 'flex',
    width: '700px',
    height: '200px'
  }
  
}));

export default function DataProfil(params) {
    const styles = useStyles();
    return(
        <div>
            <Card className={styles.cardAtas}>
                <Grid container spacing={2} direction='row' >
                    <Grid item xs={4}>
                        <CardMedia component='img'
                        alt='foto profil'
                        image='Asset/image1.jpg'
                        sx={{ height:'10px' }}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{  flexDirection: 'column' }}>
                            <CardContent   sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h4">
                                Melani hidayati
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="div">
                                @melanihidayati
                            </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                </Grid>
                
           
                
                
            </Card>
            <Button className={styles.editProfil}
                variant='contained'
                >Detail Campaign
            </Button>
            <Paper className={styles.root}>
                <Typography variant='h6' className={styles.subTitle}>EDIT PROFIL</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5}}>
                        <Grid container spacing={2} direction='row' >
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>TANGGAL LAHIR</Typography></Grid>
                            <Grid item xs={6}>01/01/2021</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>JENIS KELAMIN</Typography></Grid>
                            <Grid item xs={6}>Perempuan</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>KOTA</Typography></Grid>
                            <Grid item xs={6}>Bekasi</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>NOMOR TELEPON</Typography></Grid>
                            <Grid item xs={6}>081234567890</Grid>
                        </Grid>
                    </Box>
                <Typography variant='h6' className={styles.subTitle}>INSTAGRAM</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5}}>
                        <Grid container spacing={2} direction='row' >
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>USERNAME</Typography></Grid>
                            <Grid item xs={6}>melanihidayati</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>FOLOWERS</Typography></Grid>
                            <Grid item xs={6}>7.000.000</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>ENGAGEMENT RATE</Typography></Grid>
                            <Grid item xs={6}>3,62%</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>LIKES</Typography></Grid>
                            <Grid item xs={6}>250.000</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>COMMENTS</Typography></Grid>
                            <Grid item xs={6}>1.500</Grid>
                        </Grid>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>TIKTOK</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5}}>
                        <Grid container spacing={2} direction='row' >
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>USERNAME</Typography></Grid>
                            <Grid item xs={6}>melanihidayati</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>FOLOWERS</Typography></Grid>
                            <Grid item xs={6}>7.000.000</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>ENGAGEMENT RATE</Typography></Grid>
                            <Grid item xs={6}>3,62%</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>LIKES</Typography></Grid>
                            <Grid item xs={6}>250.000</Grid>
                            <Grid item xs={6} ><Typography className={styles.kalimatKiri}>COMMENTS</Typography></Grid>
                            <Grid item xs={6}>1.500</Grid>
                        </Grid>
                </Box>
            </Paper>
        </div>
        
    )
}