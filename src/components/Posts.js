import {getPosts} from "../services/post.api";
import {Route} from "react-router-dom";
import PostDetails from "./PostDetails";
import Post from "./Post";
import {useEffect, useState} from "react";

export default function Posts(props) {
    let {match:{url}} = props;
    let [posts, setPosts] = useState([]);
    useEffect(async() => {
        let response = await getPosts();
        setPosts([...response]);
    },[])
    return (
        <div>
            {posts.map(value => <Post item={value} key={value.id}/>)}
            <hr/>
            <Route path={`${url}/:id`} component={PostDetails}/>
            }}/>
        </div>
    );
}