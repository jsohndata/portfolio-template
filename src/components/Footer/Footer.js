import * as bootstrap from "../common/Bootstrap.js";

export default function Footer() {
    const repoUrl = "";

    return (
        <footer className="container-fluid">
            <bootstrap.Row className="justify-content-md-center">
                <bootstrap.Col md={6}>
                    <a href={repoUrl} target="_blank" rel="noreferrer" >
                        <img src="/images/logo-github.svg" alt="Github" />
                        <p><small>See Code in Github</small></p>
                    </a>
                </bootstrap.Col>
            </bootstrap.Row>
        </footer>
    )
}
