import { AUTHENTICATION } from "../constants/action-types"

export function authentication(user) {
    const { id, email } = user
    return { 
        type: AUTHENTICATION, 
        id,
        email
    }
}