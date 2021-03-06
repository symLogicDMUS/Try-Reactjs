/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar2.css";
import "./NewGameLink.css";

export const NewGameLink = ({iconLabelPosLeft}) => (
  <Link to="/NewGame">
  <div className="new-game2-link">
    <svg viewBox="0 0 150 184.586">
      <g transform="translate(-94.204 -33.474)" className="link-icon2">
        <path d="M130.337,183.284c-21.539-.686-34.777-1.811-35.776-3.041-.7-.858-.321-4.667.68-6.886,2.783-6.169,9.088-12.6,24.388-24.877,5.081-4.077,10.525-8.667,12.1-10.2A45.046,45.046,0,0,0,142.245,123.4c1.165-2.733,6.989-18.991,6.989-19.51,0-.171-4.073-.5-9.114-.725-13.744-.628-21.822-1.437-22.922-2.3-.6-.466,8.722-7.594,20.156-15.421l10.167-6.959-3.908-6.2c-4.184-6.636-5.258-9.2-5.6-13.349a13.821,13.821,0,0,1,2.333-9.2c3.986-6.505,13.2-12.912,22.024-15.315,5.822-1.586,11.057-1.2,17.3,1.266,7.95,3.146,16.3,9.916,19.1,15.494,1.941,3.86,1.931,9.123-.026,13.9a73.115,73.115,0,0,1-4.414,7.6,47.764,47.764,0,0,0-3.441,5.792c.07.144,4.852,3.514,10.626,7.488,10.254,7.059,19.526,14.083,19.526,14.792,0,.345-2.08.77-6.734,1.373-1.262.164-7.3.543-13.423.843s-11.343.595-11.605.655c-.485.111,4.077,13.688,6.6,19.647a46.951,46.951,0,0,0,11.606,15.995c1.265,1.175,4.976,4.279,8.246,6.9,13.552,10.858,17.917,14.762,22.5,20.125,5.043,5.907,7.362,12.249,5.121,14-1.281,1-10.283,1.938-25.877,2.689-9.311.449-75.325.675-87.134.3Z" />
      </g>
    </svg>
    <span class="navbar2-new-game2-tooltiptext" style={{left:iconLabelPosLeft}}>New Game</span>
  </div>
</Link>
);

