import Hashids from 'hashids';
import { saltConst } from './utils';
import CryptoJS from "crypto-js";

export class EncodeDecode {
    
    constructor(salt:string) {
        this.salt = salt;   
    }

    salt: string;

    public encode(value: string) {
        return value;
    }

    public decode(value: string) : string {
        return value;
        
    }
}

export class HashlidEncoDecode extends EncodeDecode {
    constructor(salt: string) {
        super(salt);
        this.hashids = new Hashids(salt);
    }
    
    hashids: Hashids;


    encode(value: string) {
        const encode = this.hashids.encodeHex(value);
        return encode;
    }
    
    decode(value: string) {
        const decodedValue = this.hashids.decodeHex(value);
        if (decodedValue.length > 0) {
            return decodedValue;
        }
        return value;
    }
}

export class CryptoEncodeDecode extends EncodeDecode {
    constructor(salt: string) {
        super(salt);
        this.salt = salt;
        // this.cryptoJs = new CryptoJS(); 
    }

    

    encode(data) {
        return CryptoJS.AES.encrypt(data, this.salt);
    }

    decode(encryptedData) {
        const decrypted = CryptoJS.AES.decrypt(encryptedData, this.salt);

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    
}