const { UserModel, AddressModel } = require('../domain/models');

const { badRequest } = require('../helpers/httpResponse');
const { unauthorized } = require('../helpers/messages');

const { validations, encrypter, compare, generateToken } = require('../utils');

const {
    Login,
    SignUp,
    Authenticate,
    Update,
    GetUser
} = require('../domain/useCases');

const {
    removeUndefinedParams,
    objIsEmpty
} = require('../utils/objects');

const UsersDatabase = require('../databases/UsersDatabase');

module.exports = {
    async signUp(name, genre, dateOfBirth, email, password, phone, address) {
        try {
            const params = {
                name,
                genre,
                dateOfBirth,
                email,
                password,
                phone,
            };
            const source = 'UserController - singUp';

            if (!address.complement) {
                address.complement = ' ';
            }

            const addressModel = AddressModel(address);

            validations.missingParam({source, listParams: params});
            validations.paramsIsMalformed({source, listParams: params});

            validations.missingParam({source, listParams: addressModel});

            const passwordEncrypted = await encrypter(password);

            const user = UserModel({
                ...params,
                address: addressModel,
                password: passwordEncrypted,
            });

            const newUser = await SignUp(user, UsersDatabase);

            delete newUser.password;

            return newUser;
        } catch (error) {
            throw error;
        }
    },

    async getUser({ userID, email }){
        try {
            return GetUser(userID, email, UsersDatabase);
        } catch (error) {
            throw error;
        }
    },

    async login(email, password) {
        try {
            const params = {
                email,
                password
            };
            const source = 'UserController - Login';

            validations.missingParam({ source, listParams: params });
            validations.paramsIsMalformed({ source, listParams: params });
            validations.emailIsValid({ source, email });

            const logged = await Login(email, password, UsersDatabase, compare);

            if (!logged) {
                throw badRequest({
                    source,
                    message: unauthorized,
                  });
            }

            return await Authenticate(logged, generateToken);
        } catch (error) {
            throw error;
        }
    },

    async update({
        userID,
        name,
        genre,
        password,
        dateOfBirth,
        email,
        phone,
        address,
    }) {
        try {
            const data = {
                name,
                genre,
                dateOfBirth,
                email,
                phone,
                address,
            }

            removeUndefinedParams(data);

            if (data.address) {
                const source = 'UserController - update';

                if (!address.complement) {
                    address.complement = ' ';
                }

                const addressModel = AddressModel(address);
    
                validations.missingParam({source, listParams: addressModel});
            }

            if (objIsEmpty(data)){
                const passwordEncrypted = await encrypter(password);
                data.password = passwordEncrypted;
            }

            const filters = { _id: userID };

            await Update(filters, data, UsersDatabase); 
        } catch (error) {
            throw error;
        }
    }
};