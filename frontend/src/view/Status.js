import React from "react";
import ToggleStatus from "../component/ToggleStatus";
import { makeStyles } from "@material-ui/core";
import CardStatus from "../component/CardStatus";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    tampilan: {
        display: 'flex',
        flexDirection:"column",
        flexWrap: 'wrap',
    }
}));

export default function Status() {
  
    return(
        <div className={makeStyles.tampilan}>
            <Router>
            <ToggleStatus />
        <Switch>
          <Route exact from="/pendaftaran" render={props => <CardStatus {...props} />} />
          <Route exact from="/draf" render={props => <CardStatus {...props} />} />
          <Route exact from="/postingan" render={props => <CardStatus {...props} />} />
        </Switch>
        
      </Router>
            
        </div>
    )
} 