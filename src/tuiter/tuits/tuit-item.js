import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (tid) => {
        dispatch(deleteTuitThunk(tid));
    }

    return(
        <li className="list-group-item wd-bg-color border-1 pb-2 pt-2">
            <div className="row">
                <div className="col-xxl-auto col-xl-auto col-l-auto col-md-auto col-sm-2">
                    <img className="rounded-circle"
                         width={50}
                         src={`/images/${tuit.image}`}
                         alt="user's avatar"/>
                </div>
                <div className="col-10">
                    <div>
                        <button className="float-end wd-clear-button-styling">
                            <i className="bi bi-trash3"
                               onClick={() => {deleteTuitHandler(tuit._id)}}/>
                        </button>
                    </div>
                    <h6 className="fw-bold">
                        {tuit.userName}&nbsp;
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary fw-normal ms-2">
                            {tuit.handle}&nbsp;·&nbsp;{tuit.time}
                        </span>
                    </h6>
                    <p>
                        {tuit.tuit}
                    </p>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
}
export default TuitItem;