/*
PS Generator
@author: PRV
@version: 1.3.0
 */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import {EmailOutlined, FileCopyRounded} from "@material-ui/icons";
import {Editor} from '@tinymce/tinymce-react';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {Box} from "@mui/material";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//useful : https://react-select.com/home

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(analytics);
// const remoteConfig = getRemoteConfig(app);

// set remoteConfig fetch interval
/*remoteConfig.settings.minimumFetchIntervalMillis = 10000;

remoteConfig.defaultConfig = {
  "sponsorName": "La Cohèz'",
  "sponsorLink": "https://g.page/lacohez?share"
};

function getRemotes(){
  const sponsorNameFromRemote = getValue(remoteConfig, "sponsorName");
  const sponsorLinkFromRemote = getValue(remoteConfig, "sponsorLink");

  fetchAndActivate(remoteConfig)
    .then(() => {
      console.log(sponsorNameFromRemote);
      console.log(sponsorLinkFromRemote);
      // const sponsorPlace = document.getElementById("sponsor");
      // sponsorPlace.innerText = sponsorNameFromRemote._value;
      // sponsorPlace.href = sponsorLinkFromRemote._value;
    })
    .catch((err) => {
      console.log(err);
    });

  const sponsorName = sponsorNameFromRemote._value;
  const sponsorLink = sponsorLinkFromRemote._value;
  return ([sponsorName, sponsorLink]);
}*/



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
  },
  link: {
    color: theme.palette.secondary.light,
  }
});

export class txtContent{
  txt = "";
  result = "<b>random text</b>";
}

class PsGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ""};
    this.handleEditorChange = this.handleEditorChange.bind(this);
    txtContent.result = "Vos 💫merveilleux💫 PS";
  }

  handleFocus = (event) => {
    const selection = window.getSelection();
    const res = document.getElementsByClassName("result");
    const range = document.createRange();
    range.selectNodeContents(res[0]);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  placeholderText = 'Ceci est un texte random \nsans contenu particulier \npermettant d\'illustrer \ncomment ça marche \nen vrai...'
  versionTxt = process.env.REACT_APP_VERSION_NUMBER;
  donate = 'https://www.onac-vg.fr/dons/';
  sponsorLink = process.env.REACT_APP_SPONSORLINK;
  sponsorName = process.env.REACT_APP_SPONSORNAME;

  handleEditorChange(content, editor){
    this.setState({content: editor.getText});
    //txt = editor.getContent();
    txtContent.txt = editor.getContent();
  }

  htmlDecode(input){
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
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
          <Typography component="h1" variant="h4">
            The One And Only Générateur de PS
          </Typography>

          <Typography variant="h6" component="div">
            For polyvalent engineers @ ENSTA Breton
          </Typography>

          <Typography variant="body2" component="div">
            Sponsored by <a href={this.sponsorLink} className={classes.link}
                            target="_blank" rel="noreferrer" id="sponsor">{this.sponsorName}</a>
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

{/*         // ancienne formule
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
*/}
            <Editor
              apiKey={process.env.REACT_APP_TINYMCEAPIKEY}
              value={this.state.content}
              required
              fullWidth
              init={{
                height: 500,
                menubar: false,
                toolbar: "undo redo | bold italic underline strikethrough | fontfamily fontsize | forecolor backcolor removeformat | emoticons",
                fontsize_formats: "8pt 9pt 10pt 11pt 12pt 14pt 18pt 20pt 22pt 24pt 26pt 28pt 36pt 48pt 72pt",
                content_style: "body {line-height: .5;}",
              }}
              onChange={this.handleEditorChange}
              id='usrinput'
              />





{/*         // ancienne version
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="txtresult"
              label="Vos 💫merveilleux💫 PS"
              type="text"
              id="txtresult"
              multiline
              //dangerouslySetInnerHTML={{__html: this.htmlDecode(txtContent.result)}}
              onFocus={this.handleFocus}
              InputLabelProps={{shrink: true,}}
              InputProps={{
                readOnly: true,
              }}
            />
*/}

            <Box
              component="div"
              sx={{
                p: 2,
                border: '1px solid gray',
                borderRadius: '10px',
                marginTop: '20px',
              }}
              title="Vos PS"
              >
              <p
                class="result"
                id="txtresult"
                dangerouslySetInnerHTML={{__html: this.htmlDecode(txtContent.result)}}
                onClick={this.handleFocus}
                onFocus={this.handleFocus}
                onChange={this.handleFocus}

              />
            </Box>
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
            <FileCopyRounded id="copyBtn"/>
          </Button>
          </div>

        </div>
        <footer style={{color: "gray", position: "relative", bottom: 0, marginTop: 50}}>
          <center>Made with ☕️ by Gustave — version {this.versionTxt}
            <br/>
            <a href={this.donate} className={classes.link} target="_blank" rel="noreferrer">Faire un don au Bleuet</a>
          </center>
        </footer>
      </Container>
    );
  }
}

export default withStyles(styles)(PsGenerator);
//export default App;
