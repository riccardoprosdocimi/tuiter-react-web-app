import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    updateBio,
    updateDob,
    updateLocation,
    updateName,
    updateWebsite
} from "../reducers/profile-reducer";

const EditProfile = () => {
    const user = useSelector(
        state => state.profile
    );
    let navigate = useNavigate();
    const dontSaveProfile = () => {
        navigate(-1)
    }
    const [banner, setBanner] = useState(user.bannerPicture);
    const [avatar, setAvatar] = useState(user.profilePicture)
    const [name, setName] = useState(user.name);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [website, setWebsite] = useState(user.website);
    const [dob, setDob] = useState(user.dateOfBirth);
    const dispatch = useDispatch();
    const changeName = (event) => {
        const newName = event.target.value;
        setName(newName);
    };
    const changeBio = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    };
    const changeLocation = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    };
    const changeWebsite = (event) => {
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
    };
    const changeDob = (event) => {
        const newDob = event.target.value;
        setDob(newDob);
    }
    const saveProfile = () => {
        dispatch(updateName(name))
        dispatch(updateBio(bio))
        dispatch(updateLocation(location))
        dispatch(updateWebsite(website))
        dispatch(updateDob(dob))
        navigate(-1)
    };

    return(
        <>
            <div className="row">
                <div className="col">
                    <button onClick={dontSaveProfile} className="wd-clear-button-styling float-start me-5">
                        <i className="bi bi-x-lg text-white fs-5"/>
                    </button>
                    <h4 className="float-start">
                        Edit profile
                    </h4>
                    <button onClick={saveProfile} className="btn btn-dark rounded-pill float-end">
                        Save
                    </button>
                </div>
            </div>
            <div className="position-relative">
                <img src="/images/edit-profile-opacity.jpeg"
                     className="opacity-50 position-absolute"
                     width="100%"
                     height={250}
                     alt="null"/>
                <img src={`/images/${banner}`}
                     className="opacity-50"
                     width="100%"
                     height={250}
                     alt="user's profile banner"/>
            </div>
            <div className="position-relative">
                <img src="/images/edit-profile-opacity.jpeg"
                     className="rounded-circle wd-profile-nudge-up position-absolute"
                     width={200}
                     alt="null"/>
                <img src={`/images/${avatar}`}
                     className="rounded-circle wd-profile-nudge-up position-absolute opacity-50"
                     width={200}
                     alt="user's avatar"/>
                <button className="wd-clear-button-styling position-absolute">
                    <i className="bi bi-circle-fill position-absolute wd-circle-avatar-overlap opacity-50 hstack"/>
                    <i className="bi bi-camera position-absolute wd-camera-avatar-overlap opacity-75 hstack"/>
                </button>
                <button className="wd-clear-button-styling position-absolute">
                    <i className="bi bi-circle-fill position-absolute wd-circle-camera-banner-overlap opacity-50 hstack"/>
                    <i className="bi bi-camera position-absolute wd-camera-banner-overlap opacity-75 hstack"/>
                </button>
                <button className="wd-clear-button-styling position-absolute">
                    <i className="bi bi-circle-fill position-absolute wd-circle-x-banner-overlap opacity-50 hstack"/>
                    <i className="bi bi-x position-absolute wd-x-banner-overlap opacity-75 hstack"/>
                </button>
            </div>
            <div className="position-relative wd-profile-nudge-down">
                <form className="form-floating">
                    <input type="text"
                           onChange={changeName}
                           className="form-control"
                           id="name"
                           placeholder="name@example.com"
                           value={name}/>
                    <label className="text-secondary"
                           htmlFor="name">
                        Name
                    </label>
                </form>
                <br/>
                <form className="form-floating">
                    <input type="text"
                           onChange={changeBio}
                           className="form-control"
                           id="bio"
                           placeholder="Something about you"
                           value={bio}/>
                    <label className="text-secondary"
                           htmlFor="bio">
                        Bio
                    </label>
                </form>
                <br/>
                <form className="form-floating">
                    <input type="text"
                           onChange={changeLocation}
                           className="form-control"
                           id="location"
                           placeholder="Where are you?"
                           value={location}/>
                    <label className="text-secondary"
                           htmlFor="location">
                        Location
                    </label>
                </form>
                <br/>
                <form className="form-floating">
                    <input type="text"
                           onChange={changeWebsite}
                           className="form-control"
                           id="website"
                           placeholder="example.com"
                           value={website}/>
                    <label className="text-secondary"
                           htmlFor="website">
                        Website
                    </label>
                </form>
                <br/>
                <form className="form-floating">
                    <input type="text"
                           onChange={changeDob}
                           className="form-control"
                           id="dob"
                           placeholder="month dd, yyyy"
                           value={dob}/>
                    <label className="text-secondary"
                           htmlFor="dob">
                        Birth date
                    </label>
                </form>
                <br/>
                <button className="btn btn-outline-secondary text-start ps-1 mb-2 w-100 text-white">
                    Switch to professional
                    <i className="bi bi-chevron-right float-end"/>
                </button>
            </div>
        </>
    );
}
export default EditProfile;