import {useCurrentEditor} from "@tiptap/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBold, faParagraph} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";

export const EditorMenu = () => { //TODO: Create separate EditorMenuButton
    const {editor} = useCurrentEditor();

    return (
        <div className='mb-1'>
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`text-xl px-2 py-1 border border-black rounded ${editor.isActive('bold') ? 'bg-blue-200' : ''}`}
            >
                <FontAwesomeIcon icon={faBold}/>
            </Button>
            <Button
                onClick={() => editor.chain().focus().setParagraph().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`text-xl px-2 py-1 border border-black rounded`}
            >
                <FontAwesomeIcon icon={faParagraph}/>
            </Button>
        </div>
    );
}