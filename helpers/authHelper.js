import bcrypt from 'bcrypt'

// this is for incrypt user password
export const hashPassword = async (password) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }

};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}