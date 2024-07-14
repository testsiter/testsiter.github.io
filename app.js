const { createApp, ref, onMounted, computed } = Vue;

    createApp({
      setup() {
        const player = ref(null);
        const done = ref(false);
        const videoIds = [
          { id: 'YQa2-DY7Y_Q', subtitle: 'Battle for Dream Island - Season 1 (of 5) Episode 1 - January 1st, 2010' },
          { id: 'lcGtU2eYeyU', subtitle: 'Inanimate Insanity - Season 1 (of 3) Episode 1 - September 15th, 2011' },
          { id: 'zLIkFOJ7cdU', subtitle: 'Brawl of the Objects - Season 1 (of 1) Episode 1 - January 1st, 2013' },
          { id: 'cE2hd1mKDZM', subtitle: 'ONE - Season 1 (of 2) Episode 1 - June 12th, 2020' },
          { id: 'CjbUT7C5VY8', subtitle: 'Object Fool - Season 2 (of 2) Episode 1 - January 15th, 2024' }
        ];

        const selectedVideo = ref(videoIds[Math.floor(Math.random() * videoIds.length)]);

        const subtitle = computed(() => selectedVideo.value.subtitle);

        function onYouTubeIframeAPIReady() {
          player.value = new YT.Player('player', {
            videoId: selectedVideo.value.id,
            playerVars: {
              'playsinline': 1
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }

        function onPlayerReady(event) {
          event.target.playVideo();
        }

        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done.value) {
            setTimeout(stopVideo, 6000); // 6 seconds for demonstration
            done.value = true;
          }
        }

        function stopVideo() {
          player.value.stopVideo();
        }

        onMounted(() => {
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        });

        return {
          player,
          subtitle
        };
      }
    }).mount('#app');