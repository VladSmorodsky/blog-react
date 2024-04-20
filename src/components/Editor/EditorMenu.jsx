import {useCurrentEditor} from "@tiptap/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBold, faImage, faParagraph} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";

export const EditorMenu = () => { //TODO: Create separate EditorMenuButton
    const {editor} = useCurrentEditor();

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

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
            <Button
                onClick={addImage}
                className={`text-xl px-2 py-1 border border-black rounded`}
            >
                <FontAwesomeIcon icon={faImage}/>
            </Button>
        </div>
    );
}