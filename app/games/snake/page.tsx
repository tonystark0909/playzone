"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react"
import Link from "next/link"

const GRID_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_FOOD = { x: 15, y: 15 }
const INITIAL_DIRECTION = { x: 0, y: -1 }

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [gameRunning, setGameRunning] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
    return newFood
  }, [])

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    setScore(0)
    setGameOver(false)
    setGameRunning(false)
  }, [])

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }

      head.x += direction.x
      head.y += direction.y

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        setGameRunning(false)
        return currentSnake
      }

      // Check self collision
      if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        setGameRunning(false)
        return currentSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10)
        setFood(generateFood())
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameRunning, gameOver, generateFood])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return

      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction, gameRunning])

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150)
    return () => clearInterval(gameInterval)
  }, [moveSnake])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center">Snake Game</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div
                    className="grid bg-gray-800 border-2 border-gray-600 mx-auto"
                    style={{
                      gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                      width: "400px",
                      height: "400px",
                    }}
                  >
                    {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                      const x = index % GRID_SIZE
                      const y = Math.floor(index / GRID_SIZE)
                      const isSnake = snake.some((segment) => segment.x === x && segment.y === y)
                      const isFood = food.x === x && food.y === y
                      const isHead = snake[0]?.x === x && snake[0]?.y === y

                      return (
                        <div
                          key={index}
                          className={`border border-gray-700 ${
                            isSnake ? (isHead ? "bg-green-400" : "bg-green-600") : isFood ? "bg-red-500" : "bg-gray-800"
                          }`}
                        />
                      )
                    })}
                  </div>

                  {gameOver && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
                        <p className="mb-4">Final Score: {score}</p>
                        <Button onClick={resetGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
                          Play Again
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400">{score}</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    onClick={() => setGameRunning(!gameRunning)}
                    disabled={gameOver}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    {gameRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {gameRunning ? "Pause" : "Start"}
                  </Button>
                  <Button
                    onClick={resetGame}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Use arrow keys to control the snake</p>
                  <p>Eat the red food to grow and score points</p>
                  <p>Avoid hitting walls and yourself</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Mobile Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => gameRunning && direction.y !== 1 && setDirection({ x: 0, y: -1 })}
                  >
                    ↑
                  </Button>
                  <div></div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => gameRunning && direction.x !== 1 && setDirection({ x: -1, y: 0 })}
                  >
                    ←
                  </Button>
                  <div></div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => gameRunning && direction.x !== -1 && setDirection({ x: 1, y: 0 })}
                  >
                    →
                  </Button>
                  <div></div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => gameRunning && direction.y !== -1 && setDirection({ x: 0, y: 1 })}
                  >
                    ↓
                  </Button>
                  <div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
