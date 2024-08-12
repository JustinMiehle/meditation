import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type React from "react";
import { useTranslation } from "react-i18next";
import MarkdownRenderer from "../MarkdownRenderer";

interface ImprintModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ImprintModal: React.FC<ImprintModalProps> = ({ isOpen, onClose }) => {
	const { t } = useTranslation();

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t("imprintTitle")}</DialogTitle>
					<DialogDescription>{t("imprintDescription")}</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<MarkdownRenderer content={t("imprintContent")} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ImprintModal;
