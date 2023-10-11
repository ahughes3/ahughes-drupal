Drupal.behaviors.episodeToggleTranscript = {
  attach() {
    const transcriptList = document.querySelectorAll('.transcript button');

    function toggleTranscript(event) {
      const content = event.target.closest('.transcript');
      const buttonLabel = content.querySelector('button span');

      if (content.classList.contains('expanded')) {
        buttonLabel.innerText = 'Show Full Transcript';
      } else {
        buttonLabel.innerText = 'Collapse Transcript';
      }
      content.classList.toggle('expanded');
    }

    if (transcriptList?.length) {
      transcriptList.forEach((transcript) => {
        const { dataset } = transcript;
        if (!dataset.jsProcessed) {
          dataset.jsProcessed = true;
          transcript.addEventListener('click', toggleTranscript);
        }
      });
    }
  },
};
