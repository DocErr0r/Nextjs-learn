'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
// Dynamically import ReactQuill, disabling SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

function MyEditor({ value, setValue }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <p>Loading editor...</p>; // Prevent SSR issues

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [
                'link',
                'code-block',
                // 'image',
            ],
            ['clean'],
        ],
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
