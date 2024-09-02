import jwt from 'jsonwebtoken'

const genToken_Cookie= (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn : '10d'
    })
    res.cookie('jwt',token,{
        maxAge : 10 * 60 * 60 * 1000 ,// MS
        httpOnly : true ,       // prevent XSS Attacks (Cross-site Scripting Attackes)
        sameSite : "strict",    // CSRF attacks cross site request forgery attacks 
        secure : process.env.NODE_ENV !=="development",
    })
}

export default genToken_Cookie;