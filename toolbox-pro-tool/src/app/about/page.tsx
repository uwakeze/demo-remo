import { Users, Target, Zap, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About ToolBox Pro</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering content creators, marketers, and writers with free, powerful digital tools
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At ToolBox Pro, we believe that everyone should have access to high-quality digital tools without
                breaking the bank. Our mission is to provide free, reliable, and user-friendly tools that help content
                creators, marketers, and writers be more productive and successful in their work.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To become the go-to platform for digital tools that simplify complex tasks and boost productivity for
                  professionals and enthusiasts alike.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We prioritize user experience, data privacy, and accessibility. Every tool we create is designed with
                  these core values in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-center">Why Choose ToolBox Pro?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
                <p className="text-gray-600 text-sm">
                  Our tools are optimized for speed and built with modern technology to ensure reliable performance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">User-Centric</h3>
                <p className="text-gray-600 text-sm">
                  Every feature is designed with user experience in mind, making complex tasks simple and intuitive.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Always Free</h3>
                <p className="text-gray-600 text-sm">
                  We believe in providing value without cost. All our core tools will always remain free to use.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-blue-100 mb-6">
              Be part of a growing community of content creators and digital professionals who trust ToolBox Pro for
              their daily workflow needs.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-blue-200">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-blue-200">Tools Used Daily</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
