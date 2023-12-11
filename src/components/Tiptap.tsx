import React from 'react';

const Tiptap = () => {
    const handleInput = (event) => {
        const content = event.target.innerHTML;
        console.log(content);
    };

    return (
        <div
            contentEditable="true"
            className="w-1/2"
            onInput={handleInput}
        >
            Change me!
            <b>This is bold</b>
            <i>This is italic</i>
        </div>
    );
};

export default Tiptap;