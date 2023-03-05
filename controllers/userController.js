import User from "../models/User.js";

const index = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    const { first_name, last_name, gender, is_active, balance } = req.body;
    try {
        const user = await User.create({
            first_name,
            last_name,
            gender,
            is_active,
            balance: balance.toString().replace(".", ","),
        });
        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
};

export default {
    index,
    create,
};
