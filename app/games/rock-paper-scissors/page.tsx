"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCcw } from "lucide-react"
import Link from "next/link"

type Choice = "rock" | "paper" | "scissors" | null
type Result = "win" | "lose" | "tie" | null

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null)
  const [computerChoice, setComputerChoice] = useState<Choice>(null)
  const [result, setResult] = useState<Result>(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [rounds, setRounds] = useState(0)

  const choices = ["rock", "paper", "scissors"] as const
  const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" }

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "tie"

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win"
    }

    return "lose"
  }

  const playGame = (choice: Choice) => {
    const computerChoice = getComputerChoice()
    const gameResult = determineWinner(choice, computerChoice)

    setPlayerChoice(choice)
    setComputerChoice(computerChoice)
    setResult(gameResult)
    setRounds(rounds + 1)

    if (gameResult === "win") {
      setPlayerScore(playerScore + 1)
    } else if (gameResult === "lose") {
      setComputerScore(computerScore + 1)
    }
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
    setPlayerScore(0)
    setComputerScore(0)
    setRounds(0)
  }

  const getResultMessage = () => {
    if (!result) return "Make your choice!"
    if (result === "win") return "You Win! 🎉"
    if (result === "lose") return "Computer Wins! 🤖"
    return "It's a Tie! 🤝"
  }

  const getResultColor = () => {
    if (!result) return "text-gray-400"
    if (result === "win") return "text-green-400"
    if (result === "lose") return "text-red-400"
    return "text-yellow-400"
  }

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
                <CardTitle className="text-white text-center">Rock Paper Scissors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div className={`text-2xl font-bold ${getResultColor()}`}>{getResultMessage()}</div>

                  <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="text-gray-400 mb-2">You</div>
                      <div className="text-6xl">{playerChoice ? emojis[playerChoice] : "❓"}</div>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <div className="text-4xl">VS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 mb-2">Computer</div>
                      <div className="text-6xl">{computerChoice ? emojis[computerChoice] : "❓"}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-gray-400">Choose your weapon:</div>
                    <div className="flex justify-center gap-4">
                      {choices.map((choice) => (
                        <Button
                          key={choice}
                          onClick={() => playGame(choice)}
                          className="text-4xl p-8 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600"
                          title={choice.charAt(0).toUpperCase() + choice.slice(1)}
                        >
                          {emojis[choice]}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">You:</span>
                  <span className="text-2xl font-bold text-green-400">{playerScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Computer:</span>
                  <span className="text-2xl font-bold text-red-400">{computerScore}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                  <span className="text-gray-400">Rounds:</span>
                  <span className="text-xl font-bold text-purple-400">{rounds}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={resetGame} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Game
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>• Rock crushes Scissors</p>
                  <p>• Paper covers Rock</p>
                  <p>• Scissors cuts Paper</p>
                  <p>• Same choice = Tie</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
