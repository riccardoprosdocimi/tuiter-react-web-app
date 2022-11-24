import whoToFollowListItem from "./WhoToFollowListItem.js";
import whoToFollowItems from "./who.js";

const WhoToFollowList = () => {
    return(
        `<ul class="list-group mb-2">
            <li class="list-group-item fw-bold">
                Who to follow
            </li> 
            ${whoToFollowItems.map(whoObj => whoToFollowListItem(whoObj)).join('')}
        </ul>`
    );
}
export default WhoToFollowList;