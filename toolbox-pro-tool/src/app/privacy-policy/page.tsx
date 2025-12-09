import { Shield, Eye, Lock, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
						Privacy Policy
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Your privacy is important to us. Learn how we collect,
						use, and protect your information.
					</p>
					<p className='text-sm text-gray-500 mt-4'>
						Last updated: January 2024
					</p>
				</div>

				<div className='space-y-8'>
					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
								<Shield className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Information We Collect</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Information You Provide
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										Contact information when you reach out
										to us
									</li>
									<li>
										Content you input into our tools
										(processed locally, not stored)
									</li>
									<li>
										Feedback and suggestions you provide
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Automatically Collected Information
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>Usage statistics and analytics data</li>
									<li>Device and browser information</li>
									<li>
										IP address and general location data
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4'>
								<Eye className='w-6 h-6 text-white' />
							</div>
							<CardTitle>How We Use Your Information</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className='list-disc list-inside text-gray-600 space-y-2'>
								<li>
									To provide and improve our tools and
									services
								</li>
								<li>
									To respond to your inquiries and provide
									customer support
								</li>
								<li>
									To analyze usage patterns and optimize user
									experience
								</li>
								<li>To detect and prevent fraud or abuse</li>
								<li>To comply with legal obligations</li>
							</ul>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4'>
								<Lock className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Data Protection & Security</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Security Measures
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										All data transmission is encrypted using
										SSL/TLS
									</li>
									<li>Regular security audits and updates</li>
									<li>
										Access controls and authentication
										measures
									</li>
									<li>Data minimization practices</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Data Processing
								</h3>
								<p className='text-gray-600'>
									Most of our tools process your data locally
									in your browser. We do not store the content
									you input into our tools on our servers
									unless explicitly stated otherwise.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4'>
								<Database className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Data Sharing & Third Parties</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									We Do Not Sell Your Data
								</h3>
								<p className='text-gray-600'>
									We do not sell, rent, or trade your personal
									information to third parties for marketing
									purposes.
								</p>
							</div>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Limited Sharing
								</h3>
								<p className='text-gray-600 mb-2'>
									We may share information only in these
									circumstances:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										With service providers who help us
										operate our platform
									</li>
									<li>
										When required by law or to protect our
										rights
									</li>
									<li>
										In connection with a business transfer
										or merger
									</li>
									<li>With your explicit consent</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>Your Rights & Choices</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>
										Your Rights Include:
									</h3>
									<ul className='list-disc list-inside text-gray-600 space-y-1'>
										<li>Access to your personal data</li>
										<li>Correction of inaccurate data</li>
										<li>Deletion of your data</li>
										<li>Data portability</li>
										<li>Objection to processing</li>
									</ul>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>
										How to Exercise Rights:
									</h3>
									<ul className='list-disc list-inside text-gray-600 space-y-1'>
										<li>
											Contact us at toolbxpro@gmail.com
										</li>
										<li>
											Use browser settings for cookies
										</li>
										<li>Opt-out of analytics tracking</li>
										<li>Request data deletion</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>Cookies & Tracking</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Types of Cookies We Use:
								</h3>
								<ul className='list-disc list-inside text-gray-600 space-y-1'>
									<li>
										<strong>Essential Cookies:</strong>{" "}
										Required for basic site functionality
									</li>
									<li>
										<strong>Analytics Cookies:</strong> Help
										us understand how you use our site
									</li>
									<li>
										<strong>Preference Cookies:</strong>{" "}
										Remember your settings and preferences
									</li>
								</ul>
							</div>
							<p className='text-gray-600'>
								You can control cookies through your browser
								settings. Note that disabling certain cookies
								may affect the functionality of our tools.
							</p>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 mb-4'>
								If you have questions about this Privacy Policy
								or our data practices, please contact us:
							</p>
							<div className='space-y-2 text-gray-600'>
								<p>
									<strong>Email:</strong> toolbxpro@gmail.com
								</p>
								<p>
									<strong>Address:</strong> 123 New Delhi,
									India
								</p>
								<p>
									<strong>Phone:</strong> +91 9876543210
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>
						<CardContent className='p-6'>
							<h3 className='font-semibold mb-2'>
								Policy Updates
							</h3>
							<p className='text-blue-100 text-sm'>
								We may update this Privacy Policy from time to
								time. We will notify you of any material changes
								by posting the new policy on this page and
								updating the &quot;Last updated&quot; date.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
