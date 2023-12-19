const User = require("../models/user-model");


/*
 HOME LOGIC 
*/


const home = async (req, res) => {
    try{
        res
        .status(200)
        .send("Welcome to the mern using cotroller");
    } catch(error){
        console.log(error);
    }
};

/*
 Registration LOGIC 
*/

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        console.log("User created:", userCreated);

        res.status(200).json({ userCreated });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ msg: "Internal server problem" });
    }
};


module.exports = { home , register };


// const userExist = await User.findOne({ email});

        // if(userExist){
        //     return res.status(400).json({msg:"email already created"}) ;
        // }

        // const userCreated = await User.create({ username, email, phone, password}) ;