const Sequelize = require("sequelize");
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: { type: Sequelize.STRING(50), unique: true, allowNull: false },
        nick: { type: Sequelize.STRING(20), allowNull: false },
        password: { type: Sequelize.STRING(100), allowNull: false },
        createdAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        paranoid: false,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
  }
};
