import React, {Component} from 'react';
import Header from "./header";
import Footer from "./footer";

class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </>
        );
    }
}

export default Layout;