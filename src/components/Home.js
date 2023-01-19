import "./Home.css"

import advertisements from "../data/advertisements"

import Mask from "./Mask.js"
import Thumb from "./Thumb"

function Home ()
{
  return (
    <>
      <Mask />
      <section className="thumbs">
        {advertisements.map((advertisement) =>(
          <Thumb
            key={ advertisement.id }
            {...advertisement}
          />
        ))}
      </section>
    </>
 )
}

export default Home
