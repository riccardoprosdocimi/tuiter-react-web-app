const WhoToFollowListItem = who => {
    return(
        `<li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class="rounded-circle" alt="Virgin logo" width="45px" height="45px"/>
                </div>
                <div class="col-8">
                    <div class="fw-bold">
                        ${who.userName}&nbsp;<i class="fa fa-check-circle"></i>
                    </div>
                    <div class="text-dark">
                        @${who.handle}
                    </div>
                </div>
                <div class="col-2 my-auto">
                    <button class="float-end btn btn-primary rounded-pill" type="button">
                        Follow
                    </button>
                </div>
            </div>
        </li>`
    );
}
export default WhoToFollowListItem;