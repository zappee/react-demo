import React from 'react';

const style = {
    menu: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'orange' }
};

export default class About extends React.Component {
    render() {
        return (
            <div style={style.menu}>author: arnold.somogyi@gmail.com</div>
        );
    }
}