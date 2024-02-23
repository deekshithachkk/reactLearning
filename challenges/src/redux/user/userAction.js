export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess=(user)=>{
    return {
        type:FETCH_USER_REQUEST,
        payload:user
    }
}
export const fetchUsersFailure=(error)=>{
    return {
        type:FETCH_USER_REQUEST,
        payload:error
    }
}