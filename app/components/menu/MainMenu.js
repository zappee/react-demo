import React from 'react';
import { Link } from 'react-router';

const style = {
    menu: { position: 'relative', textAlign: 'center', top: '50%', width: '100%', background: 'yellow' },
    submenu: { position: 'relative', textAlign: 'center', top: '50%', width: '100%', background: 'chartreuse',  marginTop: '10px' }
};

export default class MainMenu extends React.Component {
    render() {
        let submenu = null;
        if (/^\/profile/.test(this.props.path)) {
            submenu = <div style={style.submenu}>
                <Link to='/profile/edit'>Edit Profile</Link>
                {'\u00a0'}~{'\u00a0'}
                <Link to='/profile/changeProfilePhoto'>Change Profile Photo</Link>
                {'\u00a0'}~{'\u00a0'}
                <Link to='/profile/messages'>Messages</Link>
                {'\u00a0'}~{'\u00a0'}
                <Link to='/profile/newMessage'>Write a new message</Link>
            </div>
        }

        return (
            <div>
                <div style={style.menu}>
                    <Link to='/'>Home</Link>
                    {'\u00a0'}~{'\u00a0'}
                    <Link to='/about'>About</Link>
                    {'\u00a0'}~{'\u00a0'}
                    <Link to='/contact'>Contact</Link>
                    {'\u00a0'}~{'\u00a0'}
                    <Link to='/profile'>Profile</Link>
                    {'\u00a0'}~{'\u00a0'}
                    <Link to='/restDemo'>Rest API demo</Link>
                </div>
                {submenu}
            </div>
        );
    }
}