/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "../NavBarRegular.css";
import "./AuthorGithubLink.css";

export class AuthorGithubLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.path = "https://github.com/symLogicDMUS";
    this.state = {selected: false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.openConfirmRedirect = this.openConfirmRedirect.bind(this);
  }  

  getBackgroundColor() {
    if (this.state.selected)
      return this.props.styles.backgroundColorSelected;
    else
      return this.props.styles.backgroundColor;
  }

  getIconColor() {
    if (this.state.selected)
      return this.props.styles.iconColorHover
    else
      return this.props.styles.iconColor
  }

  unselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true});
  }
  openConfirmRedirect() {
    this.props.setConfirmRedirect(true, this.path);
  }


  render() {
      if (this.props.unsavedProgress) {
            return (
                <div className="author-github-regular-link"
                    style={{ borderRight: this.props.styles.border, backgroundColor: this.getBackgroundColor(), cursor:"pointer" }}
                    onMouseEnter={this.select}
                    onMouseLeave={this.unselect}
                    onClick={this.openConfirmRedirect}
                    >
                    <div className="nav-bar-button-icon-container">
                        <img src={`/Images/Navbar/author-github-invert-${this.getIconColor()}.svg`}
                            style={{
                                position: "relative",
                                top: -3,
                                width: 20,
                                height: 20
                            }}
                            alt=""
                        />
                    </div>
                    <div className="nav-bar-button-text-container" style={{ color: "#" + this.getIconColor() }}>
                        Author Github
                    </div>
                </div>
            )
      }

      return (
        <a href="https://github.com/symLogicDMUS" style={{ textDecoration: 'none' }} >
        <div className="author-github-regular-link"
            style={{borderRight:this.props.styles.border, backgroundColor:this.getBackgroundColor()}} 
            onMouseEnter={this.select} 
            onMouseLeave={this.unselect}
        >
          <div className="nav-bar-button-icon-container">
          <img src={`/Images/Navbar/author-github-invert-${this.getIconColor()}.svg`} 
                style={{position:"relative",
                        top:-3,
                        width:20, 
                        height:20}} 
                alt="" 
          />
          </div>
          <div className="nav-bar-button-text-container" style={{color: "#" + this.getIconColor()}}>
            Author Github
          </div>
        </div>
      </a>
        
      )
  }
}; 