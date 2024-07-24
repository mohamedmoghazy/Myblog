import { DataTypes } from "sequelize";
import sequelize from "../DB/index.js";

const Post = sequelize.define('Post', {
    author : {
        type: DataTypes.STRING,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    content : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cover : {
        type: DataTypes.STRING,
        allowNull: false
    },
    date : {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Post.sync();

export default Post;