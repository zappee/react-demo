import React from 'react';
import MainMenu from './../menu/MainMenu';

const style = {
    menu: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'red' }
};

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <MainMenu path = {this.props.location.pathname} />
                <main>{this.props.children}</main>
            </div>
        );
    }
}