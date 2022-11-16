import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col-auto">
                <button className="text-secondary btn border-0 m-0 p-0">
                    <i className="bi bi-chat me-2"/>
                    <span>
                        {tuit.replies}
                    </span>
                </button>
            </div>
            <div className="col-auto">
                <button className="text-secondary btn border-0 m-0 p-0">
                    <i className="bi bi-arrow-repeat me-2"/>
                    <span>
                        {tuit.retuits}
                    </span>
                </button>
            </div>
            <div className="col-auto">
                <button className="text-secondary btn border-0 m-0 p-0">
                    {
                        tuit.liked &&
                        <i onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                liked: false,
                                likes: tuit.likes - 1
                            }
                        ))}
                           className="bi bi-heart-fill me-2 text-danger"/>
                    }
                    {
                        !tuit.liked &&
                        <i onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                liked: true,
                                likes: tuit.likes + 1
                            }
                        ))}
                           className="bi bi-heart me-2 text-secondary"/>
                    }
                    {
                        tuit.liked &&
                        <span onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                liked: false,
                                likes: tuit.likes - 1
                            }
                        ))}>
                            {tuit.likes}
                        </span>
                    }
                    {
                        !tuit.liked &&
                        <span onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                liked: true,
                                likes: tuit.likes + 1
                            }
                        ))}>
                            {tuit.likes}
                        </span>
                    }
                </button>
            </div>
            <div className="col-auto">
                <button className="text-secondary btn border-0 m-0 p-0">
                    {
                        tuit.disliked &&
                        <i onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                disliked: false,
                                dislikes: tuit.dislikes - 1
                        }))}
                           className="bi bi-hand-thumbs-down-fill me-2 text-warning"/>
                    }
                    {
                        !tuit.disliked &&
                        <i onClick={() => dispatch((updateTuitThunk(
                            {
                                ...tuit,
                                disliked: true,
                                dislikes: tuit.dislikes + 1
                            }
                        )))}
                           className="bi bi-hand-thumbs-down me-2 text-secondary"/>
                    }
                    {
                        tuit.disliked &&
                        <span onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                disliked: false,
                                dislikes: tuit.dislikes - 1
                            }
                        ))}>
                            {tuit.dislikes}
                        </span>
                    }
                    {
                        !tuit.disliked &&
                        <span onClick={() => dispatch(updateTuitThunk(
                            {
                                ...tuit,
                                disliked: true,
                                dislikes: tuit.dislikes + 1
                            }
                        ))}>
                            {tuit.dislikes}
                        </span>
                    }
                </button>
            </div>
            <div className="col-auto">
                <button className="text-secondary btn border-0 m-0 p-0">
                    <i className="bi bi-share me-2"/>
                </button>
            </div>
        </div>
    );
}
export default TuitStats;