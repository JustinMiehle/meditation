import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type React from "react";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
	return (
		<div className="container mx-auto py-8">
			<Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
				Home
			</Link>
			<Card className="w-full max-w-4xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea className="h-[60vh]">
						<div className="space-y-4">
							<section>
								<h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
								<p>
									This Privacy Policy outlines how we collect, use, and protect
									your personal information.
								</p>
							</section>
							<section>
								<h2 className="text-xl font-semibold mb-2">
									2. Information We Collect
								</h2>
								<p>
									We collect information that you provide directly to us, such
									as when you create an account or use our services.
								</p>
							</section>
							<section>
								<h2 className="text-xl font-semibold mb-2">
									3. How We Use Your Information
								</h2>
								<p>
									We use your information to provide, maintain, and improve our
									services, as well as to communicate with you.
								</p>
								å
							</section>
							<section>
								<h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
								<p>
									We implement appropriate security measures to protect your
									personal information from unauthorized access or disclosure.
								</p>
							</section>
							<section>
								<h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
								<p>
									You have the right to access, correct, or delete your personal
									information. Please contact us for any such requests, e.g. at
									x.com/justinmiehle
								</p>
							</section>
						</div>
					</ScrollArea>
				</CardContent>
			</Card>
		</div>
	);
};

export default Privacy;
