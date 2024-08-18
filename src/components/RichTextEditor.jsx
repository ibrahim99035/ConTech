import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './Styles/RichTextEditor.css'; // Optional: Custom styles for the editor

const RichTextEditor = ({ onChange, value }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
    />
  );
};

// Define editor modules and formats
RichTextEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'align': [] }],
    ['link', 'image'],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
  ],
};

RichTextEditor.formats = [
    'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'align', 
    'link', 'image', 'color', 'background'
];
export default RichTextEditor;