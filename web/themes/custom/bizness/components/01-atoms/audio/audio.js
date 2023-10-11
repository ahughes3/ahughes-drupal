Drupal.behaviors.audio = {
  attach() {
    const speeds = ['0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x'];
    const audios = document.querySelectorAll('.audio__wrapper');
    audios.forEach((audio) => {
      const { dataset } = audio;

      if (!dataset.jsProcessed) {
        dataset.jsProcessed = true;
        let raf = null;
        const audioPlayer = audio.querySelector('audio');
        const timeline = audio.querySelector('.audio__timeline');
        const duration = audio.querySelector('.audio__total');
        const playIcon = audio.querySelector('.audio__play');
        const pauseIcon = audio.querySelector('.audio__pause');
        const elapsed = audio.querySelector('.audio__elapsed');
        const speed = audio.querySelector('.audio__speed');
        const transcript = audio.querySelector('.transcript');

        const calculateTime = (secs) => {
          const minutes = Math.floor(secs / 60);
          const seconds = Math.floor(secs % 60);
          const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${minutes}:${returnedSeconds}`;
        };

        const whilePlaying = () => {
          const newTime = calculateTime(timeline.value);
          timeline.value = Math.floor(audioPlayer.currentTime);
          elapsed.textContent = newTime;

          const percentage = (timeline.value / timeline.max) * 100;
          const strPercentage = percentage > 0 ? `${percentage}%` : '0';
          audio.style.setProperty('--seek-before-width', strPercentage);

          raf = requestAnimationFrame(whilePlaying);
        };

        playIcon.addEventListener('click', () => {
          // If another audio is playing, stop it.
          const activeAudio = document.querySelector('.audio__wrapper.playing');
          if (activeAudio) {
            const activeAudioPlayer = activeAudio.querySelector('audio');
            activeAudioPlayer.pause();
            activeAudio.classList.remove('playing');
          }
          requestAnimationFrame(whilePlaying);
          audio.classList.add('playing');
          audioPlayer.play();
          pauseIcon.focus();
        });

        pauseIcon.addEventListener('click', () => {
          audio.classList.remove('playing');
          cancelAnimationFrame(raf);
          audioPlayer.pause();
          playIcon.focus();
        });

        speed.addEventListener('click', () => {
          let currentPosition = speeds.indexOf(speed.textContent);
          if (currentPosition + 1 === speeds.length) {
            currentPosition = 0;
          } else {
            currentPosition += 1;
          }
          speed.textContent = speeds[currentPosition || 0];
          audioPlayer.playbackRate = parseFloat(speed.textContent);
        });

        const displayDuration = () => {
          duration.textContent = calculateTime(audioPlayer.duration);
        };

        const setSliderMax = () => {
          timeline.max = Math.floor(audioPlayer.duration);
        };

        const displayBufferedAmount = () => {
          const len = audioPlayer.buffered.length;
          if (len > 0) {
            const amount = Math.floor(audioPlayer.buffered.end(len - 1));
            const percentage = (amount / timeline.max) * 100;
            const strPercentage = percentage > 0 ? `${percentage}%` : '0';
            audio.style.setProperty('--buffered-width', strPercentage);
          }
        };

        if (audioPlayer.readyState > 0) {
          displayDuration();
          setSliderMax();
          displayBufferedAmount();
        } else {
          audioPlayer.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
          });
        }

        audioPlayer.addEventListener('progress', displayBufferedAmount);

        // Timeline events.
        timeline.addEventListener('input', () => {
          const newTime = calculateTime(timeline.value);
          elapsed.textContent = newTime;
          if (!audioPlayer.paused) {
            cancelAnimationFrame(raf);
          }
          timeline.setAttribute('aria-label', `Minuto ${newTime}`);
        });

        timeline.addEventListener('change', () => {
          audioPlayer.currentTime = timeline.value;
          if (!audioPlayer.paused) {
            requestAnimationFrame(whilePlaying);
          }
        });

        audioPlayer.addEventListener('ended', () => {
          audioPlayer.pause();
          audio.classList.remove('playing');
        });

        if (!document.querySelector('#transcript')) {
          transcript.remove();
        }
      }
    });
  },
};
