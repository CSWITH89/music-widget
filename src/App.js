import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Widget from "./components/Widget";

function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();
  const [playlists, setPlaylists] = useState([]);

  const AuthenticationId =
    "M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=";

  useEffect(() => {
    const getToken = async () => {
      let result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Basic ${AuthenticationId}`,
        },
        body: "grant_type=client_credentials",
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("response access token ", response.access_token);
          return response.access_token;
        })
        .catch((ex) => {
          console.error("Error ", ex);
        });

      console.log("token result ", result);

      setToken(result);
    };

    getToken();
  }, []);

  useEffect(() => {
    const getPlaylist = async (playlistId, accessToken) => {
      let result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("playlist response ", response);
          return response;
        })
        .catch((ex) => {
          console.error("Error ", ex);
        });

      let updatedArray = playlists;
      updatedArray.push(result);
      setPlaylists(updatedArray);

      console.log("updatedArray ", playlists);
    };

    if (token) {
      const getAllPlaylists = () => {
        return Promise.all([
          getPlaylist("37i9dQZF1DWXRqgorJj26U", token),
          getPlaylist("37i9dQZF1DWWGFQLoP9qlv", token),
          getPlaylist("37i9dQZEVXbKCF6dqVpDkS", token),
        ]);
      };

      getAllPlaylists();
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="App">
        <Navbar className="navbar" />
       {playlists ? <Widget playlistData={playlists}></Widget> : null}
        <Hero>
        </Hero>
        {/* <header className="App-header">
          <p>{"Blah" + token}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
