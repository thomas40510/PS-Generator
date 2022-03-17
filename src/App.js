/*
PS Generator
@author: PRV
@version: 1.1.1
 */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import {EmailOutlined, FileCopyRounded} from "@material-ui/icons";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-Mf7AUYDMLNK_2hn4DuSZsT17QJJCtY",
  authDomain: "ps-generator.firebaseapp.com",
  projectId: "ps-generator",
  storageBucket: "ps-generator.appspot.com",
  messagingSenderId: "837321887718",
  appId: "1:837321887718:web:cef4e66fb949ec780e1027",
  measurementId: "G-ZC67LCFH9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

class PsGenerator extends React.Component {
  handleFocus = (event) => event.target.select();
  placeholderText = 'Ceci est un texte random \nsans contenu particulier \npermettant d\'illustrer \ncomment ça marche \nen vrai...'
  versionTxt = '1.1.1';

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailOutlined />
          </Avatar>
          <Typography component="h1" variant="h4">
            The One And Only Générateur de PS
          </Typography>

          <Typography variant="h6" component="div">
            For polyvalent engineers @ ENSTA Breton
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
              helperText="Entrez votre texte normalement, ligne après ligne"
              placeholder={this.placeholderText}
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
              onFocus={this.handleFocus}
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
        <footer style={{color: "gray", position: "fixed", bottom: 0}}>
          <center>Made with ☕️ by Gustave — version {this.versionTxt}</center>
        </footer>
      </Container>

    );
  }
}

export default withStyles(styles)(PsGenerator);
//export default App;
