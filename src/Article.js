import React, {Component} from 'react';
import Comments from "./Comments";
import PropTypes from 'prop-types';

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenSection: false
        };
    }

    render() {
        const {article} = this.props;
        const {isOpenSection} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpenSection ? "Close article" : "Open article"}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody = () => {
        const {article} = this.props;
        const {isOpenSection} = this.state;
        return !isOpenSection ? null :
            <div>
                <section>{article.text}</section>
                <Comments comments={article.comments}/>
            </div>;
    };

    toggleOpen = () => {
        this.setState({
            isOpenSection: !this.state.isOpenSection
        })
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired,
};