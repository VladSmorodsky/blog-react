import {StarterKit} from "@tiptap/starter-kit";
import {EditorProvider} from "@tiptap/react";
import {EditorMenu} from "./Editor/EditorMenu";

export const Editor = ({showEditorMenu = true, content, setContent}) => {
    return (
        <div id={'editor'}>
            <EditorProvider
                extensions={[StarterKit]}
                content={content}
                slotBefore={showEditorMenu ? <EditorMenu/> : ''}
                editorProps={
                    {
                        attributes: {
                            class: 'border border-black-500 shadow-lg overflow-auto p-3 focus:outline-none'
                        }
                    }
                }
                onUpdate={({ editor }) => {
                    setContent(editor.getJSON());
                }}
            />
        </div>
    );
}