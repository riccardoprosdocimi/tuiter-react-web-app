import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css"

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input className="form-control rounded-pill ps-5"
                           placeholder="Search Tuiter"/>
                    <i className="bi bi-search position-absolute wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <a href="#">
                        <i className="bi bi-gear-fill wd-bottom-4 text-primary float-end fs-4 position-relative"/>
                    </a>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="#"
                       className="nav-link active">
                        For you
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#"
                       className="nav-link">
                        Trending
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#"
                       className="nav-link">
                        News
                    </a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpg" className="w-100" alt="spacex's starship"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship
                </h1>
            </div>
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;