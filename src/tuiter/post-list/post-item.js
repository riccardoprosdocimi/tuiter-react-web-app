import React from "react";
import "./index.css"

const PostItem = ({post}) => {
    if (post.imageTitle != null && post.imageDescription != null && post.link != null) {
        return(
            <li className="list-group-item wd-bg-color wd-post-border mb-3 pt-0 pb-0">
                <div className="col-1 wd-offset">
                    <img className="rounded-circle wd-avatar"
                         src={post.avatarIcon}
                         alt="user's avatar"/>
                </div>
                <div className="col-11 ms-2 wd-padding">
                    <h6 className="wd-grid-col-author fw-bold">
                        {post.userName}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary fw-normal ms-2">
                            @{post.handle}&nbsp;·&nbsp;{post.time}
                        </span>
                    </h6>
                    <br/>
                    <p className="wd-content-width wd-title-size">
                        <div dangerouslySetInnerHTML={{ __html: post.title}}/>
                    </p>
                    <img className="wd-post-image-with-description border-light"
                         src={post.image}
                         alt="post's depiction"/>
                    <div className="wd-post-image-description border-light">
                        <h6 className="pt-3 ps-2 pe-2">
                            {post.imageTitle}
                        </h6>
                        <p className="ps-2 pe-2 mb-0 pb-2 text-secondary wd-image-description-size">
                            {post.imageDescription}
                            <br/>
                            <a className="text-secondary"
                               href="/">
                                <i className="bi bi-link-45deg"/>
                                &nbsp;{post.link}
                            </a>
                        </p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-3 wd-buttons-size wd-buttons-width">
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-chat me-3"/>
                                <span>
                                    {post.comments}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                                href="#">
                                <i className="bi bi-arrow-repeat me-3"/>
                                <span>
                                    {post.retuits}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-heart me-3"/>
                                <span>
                                    {post.likes}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-upload me-3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    } else {
        return(
            <li className="list-group-item wd-bg-color wd-post-border mb-3 pt-0 pb-0">
                <div className="col-1 wd-offset">
                    <img className="rounded-circle wd-avatar"
                         src={post.avatarIcon}
                         alt="user's avatar"/>
                </div>
                <div className="col-11 ms-2 wd-padding">
                    <h6 className="wd-grid-col-author fw-bold">
                        {post.userName}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary fw-normal ms-2">
                            @{post.handle}&nbsp;·&nbsp;{post.time}
                        </span>
                    </h6>
                    <br/>
                    <p className="wd-content-width wd-title-size">
                        <div dangerouslySetInnerHTML={{ __html: post.title}}/>
                    </p>
                    <img className="wd-post-image-without-description border-light"
                         src={post.image}
                         alt="post's depiction"/>
                    <div className="d-flex justify-content-between mt-3 mb-3 wd-buttons-size wd-buttons-width">
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-chat me-3"/>
                                <span>
                                    {post.comments}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-arrow-repeat me-3"/>
                                <span>
                                    {post.retuits}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-heart me-3"/>
                                <span>
                                    {post.likes}
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="text-secondary"
                               href="#">
                                <i className="bi bi-upload me-3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
export default PostItem;