import { GameCard } from "@/components/game-card"
import { Search, Filter } from "lucide-react"

const allGames = [
  {
    id: "snake-io",
    title: "Snake.io",
    description: "The modern version of the classic snake game! Grow your snake by eating colorful orbs.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Snake.io",
    rating: 4.8,
    plays: "2.1M",
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    description: "The world's most popular endless runner! Run as far as you can.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Subway+Surfers",
    rating: 4.6,
    plays: "5.1M",
  },
  {
    id: "bloons-td-5",
    title: "Bloons TD 5",
    description: "The ultimate tower defense game! Place monkey towers to pop balloons.",
    category: "Strategy",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bloons+TD+5",
    rating: 4.9,
    plays: "3.2M",
  },
  {
    id: "madalin-stunt-cars-2",
    title: "Madalin Stunt Cars 2",
    description: "Amazing 3D racing game with realistic physics and supercars!",
    category: "Racing",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Madalin+Cars",
    rating: 4.7,
    plays: "1.8M",
  },
  {
    id: "happy-wheels",
    title: "Happy Wheels",
    description: "The most popular physics-based game with deadly obstacles!",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Happy+Wheels",
    rating: 4.5,
    plays: "4.2M",
  },
  {
    id: "bubble-shooter",
    title: "Bubble Shooter",
    description: "The classic bubble shooting game! Match three or more colors.",
    category: "Puzzle",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bubble+Shooter",
    rating: 4.5,
    plays: "2.8M",
  },
  {
    id: "run-3",
    title: "Run 3",
    description: "Run and jump through a dangerous galaxy with unique characters!",
    category: "Adventure",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Run+3",
    rating: 4.6,
    plays: "3.1M",
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    description: "Navigate perilous cliffs and forests in this endless adventure!",
    category: "Adventure",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Temple+Run+2",
    rating: 4.4,
    plays: "2.9M",
  },
  {
    id: "geometry-dash",
    title: "Geometry Dash",
    description: "Jump and fly through danger in this rhythm-based platformer!",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Geometry+Dash",
    rating: 4.3,
    plays: "1.8M",
  },
  {
    id: "slope",
    title: "Slope",
    description: "Roll down the slope for as long as possible in this 3D game!",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Slope",
    rating: 4.4,
    plays: "2.3M",
  },
  {
    id: "cut-the-rope",
    title: "Cut the Rope",
    description: "Feed candy to Om Nom in this award-winning physics puzzle!",
    category: "Puzzle",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Cut+the+Rope",
    rating: 4.7,
    plays: "1.5M",
  },
  {
    id: "paper-io-2",
    title: "Paper.io 2",
    description: "Conquer territory by drawing lines in this multiplayer game!",
    category: "Strategy",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Paper.io+2",
    rating: 4.2,
    plays: "1.9M",
  },
]

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">All Games</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of free online games from CrazyGames. From action-packed adventures to
            brain-teasing puzzles, we have something for every type of gamer.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
              <option>All Categories</option>
              <option>Action</option>
              <option>Puzzle</option>
              <option>Adventure</option>
              <option>Racing</option>
              <option>Strategy</option>
            </select>
          </div>
        </div>

        {/* AdSense Banner */}
        <div className="adsense-placeholder h-24 w-full mb-8">AdSense Banner (728x90)</div>

        {/* Games Grid */}
        <div className="game-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Load More Games
          </button>
        </div>
      </div>
    </div>
  )
}
