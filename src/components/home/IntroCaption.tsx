import {Component} from "react";
import Typewriter from "typewriter-effect";

class IntroCaption extends Component {
    render() {
        return <Typewriter
            options={{delay: 20, loop: true}}
            onInit={(typewriter) => {
                typewriter.typeString('Hi there! Welcome to my portfolio website!')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('I\'m an Amsterdam based software engineer with experience in web-app development, ' +
                        'from the backend to the frontend.')
                    .pauseFor(2500)
                    .deleteAll(20)
                    .typeString('Please, feel free to have a look around and to contact me :)')
                    .start();
            }}
        />;
    }
}

export {IntroCaption}