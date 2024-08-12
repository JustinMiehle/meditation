// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import de from "./locales/de.json";
import en from "./locales/en.json";

export const LANGUAGE_OPTIONS = [
	{ value: "en", country: "gb", language: "English" },
	{ value: "de", country: "de", language: "Deutsch" },
];

// Define the structure of your translations
interface TranslationResource {
	[language: string]: {
		[namespace: string]: {
			[key: string]:
				| string
				| {
						[key: string]: string;
				  };
		};
	};
}

// Assert the type of your translations
const typedTranslations: TranslationResource = {
	en: { translation: en },
	de: { translation: de },
};

i18n
	.use(initReactI18next) // Passes i18n down to react-i18next
	.init({
		resources: typedTranslations,
		lng: "de", // Default language
		fallbackLng: "de", // Fallback language if translation not available
		interpolation: {
			escapeValue: false, // React already escapes values to prevent XSS
		},
	});

export default i18n;
