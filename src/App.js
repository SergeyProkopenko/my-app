import React, {Component} from 'react';
import Articles from "./components/Articles";
import {articles} from "./fixtures";
import 'react-day-picker/lib/style.css';
import {DatePicker} from "antd";
import CommentForm from "./components/CommentForm";
import './App.css'
const {RangePicker} = DatePicker;

class App extends Component {

    state = {
        from: new Date(),
        to: new Date()
    };

    render() {

        return (
            <div className='container'>
                <CommentForm />
                <RangePicker
                    format={"DD.MM.YYYY"}
                    onCalendarChange={this.onChangeHandler}
                />
                <Articles articles={articles.filter(article => new Date(article.date) > this.state.from && new Date (article.date) < this.state.to)}/>
            </div>
        );
    }

    onChangeHandler = (data) => {
        this.setState({
            from: new Date(data && data[0]),
            to: new Date(data && data[1])
        })
    }

}

export default App;