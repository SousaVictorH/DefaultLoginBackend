const Update = async (userID, email, repositoryInstance) => {
    try {
      return await repositoryInstance.read({ _id : userID, email })
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = Update;
  