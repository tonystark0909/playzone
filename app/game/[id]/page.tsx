"use client"

import { useState } from "react"
import { ArrowLeft, Star, Users, Share2, Heart, Flag } from "lucide-react"
import Link from "next/link"

// Only working CrazyGames embeds
const gameData = {
  "snake-io": {
    title: "Snake.io",
    description:
      "The modern version of the classic snake game! Grow your snake by eating colorful orbs and avoid other players. Compete against players worldwide in this addictive multiplayer game.",
    category: "Action",
    rating: 4.8,
    plays: "2.1M",
    embedUrl: "https://www.crazygames.com/embed/snake-io",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Snake.io",
    instructions: [
      "Use mouse to control your snake",
      "Eat colorful orbs to grow longer",
      "Avoid hitting other snakes",
      "Try to become the longest snake",
    ],
    tags: ["snake", "multiplayer", "io", "arcade"],
  },
  "madalin-stunt-cars-2": {
    title: "Madalin Stunt Cars 2",
    description:
      "Amazing 3D racing game with realistic physics! Choose from supercars and perform incredible stunts on massive maps. Drive freely or race against other players online.",
    category: "Racing",
    rating: 4.7,
    plays: "1.8M",
    embedUrl: "https://www.crazygames.com/embed/madalin-stunt-cars-2",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Madalin+Cars",
    instructions: [
      "Use WASD or arrow keys to drive",
      "Press Space for handbrake",
      "Perform stunts on ramps",
      "Explore the open world freely",
    ],
    tags: ["racing", "3d", "cars", "stunts"],
  },
  "bubble-shooter": {
    title: "Bubble Shooter",
    description:
      "The classic bubble shooting game! Aim and shoot bubbles to match three or more of the same color. Clear all bubbles to advance to the next level in this addictive puzzle game.",
    category: "Puzzle",
    rating: 4.5,
    plays: "2.8M",
    embedUrl: "https://www.crazygames.com/embed/bubble-shooter",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bubble+Shooter",
    instructions: [
      "Aim with your mouse",
      "Click to shoot bubbles",
      "Match 3 or more same colors",
      "Clear all bubbles to win",
    ],
    tags: ["bubble", "shooter", "puzzle", "match"],
  },
  "bloons-td-5": {
    title: "Bloons TD 5",
    description:
      "The ultimate tower defense game! Place monkey towers to pop balloons before they reach the end. Upgrade your towers and use special abilities to defeat challenging balloon waves.",
    category: "Strategy",
    rating: 4.9,
    plays: "3.2M",
    embedUrl: "https://www.crazygames.com/embed/bloons-td-5",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bloons+TD+5",
    instructions: [
      "Place towers along the path",
      "Upgrade towers for more power",
      "Use special abilities wisely",
      "Stop all balloons from escaping",
    ],
    tags: ["tower", "defense", "strategy", "bloons"],
  },
  "subway-surfers": {
    title: "Subway Surfers",
    description:
      "The world's most popular endless runner! Run as far as you can in this endless running adventure. Dodge trains, collect coins, and unlock new characters and hoverboards.",
    category: "Action",
    rating: 4.6,
    plays: "5.1M",
    embedUrl: "https://www.crazygames.com/embed/subway-surfers",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Subway+Surfers",
    instructions: [
      "Swipe left/right to change lanes",
      "Swipe up to jump",
      "Swipe down to slide",
      "Collect coins and power-ups",
    ],
    tags: ["runner", "endless", "subway", "adventure"],
  },
  "temple-run-2": {
    title: "Temple Run 2",
    description:
      "The sequel to the smash hit phenomenon! Navigate perilous cliffs, zip lines, mines and forests as you try to escape with the cursed idol in this endless running adventure.",
    category: "Adventure",
    rating: 4.4,
    plays: "2.9M",
    embedUrl: "https://www.crazygames.com/embed/temple-run-2",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Temple+Run+2",
    instructions: [
      "Swipe to turn, jump and slide",
      "Tilt to lean into turns",
      "Collect coins and gems",
      "Avoid obstacles and demons",
    ],
    tags: ["temple", "run", "adventure", "endless"],
  },
  "cut-the-rope": {
    title: "Cut the Rope",
    description:
      "Feed candy to Om Nom! Cut the rope in the right order and time to feed the adorable green monster. Collect stars and solve physics-based puzzles in this award-winning game.",
    category: "Puzzle",
    rating: 4.7,
    plays: "1.5M",
    embedUrl: "https://www.crazygames.com/embed/cut-the-rope",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Cut+the+Rope",
    instructions: [
      "Click and drag to cut ropes",
      "Feed candy to Om Nom",
      "Collect all stars for bonus",
      "Use physics to solve puzzles",
    ],
    tags: ["puzzle", "physics", "cute", "candy"],
  },
  "geometry-dash": {
    title: "Geometry Dash",
    description:
      "Jump and fly your way through danger in this rhythm-based action platformer! Push your skills to the limit as you jump, fly and flip your way through dangerous passages and spiky obstacles.",
    category: "Action",
    rating: 4.3,
    plays: "1.8M",
    embedUrl: "https://www.crazygames.com/embed/geometry-dash",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Geometry+Dash",
    instructions: [
      "Click or spacebar to jump",
      "Avoid all obstacles",
      "Follow the rhythm of music",
      "Practice mode available",
    ],
    tags: ["geometry", "dash", "platformer", "rhythm"],
  },
  "happy-wheels": {
    title: "Happy Wheels",
    description:
      "The most popular physics-based game! Choose your character and vehicle, then navigate through user-created levels filled with deadly obstacles. Warning: Contains cartoon violence!",
    category: "Action",
    rating: 4.5,
    plays: "4.2M",
    embedUrl: "https://www.crazygames.com/embed/happy-wheels",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Happy+Wheels",
    instructions: [
      "Use arrow keys to move",
      "Space to brake/reverse",
      "Shift for primary action",
      "Ctrl for secondary action",
    ],
    tags: ["physics", "obstacles", "funny", "challenging"],
  },
  slope: {
    title: "Slope",
    description:
      "Roll down the slope for as long as possible! Control a ball rolling down a steep slope in this fast-paced 3D running game. Avoid obstacles and don't fall off the edge!",
    category: "Action",
    rating: 4.4,
    plays: "2.3M",
    embedUrl: "https://www.crazygames.com/embed/slope",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Slope",
    instructions: [
      "Use A/D or arrow keys to steer",
      "Avoid red obstacles",
      "Don't fall off the edge",
      "Go as far as possible",
    ],
    tags: ["slope", "3d", "endless", "ball"],
  },
  "run-3": {
    title: "Run 3",
    description:
      "Run and jump through a dangerous galaxy! Play as different characters, each with unique abilities. Explore the tunnel system and don't fall into space in this endless runner.",
    category: "Adventure",
    rating: 4.6,
    plays: "3.1M",
    embedUrl: "https://www.crazygames.com/embed/run-3",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Run+3",
    instructions: [
      "Arrow keys to run and jump",
      "Don't fall into space",
      "Collect power cells",
      "Unlock new characters",
    ],
    tags: ["run", "space", "tunnel", "adventure"],
  },
  "paper-io-2": {
    title: "Paper.io 2",
    description:
      "Conquer as much territory as possible! Move around and draw lines to capture territory. Be careful not to cross your own line or get hit by other players in this addictive io game.",
    category: "Strategy",
    rating: 4.2,
    plays: "1.9M",
    embedUrl: "https://www.crazygames.com/embed/paper-io-2",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Paper.io+2",
    instructions: [
      "Use arrow keys or WASD to move",
      "Draw lines to capture territory",
      "Don't cross your own line",
      "Avoid other players",
    ],
    tags: ["io", "territory", "multiplayer", "strategy"],
  },
}

export default function GamePage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const game = gameData[params.id as keyof typeof gameData] || gameData["snake-io"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Games
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`category-badge category-${game.category.toLowerCase()}`}>{game.category}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{game.plays} plays</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 rounded-full transition-colors ${
                        isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Game Embed */}
              <div className="relative bg-gray-900" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={game.embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  title={game.title}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Game Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Game</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{game.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Play</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                {game.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* AdSense */}
            <div className="adsense-placeholder h-64 w-full mb-6">
              AdSense
              <br />
              Rectangle
              <br />
              (300x250)
            </div>

            {/* Related Games */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More {game.category} Games</h3>
              <div className="space-y-4">
                {Object.entries(gameData)
                  .filter(([id, g]) => g.category === game.category && id !== params.id)
                  .slice(0, 3)
                  .map(([id, relatedGame]) => (
                    <Link key={id} href={`/game/${id}`}>
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <img
                          src={relatedGame.thumbnail || "/placeholder.svg"}
                          alt={relatedGame.title}
                          className="w-15 h-15 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{relatedGame.title}</h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                            <span>{relatedGame.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
