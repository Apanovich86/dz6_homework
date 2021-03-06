import {useEffect, useState} from "react";
import {getUser} from "../services/user.api";

export default function UserDetailsAPI(props) {
    let {match:{params:{id}}} = props;
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    }, [id]);
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}