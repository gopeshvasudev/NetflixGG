import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth as authProvider } from "./index";

export class Auth {
  auth;

  constructor() {
    this.auth = authProvider;
  }

  async signUp({ email, password }) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredentials.user;
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  }

  async signIn({ email, password }) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredentials.user;
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  }

  async updateUser({ fullname }) {
    try {
      const updatedUser = await updateProfile(this.auth.currentUser, {
        displayName: fullname,
        photoURL: "https://avatar.iran.liara.run/public",
      });
      return updatedUser;
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  }
}

const auth = new Auth();
export default auth;
