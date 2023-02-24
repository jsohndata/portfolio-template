import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./info.module.css";

export default function BoxInfo( {data} ) {
    const {id, title, text, image, site, repo, tech} = data;

    return (
        <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <Card className={styles.boxinfo}>
                <Card.Img src={image} />
                <Card.Body>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </Card.Body>            
            </Card>
        </Col>
    )
}
