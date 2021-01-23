import React, { useState } from 'react';

const ContentPostsCard = (props) => {
    const [content, setTitle] = useState(props.content);
    const [classCss, setClassCss] = useState(props.classCss);
    return (
        <div className="title">
            <h1>{content}</h1>
        </div>
    )
}
export default ContentPostsCard