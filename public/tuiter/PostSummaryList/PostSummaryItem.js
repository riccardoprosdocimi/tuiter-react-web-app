const PostSummaryItem = post => {
    return(
        `<li class="list-group-item">
            <div class="row">
                <div class="col-xxl-10 col-xl-9 col-lg-8 col-md-9 col-sm-9">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName}&nbsp;<span class="fa fa-check-circle"></span><span class="text-secondary fw-normal">&nbsp;-&nbsp;${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-3 col-sm-3 my-auto">
                    <img class="float-end rounded" src=${post.image} alt="post image" width="80px" height="80px"/>
                </div>
            </div>
        </li>`
    );
}
export default PostSummaryItem