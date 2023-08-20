const bcrypt = require('bcrypt');
const comparepasswordfunction = async (password, hashingpassword) => {
    try {
        const comparepassword = await bcrypt.compare(password, hashingpassword);
        return comparepassword;

    }
    catch (error) {
        console.log('Some technical issue');
    }

}

module.exports = comparepasswordfunction;