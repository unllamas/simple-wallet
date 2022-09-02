import CryptoJS from 'crypto-js';

export function encrypt(value: string): string {
  if(value) {
    var encode = CryptoJS.AES.encrypt(value, process.env.SECRET_KEY).toString();
    
    return encode;
  }
}

export function decrypt(value: string): string {
  if(value){
    var bytes = CryptoJS.AES.decrypt(value, process.env.SECRET_KEY);
    var originalText = bytes?.toString(CryptoJS.enc.Utf8);

    return originalText;
  }
}
