export default function PostDetails(props) {
    let {location:{state}} = props;
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
}