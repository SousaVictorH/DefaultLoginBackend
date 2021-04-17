const Create = async (email, token, repositoryInstance) => {
  try {
    await repositoryInstance.create(email, token);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = Create;
