export const register = (req,res) => {
    //these should be in the request body when registering a user
    const { username, email,password } = req.body;

    //hash password


    //create new user & save to db
}

export const login = (req,res) => {
    //db operations
}

export const logout = (req,res) => {
    //db operations
}