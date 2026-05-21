/**
 * Content integrity tests — ensures all bilingual content is valid
 * and all required fields exist for the page to render without errors.
 */
import { describe, it, expect } from 'vitest';
import {
	brand,
	navigation,
	home,
	services,
	approach,
	impact,
	team,
	about,
	contact,
	finalCTA,
} from '../content';

// Helper: validate Bilingual object structure
function expectBilingual(obj: any, path: string) {
	expect(obj, `${path} should be defined`).toBeDefined();
	expect(obj, `${path} should be an object`).toBeTypeOf('object');
	expect(obj.en, `${path}.en should be a non-empty string`).toBeTypeOf('string');
	expect(obj.en.length, `${path}.en should not be empty`).toBeGreaterThan(0);
	expect(obj.id, `${path}.id should be a non-empty string`).toBeTypeOf('string');
	expect(obj.id.length, `${path}.id should not be empty`).toBeGreaterThan(0);
}

describe('Brand', () => {
	it('has required identity fields', () => {
		expect(brand.name).toBe('Madani Strategies');
		expect(brand.shortName).toBe('MaGies');
		expectBilingual(brand.tagline, 'brand.tagline');
		expectBilingual(brand.legalLine, 'brand.legalLine');
	});

	it('has valid contact info', () => {
		expect(brand.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		expect(brand.contact.phone).toBeTruthy();
		expectBilingual(brand.contact.address, 'brand.contact.address');
		expect(brand.contact.website).toBeTruthy();
	});
});

describe('Navigation', () => {
	it('has all expected links', () => {
		expect(navigation.length).toBeGreaterThan(0);
		navigation.forEach((item, i) => {
			expect(item.href, `nav[${i}].href`).toMatch(/^\//);
			expectBilingual(item.label, `nav[${i}].label`);
		});
	});
});

describe('Home page', () => {
	it('has hero section with all required fields', () => {
		expectBilingual(home.hero.headline, 'home.hero.headline');
		expectBilingual(home.hero.subheadline, 'home.hero.subheadline');
		expectBilingual(home.hero.ctaPrimary, 'home.hero.ctaPrimary');
		expectBilingual(home.hero.ctaSecondary, 'home.hero.ctaSecondary');
	});

	it('has stats with valid structure', () => {
		expect(home.stats.length).toBeGreaterThanOrEqual(3);
		home.stats.forEach((stat, i) => {
			expect(stat.number, `stats[${i}].number`).toBeTypeOf('string');
			expectBilingual(stat.label, `stats[${i}].label`);
		});
	});

	it('has valueProp section', () => {
		expectBilingual(home.valueProp.sectionTag, 'home.valueProp.sectionTag');
		expectBilingual(home.valueProp.headline, 'home.valueProp.headline');
		expectBilingual(home.valueProp.body, 'home.valueProp.body');
		expect(home.valueProp.cards.length).toBeGreaterThanOrEqual(3);
		home.valueProp.cards.forEach((card, i) => {
			expectBilingual(card.title, `valueProp.cards[${i}].title`);
			expectBilingual(card.body, `valueProp.cards[${i}].body`);
		});
	});
});

describe('Services', () => {
	it('has pageIntro', () => {
		expectBilingual(services.pageIntro.sectionTag, 'services.pageIntro.sectionTag');
		expectBilingual(services.pageIntro.headline, 'services.pageIntro.headline');
		expectBilingual(services.pageIntro.body, 'services.pageIntro.body');
	});

	it('has 3 services with required fields', () => {
		expect(services.list.length).toBe(3);
		services.list.forEach((s, i) => {
			expectBilingual(s.name, `services.list[${i}].name`);
			expectBilingual(s.body, `services.list[${i}].body`);
			if (s.tagline) expectBilingual(s.tagline, `services.list[${i}].tagline`);
		});
	});

	it('has expertise lists for each service', () => {
		services.list.forEach((s, i) => {
			if (s.expertise) {
				expect(Array.isArray(s.expertise.en), `services[${i}].expertise.en is array`).toBe(true);
				expect(Array.isArray(s.expertise.id), `services[${i}].expertise.id is array`).toBe(true);
				expect(s.expertise.en.length, `services[${i}].expertise.en non-empty`).toBeGreaterThan(0);
				expect(s.expertise.en.length).toBe(s.expertise.id.length);
			}
		});
	});

	it('has tags for each service', () => {
		services.list.forEach((s, i) => {
			if (s.tags) {
				expect(Array.isArray(s.tags.en)).toBe(true);
				expect(s.tags.en.length).toBeGreaterThan(0);
			}
		});
	});
});

describe('Approach', () => {
	it('has pageIntro', () => {
		expectBilingual(approach.pageIntro.sectionTag, 'approach.pageIntro.sectionTag');
		expectBilingual(approach.pageIntro.headline, 'approach.pageIntro.headline');
		expectBilingual(approach.pageIntro.body, 'approach.pageIntro.body');
	});

	it('has 3 stages', () => {
		expect(approach.stages.length).toBe(3);
		approach.stages.forEach((s, i) => {
			expect(s.number, `stages[${i}].number`).toBeTypeOf('string');
			expectBilingual(s.title, `stages[${i}].title`);
			expectBilingual(s.body, `stages[${i}].body`);
		});
	});
});

describe('Impact', () => {
	it('has pageIntro', () => {
		expectBilingual(impact.pageIntro.sectionTag, 'impact.pageIntro.sectionTag');
		expectBilingual(impact.pageIntro.headline, 'impact.pageIntro.headline');
		expectBilingual(impact.pageIntro.body, 'impact.pageIntro.body');
	});

	it('has impact cards', () => {
		expect(impact.cards.length).toBeGreaterThanOrEqual(4);
		impact.cards.forEach((c, i) => {
			expectBilingual(c.category, `impact.cards[${i}].category`);
			expectBilingual(c.title, `impact.cards[${i}].title`);
			expectBilingual(c.body, `impact.cards[${i}].body`);
		});
	});
});

describe('Team', () => {
	it('has pageIntro', () => {
		expectBilingual(team.pageIntro.sectionTag, 'team.pageIntro.sectionTag');
		expectBilingual(team.pageIntro.headline, 'team.pageIntro.headline');
	});

	it('has core team members with all fields', () => {
		expect(team.core.length).toBe(5);
		team.core.forEach((m, i) => {
			expect(m.name, `core[${i}].name`).toBeTypeOf('string');
			expect(m.name.length, `core[${i}].name not empty`).toBeGreaterThan(0);
			expectBilingual(m.role, `core[${i}].role`);
			expectBilingual(m.bio, `core[${i}].bio`);
		});
	});

	it('includes key team members', () => {
		const names = team.core.map((m) => m.name);
		expect(names).toContain('Giorgio Budi Indrarto');
		expect(names).toContain('Nadia Hadad');
		expect(names).toContain('Riyadh Assegaf');
		expect(names).toContain('Firly Savitri');
		expect(names).toContain('Zulkifli Tegar');
	});

	it('has affiliated experts', () => {
		expect(team.affiliated.list.length).toBeGreaterThanOrEqual(5);
		expectBilingual(team.affiliated.intro, 'team.affiliated.intro');
		team.affiliated.list.forEach((e, i) => {
			expect(e.name, `affiliated[${i}].name`).toBeTypeOf('string');
			expectBilingual(e.role, `affiliated[${i}].role`);
			expectBilingual(e.bio, `affiliated[${i}].bio`);
		});
	});
});

describe('About', () => {
	it('has pageIntro and required sections', () => {
		expectBilingual(about.pageIntro.sectionTag, 'about.pageIntro.sectionTag');
		expectBilingual(about.pageIntro.headline, 'about.pageIntro.headline');
	});
});

describe('Contact', () => {
	it('has pageIntro', () => {
		expectBilingual(contact.pageIntro.headline, 'contact.pageIntro.headline');
		expectBilingual(contact.pageIntro.body, 'contact.pageIntro.body');
	});
});

describe('Final CTA', () => {
	it('has all required fields', () => {
		expectBilingual(finalCTA.sectionTag, 'finalCTA.sectionTag');
		expectBilingual(finalCTA.headline, 'finalCTA.headline');
		expectBilingual(finalCTA.body, 'finalCTA.body');
		expectBilingual(finalCTA.ctaPrimary, 'finalCTA.ctaPrimary');
	});
});

describe('No [object Object] in rendered text', () => {
	it('all leaf string values are actually strings, not objects', () => {
		// Recursively walk all exports — any string that looks like "[object Object]"
		// indicates someone forgot to use .en or .id
		const checked: string[] = [];

		function walk(obj: any, path: string) {
			if (obj === null || obj === undefined) return;
			if (typeof obj === 'string') {
				checked.push(path);
				expect(obj, `${path} should not be "[object Object]"`).not.toMatch(/\[object Object\]/);
				return;
			}
			if (Array.isArray(obj)) {
				obj.forEach((item, i) => walk(item, `${path}[${i}]`));
				return;
			}
			if (typeof obj === 'object') {
				for (const key of Object.keys(obj)) {
					walk(obj[key], `${path}.${key}`);
				}
			}
		}

		walk(brand, 'brand');
		walk(home, 'home');
		walk(services, 'services');
		walk(approach, 'approach');
		walk(impact, 'impact');
		walk(team, 'team');
		walk(about, 'about');
		walk(contact, 'contact');
		walk(finalCTA, 'finalCTA');

		expect(checked.length, 'should have checked many strings').toBeGreaterThan(50);
	});
});
