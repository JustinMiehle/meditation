import { Button } from "@/components/ui/button";
import type React from "react";
import { useState } from "react";
import AboutModal from "./AboutModal";
import ImprintModal from "./ImprintModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Footer: React.FC = () => {
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
	const [isImprintModalOpen, setIsImprintModalOpen] = useState(false);
	const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] =
		useState(false);

	return (
		<>
			<footer className="h-[40px] bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center text-sm fixed bottom-0 left-0 right-0 z-10">
				<span>© App</span>
				&nbsp;&nbsp;|&nbsp;
				<Button
					variant="link"
					className="ml-2 p-0 h-auto text-blue-600 hover:underline"
					onClick={() => setIsAboutModalOpen(true)}
				>
					Über Uns
				</Button>
				&nbsp;&nbsp;|&nbsp;
				<Button
					variant="link"
					className="ml-2 p-0 h-auto text-blue-600 hover:underline"
					onClick={() => setIsImprintModalOpen(true)}
				>
					Impressum
				</Button>
				&nbsp;&nbsp;|&nbsp;
				<Button
					variant="link"
					className="ml-2 p-0 h-auto text-blue-600 hover:underline"
					onClick={() => setIsPrivacyPolicyModalOpen(true)}
				>
					Datenschutzerklärung
				</Button>
			</footer>
			<AboutModal
				isOpen={isAboutModalOpen}
				onClose={() => setIsAboutModalOpen(false)}
			/>
			<ImprintModal
				isOpen={isImprintModalOpen}
				onClose={() => setIsImprintModalOpen(false)}
			/>
			<PrivacyPolicyModal
				isOpen={isPrivacyPolicyModalOpen}
				onClose={() => setIsPrivacyPolicyModalOpen(false)}
			/>
		</>
	);
};

export default Footer;
