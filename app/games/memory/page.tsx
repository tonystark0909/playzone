"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react"
import Link from "next/link"

const CARD_PAIRS = 8
const CARDS = ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎸", "🎺"]

function shuffleArray(array: any[]) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Array<{ id: number; symbol: string; isFlipped: boolean; isMatched: boolean }>>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [time, setTime] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const initializeGame = () => {
    const gameCards = [...CARDS, ...CARDS].map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }))
    setCards(shuffleArray(gameCards))
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setGameWon(false)
    setTime(0)
    setGameStarted(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameStarted && !gameWon) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameStarted, gameWon])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      const firstCard = cards.find((card) => card.id === first)
      const secondCard = cards.find((card) => card.id === second)

      if (firstCard?.symbol === secondCard?.symbol) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => (card.id === first || card.id === second ? { ...card, isMatched: true } : card)),
          )
          setMatches((prev) => prev + 1)
          setFlippedCards([])
        }, 1000)
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => (card.id === first || card.id === second ? { ...card, isFlipped: false } : card)),
          )
          setFlippedCards([])
        }, 1000)
      }
      setMoves((prev) => prev + 1)
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (matches === CARD_PAIRS) {
      setGameWon(true)
    }
  }, [matches])

  const handleCardClick = (cardId: number) => {
    if (!gameStarted) setGameStarted(true)

    if (flippedCards.length === 2) return

    const card = cards.find((c) => c.id === cardId)
    if (card?.isFlipped || card?.isMatched) return

    setCards((prev) => prev.map((card) => (card.id === cardId ? { ...card, isFlipped: true } : card)))
    setFlippedCards((prev) => [...prev, cardId])
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
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

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center">Memory Match</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className={`
                        aspect-square rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105
                        ${
                          card.isFlipped || card.isMatched
                            ? "bg-gradient-to-br from-purple-400 to-pink-400"
                            : "bg-gradient-to-br from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700"
                        }
                        ${card.isMatched ? "ring-2 ring-green-400" : ""}
                      `}
                    >
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        {card.isFlipped || card.isMatched ? card.symbol : "?"}
                      </div>
                    </div>
                  ))}
                </div>

                {gameWon && (
                  <div className="mt-6 text-center">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6">
                      <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
                      <p className="text-gray-300 mb-4">
                        You completed the game in {moves} moves and {formatTime(time)}!
                      </p>
                      <Button onClick={initializeGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
                        Play Again
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Time</div>
                  <div className="text-2xl font-bold text-purple-400">{formatTime(time)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Moves</div>
                  <div className="text-2xl font-bold text-pink-400">{moves}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Matches</div>
                  <div className="text-2xl font-bold text-green-400">
                    {matches}/{CARD_PAIRS}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={initializeGame} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
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
                  <p>• Click cards to flip them over</p>
                  <p>• Find matching pairs of symbols</p>
                  <p>• Match all pairs to win</p>
                  <p>• Try to complete in fewer moves!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
