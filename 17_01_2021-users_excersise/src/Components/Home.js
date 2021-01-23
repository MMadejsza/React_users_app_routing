import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render(props) {
        return (
            <div className="content">
                <img src={this.props.path} alt="photo" />
            </div>
        )
    }
}
export default Home