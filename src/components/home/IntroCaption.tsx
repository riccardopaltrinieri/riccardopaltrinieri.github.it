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
                    .pauseFor(4500)
                    .deleteAll()
                    .pauseFor(2500)
                    .typeString('Ahem..')
                    .pauseFor(1500)
                    .deleteAll(500)
                    .pauseFor(3500)
                    .typeString('This is getting awkward.')
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(1500)
                    .typeString('Why are you still reading here?')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('You are waiting for some easter egg, aren\'t you?')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Well..')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Why don\'t you try writing "easter-egg" in the url bar and leave me alone?')
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(4500)
                    .start();
            }}
        />;
    }
}

export {IntroCaption}