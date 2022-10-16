import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return(
        `<ul class="list-group">
            ${posts.map(postObj => PostItem(postObj)).join('')}
        </ul>`
    )
}
export default PostList;