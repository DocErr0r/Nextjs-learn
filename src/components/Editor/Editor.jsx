import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function MyEditor({ value, setValue }) {
    const modules = {
        toolbar: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link', 'image', 'code-block'], ['clean']],
    };

    return (
        <div>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={(v) => {
                    setValue(v);
                }}
            />
        </div>
    );
}

export default MyEditor;
