// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { Button } from '@myorg/ui-shared';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState('female');

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  
    setValue((event.target as HTMLInputElement).value);
  };
  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };
  console.log(value);
  
  return (
    <div>
        <Button>hi btn</Button>
      <h3 onClick={() => setOpen(true)}>open modal</h3>
      {/* <Modal 
        open={open}
        onClose={() => setOpen(false)}
        action={<Button>btn modal</Button>}
        content={<h1>b2b content</h1>}
        title={<strong>b2b modal</strong>}
        maxWidth="xl"
      />
      <br />
      <Card
        actions={<Button>card btn</Button>}
        title='this is a card'
        imageHeight='200'
        image='../assets/images.jfif'
        content={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores perspiciatis vel fugiat mollitia sint cum inventore quo sit quam magnam doloremque est molestiae, aliquid exercitationem nemo dolorum itaque cumque?</>} 
        />
        <br />
        <br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={value}
            onChange={handleChangeRadio}
          >
            <FormControlLabel control={<Radio />} value="female" label='Female' />
            <FormControlLabel control={<Radio />} value="male" label='Male' />
          </RadioGroup>
        </FormControl> */}
    </div>
  );
}

export default App;
