import PostList from "./PostList.js";

const test = () => {
    $('#test').append(`${PostList()}`);
}
$(test);