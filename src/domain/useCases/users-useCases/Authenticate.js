const Authentication = async (userModel, tokenGerenator) => {
    userModel.token = tokenGerenator(userModel.id);
    return userModel
}

module.exports = Authentication