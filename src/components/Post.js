import {
    Link,
    withRouter
} from "react-router-dom";
function Post({item}) {
    return (
        <div>
            {item.title} - <Link to={{pathname:`/posts/${item.id}`,state : item}}> post details</Link>
        </div>
    );
}
export  default withRouter(Post);