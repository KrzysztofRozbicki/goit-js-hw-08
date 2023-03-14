import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.getElementById('vimeo-player');
const video = new Player(videoEl);
const updateTimeDelay = throttle(
  data => localStorage.setItem('videoplayer-current-time', data.seconds),
  1000
);

video.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then();
video.on('timeupdate', updateTimeDelay);
