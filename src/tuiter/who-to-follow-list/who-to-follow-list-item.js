import React from "react";

const WhoToFollowListItem = ({who}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle"
                         height={48}
                         src={`/images/${who.avatarIcon}`}
                         alt="user's avatar"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">
                        {who.userName}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                    </div>
                    <div className="text-dark">
                        @{who.handle}
                    </div>
                </div>
                <div className="col-2 my-auto">
                    <button className="btn btn-primary rounded-pill float-end">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;