import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let navigate = useNavigate()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }

  return (
    <>
      <h1>Edit Your Cat's Info</h1>
     
        <Form>
          <FormGroup>
            <Label for="cat-name" hidden>
              Email
            </Label>
            <Input
              id="cat-name"
              name="name"
              type="text"
              value={editCat.name}
              onChange={handleChange}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="cat-age" hidden>
              Password
            </Label>
            <Input
              id="cat-age"
              name="age"
              placeholder="Cat's Age"
              type="text"
              value={editCat.age}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cat-enjoys" hidden>
              Email
            </Label>
            <Input
              id="cat-enjoys"
              name="enjoys"
              placeholder="What does your cat enjoy?"
              type="text"
              value={editCat.enjoys}
              onChange={handleChange}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="cat-image" hidden>
              Password
            </Label>
            <Input
              id="cat-image"
              name="image"
              placeholder="Add a picture of your cat"
              type="text"
              value={editCat.image}
              onChange={handleChange}
            />
          </FormGroup>{" "}
          <Button name="submit" onClick={handleSubmit}>
            Update Cat!
          </Button>
        </Form>
     
    </>
  )
}

export default CatEdit
