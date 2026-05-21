import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import type { Lang, Bilingual } from './content';

const STORAGE_KEY = 'madani.lang';

function initialLang(): Lang {
	if (!browser) return 'en';
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === 'en' || saved === 'id') return saved;
	const nav = navigator.language?.toLowerCase() ?? '';
	return nav.startsWith('id') ? 'id' : 'en';
}

export const lang = writable<Lang>(initialLang());

if (browser) {
	lang.subscribe((l) => {
		try {
			localStorage.setItem(STORAGE_KEY, l);
			document.documentElement.lang = l;
		} catch {}
	});
}

/** Pick a Bilingual value for the current lang. */
export function pick<T extends Bilingual>(b: T, l: Lang): string {
	return b[l] ?? b.en;
}

/** Reactive picker — usage: const headline = $tr(home.hero.headline) */
export const tr = derived(
	lang,
	($l) =>
		<T extends Bilingual>(b: T) =>
			b[$l] ?? b.en
);
