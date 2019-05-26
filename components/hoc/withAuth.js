import React from 'react';

export default function(Component) {
    return class withAuth extends React.Component {
        alertMessage() {
            alert('Some message!');
        }
        
        render() {
            return <Component alertMessage={this.alertMessage} {...this.props} />
        }
    }
}