import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {

            hasError : false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})

    }

    render(){

        if (this.state.hasError){
            
            return <h1>Oops! This is not good</h1>
        }
    }
}

export default ErrorBoundary;