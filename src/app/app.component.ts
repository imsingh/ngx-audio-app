import { Component, EventEmitter } from '@angular/core';
import { RxJSAudioService, AudioStream, StreamState } from 'rxjs-audio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio:AudioStream;
  state:StreamState;
  error:boolean = false;
  audioService: RxJSAudioService = new RxJSAudioService();
  tracks:Array<any> = [
    { 
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect',
      artist: 'Ed Sheeran'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkiya Beparwah',
      artist: 'Ustad Nusrat Fateh Ali Khan',
    },
    {
      url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Penny Lane',
      artist: 'The Beatles'
    },
  ];


  constructor() {
    
    // Create Stream
    this.audio = this.audioService.create(this.tracks, { urlKey: 'url', autoPlayNext: true });

    // Error Handling
    this.audio.events()
    .subscribe(event => {
      if(event.type === 'canplay') 
        this.error = false;
      else if(event.type === 'error')
        this.error = true;
    });

    // Update State
    this.audio.getState()
    .subscribe(state => {
      this.state = state;
    });
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  next() {
    this.audio.next();
    this.audio.play();
  }

  previous() {
    this.audio.previous();
    this.audio.play();
  }

  playAt(index) {
    this.audio.playAt(index);
  }
  
  onSliderChangeEnd(change) {
    this.audio.seekTo(change.value);
  }
}
