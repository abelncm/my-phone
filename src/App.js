import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Contact from './screens/contact/Contact';
import Dial from './screens/Dial';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3000';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Paper sx={{
        width: 300, 
        // height: 300,
        margin: 'auto', 
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    }}>

      <Box sx={{height: 320, position: 'relative'}}>
        {activeTab==0 && <Dial />}
        {activeTab==1 && <Contact />}
      </Box>

      <Paper sx={{ zIndex:1 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} />
          <BottomNavigationAction label="Contact" icon={<PermContactCalendarIcon />} />
        </BottomNavigation>
      </Paper>

    </Paper>
  );
}

