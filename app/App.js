import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

import MainLayout from './components/main-layout/MainLayout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import EditProfile from './components/profile/EditProfile';
import RestDemoWrapper from './components/restapi/RestDemo';
import ChangeProfilePhoto from './components/profile/ChangeProfilePhoto';
import Messages from './components/profile/Messages';
import WriteNewMessage from './components/profile/WriteNewMessage';

ReactDom.render(
    <Router /*history={browserHistory}*/ onUpdate={() => window.scrollTo(0, 0)}>
        <Route component={MainLayout}>
            <Route path="/" component = {Home} />
            <Route path="about" component = {About} />
            <Route path="contact" component = {Contact} />
            <Route path="restDemo" component = {RestDemoWrapper} />
            <Route path="profile">
                <Route path="edit" component = {EditProfile} />
                <Route path="changeProfilePhoto" component = {ChangeProfilePhoto} />
                <Route path="messages" component = {Messages} />
                <Route path="newMessage" component = {WriteNewMessage} />
            </Route>
        </Route>
    </Router>,  
    document.getElementById('root')
);