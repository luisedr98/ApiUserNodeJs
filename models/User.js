import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        },
        is_active: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
        },
        gender: {
            type: DataTypes.CHAR,
            allowNull: false,
            defaultValue: "F",
        },
    },
    {
        tableName: "users",
        createdAt: false,
        updatedAt: false
    }
);

export default User;