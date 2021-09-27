import axios from 'axios';

export const siginin = async (email, password) => {
    return axios.post("https://billboardrw.herokuapp.com/auth/local", {
        "identifier": email,
        "password": password,
    });
}

export const siginup = (email,password,fname,lname,genger,phone,nid) => {
    // TODO: Finish this
    return axios.post("https://billboardrw.herokuapp.com/auth/local/register", {
        "identifier": email,
        "password": password,
    });
}