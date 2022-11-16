import React from "react";

const PostSummaryItem = ({tuit}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">
                        {tuit.topic}
                    </div>
                    <div className="fw-bolder">
                        {tuit.username}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary fw-normal">
                            &nbsp;·&nbsp;{tuit.time}
                        </span>
                    </div>
                    <div className="fw-semibold">
                        {tuit.title}
                    </div>
                </div>
                <div className="col-2 my-auto">
                    <img className="float-end rounded-3"
                         width={70}
                         src={`/images/${tuit.image}`}
                         alt="tuit's depiction"/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;