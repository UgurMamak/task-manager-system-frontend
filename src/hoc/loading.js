import React, { Component } from 'react';
import BounceLoader from "react-spinners/BounceLoader";

export const Loading=(WrappedComponent, field)=>{
    return class LoadingHOC extends Component {
        render() {
            return (
                <div>
                    {

                        this.props[field].fetching === true ? <BounceLoader
                            size={150}
                            color={"#123abc"}
                            loading={this.props[field].fetching}
                        /> : <WrappedComponent {...this.props} />
                    }

                </div>
            )
        }
    }
}
