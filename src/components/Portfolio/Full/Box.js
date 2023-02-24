import Col from "react-bootstrap/Col";
import styles from "./full.module.css";

export default function BoxFull( {data} ) {
    const {id, title, text, image, site, repo, tech} = data;

    return (
        <Col key={id}
             sm={12} md={6} lg={4} xl={2}
			 className={`${styles.boxfull} m-0 p-0`}>
            <img src={image} alt="" />
        </Col>
    )
}
