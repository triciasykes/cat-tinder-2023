import { NavLink, useParams } from "react-router-dom"
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)
  return (
    <>
      {currentCat && (
        <>
          <img alt={` ${currentCat.name}'s profile`} src={currentCat.image} />
          <h3>
            {currentCat.name} likes {currentCat.enjoys}
          </h3>
        </>
      )}
      <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
        Edit Cat Profile
      </NavLink>
      <br />
      <NavLink to="/catindex">
        <Button name="submit" onClick={() => {deleteCat(currentCat.id)}}>Delete Cat Profile</Button>
      </NavLink>
    </>
  )
}

export default CatShow
