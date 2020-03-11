import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import iframe from 'react-iframe';

class HomeMusic extends React.Component {
    render() {
        return (
            <div>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/752590042&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
        )
    }
}

export default HomeMusic;