import React, {Component} from 'react';

export default OriginalComponent => class Accordion extends Component {

    state = {
        openItemId: null
    };

    render() {
        return (
            <OriginalComponent
                {...this.props}
                {...this.state}
                toggle={this.toggleOpenArticle}
            />
        );
    }

    toggleOpenArticle = newOpenArticleId => event => {
        const {openItemId} = this.state;
        this.setState({openItemId: openItemId !== newOpenArticleId ? newOpenArticleId : null});
    };
}