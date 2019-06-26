import { Button } from 'reactstrap';

const ControlMenu = (props) => {
    return(
        <div className="control-menu">
            <h1 className="title"> Write your story... </h1>
            <div classname="status-box">
                Saved
            </div>
            <Button onClick={props.save} color="success">Save</Button>
        </div>
    )
}

export default ControlMenu;