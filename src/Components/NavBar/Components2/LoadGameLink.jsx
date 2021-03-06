/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar2.css";
import "./LoadGameLink.css";

export const LoadGameLink = ({iconLabelPosLeft}) => (
  <Link to="/LoadGame">
    <div className="load-game2-link">
      <svg viewBox="0 0 150.001 186.622">
        <g transform="translate(-76.481 -47.432)" className="link-icon2">
          <path d="M76.481,197.107c0-1.241,2.784-17.174,3.369-19.284,1.535-5.532,4.4-8.724,11.988-13.334,4.366-2.655,4.514-2.784,5.07-4.465,1.315-3.973,2.908-13.227,4.128-23.988.69-6.082,4-43.305,3.86-43.4-1.206-.794-10.068-7.093-12.094-8.6a25.034,25.034,0,0,1-4.095-3.794c-2.408-3.16-2.562-4.222-2.755-18.981l-.173-13.2H98.927c8.077,0,13.883.141,15.055.367,2.737.526,3.071,1.136,3.261,5.95.2,5.036.628,6.543,2.216,7.794,1.494,1.177,3.453,1.5,7.778,1.3,3.478-.164,4.987-.762,6.107-2.422.609-.9.724-1.891.83-7.145l.123-6.1L151.1,47.56c19.021-.281,19.243-.261,19.876,1.785a14.112,14.112,0,0,1,.4,3.257c.031,3.984.649,8.48,1.287,9.353.835,1.143,2.388,1.58,5.616,1.58a9.358,9.358,0,0,0,4.351-.757c2.523-1.141,3.02-2.341,3.325-8.017.284-5.3.55-5.817,3.262-6.381.8-.167,7.412-.308,14.684-.312l13.22-.008,0,12.363c0,6.944-.174,13.309-.393,14.521-.857,4.736-2.428,6.432-12.646,13.652-5.348,3.779-5.71,4.107-5.71,5.171,0,2.168,3.4,39.272,4.147,45.3,1.37,11.007,2.835,18.874,4.047,21.733.224.528,2.01,1.908,4.618,3.566,5.448,3.465,7.434,5.06,9.029,7.249,2.448,3.359,3.228,6.132,4.948,17.579.528,3.516,1.041,6.808,1.141,7.317l.18.925h-75c-48.081,0-75-.117-75-.326Z" />
        </g>
      </svg>
      <span class="navbar2-load-game2-tooltiptext" style={{left:iconLabelPosLeft}}>Load Game</span>
    </div>
  </Link>
);

