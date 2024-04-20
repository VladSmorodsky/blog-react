import {StarterKit} from "@tiptap/starter-kit";
import {Image} from "@tiptap/extension-image";
import {EditorProvider} from "@tiptap/react";
import {EditorMenu} from "./Editor/EditorMenu";

export const Editor = ({content = '', onUpdate = () => {}, editable = true}) => {
    return (
        <div id={'editor'}>
            <EditorProvider
                extensions={[StarterKit, Image]}
                content={content}
                editable={editable}
                slotBefore={editable ? <EditorMenu/> : ''}
                editorProps={
                    {
                        attributes: {
                            class: editable ? 'border border-black-500 shadow-lg overflow-auto p-3 focus:outline-none' : ''
                        }
                    }
                }
                onUpdate={({ editor }) => {
                    onUpdate(editor.getJSON());
                }}
            />
        </div>
    );
}