import PostSummaryList from "./PostSummaryList.js";

const test = () => {
    $('#test').append(`${PostSummaryList()}`);
}
$(test);