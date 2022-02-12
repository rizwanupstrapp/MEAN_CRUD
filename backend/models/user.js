const { toJSONData, paginateData } = require("./plugins");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {
    DB_MODEL_REF,
    ROLE_TYPE,
} = require("../config/constant");

const userSchema = new mongoose.Schema(
    {
        roleType: {
            type: String,
            enum: [ROLE_TYPE.ADMIN, ROLE_TYPE.USER],
            default: ROLE_TYPE.USER,
        },
        firstName: { type: String, default: null },
        lastName: { type: String, default: null },
        email: { type: String, required: true, unique: true },
        password: { type: String, default: null },
        userJwt: { type: String, default: "" },
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
        // createdBy: { type: String, default: null },
        // updatedBy: { type: String, default: null },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSONData);
userSchema.plugin(paginateData);

// Check if email is exists
userSchema.statics.isEmailExists = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};

// check if isPhoneNumberExists is exists
userSchema.statics.isPhoneNumberExists = async function (
    phoneNumber,
    excludeId
) {
    const user = await this.findOne({ phoneNumber, _id: { $ne: excludeId } });
    return !!user;
};

// check if AlternatePhoneNumber is exists
userSchema.statics.isAlternatePhoneNumberExists = async function (
    value,
    excludeUserId
) {
    const user = await this.findOne({
        alternatePhoneNumber: value,
        _id: { $ne: excludeUserId },
    });
    return !!user;
};

// Check if password matches
userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = mongoose.model(DB_MODEL_REF.USER, userSchema);
module.exports = User;
