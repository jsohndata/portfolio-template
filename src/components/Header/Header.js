import * as bootstrap from "../common/Bootstrap.js";

export default function Header() {
  return (
    <header className="container-fluid bg-secondary" aria-label="Header">
      <bootstrap.Row className="justify-content-md-center">
        <bootstrap.Col>
          <h1>Hi, I am H-One.</h1>
        </bootstrap.Col>
      </bootstrap.Row>
    </header>
  );
}
