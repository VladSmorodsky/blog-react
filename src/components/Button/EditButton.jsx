import {Button} from "./Button";
import {EditIcon} from "../../assets/EditIcon";

export const EditButton = ({className, onClick}) => {
    return (
        <Button className={`border border-blue-700 bg-blue-700 text-white hover:text-blue-700 hover:bg-white ${className}`} onClick={onClick}>
            <EditIcon/>
        </Button>
    );
}