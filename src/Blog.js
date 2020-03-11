import React, { Component } from 'react'
import BlogLink from './BlogLink';
import Blog1 from './blog/robotics-with-arduino-uno'

class Blog extends Component {
    render() {
        return (
            <div>
                <h2 class="subHeadings2">Written Pieces</h2>
                <br></br>
                <br></br>
                <BlogLink title={"Learning Robotics with Arduino Uno: Circuit Basics"} date={"11 Mar 2020"} desc={"What I learned doing my first project with Arduino Uno (my first post)."}></BlogLink>
                </div>
        )
    }
}

export default Blog;