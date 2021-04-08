const { Users } = require('../models');

module.exports = {
  async create(user) {
    try {
      const newUser = await Users.create(user);

      if (!newUser) return undefined;

      return newUser;
    } catch (error) {
      throw error;
    }
  },

  async read(params) {
    try {
      const user = await Users.findOne(params);

      if (!user) return undefined;

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};