// Auth codes are necessary for securing routes and managing user sessions.
// Two popular stratergies: JWTtoken and session Token

// JWT is used for stateless authentication mechanisms for users and providers, 
// this means maintaining sessions on the client side instead of storing sessions on the server

// JWT has 3 parts: header, payload, signature.
// header: consits of type of token, alorithm used
// {
//     "alg": "HS256",
//     "typ": "JWT"
// }
// payload: claims, statement about entity, additional data

// signature: encoded header and payload, a secret, and a algorithms specified in the header, and sign that.
// HMACSHA256(
//   base64UrlEncode(header) + "." +
//   base64UrlEncode(payload),
//   secret)
