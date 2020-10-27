// const API = () => {
//   const AuthenticationId =
//     "M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=";

//   const _getToken = async () => {
//     await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//         Authorization: `Basic ${AuthenticationId}`,
//       },
//       body: "grant_type=client_credentials",
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(
//           "response before return ",
//           response,
//           " ",
//           response.access_token
//         );
//         return response.access_token;
//       })
//       .catch((ex) => {
//         console.error("Error ", ex);
//       });
//   };

//   const _getPlaylist = async (token, endpoint) => {
//     await fetch(`${endpoint}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log("playlist ", response);
//       })
//       .catch((ex) => {
//         console.error("Error ", ex);
//       });
//   };

//   const _getPlaylistTracks = async (token, endpoint) => {
//     await fetch(`${endpoint}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log("playlist tracks ", response);
//       })
//       .catch((ex) => {
//         console.error("Error ", ex);
//       });
//   };

//   return {
//     getToken() {
//       return _getToken();
//     },
//     getPlaylist(token, endpoint) {
//       return _getPlaylist(token, endpoint);
//     },
//     getPlaylistTracks(token, endpoint) {
//       return _getPlaylistTracks(token, endpoint);
//     },
//   };
// };

const AuthenticationId =
    "M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=";

export const getToken = async () => {
    await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: `Basic ${AuthenticationId}`,
      },
      body: "grant_type=client_credentials",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(
          "response before return ",
          response,
          " ",
          response.access_token
        );
        return response.access_token;
      })
      .catch((ex) => {
        console.error("Error ", ex);
      });
  };

  export const getPlaylist = async (token, endpoint) => {
    await fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("playlist ", response);
      })
      .catch((ex) => {
        console.error("Error ", ex);
      });
  };

  export const getPlaylistTracks = async (token, endpoint) => {
    await fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("playlist tracks ", response);
      })
      .catch((ex) => {
        console.error("Error ", ex);
      });
  };