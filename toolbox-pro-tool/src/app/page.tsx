import Link from "next/link"
import { Search, FileText, Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            ToolBox Pro
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your ultimate collection of free digital tools for content creators, marketers, and writers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Explore Tools
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Tools at Your Fingertips</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Boost your productivity with our collection of free, easy-to-use tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Keyword Suggestion Tool</CardTitle>
                <CardDescription className="text-gray-600">
                  Discover related keywords and long-tail suggestions for your content
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Find related keywords instantly</li>
                  <li>• Long-tail keyword suggestions</li>
                  <li>• Powered by Datamuse API</li>
                  <li>• Free and unlimited usage</li>
                </ul>
                <Link href="/tools/keyword-suggestion">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    Try Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Word Count & Read Time</CardTitle>
                <CardDescription className="text-gray-600">
                  Analyze your content with detailed word count and reading time estimates
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Real-time word counting</li>
                  <li>• Character count analysis</li>
                  <li>• Reading time estimation</li>
                  <li>• Perfect for writers & bloggers</li>
                </ul>
                <Link href="/tools/word-count">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    Try Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose ToolBox Pro?</h2>
            <p className="text-xl text-gray-600">Built with modern technology and user experience in mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed and performance with instant results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is processed securely and never stored</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User Friendly</h3>
              <p className="text-gray-600">Intuitive interface designed for everyone</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
