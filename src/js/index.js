//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import { Home } from "./component/home.js";

const SecondsCounter = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="bigCounter">
			<i className="MyImag" src={imagClock} />
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
};

let imagClock = "https://fontawesome.com/icons/alarm-clock?style=regular";

SecondsCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
	// 2) add here the new properties into the proptypes object
};

let counter = 0;
//render your react application
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
