import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import './styles.css';

const imported = import.meta.glob('../*.md', { query: '?raw', import: 'default', eager: true });
const documents = Object.entries(imported)
  .map(([path, markdown]) => {
    const file = path.split('/').pop();
    const id = file.replace(/\.md$/, '');
    const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? file;
    return { id, file, title, markdown };
  })
  .filter((doc) => doc.id !== 'SUMMARY')
  .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));

const home = documents.find((doc) => doc.id === 'README');
const chapters = documents.filter((doc) => doc.id !== 'README');
const byId = new Map(documents.map((doc) => [doc.id, doc]));

marked.setOptions({ gfm: true, breaks: false });

function escapeAttribute(value = '') {
  return String(value).replace(/[&"<>]/g, (char) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' })[char]);
}

function prepareMarkdown(doc) {
  return doc.markdown.replace(/(!?\[[^\]]*\]\()([^\s)]+)([^)]*\))/g, (whole, prefix, target, suffix) => {
    if (target.startsWith('assets/')) return `${prefix}/assets/${target.slice('assets/'.length)}${suffix}`;
    if (!target.endsWith('.md') && !target.includes('.md#')) return whole;
    const [filePart, ...hashPart] = target.split('#');
    const targetId = filePart.split('/').pop().replace(/\.md$/, '');
    if (!byId.has(targetId)) return whole;
    const route = targetId === 'README' ? '/' : `/guide/${targetId}`;
    const hash = hashPart.length ? `#${hashPart.join('#')}` : '';
    return `${prefix}${route}${hash}${suffix}`;
  });
}

function renderMarkdown(doc) {
  let source = doc.markdown;
  if (doc.id === 'README') source = source.replace(/^# Silo User Guide\s*\n\s*\n!\[Silo\]\([^)]*\)\s*\n/m, '');
  const html = marked.parse(prepareMarkdown({ ...doc, markdown: source }));
  return { __html: DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }) };
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function routeFor(id) {
  return id === 'README' ? '/' : `/guide/${id}`;
}

function currentDoc() {
  const match = window.location.pathname.match(/^\/guide\/([^/]+)\/?$/);
  return match ? (byId.get(decodeURIComponent(match[1])) ?? home) : home;
}

