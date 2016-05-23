# react-demo
react + react-router (url routing library) + whatwg-fetch (http get/post/etc.) + babel (ECMAScript 6/7)

1. Install npm

2. Open WebStorm

3. Create a new Empty Project

4. Open Terminal window

5. create `package.json` file by `npm init` command 

6. `npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react react-dom webpack`
a new directory with name "node_modules" will be created and dependencies are coped into this folder

7. `npm install --save-dev react-router` -> url routing library

8. `npm install --save-dev whatwg-fetch` -> library for HTTP GET/POST/etc. calls (RESTapi)

9. "package.json" file needs to have this content:
```
{
   "name":"demo-empty-project",
   "version":"1.0.0",
   "description":"my first react project",
   "main":"App.js",
   "scripts":{
      "test":"echo \"Error: no test specified\" && exit 1"
   },
   "author":"arnold.somogyi@gmail.com",
   "license":"ISC",
   "devDependencies":{
      "babel-core":"^6.7.7",
      "babel-loader":"^6.2.4",
      "babel-preset-es2015":"^6.6.0",
      "babel-preset-react":"^6.5.0",
      "react":"^15.0.2",
      "react-dom":"^15.0.2",
      "react-router":"^2.4.0",
      "webpack":"^1.13.0",
      "whatwg-fetch":"^1.0.0"
   }
}
```

10. Create a file under [PROJECT_HOME] directory with name `.babelrc`.
Content:
```
{
   "presets":[
      "es2015",
      "react"
   ]
}
```

11. Create a file under [PROJECT_HOME] directory with name `webpack.config.js`.
Content:
```
module.exports = {
    entry: './app/App.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: []
};
```

12. Create a file under [PROJECT_HOME] directory with name `index.html`.
Content:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React test</title>
  </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="bundle.js" ></script>
    </body>
</html>
```

13. Create a new folder under [PROJECT_HOME] directory: `app`.

14. Create a file under [PROJECT_HOME]/app directory with name `App.js`.
Content:
```javascript
import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from './hello-world';

ReactDom.render(
  <HelloWorld />,
  document.getElementById('root')
```

15. Create a file under [PROJECT_HOME]/app directory with name `Home.js`.
Content:
```
import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}
```

16. Open Terminal window

17. Execute this command `node_modules/.bin/webpack`.

18. Open `index.html` file with your favorite web browser.


Appendix
--------
1. How to Make Your React Apps 15x Faster
If you’re using Webpack, you can use DefinePlugin to replace all instances of process.env.NODE_ENV with
'production', and then use the UglifyJsPlugin to remove all the dead code that no longer runs.

webpack.config.js
```
var webpack = require('webpack');
...
plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
        warnings: false
        }
    })
]
```

WebStorm related settings
-------------------------
1. Exclude `node_modules` directory in WebStorm when using refactor, search, etc.
To exclude the directory from being searched via navigation pop-up, pick node_modules directory in Project view,
then from mouse context menu: Mark Directory As -> Excluded

2. Enable auto compile of *.js files with babel
* open Terminal
* `npm install --save-dev babel-cli`
* Now go to Settings > Tools > File watchers, click + button and select Custom file watcher from the list.
  Help: https://www.jetbrains.com/help/webstorm/2016.1/new-watcher-dialog.html)
    - Name: Webpack
    - Description: Transpiles ECMAScript 6 code to ECMAScript 5 with webpack external tool
        
    - Output Filters: [empty]
    
    - Immediate file synchronization: checkbox is cleared
    - Track only root files: checkbox is cleared
    - Show console: Always
    - Trigger watcher regardless: checkbox is selected
    
    - File type: JavaScript
    - Scope: add a new scope
        Name: app directory
        Pattern: file[demo-empty-project]:app//*
       
    - Program: $ProjectFileDir$/node_modules/.bin/webpack
    - Arguments: [empty]
    - Working directory: $ProjectFileDir$
    - Output paths to refresh: [empty]

Screenshots
-----------
About menu
![About menu] (https://github.com/zappee/react-demo/blob/master/docs/react-demo-screenshot-01.png)

Profile menu + sub-menu
![Profile menu + sub-menu] (https://github.com/zappee/react-demo/blob/master/docs/react-demo-screenshot-02.png)

RESTapi demo 1
![RESTapi demo 1] (https://github.com/zappee/react-demo/blob/master/docs/react-demo-screenshot-03a.png)
![RESTapi demo 2] (https://github.com/zappee/react-demo/blob/master/docs/react-demo-screenshot-03b.png)

Materials
---------
* [ECMAScript 6] (http://es6-features.org/#Constants)

* [button + get request to rest] (http://stackoverflow.com/questions/28250103/react-how-to-navigate-via-clickhandlers)
* [routing] (https://css-tricks.com/learning-react-router)
* [menu layout] (https://www.npmjs.com/package/react-layout-pane)
  
* [complete component example] (http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react)
  
* [tutorial] (http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack)
* [tutorial video] (https://css-tricks.com/video-screencasts/147-starting-react-powered-comment-form)  