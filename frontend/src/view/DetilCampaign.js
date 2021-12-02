import React from 'react'
import { Grid, Card, CardMedia, Typography, makeStyles, Button, Paper, ListItem, ListItemText, List } from '@material-ui/core'
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
  buttonSubmit:{
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
  }
  
}));

export default function DetilCampaign(){
    const styles = useStyles();
    return(
        <div>
            <Button className={styles.buttonBack}
                variant='contained'
                startIcon={<LogoBack
                    style={{ height: 53, width: 36 }} />}
                >Detail Campaign
            </Button>
            <Paper className={styles.root}>
                <Stack direction='column' spacing={2} textAlign='center' justifyContent='center' alignItems='center'>
                    <Typography variant='h5' className={styles.title} >Barang jualan</Typography>
                    <Typography variant='h6' gutterBottom>Pt berkah</Typography>
                    <img src='Asset/image1.jpg' alt='picture' style={{ width: "250px", height: "300px", margin: "20px auto" }} />
                    <Button className={styles.buttonAtas} 
                        variant='contained' 
                        startIcon={<InstagramIcon/>} 
                        style={{backgroundColor: '#7121F3',
                                color: '#ffffff'}}>Instagram foto</Button>
                </Stack>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5}}>
                    <Grid container spacing={2} direction='row' >
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>Periode Campaign</Typography></Grid>
                        <Grid item xs={6}>03/12/2021 - 31/12/2021</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>Jumlah bayaran</Typography></Grid>
                        <Grid item xs={6}>IDR 150.000</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>JUMLAH INFLUENCER YANG DIBUTUHKAN</Typography></Grid>
                        <Grid item xs={6}>10 orang</Grid>
                    </Grid>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>KRITERIA INFLUENCER</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5}}>
                    <Grid container spacing={2} direction='row' >
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>KATEGORI INFLUENCER</Typography></Grid>
                        <Grid item xs={6}>Health & Sport, Lifestyle & Travel, Beauty & Fashion</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>LOKASI INFLUENCER</Typography></Grid>
                        <Grid item xs={6}>Jakarta, Bandung, Bekasi, Bogor, Depok, Semarang,Serang, Sidoarjo, Surabaya, Surakarta, Tangerang,Yogyakarta</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>MINIMAL FOLLOWERS</Typography></Grid>
                        <Grid item xs={6}>30.000</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>JENIS KELAMIN</Typography></Grid>
                        <Grid item xs={6}>Laki-laki, Perempuan</Grid>
                        <Grid item xs={6} ><Typography className={styles.kalimatKiri}>USIA</Typography></Grid>
                        <Grid item xs={6}>25 - 34 tahun, 35 - 49 tahun, > 50 tahun</Grid>
                    </Grid>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>Tentang</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5, marginRight: 7}}>
                    <Typography variant='body1'>Madu Bajakah Premium Quality:
                        Mengatasi keluhan benjolan, kista, darah tinggi, asam urat, dan penyakit lainnya.
                        Sudah banyak review 100% real bisa di cek di youtube Madu Bajakah Official.

                        Insight produk di https://madubajakah.com/promo

                        Influencer akan kami kirimkan produk</Typography>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>KETENTUAN FOTO ATAU VIDEO</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginLeft: 7, paddingBottom: 5, marginRight: 7, }}>
                    <List component={Stack} direction="column">
                        <ListItem disablePadding>
                            <ListItemText primary="Gaya review bebas" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Isi foto memegang produk"/>
                        </ListItem>
                    </List>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>KETENTUAN CAPTION</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5, marginRight: 7, }}>
                    <Typography variant='body1' >
                    Tag akun tiktok @madubajakah
                    </Typography>
                    <Typography variant='body1' >
                    Hashtag : #madubajakah #benjolan #kanker #tumor
                    </Typography>
                </Box>
                <Typography variant='h6' className={styles.subTitle}>KETENTUAN CAPTION</Typography>
                <Divider style={{color:'#8122B3'}}/>
                <Box sx={{flexGrow: 1, marginTop: 5, marginLeft: 7, paddingBottom: 5, marginRight: 7, }}>
                    <Typography variant='body1' className={styles.kalimatKiri} >
                    Ikuti langkah-langkah berikut: </Typography>
                    <List component={Stack} direction="column">
                        <ListItem disablePadding>
                            <ListItemText primary="1. Baca ketentuan campaign dengan seksama." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="2. Klik tombol Daftar Campaign dan tunggu pendaftaran kamu diterima."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="3. Kirim draft postingan kamu, pastikan sudah sesuai dengan ketentuan dan tunggu verifikasi dari Brand Owner."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="4. Jika draft postingan kamu diverifikasi oleh Brand Owner, post di media sosial kamu sesuai periode campaign yang sudah ditentukan."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="5. Apabila ada pengiriman barang, silahkan komunikasikan dengan Brand Owner melalui nomor telepon yang tertera."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="6. Submit tautan bukti postingan kamu."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="7. Campaign selesai! Tunggu campaign selesai dan pembayaran akan masuk ke saldo Endozzer kamu."/>
                        </ListItem>

                    </List>
                </Box>
            </Paper>
            <Button className={styles.buttonSubmit}
                variant='contained'
                >Detail Campaign
            </Button>
        </div>
    )
}
