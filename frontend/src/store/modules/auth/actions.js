export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password }
  };
}

export function signInSuccess(token) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token }
  };
}

export function signUpRequest(username, email, password, firstName, lastName) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { username, email, password, firstName, lastName }
  };
}

export function forgotPassword(email) {
  return {
    type: "@auth/SIGN_IN_SUCCESS_EMAIL",
    payload: { email }
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT"
  };
}
