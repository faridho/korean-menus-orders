import React from "react"
import * as firebase from "firebase/app";

export const UserContext = React.createContext({ user: null })

class UserProvider extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userAuth => {
            if (userAuth) {
                this.setState({
                    user: userAuth
                })
            }
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider