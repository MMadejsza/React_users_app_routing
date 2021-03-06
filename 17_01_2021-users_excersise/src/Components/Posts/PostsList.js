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

    componentDidMount() { //This cycle is for get API
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
            <div className="app-content">
                {onePost}
            </div>
        )
    }
}
export default PostList