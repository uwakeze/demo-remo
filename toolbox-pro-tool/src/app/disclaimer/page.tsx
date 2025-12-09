import { AlertTriangle, Info, Shield, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DisclaimerPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
						Disclaimer
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Important information about the use of our tools and
						services
					</p>
					<p className='text-sm text-gray-500 mt-4'>
						Last updated: January 2024
					</p>
				</div>

				<div className='space-y-8'>
					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4'>
								<AlertTriangle className='w-6 h-6 text-white' />
							</div>
							<CardTitle>General Disclaimer</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 leading-relaxed'>
								The information and tools provided by ToolBox
								Pro are for general informational and utility
								purposes only. While we strive to provide
								accurate and reliable tools, we make no
								representations or warranties of any kind,
								express or implied, about the completeness,
								accuracy, reliability, suitability, or
								availability of the information, products,
								services, or related graphics contained on our
								website.
							</p>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
								<FileText className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Tool Accuracy & Results</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Keyword Suggestion Tool:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Results are generated using third-party
										APIs (Datamuse)
									</li>
									<li>
										Suggestions may not always be relevant
										to your specific use case
									</li>
									<li>
										We do not guarantee the SEO
										effectiveness of suggested keywords
									</li>
									<li>
										Results should be verified and validated
										for your specific needs
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Word Count & Reading Time Calculator:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Reading time estimates are based on
										average reading speeds (200 WPM)
									</li>
									<li>
										Actual reading time may vary based on
										content complexity and reader
										proficiency
									</li>
									<li>
										Word counts are approximate and may
										differ from other counting methods
									</li>
									<li>
										Results are for guidance purposes only
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4'>
								<Info className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Third-Party Dependencies</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									External APIs:
								</h3>
								<p className='text-gray-600 mb-2'>
									Our keyword suggestion tool relies on the
									Datamuse API. We are not responsible for:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Availability or uptime of third-party
										services
									</li>
									<li>
										Accuracy of data provided by external
										APIs
									</li>
									<li>
										Changes to third-party service terms or
										functionality
									</li>
									<li>
										Any costs that may be incurred from
										third-party services
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Service Interruptions:
								</h3>
								<p className='text-gray-600'>
									Our tools may become temporarily unavailable
									due to third-party service outages,
									maintenance, or technical issues beyond our
									control.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4'>
								<Shield className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Limitation of Liability</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									No Liability for:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Any loss or damage arising from your use
										of our tools
									</li>
									<li>
										Business decisions made based on tool
										results
									</li>
									<li>
										Inaccurate or incomplete information
										provided by our tools
									</li>
									<li>
										Technical issues, downtime, or service
										interruptions
									</li>
									<li>
										Any indirect, consequential, or punitive
										damages
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Maximum Liability:
								</h3>
								<p className='text-gray-600'>
									Our total liability to you for any claims
									arising from the use of our free tools shall
									not exceed $0 (zero dollars), as our
									services are provided free of charge.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>
								Professional Advice Disclaimer
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 leading-relaxed mb-4'>
								Our tools are not intended to replace
								professional advice. The results and suggestions
								provided should not be considered as
								professional consultation in marketing, SEO,
								content strategy, or any other field.
							</p>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Always Consult Professionals For:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Comprehensive SEO and marketing
										strategies
									</li>
									<li>Business-critical content decisions</li>
									<li>
										Legal compliance in content creation
									</li>
									<li>
										Industry-specific requirements and
										standards
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>User Responsibility</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									You are responsible for:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Verifying the accuracy and relevance of
										tool results
									</li>
									<li>
										Using tools in compliance with
										applicable laws and regulations
									</li>
									<li>
										Ensuring your content does not infringe
										on third-party rights
									</li>
									<li>
										Making informed decisions based on
										multiple sources of information
									</li>
									<li>
										Backing up important data and content
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Best Practices:
								</h3>
								<p className='text-gray-600'>
									We recommend using our tools as part of a
									broader toolkit and always cross-referencing
									results with other sources and professional
									expertise when making important decisions.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>Changes to Disclaimer</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 leading-relaxed'>
								We reserve the right to modify this disclaimer
								at any time without prior notice. Changes will
								be effective immediately upon posting on this
								page. Your continued use of our tools after any
								changes constitutes acceptance of the updated
								disclaimer.
							</p>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 mb-4'>
								If you have questions about this disclaimer or
								need clarification about our tools, please
								contact us:
							</p>
							<div className='space-y-2 text-gray-600'>
								<p>
									<strong>Email:</strong> toolboxpro@gmail.com
								</p>
								<p>
									<strong>Address:</strong> 123 new Delhi,
									India
								</p>
								<p>
									<strong>Phone:</strong> +91 9876543210
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white'>
						<CardContent className='p-6'>
							<h3 className='font-semibold mb-2 flex items-center gap-2'>
								<AlertTriangle className='w-5 h-5' />
								Important Notice
							</h3>
							<p className='text-orange-100 text-sm'>
								By using ToolBox Pro, you acknowledge that you
								have read, understood, and agree to this
								disclaimer. Use our tools at your own risk and
								always verify results independently.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
