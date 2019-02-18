import * as crypto from 'crypto'

export function randomValue(len : number){
    return crypto.randomBytes(Math.ceil(len/2)).toString('hex').slice(0, len);
}

