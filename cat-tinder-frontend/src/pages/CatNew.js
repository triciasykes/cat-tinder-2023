import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'


const CatNew = ({createCat}) => {

  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }
  return (
    <Form>
    <FormGroup>
      <Label
        for="cat-name"
        hidden
      >
        Email
      </Label>
      <Input
        id="cat-name"
        name="name"
        placeholder="Cat's Name"
        type="text"
        value={newCat.name}
        onChange={handleChange}
      />
    </FormGroup>
    {' '}
    <FormGroup>
      <Label
        for="cat-age"
        hidden
      >
        Password
      </Label>
      <Input
        id="cat-age"
        name="age"
        placeholder="Cat's Age"
        type="text"
        value={newCat.age}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label
        for="cat-enjoys"
        hidden
      >
        Email
      </Label>
      <Input
        id="cat-enjoys"
        name="enjoys"
        placeholder="What does your cat enjoy?"
        type="text"
        value={newCat.enjoys}
        onChange={handleChange}
      />
    </FormGroup>
    {' '}
    <FormGroup>
      <Label
        for="cat-image"
        hidden
      >
        Password
      </Label>
      <Input
        id="cat-image"
        name="image"
        placeholder="Add a picture of your cat"
        type="text"
        value={newCat.image}
        onChange={handleChange}
      />
    </FormGroup>
    {' '}
    <Button type="submit" onClick={handleSubmit}>
      Submit
    </Button>
  </Form>
  )
}

export default CatNew