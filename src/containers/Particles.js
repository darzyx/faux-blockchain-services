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
    const nPoints = Math.round(width * height / 5000)
    const nClosest = 5

    createPoints()
    setClosestPoints()
    initPointsTweening()
    updateAnimationFrame()

    function createPoints() {
      for (let i = 0; i < nPoints; i++) {
        const x = Math.round(Math.random() * width)
        const y = Math.round(Math.random() * height)
        const r = Math.round(Math.random() * 3) + 1
        const newPoint = { x, y, r, xOrigin: x, yOrigin: y }
        points.push(newPoint)
      }
    }

    function setClosestPoints() {
      for (let i = 0; i < nPoints; i++) {
        const p1 = points[i]
        const closest = [ ]

        for (let j = 0; j < nPoints; j++) {
          const p2 = points[j]

          if (p1 !== p2) {
            if (closest.length !== nClosest) { closest.push(p2) }
            else {
              const p2Dist = getDistance(p1, p2)

              for (let k = 0; k < nClosest; k++) {
                if (p2Dist < getDistance(p1, closest[k])) {
                  closest[k] = p2
                  break
                }
              }
            }
          }
        }
        p1.closest = closest
      }
    }

    function initPointsTweening() {
      for (let i = 0; i < nPoints; i++) { tweenPoint(points[i]) }
    }

    function updateAnimationFrame() {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < nPoints; i++) {
        drawCircle(points[i])
        drawLines(points[i])
      }
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

    function drawLines(point) {
      for (let i = 0; i < nClosest; i++) {
        ctx.beginPath()
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(point.closest[i].x, point.closest[i].y)
        ctx.strokeStyle = '#558AF2'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    function getDistance(a, b) {
      return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
    }
  }

  render() {
    return (
      <canvas id='particles'></canvas>
    )
  }
}
