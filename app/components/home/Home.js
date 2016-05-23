import React from 'react';

const style = {
    menu: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'purple' }
};

export default class Home extends React.Component {
    render() {
        return (
            <div style={style.menu}>Welcome to my world!</div>
        );
    }
}