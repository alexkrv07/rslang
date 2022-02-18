import { BASE_URL } from '../../common/constants/constants';

const audio = new Audio();

const playAudio = (playList) => {
  const audioList = playList.map(playItem => `${BASE_URL}${playItem}`)

  audio.src = audioList[0];
  audio.play();

  let index = 1;
  audio.onended = function () {
    if (index < audioList.length) {
      audio.src = audioList[index];
      audio.play();
      index++;
    } else {
      audio.pause();
    }
  }
}

const pauseAudio = () => {
  audio.pause();
}

export { playAudio, pauseAudio };
