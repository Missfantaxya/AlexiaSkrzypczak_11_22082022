import "./Home.css"

import Mask from "./Mask.js"
import Thumb from "./Thumb"

function Home ()
{
  return (
    <>
      <Mask />
      <section className="thumbs">
        <Thumb />
      </section>
    </>
 )
}

export default Home
