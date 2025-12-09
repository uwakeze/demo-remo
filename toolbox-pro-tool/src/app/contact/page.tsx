"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We'll get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
						Contact Us
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Have questions, suggestions, or need help? We&apos;d
						love to hear from you!
					</p>
				</div>

				<div className='grid lg:grid-cols-3 gap-8'>
					<div className='lg:col-span-2'>
						<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Send className='w-5 h-5 text-blue-600' />
									Send us a Message
								</CardTitle>
								<CardDescription>
									Fill out the form below and we&apos;ll get
									back to you as soon as possible
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className='space-y-6'>
									<div className='grid md:grid-cols-2 gap-4'>
										<div>
											<label
												htmlFor='name'
												className='block text-sm font-medium text-gray-700 mb-2'>
												Name *
											</label>
											<Input
												id='name'
												name='name'
												type='text'
												required
												value={formData.name}
												onChange={handleChange}
												placeholder='Your full name'
											/>
										</div>
										<div>
											<label
												htmlFor='email'
												className='block text-sm font-medium text-gray-700 mb-2'>
												Email *
											</label>
											<Input
												id='email'
												name='email'
												type='email'
												required
												value={formData.email}
												onChange={handleChange}
												placeholder='your.email@example.com'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='subject'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Subject *
										</label>
										<Input
											id='subject'
											name='subject'
											type='text'
											required
											value={formData.subject}
											onChange={handleChange}
											placeholder="What's this about?"
										/>
									</div>

									<div>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Message *
										</label>
										<Textarea
											id='message'
											name='message'
											required
											value={formData.message}
											onChange={handleChange}
											placeholder='Tell us more about your inquiry...'
											className='min-h-[120px]'
										/>
									</div>

									<Button
										type='submit'
										className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'>
										<Send className='w-4 h-4 mr-2' />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					<div className='space-y-6'>
						<Card className='border-0 shadow-xl bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle>Get in Touch</CardTitle>
								<CardDescription>
									Multiple ways to reach us
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-center gap-3'>
									<div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center'>
										<Mail className='w-5 h-5 text-white' />
									</div>
									<div>
										<p className='font-medium text-gray-800'>
											Email
										</p>
										<p className='text-gray-600 text-sm'>
											toolboxpro@gmail.com
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center'>
										<Phone className='w-5 h-5 text-white' />
									</div>
									<div>
										<p className='font-medium text-gray-800'>
											Phone
										</p>
										<p className='text-gray-600 text-sm'>
											+91 9876543210
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center'>
										<MapPin className='w-5 h-5 text-white' />
									</div>
									<div>
										<p className='font-medium text-gray-800'>
											Address
										</p>
										<p className='text-gray-600 text-sm'>
											New Delhi, India
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='border-0 shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>
							<CardContent className='p-6'>
								<h3 className='font-semibold mb-2'>
									Quick Response
								</h3>
								<p className='text-blue-100 text-sm mb-4'>
									We typically respond to all inquiries within
									24 hours during business days.
								</p>
								<div className='text-xs text-blue-200'>
									Business Hours: Mon-Fri, 9AM-6PM PST
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
