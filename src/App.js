import React from 'react';
import './App.css';

     
    class Toggle extends React.Component {
      state = {
        show: true,
        fullName: "Sabri Ben Seddik a.k.a Kabrera",
        bio: "Originally from the city of Nabeul located in the north west of Tunisia, Kabrera is imbued with his North African roots but also Latin from his Spanish mother. musicality as spicy as it is ecletic, blending R&B and Hip-Hop tones. His music is a hovering and turbulent journey between dreams, frustrations and different states of mind.",
        imgSrc: "/sabsig.jpg",
        profession: "Music Artist",
        digit: 0
      }

     toggle = () => this.setState((currentState) => ({show: !currentState.show}));

    componentDidMount () {
      setInterval ( () => {
        this.setState(digit => ({digit:this.state.digit + 1}));
      }, 1000)
    };
     
    
      render() {
        return (
          <div className="App">
            <button className="mt-3 mb-3 btn btn-outline-dark" onClick={this.toggle}> {this.state.show ? 'Hide profile' : 'Show profile'}</button>    
            {this.state.show && (
              <div>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <img src={this.state.imgSrc} alt=""/>
            <h3 className="mt-3 mb-3">{this.state.profession}</h3>
            <h3>{this.state.digit}</h3>
 
              
          </div> 
            )}
          </div>
         );
      }

     
    }
    
export default Toggle;
