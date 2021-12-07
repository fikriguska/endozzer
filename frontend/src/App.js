import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth';
import Header from './component/header/Header';
import Login from './view/login/Login';
import About from './view/About';
import Signup from './view/Signup'
import Utama from './view/Utama';
import CardView from './component/CardView';
import Lengkapidata1 from './view/LengkapiData1'
import Lengkapidata2 from './view/LengkapiData2'
import DetilCampaign from './view/DetilCampaign';
import { makeStyles } from "@material-ui/core/styles";
import DataProfil from './view/DataProfil';
import Status from './view/Status';



const useStyles = makeStyles({});

export default function App(){
  const classes = useStyles();

  const [isLoggedIn, setStatus] = useState("")
 
  console.log("adasdad", isLoggedIn)

  return(
    <div className={classes.container}>
      <AuthProvider>
      <Router>
          <Header />
        <Switch>
          <Route exact from="/" render={props => <Utama {...props} />} />
          <Route exact from="/login" render={props => <Login {...props} />} />
          <Route exact from="/signup" render={props => <Signup {...props} />} />
          <Route exact from="/about" render={props => <About {...props} />} />
          <Route exact from="/dashboard" render={props => <CardView {...props} />} />
          <Route exact from="/lengkapidata1" render={props => <Lengkapidata1 {...props} />} />
          <Route exact from="/lengkapidata2" render={props => <Lengkapidata2 {...props} />} />
          <Route exact from="/detilcampaign" render={props => <DetilCampaign {...props} />} />
          <Route exact from="/status" render={props => <Status {...props} />} />
          <Route exact from="/profil" render={props => <DataProfil {...props} />} />
        </Switch>
        {/* <DataProfil/> */}
      </Router>
      </AuthProvider>
    </div>
    
  )
}


