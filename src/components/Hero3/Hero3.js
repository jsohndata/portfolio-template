import Button from "react-bootstrap/Button";
import * as bootstrap from "../common/Bootstrap.js";

import "./hero3.module.css"

export default function Hero3() {
  return (
    <section className="container-fluid" aria-label="Hero3">
      <bootstrap.Row>
        <bootstrap.Col sm={12} md={7} className="p-5">
          <h1>Hello Poly, welcome to the <span>Future</span>.</h1>
          <p>I am a visual designer, living and working in Florida. I love what I do!</p>
          <Button>View Portfolio</Button>
        </bootstrap.Col>

        <bootstrap.Col md={5} >
          <img src="/images/hero3-bg.webp" alt="" />
        </bootstrap.Col>  
      </bootstrap.Row>
    </section>
  );
}
