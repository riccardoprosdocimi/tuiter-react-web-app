import React from "react";

const PostSummaryItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.userName}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary fw-normal">
                            &nbsp;·&nbsp;{post.time}
                        </span>
                    </div>
                    <div className="fw-semibold">
                        {post.title}
                    </div>
                </div>
                <div className="col-2 my-auto">
                    <img className="float-end rounded-3"
                         width={70}
                         src={`/images/${post.image}`}
                         alt="post's depiction"/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;