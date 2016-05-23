import React from 'react';

const style = {
    menu: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'red' }
};

export default class Contact extends React.Component {
    render() {
        return (
            <div style={style.menu}>email: <a href="mailto:arnold.somogyi@gmail.com">write a letter to us</a></div>
        );
    }
}