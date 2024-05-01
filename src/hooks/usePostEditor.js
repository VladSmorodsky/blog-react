import {useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Image} from "@tiptap/extension-image";

export const usePostEditor = (content, setContent) => {
    return useEditor(
        {
            extensions: [
                StarterKit,
                Image
            ],
            editorProps: {
                attributes: {
                    class: 'border border-black-500 shadow-lg overflow-auto p-3 focus:outline-none'
                }
            },
            content: content ?? '',
            onUpdate: ({editor}) => {
                setContent(editor.getJSON());
            }
        }
    );
}