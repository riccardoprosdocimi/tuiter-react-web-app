const PostItem = post => {
    if (post.imageTitle != null && post.imageDescription != null && post.link != null) {
        return(
            `<li class="list-group-item wd-bg-color wd-post-border mb-3 pt-0 pb-0">
                <div class="col-1 wd-offset">
                    <img class="rounded-circle wd-avatar" src=${post.avatarIcon} alt="user's profile picture"/>
                </div>
                <div class="col-11 ms-2 wd-padding">
                    <h6 class="wd-grid-col-author fw-bold">${post.userName}&nbsp;<i class="fa-solid fa-circle-check"></i><span class="text-secondary fw-normal ms-2">@${post.handle}&nbsp;·&nbsp;${post.time}</span></h6>
                    <br/>
                    <p class="wd-content-width">
                        ${post.title}
                    </p>
                    <img class="wd-post-image-with-description border-light" src=${post.image} alt="post image"/>
                    <div class="wd-post-image-description border-light">
                        <h6 class="pt-3 ps-2 pe-2">${post.imageTitle}</h6>
                        <p class="ps-2 pe-2 mb-0 pb-2 text-secondary">
                            ${post.imageDescription}
                            <br/>
                            <a class="text-secondary" href="/"><i class="fa-solid fa-link"></i>&nbsp;${post.link}</a>
                        </p>
                    </div>
    
                    <div class="d-flex justify-content-between mt-3 mb-3 wd-buttons-size wd-buttons-width">
                        <div><a class="text-secondary" href="#"><i class="fa-regular fa-comment me-3"></i><span>${post.comments}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-solid fa-retweet me-3"></i><span>${post.retuits}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-regular fa-heart me-3"></i><span>${post.likes}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-solid fa-arrow-up-from-bracket me-3"></i></a></div>
                    </div>
                </div>
            </li>`
        );
    } else {
        return(
            `<li class="list-group-item wd-bg-color wd-post-border mb-3 pt-0 pb-0">
                <div class="col-1 wd-offset">
                    <img class="rounded-circle wd-avatar" src=${post.avatarIcon} alt="user's profile picture"/>
                </div>
                <div class="col-11 ms-2 wd-padding">
                    <h6 class="wd-grid-col-author fw-bold">${post.userName}&nbsp;<i class="fa-solid fa-circle-check"></i><span class="text-secondary fw-normal ms-2">@${post.handle}&nbsp;·&nbsp;${post.time}</span></h6>
                    <br/>
                    <p class="wd-content-width">
                        ${post.title}
                    </p>
                    <img class="wd-post-image-without-description border-light" src=${post.image} alt="post image"/>
                    <div class="d-flex justify-content-between mt-3 mb-3 wd-buttons-size wd-buttons-width">
                        <div><a class="text-secondary" href="#"><i class="fa-regular fa-comment me-3"></i><span>${post.comments}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-solid fa-retweet me-3"></i><span>${post.retuits}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-regular fa-heart me-3"></i><span>${post.likes}</span></a></div>
                        <div><a class="text-secondary" href="#"><i class="fa-solid fa-arrow-up-from-bracket me-3"></i></a></div>
                    </div>
                </div>
            </li>`
        );
    }
}
export default PostItem