import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/user.api";
import {Route} from "react-router-dom";
import UserDetailsAPI from "./UserDetailsAPI";

export default function Users(props) {
    let {match:{url},history} = props;
    let [users, setUsers] = useState([]);
    useEffect(async() => {
      let response = await getUsers();
      setUsers([...response]);
    },[])
    return (
        <div>
            {users.map(value => <User history={history} item={value} key={value.id}/>)}
            <hr/>
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetailsAPI {...props}/>
            }}/>
        </div>
    );
}