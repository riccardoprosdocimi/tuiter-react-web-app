import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../reducers/tuits-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    };

    return(
        <div className="row">
            <div className="col-xxl-auto col-xl-auto col-l-auto col-md-auto col-sm-2">
                <img src="/images/nasa.png"
                     className="rounded-circle"
                     width={60}
                     alt="user's avatar"/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={event => setWhatsHappening(event.target.value)}/>
                <div>
                    <button className="btn btn-primary rounded-pill float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"/>
                        <i className="bi bi-filetype-gif me-3"/>
                        <i className="bi bi-bar-chart me-3"/>
                        <i className="bi bi-emoji-smile me-3"/>
                        <i className="bi bi-geo-alt"/>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;