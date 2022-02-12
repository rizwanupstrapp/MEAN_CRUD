//========================== Load Modules Start ====================================

//========================== Load Modules End ==============================================

function registerAndLoginMappingRes(register) {
    return {
        userId: register._id,
        firstName: register.firstName,
        lastName: register.lastName,
        email: register.email,
        userJwt: register.userJwt
    }
}
//========================== Export Module Start ==============================

module.exports = {
    registerAndLoginMappingRes
};

//========================== Export Module End ===============================