const sessionIdforUser = new Map();

function setUser(id, user){
    sessionIdforUser.set(id, user);
}

function getUser(id){
    sessionIdforUser.get(id);
}

export {setUser, getUser}