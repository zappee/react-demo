import React from 'react';

const style = {
    menu: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'red' }
};

export default class WriteNewMessage extends React.Component {
    render() {
        return (
            <div style={style.menu}>Write a new message</div>
        );
    }
}