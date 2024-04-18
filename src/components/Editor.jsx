import {StarterKit} from "@tiptap/starter-kit";
import {BubbleMenu, EditorProvider, FloatingMenu} from "@tiptap/react";
import {EditorMenu} from "./Editor/EditorMenu";

const extensions = [
    StarterKit
]

const content = '<p>Hello World!</p>'

export const Editor =() => {
    return (
        <div id={'editor'}>
            <EditorProvider
                extensions={extensions}
                content={content}
                slotBefore={<EditorMenu/>}
                editorProps={
                    {
                        attributes: {
                            class: 'border border-black-500 shadow-lg overflow-auto p-3 focus:outline-none'
                        }
                    }
                }
            >
            </EditorProvider>
        </div>
    );
}