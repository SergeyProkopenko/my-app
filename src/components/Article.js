import React, {Component} from 'react';
import Comments from "./Comments";
import PropTypes from 'prop-types';

class Article extends Component {
    getBody = () => {
        const {article, isOpen} = this.props;
        return !isOpen ? null :
            <div>
                <section>{article.text}</section>
                <Comments comments={article.comments}/>
            </div>;
    };

    render() {
        const {article, isOpen, toggle} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggle}>
                    {isOpen ? "Close article" : "Open article"}
                </button>
                {this.getBody()}
            </div>
        );
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
};

export default Article;