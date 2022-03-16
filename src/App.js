/*
PS Generator
@author: PRV
@version: 1.0.0
 */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import {EmailOutlined, FileCopy, FileCopyOutlined, FileCopyRounded} from "@material-ui/icons";
import {IconButton, InputAdornment, Snackbar} from "@mui/material";


const styles = theme => ({

  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'fill',
    alignItems: 'center',
    flexDirection: 'row',

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '100pt',
  },
  copy: {
    margin: theme.spacing(3, 6, 2),
    //width: '100pt',
  }
});

let open=false;

class PsGenerator extends React.Component {


  state = {
    userName: '',
    password: '',
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Générateur de PS
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              width="20%"
              id='nbrPyramids'
              type="number"
              defaultValue={1}
              label="Pyramides"
              variant="outlined"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usrinput"
              label="Votre texte"
              name="userinput"
              autoFocus
              multiline
              rows={8}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="txtresult"
              label="Vos 💫merveilleux💫 PS"
              type="text"
              id="txtresult"
              multiline
              InputProps={{
                readOnly: true,

/*
              endAdornment:(
                <InputAdornment position="end">
                  <FileCopy
                    aria-label="copy to clipboard"
                    onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
                    edge="end"
                  />
                </InputAdornment>),
*/
              }}
            />
            <Grid container>

            </Grid>
          </form>
          <div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            id="btn"
            className={classes.submit}
          >
            Ça part !
          </Button><Button className={classes.copy}>
            <FileCopyRounded
            onClick={() => {navigator.clipboard.writeText(document.getElementById('txtresult').value); alert("Copié !");}}/>
          </Button>
          </div>

        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(PsGenerator);
//export default App;
