import React from 'react';
import './game.less';
import BoxItem from './BoxItem';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.picArr = ['cat', 'bear', 'chilcken', 'fox', 'ox'];
    }
    render() {
        const arrLen = 9;
        const arr = new Array(arrLen).join(',').split(',');
        const picPos = `url(${require('./constant/img/people.jpeg')})`;
        
        return <div className='game-wrapper'>
            {
                arr.map(item => {
                    const index = Math.floor((Math.random() * this.picArr.length));
                    // const picPos = `url(${require(`./constant/img/${this.picArr[index]}.png`)})`;
                    return (
                        <BoxItem key={`${new Date}-${Math.random()}`} url={picPos}/>
                    )
                })
            }
        </div>
    }
}

export default Game;