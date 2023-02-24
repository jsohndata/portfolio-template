import * as bootstrap from "../../common/Bootstrap.js";
import Box from "./Box.js";

import data from "../../../data/portfolio.json";

export default function Grid() {

	return (
			<section className="container-fluid">
					<bootstrap.Row className="justify-content-md-center">
						{
							data.map( (element) => 
									<Box data={element} />
							)
						}
					</bootstrap.Row>
			</section>
  );
}
