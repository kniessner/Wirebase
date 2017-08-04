import './carousel.scss';

var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
//https://github.com/leandrowd/react-responsive-carousel
//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=PropTypes&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
class CustSlider extends React.Component {
    render() {
        return (
            <Carousel axis="horizontal|vertical" dynamicHeight emulateTouch>
                <div>
                    <img src="./images/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default CustSlider;
