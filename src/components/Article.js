import React, {Component} from 'react';
import Comments from "./Comments";
import PropTypes from 'prop-types';
import {Button} from "antd";


class Article extends Component {
    getBody = () => {
        const {article, isOpen} = this.props;
        return !isOpen ? null :

            <div>
                <section className={'section'}>{article.text}</section>
                <Comments comments={article.comments}/>
            </div>

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    handleDelete = (id) => {
        //this.props.deleteArticle(id)
    };

    render() {
        const {article, isOpen, toggle, deleteArticle} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <Button onClick={toggle}>
                    {isOpen ? "Close article" : "Open article"}
                </Button>
                <Button
                    onClick={() => deleteArticle(article.id)}
                >
                    Delete
                </Button>
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