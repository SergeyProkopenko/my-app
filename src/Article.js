import React, {Component} from 'react';

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? "Close" : "Open"}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody = () => {
        const {article} = this.props;
        const {isOpen} = this.state;
        return !isOpen ? null : <section>{article.text}</section>;
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}