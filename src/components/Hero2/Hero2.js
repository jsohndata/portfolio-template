import Button from "react-bootstrap/Button";
import * as bootstrap from "../common/Bootstrap.js";

import styles from "./hero2.module.css";

export default function Hero2() {
  return (
    <section className="container-fluid" aria-label="Hero2">
      <bootstrap.Row>
        <bootstrap.Col sm={12} md={{offset:5, span:6 }} className={`p-5 ${styles.content}`}>
          <h1>Hi, <span>Bridgette</span> I am a Career Coach.</h1>
          <p>I've been able to place 12 students in software engineering roles as <strong>Career Coach</strong> in the last three month.</p>          
          <Button>View Portfolio</Button>
        </bootstrap.Col> 
      </bootstrap.Row>
    </section>
  );
}