function App() {
  const [doc, setDoc] = useState(currentDoc);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(() => {
    const saved = document.documentElement.dataset.theme;
    return saved || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.title = doc?.id === 'README' ? 'Silo User Guide' : `${doc?.title ?? 'Silo User Guide'} · Silo User Guide`;
  }, [doc]);

  useEffect(() => {
    const syncRoute = () => {
      setDoc(currentDoc());
      setMenuOpen(false);
      if (window.location.hash) {
        requestAnimationFrame(() => document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView());
      } else window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', syncRoute);
    const routeClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !/^\/(?:guide\/[^/]+)?$/.test(url.pathname)) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.hash}`);
      syncRoute();
    };
    document.addEventListener('click', routeClick);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      document.removeEventListener('click', routeClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('silo-guide-theme', theme); } catch (_) {}
  }, [theme]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        document.querySelector('.search-input')?.focus();
        setMenuOpen(true);
      }
      if (event.key === 'Escape') { setSearchOpen(false); setMenuOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return chapters.map((item) => {
      const text = plainText(item.markdown);
      const index = text.toLowerCase().indexOf(term);
      return { item, index, text };
    }).filter((result) => result.index >= 0 || result.item.title.toLowerCase().includes(term))
      .slice(0, 7)
      .map(({ item, index, text }) => {
        const start = Math.max(0, index - 48);
        return { ...item, snippet: index < 0 ? 'Open this chapter' : `${start ? '…' : ''}${text.slice(start, start + 120)}${text.length > start + 120 ? '…' : ''}` };
      });
  }, [query]);

  const selectResult = (id) => {
    window.history.pushState({}, '', routeFor(id));
    setDoc(byId.get(id));
    setQuery('');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-shell">
      <header className="mobile-bar">
        <button className="icon-button menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button>
        <a className="mobile-brand" href="/" aria-label="Silo guide home"><img src="/assets/silo-logo.png" alt="" /> <span>Help Center</span></a>
        <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☼' : '◐'}</button>
      </header>
      <div className={`sidebar-scrim ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} />
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <a className="brand" href="/">
          <span className="brand-mark"><img src="/assets/silo-logo.png" alt="" /></span>
          <span className="brand-copy"><strong>Silo</strong><small>USER GUIDE</small></span>
        </a>
        <div className="search-wrap">
          <label className="search-label" htmlFor="chapter-search">SEARCH THE GUIDE</label>
          <div className="search-box"><span aria-hidden="true">⌕</span><input id="chapter-search" className="search-input" value={query} onChange={(event) => setQuery(event.target.value)} onFocus={() => setSearchOpen(true)} placeholder="Find an answer…" /><kbd>⌘ K</kbd></div>
          {searchOpen && query.trim() && <div className="search-results" onMouseLeave={() => {}}>
            {results.length ? results.map((item) => <button key={item.id} onClick={() => selectResult(item.id)}><strong>{item.title}</strong><span>{item.snippet}</span></button>) : <p>No matching chapters. Try another phrase.</p>}
          </div>}
        </div>
        <nav className="chapter-nav" aria-label="Guide chapters">
          <span className="nav-heading">GET STARTED</span>
          <a className={`nav-link ${doc?.id === 'README' ? 'active' : ''}`} href="/">Guide overview</a>
          {chapters.slice(0, 3).map((item, index) => <NavItem key={item.id} item={item} active={doc?.id === item.id} number={String(index + 1).padStart(2, '0')} />)}
          <span className="nav-heading nav-heading-spaced">EXPLORE SILO</span>
          {chapters.slice(3).map((item, index) => <NavItem key={item.id} item={item} active={doc?.id === item.id} number={String(index + 4).padStart(2, '0')} />)}
        </nav>
        <div className="sidebar-footer"><span className="status-dot" /> Guide reviewed <time dateTime="2026-10-09">Oct 9, 2026</time></div>
      </aside>
      <main className="main-area">
        <div className="topline"><div className="breadcrumbs"><a href="/">Silo Guide</a><span>/</span><span>{doc?.id === 'README' ? 'Overview' : doc?.title}</span></div><button className="theme-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><span>{theme === 'dark' ? '☼' : '◐'}</span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</button></div>
        {doc?.id === 'README' && <section className="hero">
          <div className="hero-copy"><span className="eyebrow"><i /> THE SILO FIELD GUIDE</span><h1>Your library.<br /><em>Your way.</em></h1><p>Learn what Silo can do, how its local indexes work, and what to expect from every feature.</p><div className="hero-actions"><a className="primary-button" href={routeFor(chapters[0].id)}>Start with the basics <span>↗</span></a><span className="read-time">15 chapters · practical answers</span></div></div>
          <div className="hero-art"><div className="art-glow" /><div className="screenshot-frame"><div className="screenshot-top"><span /><span /><span /><b>SILO · FILES</b></div><img src="/assets/files-library-redacted.jpg" alt="Silo Files library screen with sample personal details redacted" /><div className="screenshot-caption"><span className="caption-icon">✳</span><span><b>A calmer view of your files</b><small>One workspace for the sources you choose</small></span></div></div><span className="hero-orbit orbit-one" /><span className="hero-orbit orbit-two" /></div>
        </section>}
        <div className={`content-wrap ${doc?.id === 'README' ? 'home-content' : ''}`}>
          {doc?.id !== 'README' && <div className="chapter-kicker"><span>CHAPTER {String(chapters.findIndex((item) => item.id === doc?.id) + 1).padStart(2, '0')}</span><i /> THE SILO FIELD GUIDE</div>}
          <article className="markdown-body" key={doc?.id} dangerouslySetInnerHTML={renderMarkdown(doc ?? home)} />
          {doc?.id !== 'README' && <ChapterPager doc={doc} />}
        </div>
        <footer className="site-footer"><span>Made for people who care where their files live.</span><a href="https://trysilo-seven.vercel.app" target="_blank" rel="noreferrer">Discover Silo <span>↗</span></a></footer>
      </main>
    </div>
  );
}

function NavItem({ item, active, number }) {
  return <a className={`nav-link chapter-link ${active ? 'active' : ''}`} href={routeFor(item.id)}><span className="nav-number">{number}</span><span>{item.title.replace(/ and /g, ' & ')}</span></a>;
}

function ChapterPager({ doc }) {
  const index = chapters.findIndex((item) => item.id === doc?.id);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  return <nav className="chapter-pager" aria-label="Previous and next chapters">
    {previous ? <a href={routeFor(previous.id)}><small>← PREVIOUS</small><strong>{previous.title}</strong></a> : <a href="/"><small>← OVERVIEW</small><strong>Silo User Guide</strong></a>}
    {next ? <a className="next-chapter" href={routeFor(next.id)}><small>NEXT CHAPTER →</small><strong>{next.title}</strong></a> : <a className="next-chapter" href="/"><small>BACK TO</small><strong>Guide overview ↑</strong></a>}
  </nav>;
}

createRoot(document.getElementById('root')).render(<App />);
