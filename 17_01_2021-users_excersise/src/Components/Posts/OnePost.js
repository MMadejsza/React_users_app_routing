import React, { Component } from 'react';
import ContentPostsCard from './ComponentsPosts/ContentPostsCard'
class OnePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: [
                {
                    id: 1,
                    name: "Jan Rokita"
                },
                {
                    id: 2,
                    name: 'Andrzej Duda'
                },
                {
                    id: 3,
                    name: 'Jarosław Kaczyński'
                },
                {
                    id: 4,
                    name: 'Donal Tusk'
                },
                {
                    id: 5,
                    name: 'Joanna Mucha'
                },
                {
                    id: 6,
                    name: 'Borys Budka'
                },
                {
                    id: 7,
                    name: 'Zbigniew Ziobro'
                },
                {
                    id: 8,
                    name: 'Włodzimierz Czarzasty'
                },
                {
                    id: 9,
                    name: 'Mateusz Morawiecki'
                },
                {
                    id: 10,
                    name: 'Andrzej Duda'
                },
                {
                    id: 10,
                    name: 'łukasz Szumowski'
                },
            ]
        }
    }

    render() {
        const userName = this.state.userName.map(user => {
            if (user.id === this.props.onePost.userId) {
                return <ContentPostsCard content={user.name} classCss="author"></ContentPostsCard>
            }
        })
        return (
            <div className="card">
                <div className="card-body">
                    <ContentPostsCard content={this.props.onePost.title} classCss="title"></ContentPostsCard>
                    <ContentPostsCard content={this.props.onePost.body} classCss="body"></ContentPostsCard>
                    {userName}
                </div>
            </div>
        )
    }
}
export default OnePost