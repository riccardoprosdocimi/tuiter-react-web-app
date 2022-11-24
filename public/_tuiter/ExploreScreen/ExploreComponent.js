import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(
        `<div class="row">
            <div class="col-11 pe-1">
                <div class="position-relative">
                    <input id="search-tuiter" class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-tuiter"><i class="fa fa-search"></i></span>
                </div>
            </div>
            <div class="col-1 my-auto ps-md-2 ps-sm-0">
                <a href="explore-settings.html"><i class="fas fa-cog fa-2x text-primary"></i></a>
            </div>
        </div>

        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">
                    For you
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Trending
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    News
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Sports
                </a>
            </li>
            <li class="nav-item d-none d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none">
                <a class="nav-link" href="#">
                    Entertainment
                </a>
            </li>
        </ul>

        <div class="position-relative">
            <img src="../images/starship.jpg" alt="SpaceX's Starship" width="100%"/>
            <h1 class="position-absolute wd-position-text-over-image fw-bold fs-2 text-white">SpaceX's Starship</h1>
        </div>

        ${PostSummaryList()}`
    );
}
export default ExploreComponent;