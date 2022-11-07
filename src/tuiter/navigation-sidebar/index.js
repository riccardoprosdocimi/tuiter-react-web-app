import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return(
        <div className="list-group">
            <Link
                to="#"
                className="list-group-item">
                <i className="bi bi-fonts"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Tuiter
                </span>
            </Link>
            <Link
                to="/tuiter"
                className={
                `list-group-item 
                list-group-item-action 
                ${active === undefined || active === '' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Home
                </span>
            </Link>
            <Link
                to="/tuiter/explore"
                className={
                `list-group-item 
                list-group-item-action
                ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Explore
                </span>
            </Link>
            <Link
                to="/"
                className={
                `list-group-item 
                list-group-item-action`}>
                <i className="bi bi-file-earmark-code-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Labs
                </span>
            </Link>
            <Link
                to="#"
                className={
                    `list-group-item
                    list-group-item-action
                    ${active === 'notifications' ? 'active' : ''}`
                }>
                <i className="bi bi-bell-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Notifications
                </span>
            </Link>
            <Link
                to="#"
                className={
                    `list-group-item 
                    list-group-item-action
                    ${active === 'messages' ? 'active' : ''}`
                }>
                <i className="bi bi-envelope-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1 ms-1">
                    Messages
                </span>
            </Link>
            <Link
                to="#"
                className={
                    `list-group-item
                    list-group-item-action
                    ${active === 'bookmarks' ? 'active' : ''}`
                }>
                <i className="bi bi-bookmark-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Bookmarks
                </span>
            </Link>
            <Link
                to="#"
                className={
                    `list-group-item
                    list-group-item-action
                    ${active === 'lists' ? 'active' : ''}`
                }>
                <i className="bi bi-list-ul"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Lists
                </span>
            </Link>
            <Link
                to="/tuiter/profile"
                className={
                    `list-group-item
                    list-group-item-action
                    ${active === 'profile' ? 'active' : ''}`
                }>
                <i className="bi bi-person-fill"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    Profile
                </span>
            </Link>
            <Link
                to="#"
                className={
                    `list-group-item
                    list-group-item-action
                    wd-more-tab
                    ${active === 'more' ? 'active' : ''}`
                }>
                <i className="bi bi-three-dots"/>
                <span className="d-none d-lg-none d-xl-inline-block d-xxl-inline-block ms-1">
                    More
                </span>
            </Link>
        </div>
    );
}
export default NavigationSidebar;