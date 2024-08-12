import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type React from "react";

interface AboutModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Über uns</DialogTitle>
					<DialogDescription>Wir sind für euch da</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<p>Hebamme hebamme hebamme hebamme hebamme</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AboutModal;
