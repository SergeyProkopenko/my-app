import React, {Component} from 'react';
import Articles from "./Articles";
import {articles} from "./fixtures";


class App extends Component {

    render() {
        return (
            <div>
                <Articles articles={articles}/>
            </div>
        );
    }
}

export default App;