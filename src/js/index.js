//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap";
import "../styles/index.scss";
//import { Home } from "./component/home.js";
//import "./component/icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faClock} />;

const SecondsCounter = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="bigCounter">
			<div className="calendar">{element}</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
};

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
	let countstr = "000" + counter.toString();
	let largostr = countstr.length;

	const four = Number(countstr[largostr - 4]);
	const three = Number(countstr[largostr - 3]);
	const two = Number(countstr[largostr - 2]);
	const one = Number(countstr[largostr - 1]);
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
