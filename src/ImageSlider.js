// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {

    const alert = `I am on slide ${this.state.currentSlideIndex}`
    return (
      <div>
        {alert}
      </div>
      )
  }
}

export default ImageSlider
