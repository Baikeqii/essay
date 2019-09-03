import React from 'react';
import { shuffle } from '../../util';

class BoxItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    handleToggle = () => {
        this.setState({isFront: !this.state.isFront});
    }
    render() {
        const { url } = this.props;
        const { isFront } = this.state;
        const cardClass = isFront ? "card" : "card active";

        return (
            <div className="wrapper">
                <div onClick={this.handleToggle} className={cardClass}>
                    <div className="card-face card-front" style={{background: `${url} no-repeat center`}}></div>
                    <div className="card-face card-back"></div>
                </div>
            </div>
        )
    }
}

export default BoxItem;