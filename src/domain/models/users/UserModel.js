const { validations } = require('../../../utils');

const User = ({
    id,
    name,
    genre,
    dateOfBirth,
    email,
    password,
    phone,
    address,
    avatar,
}) => {
    const defaultAvatar = 'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png';

    validations.emailIsValid({ source: 'UserModel', email });

    return {
        id,
        name,
        genre,
        dateOfBirth,
        email,
        password,
        phone,
        address,
        avatar: avatar ? avatar : defaultAvatar,
    }
}

module.exports = User;