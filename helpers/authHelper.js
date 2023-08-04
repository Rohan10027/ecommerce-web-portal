//first function for hashing using directly bcrypt api
//second to compare and decrypt

import bcrypt, { compare } from 'bcrypt';
// import { bcrypt } from 'bcrypt';  -->as already declared

export const hashPassword =async(password) =>{
    try {
        const saltRounds= 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};


export const comparePassword = async(password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);
};