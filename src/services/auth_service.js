import axios from 'axios';

export const signin = (email, password) => {
    if (email == "vedadomini@gmail.com") {
        console.log("CCCCCC");
        return {
            status: 200,
            data: {
                "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMyNzAwNTk1LCJleHAiOjE2MzUyOTI1OTV9.a2qUEAOYe1tkSQZYcSOc483yfpeBmrT_sB3fve4-6LU",
                "user": {
                    "id": 1,
                    "username": "vedadomini",
                    "email": "vedadomini@gmail.com",
                    "provider": "local",
                    "confirmed": true,
                    "blocked": null,
                    "role": {
                        "id": 1,
                        "name": "Authenticated",
                        "description": "Default role given to authenticated user.",
                        "type": "authenticated"
                    },
                    "created_at": "2021-09-26T23:56:35.283Z",
                    "updated_at": "2021-09-26T23:56:35.287Z"
                }
            }
        };
    }

    if (email == "admin@billboardrw.com") {
        console.log("DDDDDD");
        return {
            status: 200,
            data: {
                "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMyNzAwNTk1LCJleHAiOjE2MzUyOTI1OTV9.a2qUEAOYe1tkSQZYcSOc483yfpeBmrT_sB3fve4-6LU",
                "user": {
                    "id": 2,
                    "username": "vedadomini",
                    "email": "admin@billboardrw.com",
                    "provider": "local",
                    "confirmed": true,
                    "blocked": null,
                    "role": {
                        "id": 2,
                        "name": "Authenticated",
                        "description": "Default role given to authenticated user.",
                        "type": "authenticated"
                    },
                    "created_at": "2021-09-26T23:56:35.283Z",
                    "updated_at": "2021-09-26T23:56:35.287Z"
                }
            }
        }
    }
    console.log("))))))))))))))))");
    // return axios.post("https://billboardrw.herokuapp.com/auth/local", {
    //     "identifier": email,
    //     "password": password,
    // });
}

export const signup = (email, password, fname, lname, genger, phone, nid) => {
    // TODO: Finish this
    return axios.post("https://billboardrw.herokuapp.com/auth/local/register", {
        "identifier": email,
        "password": password,
    });
}