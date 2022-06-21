class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async fetchVideoDetail(videoId) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&id=${videoId}`,
      this.requestOptions
    );
    const result = await response.json();
    return [result.items[0].snippet, videoId];
  }

  async fetchVideoTN(videoId) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&id=${videoId}`,
      this.requestOptions
    );

    const result = await response.json();
    return result.items[0].snippet;
  }
}

export default Youtube;
