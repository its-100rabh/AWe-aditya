import { Address, ContactNumber, IKYSDetails } from './entities';
import { GENDER_TYPE } from './enums';

export interface Pagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface RequestCoordinates {
  lat: number;
  lng: number;
}

export interface RequestAddress extends Omit<Address, 'coordinates'> {
  coordinates: RequestCoordinates;
}

export type SignUpWithEmailRequest = {
  email: string;
  password: string;
};

export type SignUpEmailRequest = {
  email: string;
};

export type CreatePasswordRequest = {
  password: string;
};

export type RegistrationDetailsRequest = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender: GENDER_TYPE;
  contactNumber: ContactNumber;
  address: RequestAddress;
  dob: string;
};

export type RegistrationReferralRequest = {
  language: string;
  registrationReferralCode?: string;
  institution?: string;
  academicSession?: {
    startYear: number;
    endYear: number;
  };
};

export type LoginRequest = {
  email?: string;
  contactNumber?: ContactNumber;
  password: string;
};

export type ReferralCodeRequest = {
  referralCode: string;
};

export type StudentRegisterRequest = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  institution?: string;
  academicSession?: {
    startYear: number;
    endYear: number;
  };
  address: RequestAddress;
  gender: GENDER_TYPE;
  dob: string;
  language: string;
  contactNumber: ContactNumber;
  email: string;
  registrationReferralCode?: string;
};

export type NewStudentRegisterRequest = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  institution?: string;
  academicSession?: {
    startYear: number;
    endYear: number;
  };
};

export type StudentUpdateRequest = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  language?: string;
  address?: RequestAddress;
  profilePicture?: string;
  selfie?: string;
};

export type NearestMerchantRequest = {
  page: number;
  limit: number;
  radius: number;
  lat: number;
  lng: number;
};

export type SearchNearestMerchantRequest = Omit<
  NearestMerchantRequest,
  'lat' | 'lng' | 'radius'
> & {
  name?: string;
  category?: string;
  lat?: number;
  lng?: number;
  radius?: number;
  isOnline?: boolean;
};

export type GenerateBillRequest = {
  storeId: string;
  amount: number;
  tier?: string;
};

export type UpdateKYSAadhaarCardDetails = {
  aadhaarNumber: IKYSDetails['aadhaarNumber'];
  aadhaarDocument: IKYSDetails['aadhaarDocument'];
};

export type UpdateRegistrationCertificateDetails = {
  registrationCertificateNumber: IKYSDetails['registrationCertificateNumber'];
  registrationCertificateDocument: IKYSDetails['registrationCertificateDocument'];
};

export type UpdateCollegeIDCardDetails = {
  collegeIdCardNumber: IKYSDetails['collegeIdCardNumber'];
  collegeIdCardDocument: IKYSDetails['collegeIdCardDocument'];
};

export type UpdateAdditionalDocuments = {
  additionalDocuments: Omit<IKYSDetails['additionalDocuments'], '_id' | 'createdAt' | 'updatedAt'>;
};

export type UpdateVideoKYSDetails = {
  videoKYSDocument: IKYSDetails['videoKYSDocument'];
  videoKYSTranscript: IKYSDetails['videoKYSTranscript'];
};

export type ResetPasswordRequest = {
  hash: string;
  password: string;
};

export type ChangePasswordRequest = {
  password: string;
};

export type SignInOtpLessRequest = {
  token: string;
};

export type TPromoCodeQuery = {
  limit: number;
  page: number;
  promoCouponId?: string;
  promoCodeId?: string;
  issuerMerchantId?: string;
  promoCode?: string;
  issuedToStudentId?: string;
  isActive?: boolean;
  isRedeemed?: boolean;
};

export type TPromoCouponQuery = {
  page: number;
  limit: number;
  name?: string;
  issuerMerchantId?: string;
  isActive?: boolean;
};
