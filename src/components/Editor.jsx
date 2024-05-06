import {StarterKit} from "@tiptap/starter-kit";
import {Image} from "@tiptap/extension-image";
import {EditorContent, EditorProvider} from "@tiptap/react";
import {EditorMenu} from "./Editor/EditorMenu";

export const Editor = ({editor = null, content = '', onUpdate = () => {}, editable = true}) => {
    return (
        <div id={'editor'}>
            { editor
                ? (
                    <>
                        <EditorMenu editor={editor}/>
                        <EditorContent editor={editor} />
                    </>
                )
                : (
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
            )}
        </div>
    );
}