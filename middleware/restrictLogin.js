import { getUser } from "../Auth.js";

async function restrictToLoggedinUserOnly(req, res, next) {
    console.log(req)
    const userUid = req.cookies?.uid;
  
    if (!userUid) return res.redirect("/login");
    const user = getUser(userUid);
  
    if (!user) return res.redirect("/login");
  
    req.user = user;
    next();
  }

export {restrictToLoggedinUserOnly};