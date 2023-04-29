import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <div className="all-cat-cards">
      {cats?.map((cat, index) => {
        return (
          <Card
            color="secondary"
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img alt="Sample" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle tag="h6">{cat.age}</CardSubtitle>
              <Button>
              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                See More Details
              </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default CatIndex
