import React from "react"
import { Modal } from 'antd';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }

    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }


    render() {
        const colStyle = {
            padding: '8px'
        }

        if (this.state.hasError) {
            return (
                { warning }
            )
        }

        return this.props.children;
    }
}

function warning() {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
}


export default ErrorBoundary
