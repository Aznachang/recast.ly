// var App = () => (
//  <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {window.exampleVideoData}/>
//     </div>
//   </div>
//);

//use 'this' for React class STATE components
//remember 'stateless' uses 'props' (can be w/e) instead of 'this'

class App extends React.Component {
  constructor(props) {
    //allows access for 'App' to React.Component methods
    super(props);

    //these properties will change -
    //1. one video will play, with others in a row
    //2. after that video finishes playing, the next video will be played
    //need to change the '{state}' to do this!
    this.state = {

      videos: window.exampleVideoData, //all vids [{exampleVideoData}]
      currVideo: window.exampleVideoData[0], //1st vid in [{exampleVideoData}]
    }
  }

  //Event Action Handler to change 'STATE'
  handleVideoTitleClick (video) {
    this.setState({
      currVideo: video
    });
  }
  //refer video in player and 'videos' in row
  //to the 'properties' keys in '{this.state}'
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videos} handleVideoTitleClick = {this.handleVideoTitleClick}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
