import React, { useContext } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap'; 

// context
import { AddSmurfContext } from '../context/AddSmurfContext';

// styling
import './smurf.css';

export default function SmurfForm() {
  const {smurf, handleChange, handleSubmit} = useContext(AddSmurfContext);
  // Moved to App.js for context API rendering/passing of data
  // const [smurf, setSmurf] = useState({
  //   name: '',
  //   age: '',
  //   height: '',
  //   id: ''
  // })
  // console.log('SMURF FORM', smurf)

  // const handleChange = e => {
  //   setSmurf({
  //     ...smurf,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   axios
  //     .post('http://localhost:3333/smurfs', smurf)
  //     .then(result => {
  //       setSmurf({
  //         name: '',
  //         age: '',
  //         height: ''
  //       })
  //       console.log('Smurf has been added', result.data)  
  //     })
  //     .catch(error => {
  //       console.log('POST ERROR', error)
  //     })
  // }


  return (
    <div className='smurf-form'>
      <h1>Add Smurf:</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            type="text"
            name="name"
            placeholder="Name"
            value={smurf.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="age"
            value={smurf.age}
            placeholder="Age"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type="text"
            name="height"
            placeholder="Height"
            value={smurf.height}
            onChange={handleChange}
          />
        </FormGroup>

        {/* add onclick functionality to move to /smurfs */}
        {/* searched for about an hour, couldn't find what would work :( */}
        <Button 
          color="primary" 
          size="lg"
          type="submit"
        >
            Add
        </Button>
      </Form>
      
    </div>
  )
};