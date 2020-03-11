import React, { Component } from 'react'

class BlogLink extends Component {
    render() {
        return (
            <div>
                <h3 class="blogLink">
                    <a href="./blog/robotics-with-arduino-uno" title={this.props.title}>{this.props.title}</a>
                </h3>
                <p class="blogDate">{this.props.date}
                    <a class="tag" href="/tag/robotics">robotics</a>
                </p>
                <p class= "blogDesc">{this.props.desc}</p>
            </div>
        )
    }
}

export default BlogLink;