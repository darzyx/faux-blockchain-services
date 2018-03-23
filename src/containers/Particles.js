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
      const radius = Math.round(Math.random() * 3)
      const newPoint = {
        r: radius,
        x: xPos,
        xOrigin: xPos,
        y: yPos,
        yOrigin: yPos
      }
      points.push(newPoint)
      Circle(newPoint)
    }

    function Circle(point) {
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI, false)
      ctx.fillStyle = '#558AF2'
      ctx.fill()
    }
  }

  render() {
    return (
      <canvas id='particles'></canvas>
    )
  }
}
