import * as CryptoJS from "crypto-js";


function decrypt(encryptedData:any , secretKey:any) {
    const iv = CryptoJS.enc.Hex.parse(encryptedData.iv);
    const ciphertext = encryptedData.ciphertext;
  
    const decryptedJsonString = CryptoJS.AES.decrypt(ciphertext, secretKey, { iv: iv }).toString(CryptoJS.enc.Utf8);
  
    if (encryptedData.type === 'object') {
      return JSON.parse(decryptedJsonString);
    } else if (encryptedData.type === 'string') {
      return decryptedJsonString;
    } else if (encryptedData.type === 'number' || encryptedData.type === 'boolean') {
      return JSON.parse(decryptedJsonString);
    }
  }

  module.exports = decrypt
