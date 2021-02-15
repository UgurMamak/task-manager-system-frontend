import React, {Component} from 'react';

class Layout2 extends Component {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default Layout2;