import React from "react"
import { Layout } from 'antd';
import { UserContext } from "../UserProvider"

import Login from "./Login/index"
import Root from "./Root/index"


const Views = () => {
    const user = React.useContext(UserContext)
    const display = user ? <Root /> : <Login />
    return (
        <Layout>
            {display}
        </Layout>
    )

}

export default Views

