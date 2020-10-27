const APIController = (() => {

    const AuthenticationId = "M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=";

    const _getToken = async () => {

    await fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Authorization": `Basic ${AuthenticationId}`
    },
    body: "grant_type=client_credentials"
})
    .then(response => response.json())
    .then(response => {
        console.log('response before return ',response);
        return response.access_token;
    }).catch(ex => {
        console.error("Error ", ex);
    });

    }


    return {
        getToken() {
            console.log('private ', _getToken());
            return _getToken();
        },
    };
})();

export default APIController;
