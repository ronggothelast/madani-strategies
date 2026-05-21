import { writable } from 'svelte/store';

export const activeVariant = writable<number>(1);
export const isDarkMode = writable<boolean>(false);
export const activeLang = writable<'en' | 'id'>('en');

// 20 design variants — SAME Madani palette across all.
// Cream paper, ink navy, ocean accent, sage, soil.
// What changes: typography, layout density, composition, mood.
export const variantMetadata = [
	{ id: 1, name: "The Quiet Authority", description: "Cormorant serif headers + Inter body. Asymmetric editorial layout with section anchors. McKinsey/Pentagram quiet confidence.", group: "Editorial" },
	{ id: 2, name: "Swiss Editorial", description: "All-caps Inter headers, rigid 12-column grid, tabular density. Strict typographic hierarchy.", group: "Editorial" },
	{ id: 3, name: "The Field Atlas", description: "Fraunces serif + margin notes. Cartographic feel, footnote-style metadata, generous line-height.", group: "Editorial" },
	{ id: 4, name: "Editorial Brutalist", description: "Cabinet Grotesk 900-weight headers, tight tracking, heavy borders, condensed spacing.", group: "Editorial" },
	{ id: 5, name: "Modernist Archive", description: "Playfair italic display + Inter body. Newspaper layout, thick rules, classic editorial.", group: "Editorial" },
	{ id: 6, name: "The Signal", description: "Cabinet Grotesk modern sans, generous whitespace, Linear/Stripe modernist density.", group: "Modernist" },
	{ id: 7, name: "Neural Minimal", description: "Newsreader serif body + airy spacing. Anthropic-style organic warmth, minimal borders.", group: "Modernist" },
	{ id: 8, name: "Soft Cards", description: "Rounded card system, soft shadows, neumorphic-lite. Inter sans, premium SaaS feel.", group: "Modernist" },
	{ id: 9, name: "Cyber-Zen Minimal", description: "Cormorant italic display + huge whitespace. Asymmetric, contemplative, Japanese minimalism.", group: "Modernist" },
	{ id: 10, name: "Strategic Dashboard", description: "Inter sans, mono micro-labels, dense tabular panels. Operations-room intelligence feel.", group: "Modernist" },
	{ id: 11, name: "Bloomberg Modern", description: "Fraunces serif headers, dense data layouts, market-intelligence tabular density.", group: "Corporate" },
	{ id: 12, name: "The Executive Brief", description: "Cormorant serif headers, WSJ-style classic editorial briefing layout, authoritative.", group: "Corporate" },
	{ id: 13, name: "Nordic Clean", description: "Space Grotesk geometric sans, airy whitespace, clean Scandinavian minimalism.", group: "Corporate" },
	{ id: 14, name: "Founders Minimal", description: "Inter 800-weight punchy headers, tight tracking, list-driven layouts.", group: "Corporate" },
	{ id: 15, name: "Linear Strategic", description: "Geist sans, technical aesthetic, clean dashboard sections, mono tags.", group: "Corporate" },
	{ id: 16, name: "Monochrome Brutalist", description: "Cabinet Grotesk 900-weight, 2px borders everywhere, raw structural feel.", group: "Experimental" },
	{ id: 17, name: "Liquid Organic", description: "Playfair italic, oversized rounded cards, soft flowing layouts. Editorial elegance.", group: "Experimental" },
	{ id: 18, name: "The Prompt Studio", description: "IBM Plex Mono headers, terminal-aesthetic layouts, developer-tool density.", group: "Experimental" },
	{ id: 19, name: "Bauhaus Geometric", description: "Cabinet Grotesk uppercase, structured geometric blocks, 2px solid border system.", group: "Experimental" },
	{ id: 20, name: "Editorial Italic", description: "Newsreader body + Cormorant italic headers. Literary, expressive, contemplative.", group: "Experimental" }
];
