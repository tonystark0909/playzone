"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react"
import Link from "next/link"

type Player = "X" | "O" | null

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X")
  const [winner, setWinner] = useState<Player | "tie">(null)
  const [gameActive, setGameActive] = useState(true)

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ]

  const checkWinner = (board: Player[]) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    if (board.every((cell) => cell !== null)) {
      return "tie"
    }
    return null
  }

  const handleCellClick = (index: number) => {
    if (board[index] || !gameActive) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const gameResult = checkWinner(newBoard)
    if (gameResult) {
      setWinner(gameResult)
      setGameActive(false)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
    setGameActive(true)
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
                <CardTitle className="text-white text-center">Tic Tac Toe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-md mx-auto">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {board.map((cell, index) => (
                      <button
                        key={index}
                        onClick={() => handleCellClick(index)}
                        className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 rounded-lg text-4xl font-bold text-white transition-all duration-200 hover:scale-105"
                        disabled={!gameActive || cell !== null}
                      >
                        {cell}
                      </button>
                    ))}
                  </div>

                  {winner && (
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6">
                        {winner === "tie" ? (
                          <>
                            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">It's a Tie!</h3>
                            <p className="text-gray-300 mb-4">Great game! Want to play again?</p>
                          </>
                        ) : (
                          <>
                            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Player {winner} Wins!</h3>
                            <p className="text-gray-300 mb-4">Congratulations on your victory!</p>
                          </>
                        )}
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
                <CardTitle className="text-white">Game Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-lg text-gray-400 mb-2">Current Player</div>
                  <div className="text-4xl font-bold text-purple-400">{gameActive ? currentPlayer : "Game Over"}</div>
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
                  New Game
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">How to Play</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>• Players take turns placing X's and O's</p>
                  <p>• Get three in a row to win</p>
                  <p>• Rows, columns, or diagonals count</p>
                  <p>• First player is always X</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
