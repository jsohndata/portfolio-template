import Button from "react-bootstrap/Button";
import * as bootstrap from "../common/Bootstrap.js";

import "./hero.module.css"

export default function Hero() {
  return (
    <section className="container-fluid" aria-label="Hero">
      <bootstrap.Row>
        <bootstrap.Col sm={10} md={7} className="p-5">
          <h1>I am a <span>creative</span> designer.</h1>
          <p>I am a visual designer, living and working in Florida. I love what I do!</p>
          <Button>View Portfolio</Button>
        </bootstrap.Col>

        <bootstrap.Col sm={2} md={5} style={{'backgroundImage':'url(/images/hero-right.webp)'}}>
          
        </bootstrap.Col>  
      </bootstrap.Row>
    </section>
  );
}
