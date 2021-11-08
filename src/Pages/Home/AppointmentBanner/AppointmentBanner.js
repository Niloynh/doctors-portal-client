import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg  from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Appointmentbg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}
const AppointmentBanner = () => {
    return (
        <Box style={Appointmentbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>n
                <img 
                style = {{width: 400, marginTop: '-110px'}}
                src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left'


          }}>
            <Box>
                <Typography varient="h5" sx={{mb: 5}} style={{color: '#5CE7ED'}}>
                Appointment
              </Typography>
              <Typography varient="h2" style={{color: 'white', fontSize: '30px'}}>
                  Make an Appointment Today
              </Typography>
              <Typography varient="h6" sx={{my: 5}} style={{color: 'white', fontSize: 14, fontweight: 300}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas.
              </Typography>
              <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>;
            </Box>
          </Grid>
        </Grid>
      </Box>  
    );
};

export default AppointmentBanner;
