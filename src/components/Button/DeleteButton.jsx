import {Button} from "./Button";
import {DeleteIcon} from "../../assets/DeleteIcon";

export const DeleteButton = ({className, setConfirmationDialog, item}) => {
    return (
        <Button className={`border border-red-600 bg-red-600 text-white hover:text-red-600 hover:bg-white ${className}`}
                onClick={setConfirmationDialog}>
            <DeleteIcon/>
        </Button>
    );
}