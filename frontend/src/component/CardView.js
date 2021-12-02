// Dashboard
import React from 'react'
import { Grid, Card, CardMedia, Typography, makeStyles, Button } from '@material-ui/core'
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import {ReactComponent as LogoIG} from '../Asset/Vector.svg'
import {ReactComponent as LogoCampaign} from '../Asset/Vector-1.svg'
import { Box, style } from '@mui/system';


const useStyles = makeStyles((theme) => ({
  root:{
      
      height: '750px',
      width: '700px',
      margin:'20px auto',
      direction: 'column'
  },
  title:{
    marginTop: 20,
    flexGrow: 1,
    textAlign: "center"
  },
  buttonAtas:{
    
    width: 200,
    height: 50
  },
  grid1:{
    textAlign: 'right',
    display: 'flex'      
  },
  buttonSubmit:{
    borderRadius: 5,
    width: 200,
    height: 50,
    backgroundColor: '#21B709',
    color: '#ffffff',
    marginTop: 50,
  }
  
}));

const CardView = props =>{
  const styles = useStyles();
  return(
    <div>
      <Card className={styles.root}>
        <Typography variant='h5' className={styles.title} gutterBottom>Barang jualan</Typography>
        <Divider/>
        <Stack direction='row' spacing={5} justifyContent='center' alignItems='center' marginTop={3}>
          {/* Button di atas */}
          <Button className={styles.buttonAtas} 
            variant='contained' 
            startIcon={<LogoIG/>}
            style={{backgroundColor: '#2196F3',
                    color: '#ffffff'}} >campaign baru</Button>
          <Button className={styles.buttonAtas} 
            variant='contained' 
            startIcon={<LogoCampaign/>} 
            style={{backgroundColor: '#7121F3',
                    color: '#ffffff'}}>Instagram foto</Button>
        </Stack> 
        {/* poto di sini */}
        <CardMedia component='img' image='Asset/image1.jpg' style={{ width: "250px", height: "300px", margin: "20px auto" }} /> 
        <Typography variant='h6' className={styles.title} gutterBottom>Pt berkah</Typography>
        <Box sx={{flexGrow: 5}}>
          <Grid container spacing={2} direction='row' >
            <Grid item xs={6}><Typography align='right'>Jumlah Influencer yang Dibutuhkan</Typography></Grid>
            <Grid item xs={6}>10 orang</Grid>
            <Grid item xs={6}><Typography align='right'>Periode Campaign</Typography></Grid>
            <Grid item xs={6}>20 Desember 2021</Grid>
            <Grid item xs={6}><Typography align='right'>Jumlah Bayaran</Typography></Grid>
            <Grid item xs={6}>IDR 150.000</Grid>
          </Grid>
        </Box>
        <Stack direction="column" spacing={2} justifyContent='center' alignItems='center'>
          <Button className={styles.buttonSubmit}>Open Submision</Button> 
        </Stack>
        
      </Card>
    </div>
  )
}

// export default class CardView extends React.Component {
  
  
//     // state = {
//     //   loading: true,
//     //   player: [],
//     //   position: []
//     // }
      
//     // async componentDidMount () {
//     //   const url = "https://manutd-players.herokuapp.com/players"
//     //   const response = await fetch(url)
//     //   const data = await response.json()
  
//     //   const {
//     //     players = [],
//     //     positionList = players.slice(0,4).map(item => item.position).flat(),
//     //     memberList = players.slice(0,4).map(item => item.members).flat(),
//     //   } = data
  
//     //   this.setState({player: memberList, position: positionList, loading: false})
//     // }
    
//     render() {
//       const style = useStyles();

//       // if (this.state.loading) {
//       //     return <div>loading...</div>
//       // }
    
//       // if (!this.state.player.length) {
//       //     return <div>Did not get any player</div>
//       // }
    
//       return (
//           <div>
//               {/* <h1>Manchester United Players</h1>
//               {this.state.position.map((place, index) => {
//                 return (
//                   <Grid key={index}>
//                     <h1>{place}s</h1>
//                     <Grid container spacing={2} style={{paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
//                       {this.state.player.map((item, key) => {
//                         if (place === item.position) {
//                           return (
//                             <Grid item xs={3} key={key}>
//                               <Card>
//                                 <CardMedia image={'https://' + item.image} style={{ width: "250px", height: "300px", margin: "auto" }} />
//                                 <CardContent>
//                                   <Typography><b>{item.name}</b></Typography>
//                                   <Typography><b>Position:</b> {item.position}</Typography>
//                                   <Typography><b>Jersey No:</b> {item.jersey}</Typography>
//                                   <Typography><b>Country:</b> {item.country}</Typography>
//                                 </CardContent>
//                               </Card>
//                             </Grid>
//                           )
//                         }
//                       })}
//                     </Grid>
//                   </Grid>
//                 )
//               })} */}

//                 <Card className={this.styles.root}>
//                   <Typography>Barang jualan</Typography>
//                 </Card>
            
              
//           </div>
//       )
//     }
// }
export default CardView;