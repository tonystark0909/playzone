import { GameCard } from "@/components/game-card"
import { TrendingUp, Zap, Users, Trophy } from "lucide-react"

const featuredGames = [
  {
    id: "snake-io",
    title: "Snake.io",
    description:
      "The modern version of the classic snake game! Grow your snake by eating colorful orbs and avoid other players.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Snake.io",
    rating: 4.8,
    plays: "2.1M",
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    description: "The world's most popular endless runner! Run as far as you can in this endless running adventure.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Subway+Surfers",
    rating: 4.6,
    plays: "5.1M",
    featured: true,
  },
  {
    id: "bloons-td-5",
    title: "Bloons TD 5",
    description: "The ultimate tower defense game! Place monkey towers to pop balloons before they reach the end.",
    category: "Strategy",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bloons+TD+5",
    rating: 4.9,
    plays: "3.2M",
  },
  {
    id: "madalin-stunt-cars-2",
    title: "Madalin Stunt Cars 2",
    description: "Amazing 3D racing game with realistic physics! Choose from supercars and perform incredible stunts.",
    category: "Racing",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Madalin+Cars",
    rating: 4.7,
    plays: "1.8M",
  },
  {
    id: "happy-wheels",
    title: "Happy Wheels",
    description:
      "The most popular physics-based game! Navigate through user-created levels filled with deadly obstacles.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Happy+Wheels",
    rating: 4.5,
    plays: "4.2M",
  },
  {
    id: "bubble-shooter",
    title: "Bubble Shooter",
    description: "The classic bubble shooting game! Aim and shoot bubbles to match three or more of the same color.",
    category: "Puzzle",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bubble+Shooter",
    rating: 4.5,
    plays: "2.8M",
  },
]

const allGames = [
  {
    id: "run-3",
    title: "Run 3",
    description: "Run and jump through a dangerous galaxy! Play as different characters with unique abilities.",
    category: "Adventure",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Run+3",
    rating: 4.6,
    plays: "3.1M",
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    description: "Navigate perilous cliffs, zip lines, mines and forests as you try to escape with the cursed idol.",
    category: "Adventure",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Temple+Run+2",
    rating: 4.4,
    plays: "2.9M",
  },
  {
    id: "geometry-dash",
    title: "Geometry Dash",
    description: "Jump and fly your way through danger in this rhythm-based action platformer!",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Geometry+Dash",
    rating: 4.3,
    plays: "1.8M",
  },
  {
    id: "slope",
    title: "Slope",
    description: "Roll down the slope for as long as possible! Control a ball rolling down a steep slope.",
    category: "Action",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Slope",
    rating: 4.4,
    plays: "2.3M",
  },
  {
    id: "cut-the-rope",
    title: "Cut the Rope",
    description: "Feed candy to Om Nom! Cut the rope in the right order and time to feed the adorable green monster.",
    category: "Puzzle",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Cut+the+Rope",
    rating: 4.7,
    plays: "1.5M",
  },
  {
    id: "paper-io-2",
    title: "Paper.io 2",
    description: "Conquer as much territory as possible! Move around and draw lines to capture territory.",
    category: "Strategy",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Paper.io+2",
    rating: 4.2,
    plays: "1.9M",
  },
]

const categories = [
  { name: "Action", count: 156, color: "bg-red-500" },
  { name: "Puzzle", count: 89, color: "bg-purple-500" },
  { name: "Adventure", count: 67, color: "bg-green-500" },
  { name: "Racing", count: 45, color: "bg-yellow-500" },
  { name: "Strategy", count: 34, color: "bg-pink-500" },
  { name: "Sports", count: 28, color: "bg-blue-500" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Play Amazing Games
            <span className="block text-yellow-300">Instantly & Free!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover the best free online games from CrazyGames. No downloads, no registration required. Just click and
            play your favorite games instantly!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Instant Play</h3>
              <p className="text-blue-100 text-sm">No downloads needed</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">1M+ Players</h3>
              <p className="text-blue-100 text-sm">Join our community</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">500+ Games</h3>
              <p className="text-blue-100 text-sm">Always something new</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Updated Daily</h3>
              <p className="text-blue-100 text-sm">Fresh content always</p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="adsense-placeholder h-24 w-full">AdSense Banner (728x90)</div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-lg">{category.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} games</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Games</h2>
              <p className="text-gray-600">Popular games from CrazyGames that are trending right now</p>
            </div>

            {/* AdSense Sidebar */}
            <div className="hidden lg:block">
              <div className="adsense-placeholder w-32 h-64">
                AdSense
                <br />
                Sidebar
                <br />
                (160x600)
              </div>
            </div>
          </div>

          <div className="game-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          {/* All Games Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Great Games</h2>
            <div className="game-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              View All Games
            </button>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="adsense-placeholder h-24 w-full">AdSense Banner (728x90)</div>
      </div>
    </div>
  )
}
