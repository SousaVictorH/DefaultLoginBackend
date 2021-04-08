const bcrypt = require('bcrypt');

module.exports = {
    async encrypter(str) {
        try {
            const hash = await bcrypt.hash(str, 10)
            str = hash
            return hash
        } catch (error) {
            console.log('Error in encrypter')
            console.log(error)
            throw error

        }
    },

    async compare(str, strEncrypted) {
        try {
            return await bcrypt.compare(str, strEncrypted)
        } catch (error) {
            console.log('Error in encrypter compare')
            throw error
        }
    },
};