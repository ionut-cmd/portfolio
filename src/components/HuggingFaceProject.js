import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  huggingFaceProjectContainer: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(4),
    // maxWidth: '500px',
 
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
    heading: {
    color: 'white',
  },
}));

const HuggingFaceProject = () => {
  const classes = useStyles();
  const [inputType, setInputType] = useState('Choose from examples');
  const [selectedText, setSelectedText] = useState(
    'A combination of Canadian capital quickly organized and petitioned for the same privileges.'
  );
  const [ownText, setOwnText] = useState('');
  const [speakerId, setSpeakerId] = useState(0);
  const [embedType, setEmbedType] = useState('bert_embed');
  const [emotionId, setEmotionId] = useState('amused');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://fypionutbostan-emotional-aware-tts.hf.space/predict',
        {
          input_type: inputType,
          text: selectedText,
          own_text: ownText,
          speaker_id: speakerId,
          embed_type: embedType,
          emotion_id: emotionId,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <section
      id="huggingfaceproject"
      // style={{ backgroundColor: '#354f52', color: 'white' }}
    >
        <Container maxWidth="md">
        <Typography variant="h2" align="center" className={classes.heading} gutterBottom>
          HuggingFace Project
        </Typography>
          <div className={classes.huggingFaceProjectContainer}>
            <h2>Emotion-Aware Text To Speach</h2>
            <form onSubmit={handleSubmit}>
              <Box md={2}>
                <FormControl component="fieldset">
                  <RadioGroup row value={inputType} onChange={(e) => setInputType(e.target.value)}>
                    <FormControlLabel value="Choose from examples" control={<Radio />} label="Choose from examples" />
                    <FormControlLabel value="Enter your own text" control={<Radio />} label="Enter your own text" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl variant="outlined">
                  <Select
                    value={selectedText}
                    label="Select a text"
                    onChange={(e) => setSelectedText(e.target.value)}
                    
                  >
                    <MenuItem value="A combination of Canadian capital quickly organized and petitioned for the same privileges.">
                      Text 1
                    </MenuItem>
                    <MenuItem value="The date was nearly eighteen years old.">Text 2</MenuItem>
                    <MenuItem value="Hardly were our plans made public before we were met by powerful opposition.">
                      Text 3
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                <TextField
                  label="Enter your own text"
                  variant="outlined"
                  value={ownText}
                  onChange={(e) => setOwnText(e.target.value)}
                  InputProps={{
                    style: {
                      backgroundColor: 'white',
                    },
                  }}
                />
              </Box>
              <Box md={2}>
                <FormControl variant="outlined">
                  <InputLabel id="speaker-id-label">Speaker ID</InputLabel>
                  <Select
                    labelId="speaker-id-label"
                    value={speakerId}
                    onChange={(e) => setSpeakerId(e.target.value)}
                    label="Speaker ID"
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl component="fieldset">
                  <br/>
                  <RadioGroup row value={embedType} onChange={(e) => setEmbedType(e.target.value)}>
                    <FormControlLabel value="bert_embed" control={<Radio />} label="BERT Embed" />
                    <FormControlLabel value="emotion_id" control={<Radio />} label="Emotion ID" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <br />
              <Box>
                <TextField
                  select
                  value={emotionId}
                  onChange={(e) => setEmotionId(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    style: {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  <MenuItem key="amused" value="amused">
                    Amused
                  </MenuItem>
                  <MenuItem key="anger" value="anger">
                    Anger
                  </MenuItem>
                  <MenuItem key="disgust" value="disgust">
                    Disgust
                  </MenuItem>
                  <MenuItem key="neutral" value="neutral">
                    Neutral
                  </MenuItem>
                  <MenuItem key="sleepiness" value="sleepiness">
                    Sleepiness
                  </MenuItem>
                </TextField>
              </Box>
              <br />
              <Button type="submit" variant="contained" color="primary">
                Generate Speech
              </Button>
            </form>
          </div>
      </Container>
    </section>
  );
};

export default HuggingFaceProject;
