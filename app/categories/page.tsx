import Link from "next/link"
import { Zap, Puzzle, Compass, Car, Trophy, Target } from "lucide-react"

const categories = [
  {
    name: "Action",
    description: "Fast-paced games that test your reflexes and skills",
    count: 245,
    icon: Zap,
    color: "bg-red-500",
    games: ["Snake Classic", "Fruit Ninja", "Space Shooter", "Combat Arena"],
  },
  {
    name: "Puzzle",
    description: "Brain-teasing games to challenge your mind",
    count: 189,
    icon: Puzzle,
    color: "bg-purple-500",
    games: ["Tetris Blocks", "Bubble Shooter", "Memory Match", "Word Puzzle"],
  },
  {
    name: "Adventure",
    description: "Explore new worlds and embark on epic journeys",
    count: 156,
    icon: Compass,
    color: "bg-green-500",
    games: ["Space Adventure", "Platformer Hero", "Treasure Hunt", "Quest Master"],
  },
  {
    name: "Racing",
    description: "High-speed racing games with realistic physics",
    count: 98,
    icon: Car,
    color: "bg-yellow-500",
    games: ["Racing Thunder", "Speed Racer", "Drift Master", "Formula One"],
  },
  {
    name: "Sports",
    description: "Compete in your favorite sports and tournaments",
    count: 87,
    icon: Trophy,
    color: "bg-blue-500",
    games: ["Soccer Stars", "Basketball Pro", "Tennis Champion", "Golf Master"],
  },
  {
    name: "Strategy",
    description: "Plan your moves and outsmart your opponents",
    count: 76,
    icon: Target,
    color: "bg-pink-500",
    games: ["Tower Defense", "Chess Master", "War Strategy", "City Builder"],
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Game Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover games by category. Whether you're looking for action-packed adventures or relaxing puzzles, we have
            the perfect games for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${category.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <category.icon className="w-8 h-8" />
                  <span className="text-sm font-medium">{category.count} games</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90">{category.description}</p>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Popular Games:</h4>
                <div className="space-y-2">
                  {category.games.map((game) => (
                    <div
                      key={game}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{game}</span>
                      <Link
                        href={`/game/${game.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Play
                      </Link>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/games?category=${category.name.toLowerCase()}`}
                  className="block w-full text-center mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium transition-colors"
                >
                  View All {category.name} Games
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* AdSense Banner */}
        <div className="adsense-placeholder h-24 w-full mt-16">AdSense Banner (728x90)</div>
      </div>
    </div>
  )
}
