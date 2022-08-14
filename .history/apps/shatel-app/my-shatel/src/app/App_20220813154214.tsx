import { Accessibility, Accessible } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Button, Card, Input, Paper, Modal, Tooltip } from '@myorg/ui-shared';
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
       <Button color='primary' className='bg-amber-200 lowercase text-black' variant='contained' startIcon={<Accessibility />} endIcon={<Accessible />}>button with start and end icon</Button>
       <div className='w-1/3 mx-auto my-8'>
        <Button color='primary' variant='contained'>default btn</Button>
       </div>
       <div className='w-80 mx-auto my-8'>
        <Button color='warning' variant='outlined'>outlined btn</Button>
       </div>
       <div className='w-80 mx-auto my-8'>
        <Button size='small' color='error' variant='contained'>small btn</Button>
       </div>
       <div className='w-80 mx-auto my-8'>
        <Button size='large' color='success' variant='contained'>large btn</Button>
       </div>
       <div className='w-80 mx-auto my-8'>
        <Button className='lowercase' disabled color='error' variant='contained'>disabled btn</Button>
       </div>
       <br />
       <Card
        actions={<Button>card btn</Button>}
        imageHeight='200'
        image='../assets/images.jfif'
        content={<div>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </div>} 
        />
        <br />
        <Paper className='flex w-1/2 mx-auto my-8'>
          <Input label="input field with paper" value={name} onChange={handleChange} type="text" className='w-full' placeholder='please insert some title'/>
        </Paper>
        <Paper className='flex w-1/3 mx-auto my-8' variant='outlined'>
          <Input label="input field" value={name} onChange={handleChange} type="text" className='w-full' placeholder='please insert some title'/>
        </Paper>
        <div className="flex justify-center">
          <Input label="input field without paper" value={name} onChange={handleChange} type="text" className='w-1/3 mx-auto my-8' placeholder='please insert some title'/>
        </div>
        <br />
      <Button className='text-center w-full' onClick={() => setOpen(true)}>open modal</Button>
      <Modal 
        open={open}
        maxWidth="sm"
        onClose={() => setOpen(false)}
        children={<h1>hello modal Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum voluptates error, omnis laudantium voluptatum nostrum consectetur similique nam tenetur suscipit quis dolor quaerat aut, beatae iste quisquam eius quod!</h1>} 
        title={<strong>modal title</strong>}
        action={
        <Button variant='contained'>
          btn modal
        </Button>}
       />
       <br />
       <div className='flex w-full justify-center mt-8'>
        <Tooltip title={<span>tooltip</span>} arrow placement='top' arrow>
          <Button>im tooltip</Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
