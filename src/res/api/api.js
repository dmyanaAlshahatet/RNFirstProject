const domain = "https://dmyana-server.onrender.com";

export const getAllUsers = async () => {
    const route = '/getAllUsers';
    return await appFetch(route, 'GET', null);
};

export const loginUser = async(email , passwprd) => {
    const route = "/Login"
    console.log("mail, password", email, "login");
    const body = {
        email: email,
        passwprd:passwprd
    }
    return await appFetch (route,"POST", body)
}



const appFetch = async (route, method, body) => {
    const url = domain + route;

    const params = {
        method: method || 'GET',
    };

    if (body) {
        params.body = body;
    }

    return await fetch(url, params)
        .then(res => res.json())
        .then(resJson => resJson)
        .catch(e => console.log('fetch error: ', e))
};