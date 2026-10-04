export type MemberLink = { title: string; url: string };
export type GroupMember = {
  order: number;
  name: string;
  role: string;
  title?: string;
  topic?: string;
  expertise?: string[];
  publications?: MemberLink[];
  links?: MemberLink[];
};

const files = import.meta.glob('../../members/*.json', { eager: true, import: 'default' });
const orders = new Set<number>();
const names = new Set<string>();
const members = Object.entries(files).map(([path, value]) => {
  const fail = (message: string): never => { throw new Error(`${path}: ${message}`); };
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail('expected a member object');
  const member = value as GroupMember;
  const allowed = ['order', 'name', 'role', 'title', 'topic', 'expertise', 'publications', 'links'];
  for (const key of Object.keys(member)) if (!allowed.includes(key)) fail(`unknown field "${key}"`);
  for (const key of ['name', 'role'] as const) {
    if (typeof member[key] !== 'string' || !member[key].trim()) fail(`${key} must be a non-empty string`);
  }
  if (!Number.isInteger(member.order) || member.order < 0 || orders.has(member.order)) fail('order must be a unique non-negative integer');
  if (names.has(member.name)) fail('duplicate member name');
  orders.add(member.order);
  names.add(member.name);
  for (const key of ['title', 'topic'] as const) {
    if (member[key] !== undefined && typeof member[key] !== 'string') fail(`${key} must be a string`);
  }
  if (member.expertise !== undefined && (!Array.isArray(member.expertise) || member.expertise.some(item => typeof item !== 'string' || !item.trim()))) fail('expertise must be an array of non-empty strings');
  for (const key of ['publications', 'links'] as const) {
    if (member[key] === undefined) continue;
    if (!Array.isArray(member[key])) fail(`${key} must be an array`);
    for (const link of member[key]!) {
      if (!link || typeof link.title !== 'string' || !link.title.trim() || typeof link.url !== 'string') fail(`${key} entries need title and url`);
      try {
        if (!['https:', 'http:'].includes(new URL(link.url).protocol)) fail(`${key} URLs must use HTTPS or HTTP`);
      } catch { fail(`${key} contains an invalid URL`); }
    }
  }
  return member;
}).sort((a, b) => a.order - b.order);

export const leader = files['../../members/mikhail-mikhasenko.json'] as GroupMember;
if (!leader) throw new Error('Missing members/mikhail-mikhasenko.json');
export const people = members.filter(member => member !== leader);
