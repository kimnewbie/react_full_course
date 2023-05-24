import React, { Component } from "react";

class Header extends Component {
    state = {
        keywords: ''
    }


    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }


    render() {
        return (
            <>
                <header>
                    <div className="logo">Youjin news</div>
                    <input onChange={(e) => this.inputChange(e)} />
                </header>
            </>
        )
    }

}

export default Header;