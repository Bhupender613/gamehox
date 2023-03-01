const CryptoJS = require("crypto-js");
import * as bcrypt from "bcrypt";
export const dataEncryption = async (text: string) => {
  const privateKey = process.env.ENCRYPTION_KEY;
  const encryptedText = await CryptoJS.AES.encrypt(text, privateKey).toString();
  return encryptedText;
};

export const dataDecryption = async (text: string) => {
  const privateKey = process.env.ENCRYPTION_KEY;
  const decryptText = await CryptoJS.AES.decrypt(text, privateKey);
  const decryptedText = decryptText.toString(CryptoJS.enc.Utf8);
  return decryptedText;
};

export const generatePassword = async (password: string) => {
  const saltOrRounds = 10;
  const genratedPassword = await bcrypt.hash(password, saltOrRounds);
  return genratedPassword;
};

export const matchPassword = async (oldPassword: string, password: string) => {
  const isMatch = await bcrypt.compare(oldPassword, password);
  return isMatch;
};
