import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class BlogDetail extends React.Component {
    
    static getInitialProps() {

    }
    
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-detail-page" title="I am Blog Detail page">
                </BasePage>
            </BaseLayout>
        )
    }
}

export default BlogDetail;