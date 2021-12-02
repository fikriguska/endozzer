import React from "react";
import { makeStyles, Card, Grid, Button, Typography, CardContent } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles(() => ({
    paper:{
        margin:'30px auto',
        display: 'flex',
        width: '700px',
        height: '200px'
    },
    button:{
        marginTop: 80,
        marginRight: 20,
        alignContent: 'center',
        borderRadius: 5,
        width: 200,
        height: 50,
        backgroundColor: '#21B709',
        color: '#ffffff',
    }
}));

const CardStatus = props => {
    const styles = useStyles();
    return(
        <div>
            <Card className={styles.paper}>
                <Grid container spacing={2} direction='row' >
                    <Grid item xs={8}>
                        <CardContent   sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h4">
                                Melani hidayati
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="div">
                                @melanihidayati
                            </Typography>
                            </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction="column" spacing={2}  alignItems='center'>
                            <Button className={styles.button}> test</Button>
                        </Stack>
                        
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
export default CardStatus;