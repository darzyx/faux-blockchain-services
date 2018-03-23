import React, { Component } from 'react'
import { TweenLite, Circ } from 'gsap'

export default class Particles extends Component {
  constructor(props) {
    super(props)

    this._constructAnimation = this._constructAnimation.bind(this)
  }

  componentDidMount() {
    this._constructAnimation()
  }

  _constructAnimation() {
    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = document.getElementById('particles')
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')

    const points = [ ]
    const nPoints = Math.round(width * height / 10000)
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
    }

    initPointsTweening()
    updateAnimationFrame()

    function initPointsTweening() {
      for (let i = 0; i < nPoints; i++) { tweenPoint(points[i]) }
    }

    function updateAnimationFrame() {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < nPoints; i++) { drawCircle(points[i]) }
      requestAnimationFrame(updateAnimationFrame)
    }

    function tweenPoint(point) {
      TweenLite.to(point, 1 + 1 * Math.random(), {
        x: point.xOrigin - 50 + Math.random() * 100,
        y: point.yOrigin - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => tweenPoint(point)
      })
    }

    function drawCircle(point) {
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
