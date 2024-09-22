import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type React from "react";
import { Link } from "react-router-dom";

const Imprint: React.FC = () => {
	return (
		<div className="container mx-auto py-8">
			<Link to="/" className="text-blue-600 hover:underline mb-4 block">
				Home
			</Link>
			<Card>
				<CardHeader>
					<CardTitle>Imprint</CardTitle>
				</CardHeader>
				<CardContent>
					<h3 className="text-2xl font-semibold mb-2">
						Responsible for the Content
					</h3>
					<p className="mb-4">
						Justin Miehle
						<br />
						Address: Alstertwiete 1A, 20099 Hamburg
						<br />
						Email: miehlejustin@gmail.com
					</p>

					<h3 className="text-2xl font-semibold mb-2 mt-6">Disclaimer</h3>
					<p className="mb-4">
						This imprint complies with the requirements of § 5 TMG and § 55
						RStV. Despite careful control, we assume no liability for the
						content of external links. The operators of the linked pages are
						solely responsible for their content.
					</p>
					<h3 className="text-2xl font-semibold mb-2 mt-6">
						Liability for content
					</h3>
					<p className="mb-4">
						As a service provider we are responsible according to § 7 paragraph
						1 of TMG for own contents on these pages under the general laws.
						According to § § 8 to 10 TMG we are not obliged as a service
						provider to monitor transmitted or stored foreign information or to
						investigate circumstances that indicate illegal activity.
						Obligations to remove or block the use of information under the
						general laws remain unaffected. However, a relevant liability is
						only possible from the date of knowledge of a specific infringement.
						Upon notification of such violations, we will remove the content
						immediately.
					</p>
					<h3 className="text-2xl font-semibold mb-2 mt-6">
						Liability for Links
					</h3>
					<p className="mb-4">
						Our site contains links to external websites over which we have no
						control. Therefore we can not accept any responsibility for their
						content. The respective provider or operator of the pages is always
						responsible for the contents of any Linked Site. The linked sites
						were checked at the time of linking for possible violations of law.
						Illegal contents were at the time of linking. A permanent control of
						the linked pages is unreasonable without concrete evidence of a
						violation. Upon notification of violations, we will remove such
						links immediately.
					</p>
					<h3 className="text-2xl font-semibold mb-2 mt-6">Copyright</h3>
					<p className="mb-4">
						The contents and works on these pages created by the site operator
						are subject to German copyright law. Duplication, processing,
						distribution and any kind of exploitation outside the limits of
						copyright require the written consent of its respective author or
						creator. Downloads and copies of these pages are only permitted for
						private, non-commercial use. As far as the content is not created by
						the website operator, the copyrights of third parties. Especially
						content of third parties will be marked as such. If you still get
						aware of copyright infringement, we ask for a hint. Upon
						notification of violations, we will remove such content immediately.
					</p>
				</CardContent>{" "}
			</Card>
		</div>
	);
};

export default Imprint;
