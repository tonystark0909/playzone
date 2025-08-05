import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About PlayZone</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the best free online gaming experience. Our mission is to make
            high-quality games accessible to everyone, anywhere, anytime.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600 text-sm">
              Building a welcoming community for gamers of all ages and skill levels.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Games</h3>
            <p className="text-gray-600 text-sm">Carefully curated selection of high-quality, engaging games.</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">Committed to providing the best gaming experience possible.</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Forever</h3>
            <p className="text-gray-600 text-sm">All our games are completely free to play, no hidden costs.</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              PlayZone was founded in 2020 with a simple vision: to create the ultimate destination for free online
              gaming. We noticed that many gaming websites were cluttered with ads, had poor user experiences, or
              charged money for basic features.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of passionate gamers and developers set out to change that. We wanted to build a platform that
              puts players first - with fast loading times, intuitive navigation, and most importantly, amazing games
              that are completely free to play.
            </p>
            <p className="text-gray-700 mb-4">
              Today, PlayZone serves over 1 million players worldwide, offering more than 1,000 carefully selected games
              across all genres. From classic arcade games to modern puzzle adventures, we have something for everyone.
            </p>
            <p className="text-gray-700">
              We're constantly working to improve our platform and add new games. Our community's feedback drives
              everything we do, and we're grateful for the trust our players place in us every day.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">Active Players</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">1,000+</div>
            <div className="text-gray-600">Games Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Game Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  )
}
