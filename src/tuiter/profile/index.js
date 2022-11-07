import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const user = useSelector(
        state => state.profile
    );
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    };

    return(
        <>
            <div className='row'>
                <div className="col-1 my-auto">
                    <button  onClick={handleClick}
                             className="wd-clear-button-styling">
                        <i className="bi bi-arrow-left text-white fs-5"/>
                    </button>
                </div>
                <div className="col-11">
                    <h4>
                        {user.name}
                    </h4>
                    <h6 className="text-dark">
                        {user.totalTuits} Tuits
                    </h6>
                </div>
            </div>
            <img src={`/images/${user.bannerPicture}`}
                 width="100%"
                 height={250}
                 alt="user's profile banner"/>
            <div className="position-relative">
                <img src={`images/${user.profilePicture}`}
                     className="rounded-circle wd-profile-nudge-up position-absolute"
                     width={200}
                     alt="user's avatar"/>
                <Link className="btn btn-outline-dark rounded-pill float-end mt-3" to="edit-profile">
                    Edit profile
                </Link>
            </div>
            <div className="position-relative wd-profile-nudge-down">
                <h4 className="fw-bold mb-0">
                    {user.name}
                </h4>
                <h6 className="text-dark">
                    {user.handle}
                </h6>
                <br/>
                <p className="text-white">
                    {user.bio}
                </p>
                <div className="row">
                    <div className="col-auto">
                        <i className="bi bi-geo-alt me-2"/>
                        {user.location}
                    </div>
                    <div className="col-auto">
                        <i className="bi bi-balloon me-2"/>
                        Born {user.dateOfBirth}
                    </div>
                    <div className="col-auto">
                        <i className="bi bi-calendar3 me-2"/>
                        Joined {user.dateJoined}
                    </div>
                </div>
                <div className="mt-3">
                    <span className="fw-bold text-white">
                        {user.followingCount}
                    </span> Following
                    &emsp;
                    <span className="fw-bold text-white">
                        {user.followersCount}
                    </span> Followers
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;