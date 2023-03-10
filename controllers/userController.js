import User from "../models/User.js";


/**
 * index function allows to get all users or users by pagination
 * @param {Request} req 
 * @param {Response} res 
 * @returns {InstanceType<User>} instance of User Model
 */
const index = async (req, res) => {
    const options = {};

    const { page } = req.query;

    if (page !== undefined) {
        options.limit = 10;
        options.offset = 10 * parseInt(page - 1);
    }

    try {
        const users = await User.findAll(options);
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

const findById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "user not found" });
        else return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
};

const edit = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, gender, is_active, balance } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) return res.status(404).json({ error: "user not found" });

        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.gender = gender || user.gender;
        user.is_active = is_active || user.is_active;
        user.balance = balance.toString().replace(".", ",") || user.balance;

        const newUser = await user.save();
        return res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const userDeleted = await User.destroy({where : {id}});
    
        if(!userDeleted)
            return res.status(404).json({message: 'user not found'});
        else
            return res.status(200).json({message: 'user deleted'})
        
    } catch (error) {
        console.log(error)
    }
};

export default {
    create,
    destroy,
    edit,
    findById,
    index,
};
