const STATUS_CODE = {
  ERROR: 0,
  SUCCESS: 1,
};

const DEVICE_TYPE = {
  IOS: "ios",
  ANDROID: "android",
  WEB: "web",
};

const ACCOUNT_TYPE = {
  SUPERADMIN: "SUPERADMIN",
  ADMIN: "ADMIN"
};

const ACCOUNT_LEVEL = {
  ADMIN: 1
};

const ACTIVE_STATUS = {
  OFFLINE: 0,
  ONLINE: 1,
};

const STATUS = {
  INACTIVE: "INACTIVE",
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
};

const VARIFIED_STATUS = {
  PENDING: "Pending",
  VERIFIED: "Verified",
  UNVERIFIED: "UnVerified",
};

const PER_PAGE_RECORD = 10;

const DB_MODEL_REF = {
  USER: "user",
  BOOK: "book"
};

const ROLE_TYPE = {
  ADMIN: 1,
  USER: 2
};

const DEFAULT_LANGUAGE = {
  ENGLISH: "en"
};

const DEFAULT_SELECTED_LANGUAGE = "en";

const USER_FIELDS = ["id", "isActive", "firstName", "lastName", "email"];

const GENDER = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other"
}

// const PROMOTION_TYPE = {
//   NEW_USER: "NEWUSER",
//   TRX_AMT: "TRXAMT"
// }


module.exports = {
  DB_MODEL_REF,
  DEFAULT_LANGUAGE,
  PER_PAGE_RECORD,
  ACCOUNT_TYPE,
  ACCOUNT_LEVEL,
  ACTIVE_STATUS,
  STATUS,
  GENDER,
  DEVICE_TYPE,
  VARIFIED_STATUS,
  ROLE_TYPE,
  USER_FIELDS,
  DEFAULT_SELECTED_LANGUAGE,
  // PROMOTION_TYPE,
  STATUS_CODE
};
