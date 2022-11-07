import React from "react";

const TuitStats = ({tuit}) => {
    return(
        <div className="row">
            <div className="col-3">
                <a href="#"
                   className="text-secondary">
                    <i className="bi bi-chat me-3"/>
                    <span>
                        {tuit.replies}
                    </span>
                </a>
            </div>
            <div className="col-3">
                <a href="#"
                   className="text-secondary">
                    <i className="bi bi-arrow-repeat me-3"/>
                    <span>
                        {tuit.retuits}
                    </span>
                </a>
            </div>
            <div className="col-3">
                <a href="#"
                   className="text-secondary">
                    {
                        tuit.liked &&
                        <i className="bi bi-heart-fill me-3 wd-tuit-liked"/>
                    }
                    {
                        !tuit.liked &&
                        <i className="bi bi-heart me-3"/>
                    }
                    <span>
                        {tuit.likes}
                    </span>
                </a>
            </div>
            <div className="col-3">
                <a href="#"
                   className="text-secondary">
                    <i className="bi bi-share me-3"/>
                </a>
            </div>
        </div>
    );
}
export default TuitStats;