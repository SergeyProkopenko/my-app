import React, {Component} from 'react';
// import UserOutput from './UserOutput';
// import UserInput from './UserInput';
import Article from "./Article";
import {articles} from "./fixtures";


class App extends Component {

    state = {
        userName: "Mike1"
    };

    // changeUsernameHandler = (event) => {
    //     this.setState({
    //         userName: event.target.value
    //     })
    // };

    render() {

        //const {userName} = this.state;

        return (
            <div>
                {/*<UserInput change={this.changeUsernameHandler.bind(this)} username={userName}/>*/}
                {/*<UserOutput username={userName}/>*/}
                <Article article={articles[0]}/>
            </div>
        );
    }
}

export default App;