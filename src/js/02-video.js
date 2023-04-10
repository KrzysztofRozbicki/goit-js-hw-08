import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.getElementById('vimeo-player');
const video = new Player(videoEl);
const saveTime = data => localStorage.setItem('videoplayer-current-time', data.seconds);
const saveTimeDelay = throttle(saveTime, 1000);
const getCurrentTime = localStorage.getItem('videoplayer-current-time');

video.setCurrentTime(getCurrentTime).then();
video.on('timeupdate', saveTimeDelay);
