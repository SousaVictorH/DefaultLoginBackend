const Remove = async (obj, repositoryInstance) => {
  try {
    await repositoryInstance.remove(obj);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = Remove;
