import React, { Component }from 'react';
import logoBlack from "../../assets/dept_logo_black.svg";
import logoWhite from "../../assets/dept_logo_white.svg";
import './Header.css';

class Header extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <header className="header">
                <div className="header-menu">
                    <img className="logo" src={this.state.clicked ? logoWhite : logoBlack}></img>
                </div>
                <div className="header-title">
                    <h1>Work</h1>
                </div>
                <div className="header-btn">
                    <a href="#">
                        <button>View Case</button>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;
