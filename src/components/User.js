import {
    Link,
    withRouter
} from "react-router-dom";
function User({item, history}) {
    const navigateTo = () => {
history.push(`/users/${item.id}`);
    };
    return (
        <div>
            {item.name} - <button onClick={navigateTo}>go to details</button>
        </div>
    );
}
export  default withRouter(User);