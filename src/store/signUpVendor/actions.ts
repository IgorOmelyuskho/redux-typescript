import { IAction } from "../../types/store/actionInterface";
import { VendorRole } from "../../types/vendorRole";
import { VendorDto } from '../../types/vendorDto';
import AuthService from "../../services/AuthService";
import * as NotificationService from '../../services/NotificationService';
import { Store, RootState } from '../store';
import { SignUpVendorState } from "../../types/store/signUpVendorState";

export const SIGN_UP_VENDOR_SET_FORM_VALID = 'SIGN_UP_VENDOR_SET_FORM_VALID';
export const SIGN_UP_VENDOR_SET_SUBMITTED = 'SIGN_UP_VENDOR_SET_SUBMITTED';
export const SIGN_UP_VENDOR_SET_FULL_NAME = 'SIGN_UP_VENDOR_SET_FULL_NAME';
export const SIGN_UP_VENDOR_SET_FULL_NAME_ERROR = 'SIGN_UP_VENDOR_SET_FULL_NAME_ERROR';
export const SIGN_UP_VENDOR_SET_EMAIL = 'SIGN_UP_VENDOR_SET_EMAIL';
export const SIGN_UP_VENDOR_SET_EMAIL_ERROR = 'SIGN_UP_VENDOR_SET_EMAIL_ERROR';
export const SIGN_UP_VENDOR_SET_PASSWORD = 'SIGN_UP_VENDOR_SET_PASSWORD';
export const SIGN_UP_VENDOR_SET_PASSWORD_ERROR = 'SIGN_UP_VENDOR_SET_PASSWORD_ERROR';
export const SIGN_UP_VENDOR_SET_RE_PASSWORD = 'SIGN_UP_VENDOR_SET_RE_PASSWORD';
export const SIGN_UP_VENDOR_SET_RE_PASSWORD_ERROR = 'SIGN_UP_VENDOR_SET_RE_PASSWORD_ERROR';
export const SIGN_UP_VENDOR_SIGN_UP_SUCCESS = 'SIGN_UP_VENDOR_SIGN_UP_SUCCESS';
export const SIGN_UP_VENDOR_SET_LOADER_VISIBLE = 'SIGN_UP_VENDOR_SET_LOADER_VISIBLE';

export const SetFormValid = (payload: boolean) => ({
  type: SIGN_UP_VENDOR_SET_FORM_VALID,
  payload
})

export const SetSubmitted = (payload: boolean) => ({
  type: SIGN_UP_VENDOR_SET_SUBMITTED,
  payload
})

export const SetFullName = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_FULL_NAME,
  payload
})

export const SetFullNameError = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_FULL_NAME_ERROR,
  payload
})

export const SetEmail = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_EMAIL,
  payload
})

export const SetEmailError = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_EMAIL_ERROR,
  payload
})

export const SetPassword = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_PASSWORD,
  payload
})

export const SetPasswordError = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_PASSWORD_ERROR,
  payload
})

export const SetRePassword = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_RE_PASSWORD,
  payload
})

export const SetRePasswordError = (payload: string) => ({
  type: SIGN_UP_VENDOR_SET_RE_PASSWORD_ERROR,
  payload
})

export const SetLoaderVisible = (payload: boolean) => ({
  type: SIGN_UP_VENDOR_SET_LOADER_VISIBLE,
  payload,
})

// export const SignUpVendorSuccess = (payload) => ({
//   type: SIGN_UP_VENDOR_SIGN_UP_SUCCESS;
//   payload
// })



// thunks 
export const signUpAsVendor = () => {
  return dispatch => {
    dispatch(SetLoaderVisible(true));
    const signUpVendorState: SignUpVendorState = (Store.getState() as RootState).signUpVendor;
    AuthService.signUpAsVendor(signUpVendorState)
    .then((response) => {
      if (response.data == null || response.data.token == null) {
        NotificationService.notify('Check you email');
        dispatch(SetLoaderVisible(false));
      }
    })
    .catch((error) => {
      NotificationService.notify(error.response.data.error.errorMessage[0]);
    });
  }
};

export type SignUpVendorActions = 
  ReturnType<typeof SetFormValid> |
  ReturnType<typeof SetSubmitted> |
  ReturnType<typeof SetFullName> |
  ReturnType<typeof SetFullNameError> |
  ReturnType<typeof SetEmail> |
  ReturnType<typeof SetEmailError> |
  ReturnType<typeof SetPassword> |
  ReturnType<typeof SetPasswordError> |
  ReturnType<typeof SetRePassword> |
  ReturnType<typeof SetRePasswordError> |
  ReturnType<typeof SetLoaderVisible>;
