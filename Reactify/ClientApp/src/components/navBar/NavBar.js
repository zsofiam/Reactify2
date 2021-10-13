import React, { useState, useContext } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../context/user";

const NavBar = () => {

    const user = useContext(UserContext);



    const mobileMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    const [track, setTrack] = useState("");
    const history = useHistory();
    const goToTracklist = () => {

        console.log("here");
        history.push(`/track/${track}`);
    }
    const goToSearchBand = () => {
        history.push("/search-band");
    }
    const goToSearchEvent = () => {
        history.push("/events");
    }

    const goToRegister = () => {
        history.push("/register");
    }

    const goToLogin = () => {
        history.push("/login");
    }

    const logOut = () => {
        user.userLoggedOut();
        history.push("/");
        alert("You are logged in");

    }

    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href="/" className="icon-spotify"><img src="./images/Reactify.png" alt="Reactify logo" /></a>

                <a href="javascript:void(0);" className="search-button" onClick={goToSearchBand}>Search Artists</a>

                <div className="search-container">
                    <input name="track"
                        id="track" type="text"
                        placeholder="........."
                        onChange={(e) => {
                            setTrack(e.target.value)
                        }} />
                    <button onClick={goToTracklist}><i className="fa fa-search" /></button>
                </div>

                <a href="javascript:void(0);" className="search-button" onClick={goToSearchEvent}>Search Events</a>
                {user.isLogged ?
                    <a href="javascript:void(0);" className="search-button" onClick={logOut}>Logout</a>
                    :
                    <>
                        <a href="javascript:void(0);" className="search-button" onClick={goToLogin}>Login</a>
                        <a href="javascript:void(0);" className="search-button" onClick={goToRegister}>Register</a>
                    </>

                }



                <a href="javascript:void(0);" className="icon" onClick={mobileMenu}>
                    <i className="fa fa-bars" />
                </a>
            </div>
        </>
    );

}

export default NavBar;