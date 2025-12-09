"use client"

import { useState, useEffect } from "react"
import { FileText, Clock, Hash, Type } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  readingTime: number
}

export default function WordCountPage() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const calculateStats = () => {
      if (!text.trim()) {
        setStats({
          words: 0,
          characters: 0,
          charactersNoSpaces: 0,
          sentences: 0,
          paragraphs: 0,
          readingTime: 0,
        })
        return
      }

      const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, "").length
      const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length
      const paragraphs = text.split(/\n\s*\n/).filter((paragraph) => paragraph.trim().length > 0).length
      const readingTime = Math.ceil(words / 200) // Average reading speed: 200 words per minute

      setStats({
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime,
      })
    }

    calculateStats()
  }, [text])

  const statCards = [
    {
      title: "Words",
      value: stats.words.toLocaleString(),
      icon: Type,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Characters",
      value: stats.characters.toLocaleString(),
      icon: Hash,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Characters (no spaces)",
      value: stats.charactersNoSpaces.toLocaleString(),
      icon: Hash,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Sentences",
      value: stats.sentences.toLocaleString(),
      icon: FileText,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Paragraphs",
      value: stats.paragraphs.toLocaleString(),
      icon: FileText,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Reading Time",
      value: `${stats.readingTime} min`,
      icon: Clock,
      color: "from-pink-500 to-rose-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Word Count & Read Time Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze your content with detailed statistics and reading time estimates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Enter Your Text
                </CardTitle>
                <CardDescription>Paste or type your content to get instant analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Start typing or paste your content here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[400px] resize-none text-base leading-relaxed"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Text Statistics</h2>
            {statCards.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <CardContent className="p-4">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm opacity-90">Estimated Reading Time</p>
                  <p className="text-3xl font-bold">{stats.readingTime} minutes</p>
                  <p className="text-xs opacity-75 mt-1">Based on 200 words per minute</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>How Reading Time is Calculated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Average Reading Speed</h4>
                <p>
                  The average adult reads at approximately 200-250 words per minute. We use 200 WPM for conservative
                  estimates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Content Type Matters</h4>
                <p>
                  Technical content may take longer to read, while casual content might be faster. Adjust expectations
                  accordingly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Use Cases</h4>
                <p>
                  Perfect for blog posts, articles, social media content, and any written material where reading time
                  matters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
