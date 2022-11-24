const NavigationSidebar = (active) => {
    if (active === 'home') {
        return(
            `<div class="list-group">
                <a href="../../index.html"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'explore') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'notifications') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'messages') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'bookmarks') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'lists') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'profile') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    } else if (active === 'more') {
        return(
            `<div class="list-group">
                <a href="/"
                   class="list-group-item">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="../bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href=""
                    class="list-group-item list-group-item-action wd-more-tab active">
                    <span class="fa-stack">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-lg-none d-xl-inline-block d-xxl-inline-block wd-more-text">
                        More
                    </span>
                </a>
            </div>
            <div class="mt-2">
                <a href="../tuit.html" id="tuit-button" class="btn btn-primary w-100 mb-2 rounded-pill fw-bold" type="button">
                Tuit
                </a>
            </div>`
        );
    }
}
export default NavigationSidebar;