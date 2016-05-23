import React from 'react';
import 'whatwg-fetch';

const style = {
    photo: { borderRadius: '50%', width: '30px', height: '30px' },
    smallBlackText : { fontSize: '8px' },
    redText: { color: 'red', fontSize: '30px', fontWeight: 'bold' }
}

/**
 * component wrapper
 * it is necessary because we are not able to pass properties from Router
 */
export default class RestDemoWrapper extends React.Component {
    render() {
        return <RestDemo nickName="soma" imageSrc="http://www.freelargeimages.com/wp-content/uploads/2014/12/Face_clip_art.png" />
    }
}

/**
 * main component
 */
class RestDemo extends React.Component {
    /**
     * this will log a message on the console if items is not defined or if wrong type is supplied
     */
    static propTypes() {
        nickName: React.PropTypes.string.isRequired
        imageSrc: React.PropTypes.string.isRequired
    }

    /**
     * it is called before the render method is executed
     */
    componentWillMount() {
        fetch('http://services.groupkt.com/country/get/all')
            // handling HTTP error statuses
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            // parse json
            .then(response => response.json())

            // show data
            .then(json => {
                console.log(json.RestResponse.result);
                this.setState({countries: json.RestResponse.result});
                }
            )
    }

    /**
     * as soon as the render method has been executed this function is called
     */
    componentDidMount() {
        //alert("componentDidMount");
    }

    /**
     * constructor
     */
    constructor(props) {
        super(props);
        this.state = {countries: []};
    }

    /**
     * returns the needed component markup
     */
    render() {
        return (
            <div>
                {this.props.nickName}
                <img style={style.photo} alt={this.props.nickName + '\'s profile photo'} src={this.props.imageSrc} />
                <CountryList countries = {this.state.countries} />
            </div>
        );
    }
}

/**
 * country list renderer
 */
class CountryList extends React.Component {
    render() {
        var countryName = this.props.countries.map((country) => {
            return country.name == "Hungary" 
                ? <p style={style.redText}>{country.name}</p>
                : <p style={style.smallBlackText}>{country.name}</p>
        });

        return <div>{countryName}</div>
    }
}