import { MenuItem } from '@mui/material';
import { Button } from '@myorg/ui-shared';
import { useState } from 'react';
import './App.css';

export function App() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };
  const handleChangeSelect = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div className='m-20'>
      {/* <Paper className='flex w-1/2 mx-auto my-8'>
        <Input value={name} handleChange={handleChange} type="text" className='w-full' placeholder='please insert some title'/>
      </Paper>
      <Button variant='contained' className='bg-amber-400'>click me</Button>
      <br />
      <div className='flex w-full justify-center mt-8'>
        <Tooltip title='arrow' arrow placement='top'>
        aaaaaaaaaa
        </Tooltip>
      </div>
      <br />
      <h3 onClick={() => setOpen(true)}>open modal</h3>
      <Modal 
        open={open}
        maxWidth="sm"
        onClose={() => setOpen(false)}
        content={<h1>hello modal Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptates error, omnis laudantium voluptatum nostrum consectetur similique nam tenetur suscipit quis dolor quaerat aut, beatae iste quisquam eius quod!</h1>} 
        title={<strong>modal title</strong>}
        action={
        <Button variant='contained'>
          btn modal
        </Button>}
       />
       <br />
       <br />
       <Paper>
        <Select value={age} handleChange={handleChangeSelect} label='nothing'>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       </Paper> */}
       <Button color='primary' className='bg-amber-200 hove' variant='contained'>hi btn</Button>
    </div>
  );
}

export default App;
