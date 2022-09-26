
import user from "../assets/user.png"

function Host() {
  return (
    <div className="lodging__host">
      <div className="host__name">
        <p>Alexandre</p>
        <p>Dumas</p>
      </div>
      <div className="host__picture">
        <img className="host__user" src={user} alt="utilisateur" />
      </div>
    </div>
  )
}

export default Host
