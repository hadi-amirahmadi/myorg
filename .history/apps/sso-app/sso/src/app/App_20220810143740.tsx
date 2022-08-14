import './App.css';
import { Button, Input } from '@myorg/ui-shared';
import { useState } from 'react';

export function App() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setState({...state, [name]: value})
  };
  return (
    <div className='my-8 flex'>
      <label>username: </label>
      <Input value={state.username} handleChange={handleChange} name="username" type="text"/> 
      <br />
      <label>password: </label>
      <Input value={state.password} handleChange={handleChange} name="password" type="text"/> 
      <br />
      <Button variant='contained'>click me bro!!!</Button>
    </div>
  );
}

export default App;
