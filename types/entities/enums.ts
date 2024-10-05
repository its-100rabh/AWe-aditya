export enum GENDER_TYPE {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
}

export enum AUTH_TYPE {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
}

export enum INSTITUTE_COURSE_TYPE {
  SCHOOL = 'SCHOOL',
  COLLEGE = 'COLLEGE',
  UNIVERSITY = 'UNIVERSITY',
}

export enum INSTITUTE_TYPE {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum BUSINESS_TYPES {
  PERSONAL = 'PERSONAL',
  FRANCHISE = 'FRANCHISE',
}

export enum BRAND_TYPES {
  SHOES = 'SHOES',
  WATCH = 'WATCH',
  MOBILE = 'MOBILE',
}

export enum PLANS {
  LAUNCH = 'LAUNCH',
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  OTHER = 'OTHER',
}

export enum LANGUAGE {
  english = 'english',
  bengali = 'bengali',
  hindi = 'hindi',
}

export enum TRANSACTION_MODE {
  CR = 'CR',
  DR = 'DR',
}

export enum TRANSACTION_STATUS {
  PENDING = 'PENDING',
  ONGOING = 'ONGOING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

export enum DISCOUNT_TIER {
  BASIC = 'BASIC',
  MEDIUM = 'MEDIUM',
  ADVANCED = 'ADVANCED',
}

export enum TRANSACTION_USER {
  student = 'student',
  merchant = 'merchant',
  platform = 'platform',
}

export enum KYS_VERIFICATION_STATUS {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

export enum KYS_STEP {
  AADHAAR = 'AADHAAR',
  COLLEGE_EMAIL = 'COLLEGE_EMAIL',
  COLLEGE_ID_CARD = 'COLLEGE_ID_CARD',
  REGISTRATION_CERTIFICATE = 'REGISTRATION_CERTIFICATE',
  ADDITIONAL_DOCUMENT = 'ADDITIONAL_DOCUMENT',
  VIDEO = 'VIDEO',
}
