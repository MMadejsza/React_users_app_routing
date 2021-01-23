import React, { Component } from 'react';
import OnePost from './OnePost'
import axios from 'axios'

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
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            })
    }


    render() {
        const onePost = this.state.posts.map((item, index) => {
            return <OnePost onePost={item} key={index}></OnePost>
        })
        return (
            <div>

                {onePost}
            </div>
        )
    }
}
export default PostList