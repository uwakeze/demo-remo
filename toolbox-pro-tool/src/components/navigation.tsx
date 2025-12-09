"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ToolBox Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Tools</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    href="/tools/keyword-suggestion"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    Keyword Suggestion Tool
                  </Link>
                  <Link
                    href="/tools/word-count"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    Word Count & Read Time
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                Home
              </Link>
              <Link
                href="/tools/keyword-suggestion"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                Keyword Suggestion Tool
              </Link>
              <Link
                href="/tools/word-count"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                Word Count & Read Time
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
