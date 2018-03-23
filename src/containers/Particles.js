import React, { Component } from 'react'

export default class Particles extends Component {
  constructor(props) {
    super(props)

    this._initAnimation = this._initAnimation.bind(this)
  }

  componentDidMount() {
    this._initAnimation()
  }

  _initAnimation() {
    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = document.getElementById('particles')
    canvas.width = width
    canvas.height = height

    const points = [ ]
    const nPoints = Math.round(width * height / 20000)
    for (let i = 0; i < nPoints; i++) {
      const xPos = Math.round(Math.random() * width)
      const yPos = Math.round(Math.random() * height)
      const newPoint = { x: xPos, xOrigin: xPos, y: yPos, yOrigin: yPos }
      points.push(newPoint)
    }

    console.log(points)
  }

  render() {
    return (
      <canvas id='particles'></canvas>
    )
  }
}
