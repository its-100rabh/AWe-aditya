import { MongoDocument } from './common';
import {
  AUTH_TYPE,
  BUSINESS_TYPES,
  GENDER_TYPE,
  INSTITUTE_COURSE_TYPE,
  INSTITUTE_TYPE,
  LANGUAGE,
  PLANS,
  TRANSACTION_STATUS,
  TRANSACTION_MODE,
  DISCOUNT_TIER,
  TRANSACTION_USER,
  KYS_VERIFICATION_STATUS,
  KYS_STEP,
} from './enums';

export type ContactNumber = {
  countryCode: string;
  number: string;
};

export type Upload = {
  _id: string;
  path: string;
  key: string;
  mimeType: string;
  name: string;
  size: string;
  uploadedBy?: string;
};

export type Category = {
  _id: string;
  name: string;
  image: Upload;
};

export interface AcademicSession {
  startYear: string;
  endYear: string;
}

export interface Address {
  formattedAddress: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: number;
  locality?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ICoordinates {
  type: string;
  coordinates: [number, number]; // [ Longitude, Latitude]
}

export interface Student extends MongoDocument {
  scontoId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: GENDER_TYPE;
  dob?: Date;
  profilePicture?: Upload;
  initialVerificationWith?: AUTH_TYPE;
  email?: string;
  institution?: Institution;
  academicSession?: AcademicSession;
  contactNumber?: ContactNumber;
  address?: Address;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isVerified?: boolean;
  isRegistered?: boolean;
  isTribePartner?: boolean;
  referralCode?: string;
  registrationReferralCode?: string;
  password?: string;
  scoins?: number;
  language?: LANGUAGE;
}

export interface Institution extends MongoDocument {
  name: string;
  establishedAt?: string;
  logo?: string;
  currentDirector?: string;
  helpline?: ContactNumber;
  website?: string;
  address?: Address;
  isVerified: boolean;
  board?: string;
  affiliatedTo?: string;
  courseType?: INSTITUTE_COURSE_TYPE;
  coursesOffered?: Array<string>;
  isAutonomous?: boolean;
  subsidiaries?: Array<string>;
  parent?: string;
  tags?: Array<string>;
  isRemoved?: boolean;
  type?: INSTITUTE_TYPE;
  siblings?: Array<string>;
}

export interface IName {
  firstName?: string;
  lastName?: string;
  middleName?: string;
}

export interface Merchant extends MongoDocument {
  name: string;
  email?: string;
  websiteLink?: string;
  redirectionLink?: string;
  address?: Address;
  logo?: Upload;
  owner?: IName;
  description?: string;
  gstNumber?: string;
  foodLicense?: string;
  tradeLicense?: string;
  businessType?: BUSINESS_TYPES;
  plans?: PLANS;
  scoins?: number;
  publicContactNumber?: ContactNumber;
  privateContactNumber?: ContactNumber;
  isVerified?: boolean;
  isOnline?: boolean;
  isActive?: boolean;
  category?: Array<string>;
  storeLocations?: Array<string>;
  discount?: number;
}

export interface IMerchantStoreLocation extends MongoDocument {
  merchantId?: string;
  name: string;
  email?: string;
  address: Address;
  owner?: IName;
  publicContactNumber?: ContactNumber;
  privateContactNumber?: ContactNumber;
  description?: string;
  plans?: PLANS;
  scoins?: number;
  costForOne?: number;
  listings?: Array<string>;
  isVerified?: boolean;
  isActive?: boolean;
  category?: Array<string>;
  foodLicense?: string;
  tradeLicense?: string;
  gstNumber?: string;
}

export interface INotifications extends MongoDocument {
  title: string;
  message: string;
}

export interface Notifications extends MongoDocument {
  title: string;
  message: string;
  image: {
    _id: string;
    key: string;
    mimeType: string;
    size: string;
    path: string;
  };
  type: string;
  userType: string;
  userId: string;
  isRead: boolean;
}

export interface ITransaction extends MongoDocument {
  amount: number;
  mode: TRANSACTION_MODE;
  description: string;
  status: TRANSACTION_STATUS;
  discount: number;
  discountTier: DISCOUNT_TIER;
  receiverMode: TRANSACTION_USER;
  receiverId?: string;
  scoinTransactionId?: string;
  receiverModelType: 'merchants' | 'students' | null;
  receiverDetails?: Student | Merchant | null;
  senderMode: TRANSACTION_USER;
  senderId?: string;
  senderModelType: 'merchants' | 'students' | null;
  senderDetails?: Student | Merchant | null;
  scoins?: number | null;
}

export interface IAdditionalDocument extends MongoDocument {
  key: string;
  label: string;
  file: string;
}

export interface IKYSDetails extends MongoDocument {
  // Student
  student: string;
  // Aadhaar
  aadhaarNumber?: string;
  aadhaarDocument?: string;
  aadhaarDetails?: {
    name: string;
    birthDate: string;
    gender: string;
    vid: string;
  };
  // Registration Certificate
  registrationCertificateNumber?: string;
  registrationCertificateDocument?: string;
  registrationCertificateDetails?: Record<string, string>;
  // College ID Card
  collegeIdCardNumber?: string;
  collegeIdCardDocument?: string;
  collegeIdCardDetails?: Record<string, string>;
  // Additional Documents
  additionalDocuments?: Array<IAdditionalDocument>;
  // 20s Video KYS
  videoKYSDocument?: string;
  videoKYSTranscript?: string;
  // College Email
  collegeEmail?: string;
  // Scores & Status
  status?: KYS_VERIFICATION_STATUS;
  verificationScore?: number; // Numeric score to total verification score
  verificationPercentage?: number; // Numeric score to total verification percentage, value between 0 to 1
  verificationStatus: {
    isAadhaarVerified: boolean;
    isRegistrationCertificateVerified: boolean;
    isCollegeIdCardVerified: boolean;
    isAdditionalDocumentsVerified: boolean;
    isVideoKYSDocumentVerified: boolean;
    isCollegeEmailVerified: boolean;
  };
  verificationRejectionLogs?: Array<KYSRejectionLogs>;
  expiryDate?: Date;
}

export interface KYSRejectionLogs {
  reason: string;
  date: Date;
  issueFor: KYS_STEP;
  rejectedBy: string;
  resolved: boolean;
}

export interface IProduct extends MongoDocument {
  name: string;
  description: string;
  image: Upload;
  isActive: boolean;
  price: number;
  itemDiscount: number;
}

export interface IPromoCouponRule {
  maxRedeems?: number;
  timeLimit?: {
    start?: string;
    end?: string;
  };
  matchRule: 'ALL' | 'ANY' | 'NONE';
}

export interface IPromoCoupon extends MongoDocument {
  name: string;
  issuerMerchantId?: string;
  details?: string;
  howToRedeem?: string;
  isActive: boolean;
  couponRule?: IPromoCouponRule;
}

export interface IPromoCode extends MongoDocument {
  promoCode: string;
  isRedeemed?: boolean;
  isActive?: boolean;
  issuedToStudentId?: string;
  issuerMerchantId?: string;
  promoCouponId?: string;
  validFrom?: string;
  validTill?: string;
}

export interface IPromoCodeWithCoupon extends IPromoCode {
  promoCoupon: IPromoCoupon;
  issuerMerchant: Merchant;
}
