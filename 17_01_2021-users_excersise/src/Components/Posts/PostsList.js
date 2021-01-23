import React, { Component } from 'react';
import OnePost from './OnePost'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount() { //Ten cykl służy do strzelania do api
        this.getPost()
    }
    getPost() {

    }


    render() {
        const onePost = this.state.posts.map(post => {
            return <OnePost onePost={item}></OnePost>

        })
        return (
            { onePost } >
        )
    }
}
export default PostList