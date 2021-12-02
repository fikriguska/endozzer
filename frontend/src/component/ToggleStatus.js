import { makeStyles, Paper } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { withRouter } from "react-router";

const useStyles = makeStyles(() => ({
    ToggleGroup: {
        backgroundColor: "#ffffff",
        height: 100,
        width: 300,
    },
    toggleButton:{
        height: 100,
        width: 300
    }
}));

const ToggleStatus = props =>{
    const styles = useStyles();
    const [alignment, setAlignment] = React.useState(null);
    const {history} = props;
    

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    };

    const handleToggleClick = pageURL =>{
        history.push(pageURL)
    }
    return(
        <Box display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: 10}}>
                <Paper
                    elevation={0}
                    sx={{
                    display: 'flex',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    }}> 
                        <ToggleButtonGroup className={styles.ToggleButton}
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}>
                            <ToggleButton className={styles.toggleButton} value="pendaftaran" aria-label="left aligned"
                                onClick={() => handleToggleClick('/pendaftaran')}>
                                Pendaftaran
                            </ToggleButton>
                            <ToggleButton className={styles.toggleButton} value="draf" aria-label="centered"
                                onClick={() => handleToggleClick('/draf')}>
                                Draf
                            </ToggleButton>
                            <ToggleButton className={styles.toggleButton} value="postingan" aria-label="right aligned"
                                onClick={() => handleToggleClick('/postingan')}>
                                Postingan
                            </ToggleButton>

                        </ToggleButtonGroup>
                </Paper>
            
        </Box>
        
    )

}
export default withRouter(ToggleStatus);