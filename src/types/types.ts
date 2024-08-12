export interface Address {
	street: string;
	city: string;
	zip: string;
}

export type Salutation = "Frau" | "Herr" | "Divers";
export type Country = "Deutschland" | "Österreich" | "Schweiz";
export type InsuranceType =
	| "gesetzlich"
	| "gesetzlichPrivat"
	| "privat"
	| "selbstzahler"
	| "sonstiger";
export type InsuranceCostCarrier =
	| "Postbeamtenkasse"
	| "Bundeswehr"
	| "Arztkasse"
	| "Heilfürsorge"
	| "Sozialamt"
	| "Andere";
export enum SalutationOptions {
	Frau = "Frau",
	Herr = "Herr",
	Divers = "Divers",
}

export enum CountryOptions {
	Deutschland = "Deutschland",
	Österreich = "Österreich",
	Schweiz = "Schweiz",
}

export enum InsuranceTypeOptions {
	Gesetzlich = "gesetzlich",
	GesetzlichPrivat = "gesetzlichPrivat",
	Privat = "privat",
	Selbstzahler = "selbstzahler",
	Sonstiger = "sonstiger",
}

export enum InsuranceCostCarrierOptions {
	Postbeamtenkasse = "Postbeamtenkasse",
	Bundeswehr = "Bundeswehr",
	Arztkasse = "Arztkasse",
	Heilfürsorge = "Heilfürsorge",
	Sozialamt = "Sozialamt",
	Andere = "Andere",
}
export interface Contact {
	id: string;
	// Personal Information
	salutation?: Salutation;
	title?: string;
	firstName: string;
	lastName: string;
	birthday?: Date;

	// Address
	street?: string;
	postalCode?: string;
	city?: string;
	country?: Country;

	// Contact Information
	phonePrivate?: string;
	phoneWork?: string;
	mobile?: string;
	emailPrivate?: string;
	emailWork?: string;

	// Insurance Information
	insuranceType: InsuranceType;
	insuranceNumber?: string;
	sonstigerKostentraeger?: InsuranceCostCarrier;
	insurance?: Insurance;

	// Additional Information
	showInCalendar?: boolean;
	isPublic?: boolean;
	company?: string;
	notes?: string;

	invoices?: Invoice[];
	children?: Child[];

	user: string;
}

export type Insurance = {
	id: string;
	name: string;
	street: string;
	postalCode: string;
	city: string;
	phone: string;
};

export type ChildType =
	| "Einling"
	| "Zwillinge"
	| "Drillinge"
	| "Vierlinge"
	| "Fünflinge"
	| "Sechslinge"
	| "Siebenlinge"
	| "Achtlinge";
export enum ChildTypeOptions {
	Einling = "Einling",
	Zwillinge = "Zwillinge",
	Drillinge = "Drillinge",
	Vierlinge = "Vierlinge",
	Fünflinge = "Fünflinge",
	Sechslinge = "Sechslinge",
	Siebenlinge = "Siebenlinge",
	Achtlinge = "Achtlinge",
}

export interface Child {
	id: string;
	name?: string;
	dueDate?: Date;
	birthDate?: Date;
	type: ChildType;
	abortTotgeburt?: boolean;
	gravida: string;
	para: string;
	wbbAllowance?: boolean;
	birthPlace?: BirthPlace;
	stayOvernight?: boolean;
	dischargeDate?: Date;
	oneToOneSupport?: boolean;
	contactId: string;
}

export type BirthPlace =
	| "nicht bekannt"
	| "außerklinische Geburt"
	| "im Krankenhaus";

export enum BirthPlaceOptions {
	nichtBekannt = "nicht bekannt",
	außerklinischeGeburt = "außerklinische Geburt",
	imKrankenhaus = "im Krankenhaus",
}

export interface Invoice {
	id: string;
	contact: Contact;
	child: Child;
	date: Date;
	dueDate: Date;
	invoiceNumber: string;
	invoiceAmount: number;
	payments: Payment[];

	completed: boolean;

	notes: string;
	parts: Fee[];
}

export interface Payment {
	id: string;
	invoiceId: string;
	amount: number;
	method?: string;
	date: Date;
}

export interface Fee {
	id?: string;
	officialFeeId: string;
	officialFee: OfficialFee;
	quantity: number;
	from?: Date;
	to?: Date;
}

export interface OfficialFee {
	id: string;
	code: string;
	description: string;
	additionalComments?: string;
	type: string;
	price: number;
	maxPerDayWithoutExplanation?: number;
	maxPerDayWithoutDoctor?: number;
	maxPerPregnancy?: number;
	interval?: string;
	explanation?: string;
	needsExplanationIfQuantityGreaterThan?: number;
	needsExplanationIfSameDayAs?: string[];
	needsDate?: boolean;
}

export type FeeType =
	| "Ambulante hebammenhilfliche Leistung"
	| "Dienst-Beleghebamme"
	| "Begleit-Beleghebamme";

export enum FeeTypeOptions {
	Ambulant = "Ambulante hebammenhilfliche Leistung",
	Dienst = "Dienst-Beleghebamme",
	Begleit = "Begleit-Beleghebamme",
}

export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	birthday: string;
	street: string;
	postalCode: string;
	city: string;
	country: string;
	state: string;
	phone: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	token: string;
	institutionalIdentifier?: string;
	institutionalIdentifierHospital?: string;
	taxId?: string;
	bankAccountIBAN?: string;
	bankAccountBIC?: string;
	bankName?: string;
}
