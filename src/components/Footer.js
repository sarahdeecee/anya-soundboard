import { GitHub, Twitter } from '@mui/icons-material';
import { Box, Link } from '@mui/material';

function PageFooter(props) {

  return (
    <Box sx={{mt: 2, height: '1.5em', width: '100%', fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'center'}} component="footer">
      Designed and Coded by&nbsp;<Link href="https://sarahdeecee.github.io/profile/" target="_blank" underline="none" color="inherit" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>sarahdeecee&nbsp;<GitHub /></Link>&nbsp;<Link underline="none" color="inherit" href="https://twitter.com/inakasarah" target="_blank" sx={{display: 'flex', alignItems: 'center'}}><Twitter /></Link>
    </Box>
  );
}

export default PageFooter;