const Read = async (email, repositoryInstance) => {
  try {
    return await repositoryInstance.read(email);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = Read;
