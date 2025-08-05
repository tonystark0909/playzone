import Link from "next/link"
import { Play, Star } from "lucide-react"

interface GameCardProps {
  id: string
  title: string
  description: string
  category: string
  thumbnail: string
  rating: number
  plays: string
}

export function GameCard({ id, title, description, category, thumbnail, rating, plays }: GameCardProps) {
  return (
    <div className="game-card group">
      <div className="relative overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="game-thumbnail group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <span className={`category-badge category-${category.toLowerCase()} absolute top-3 left-3`}>{category}</span>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
            <span className="text-sm text-gray-500">({plays} plays)</span>
          </div>

          <Link
            href={`/game/${id}`}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  )
}
