const Update = async (filters, data, repositoryInstance) => {
    try {
      repositoryInstance.update(filters, data);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = Update;
  