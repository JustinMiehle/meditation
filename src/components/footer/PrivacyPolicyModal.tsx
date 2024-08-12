import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type React from "react";
import { useTranslation } from "react-i18next";

interface PrivacyPolicyModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
	isOpen,
	onClose,
}) => {
	const { t } = useTranslation();

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t("privacyTitle")}</DialogTitle>
					<DialogDescription>{t("privacyDescription")}</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<p>{t("privacyContent")}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PrivacyPolicyModal;
