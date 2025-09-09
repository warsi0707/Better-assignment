import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { memo } from 'react';

function CalcInput({title,placeholder}) {
  return (
      <div className='w-full '>
         <Box sx={{ borderRadius: "10px" }}>
      <TextField fullWidth label={title} id="fullWidth" placeholder={placeholder} />
    </Box>
      </div>
  )
}
export default memo(CalcInput)