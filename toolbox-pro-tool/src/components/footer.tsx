import Link from "next/link";
import { Zap, Mail, Github, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid md:grid-cols-4 gap-8'>
					<div className='col-span-1'>
						<Link
							href='/'
							className='flex items-center space-x-2 mb-4'>
							<div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
								<Zap className='w-5 h-5 text-white' />
							</div>
							<span className='text-xl font-bold'>
								ToolBox Pro
							</span>
						</Link>
						<p className='text-gray-400 text-sm'>
							Your ultimate collection of free digital tools for
							content creators, marketers, and writers.
						</p>
					</div>

					<div>
						<h3 className='font-semibold mb-4'>Tools</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/tools/keyword-suggestion'
									className='text-gray-400 hover:text-white transition-colors'>
									Keyword Suggestion
								</Link>
							</li>
							<li>
								<Link
									href='/tools/word-count'
									className='text-gray-400 hover:text-white transition-colors'>
									Word Count Calculator
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-semibold mb-4'>Company</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/about'
									className='text-gray-400 hover:text-white transition-colors'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-400 hover:text-white transition-colors'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-semibold mb-4'>Legal</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/privacy-policy'
									className='text-gray-400 hover:text-white transition-colors'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href='/terms-of-service'
									className='text-gray-400 hover:text-white transition-colors'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href='/disclaimer'
									className='text-gray-400 hover:text-white transition-colors'>
									Disclaimer
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm'>
						© 2025 ToolBox Pro. All rights reserved.
					</p>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						<a
							href='#'
							className='text-gray-400 hover:text-white transition-colors'>
							<Twitter className='w-5 h-5' />
						</a>
						<a
							href='#'
							className='text-gray-400 hover:text-white transition-colors'>
							<Github className='w-5 h-5' />
						</a>
						<a
							href='#'
							className='text-gray-400 hover:text-white transition-colors'>
							<Mail className='w-5 h-5' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
