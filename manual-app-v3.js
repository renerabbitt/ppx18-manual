Exit code: 0
Wall time: 0.6 seconds
Output:
const chapters=window.MANUAL_CHAPTERS;
const chapterSlug=t=>String(t||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const requestedSlug=new URLSearchParams(location.search).get('chapter');
let active=Math.max(0,chapters.findIndex(c=>chapterSlug(c.title)===requestedSlug)),mode='flip';
const nav=document.querySelector('#nav'),reader=document.querySelector('#reader'),rail=document.querySelector('#rail');
const asset=s=>String(s||'').replace(/^\//,'');
const esc=s=>String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const layoutTitles=new Set(['Pro Layout','Layout User Options']);
const detailsTitles=new Set(['Details Plan','Detail designations','Details','Stackable details']);
const generalTitles=new Set(['Index','Limited use agreement','Tech Support and Training','Update or Install Instructions','Transfer to Pro Plan','Pre-built showers','Performance Optimizations','Glossary','Troubleshooting']);
const category=t=>t==='Spec Plan: Project Information'?'spec-plan':detailsTitles.has(t)?'details-plan':generalTitles.has(t)?'general':layoutTitles.has(t)?'layout':'pro-plan';

function setChapterURL(){const url=new URL(location.href);url.searchParams.set('chapter',chapterSlug(chapters[active].title));url.searchParams.delete('restore');url.searchParams.delete('verify');history.replaceState({chapter:active},'',url)}
function go(i,updateURL=true){active=Math.max(0,Math.min(chapters.length-1,i));if(updateURL)setChapterURL();render();rail.classList.remove('open');if(mode==='scroll')document.querySelector('#chapter-'+active)?.scrollIntoView({behavior:'smooth'});else scrollTo({top:0,behavior:'smooth'})}

function figureHTML(x){
  if(x.type==='video'||x.src?.includes('youtube.com/embed'))return '<figure class="media video-media"><iframe src="'+esc(x.src)+'" title="'+esc(x.title||x.caption)+'" allowfullscreen></iframe><figcaption>'+esc(x.title||x.caption)+'</figcaption></figure>';
  const kind=x.presentation==='icon'?'inline-icon-media':x.presentation==='highlight'?'inline-toolbar-media':'inline-screen-media';
  return '<figure class="media '+kind+'"><button data-img="'+esc(asset(x.src))+'"><img src="'+esc(asset(x.src))+'" alt="'+esc(x.alt)+'"></button><figcaption>'+esc(x.caption)+' <span>Click to enlarge</span></figcaption></figure>';
}

function iconCatalogHTML(c){
  const icons=c.icons||[];
  if(!icons.length)return '';
  const first=icons[0];
  const buttons=icons.map((x,i)=>'<button class="tool-tile'+(i===0?' active':'')+'" data-tool-index="'+i+'" aria-label="'+esc(x.name)+'" title="'+esc(x.name)+'"><img src="toolbar-icons/'+esc(x.file)+'" alt="" onerror="this.closest(\'.tool-tile\').remove()"><span>'+esc(x.name)+'</span></button>').join('');
  return '<div class="tool-catalog"><div class="tool-grid" aria-label="PPX18 toolbar tools">'+buttons+'</div><aside class="tool-detail" aria-live="polite"><img data-tool-image src="toolbar-icons/'+esc(first.file)+'" alt=""><p class="tool-source" data-tool-source>'+esc(first.sourceName||first.name)+'</p><h2 data-tool-name>'+esc(first.name)+'</h2><p data-tool-description>'+esc(first.description)+'</p><dl><div><dt>Tool type</dt><dd data-tool-type>'+esc(first.toolType||'PPX18 toolbar tool')+'</dd></div><div><dt>Works with</dt><dd data-tool-works>'+esc(first.worksWith||'See tool description')+'</dd></div></dl></aside></div>';
}

function chapterHTML(c,i){
  const media=[...(c.images||[]),...(c.videos||[]).map(v=>({...v,type:'video'}))];
  if(c.image)media.unshift({src:c.image,alt:c.imageAlt||'',caption:c.imageRequest||'',afterBlock:c.imageAfterBlock});
  const slots=new Map();
  media.forEach((m,n)=>{const requested=Number.isInteger(m.afterBlock)?m.afterBlock:Math.min(c.blocks.length-1,Math.max(0,Math.round(((n+1)/(media.length+1))*Math.max(1,c.blocks.length))-1));if(!slots.has(requested))slots.set(requested,[]);slots.get(requested).push(m)});
  let body='';
  c.blocks.forEach((b,n)=>{
    if(b.type==='image')body+=figureHTML(b);
    else if(b.type==='video')body+=figureHTML({...b,type:'video'});
    else if(b.type==='heading')body+='<h2>'+esc(b.text)+'</h2>';
    else if(b.type==='subheading')body+='<h3>'+esc(b.text)+'</h3>';
    else if(b.type==='list')body+='<div class="step"><b>'+String(n+1).padStart(2,'0')+'</b><p>'+esc(b.text)+'</p></div>';
    else body+='<p>'+esc(b.text)+(b.inlineIcon?'<button class="inline-tool-icon" data-img="toolbar-icons/'+esc(b.inlineIcon)+'" title="Click to enlarge"><img src="toolbar-icons/'+esc(b.inlineIcon)+'" alt="'+esc(b.inlineIconAlt||'Toolbar icon')+'"></button>':'')+'</p>';
    if(slots.has(n))body+=slots.get(n).map(figureHTML).join('');
  });
  body+=(c.chapterLinks||[]).map(l=>'<button class="chapter-link" data-category="'+category(l.targetTitle)+'" data-target="'+(l.targetId||'')+'" data-title="'+esc(l.targetTitle)+'">'+esc(l.label)+'</button>').join('');
  body+=(c.externalLinks||[]).map(l=>'<a class="chapter-link" href="'+esc(l.href)+'" target="_blank" rel="noreferrer">'+esc(l.label)+'</a>').join('');
  if(c.icons)body+=iconCatalogHTML(c);
  if(!media.length&&c.imageRequest)body+='<div class="placeholder"><span>IMAGE PLACEHOLDER</span><strong>'+esc(c.imageRequest)+'</strong><p>A current screenshot will be added when it improves this instruction.</p></div>';
  const special=c.title==='Index'?'index':c.title==='Toolbar Icons'?'toolbar-icons':'';
  return '<article id="chapter-'+i+'" data-category="'+category(c.title)+'" class="chapter '+special+'"><div class="chapter-kicker">CHAPTER '+String(i+1).padStart(2,'0')+'</div><h1>'+esc(c.title)+'</h1><p class="deck">'+esc(c.description)+'</p><div class="lesson"><div class="prose">'+body+'</div></div></article>';
}

function showTool(button){const chapter=button.closest('.chapter'),catalog=button.closest('.tool-catalog'),c=chapters[Number(chapter.id.replace('chapter-',''))],x=c.icons[Number(button.dataset.toolIndex)];catalog.querySelectorAll('.tool-tile').forEach(b=>b.classList.toggle('active',b===button));catalog.querySelector('[data-tool-image]').src='toolbar-icons/'+x.file;catalog.querySelector('[data-tool-name]').textContent=x.name;catalog.querySelector('[data-tool-source]').textContent=x.sourceName||x.name;catalog.querySelector('[data-tool-description]').textContent=x.description;catalog.querySelector('[data-tool-type]').textContent=x.toolType||'PPX18 toolbar tool';catalog.querySelector('[data-tool-works]').textContent=x.worksWith||'See tool description'}
function wire(){document.querySelectorAll('.chapter-link').forEach(b=>b.onclick=()=>{let id=Number(b.dataset.target),i=id?chapters.findIndex(c=>c.id===id):chapters.findIndex(c=>c.title===b.dataset.title);if(i>=0)go(i)});document.querySelectorAll('[data-img]').forEach(b=>b.onclick=()=>{const d=document.querySelector('#lightbox');d.querySelector('img').src=b.dataset.img;d.showModal()});document.querySelectorAll('.tool-tile').forEach(b=>b.onclick=()=>showTool(b))}
function groupIndexLinks(){document.querySelectorAll('.index .prose').forEach(p=>{const links=[...p.querySelectorAll(':scope>.chapter-link')];if(!links.length)return;[['pro-plan','PLAN FILE'],['details-plan','DETAILS PLAN'],['spec-plan','SPEC PLAN'],['layout','LAYOUT'],['general','GENERAL']].forEach(([key,label])=>{const group=links.filter(b=>b.dataset.category===key);if(!group.length)return;const h=document.createElement('h2');h.dataset.category=key;h.textContent=label;const box=document.createElement('div');box.className='index-link-group';box.dataset.category=key;group.forEach(b=>box.append(b));p.append(h,box)})})}
const searchAliases={basement:['basement','walkout','lower level','floor name','story name'],walkout:['walkout','basement','lower level'],label:['label','labels','annotation','automatic text','type code'],labels:['label','labels','annotation','automatic text'],annotation:['annotation','label','keynote','note'],details:['detail','details','cad detail','designation'],layout:['layout','sheet','title block','layout box'],sheet:['sheet','layout','title block'],support:['support','help','training','discord','facebook'],help:['help','support','troubleshooting','training'],install:['install','installation','update','import'],update:['update','install','installation','import'],macro:['macro','macros','options','preferences'],macros:['macro','macros','options','preferences'],options:['options','preferences','project information','settings'],remodel:['remodel','as built','existing','scope'],asbuilt:['as built','existing','remodel'],newconstruction:['new construction','proposed','dimension defaults'],area:['area','coverage','square footage','lot','conditioned'],coverage:['coverage','area','square footage','lot'],wall:['wall','walls','wall type','layers'],room:['room','rooms','ceiling height','living area'],window:['window','windows','opening','egress'],cabinet:['cabinet','cabinets','kitchen'],toolbar:['toolbar','toolbars','button','icon'],performance:['performance','speed','slow','optimization'],slow:['slow','performance','optimization'],roof:['roof','vent','ventilation','nfa'],framing:['framing','rafter','joist','truss'],font:['font','text style','characters'],project:['project','managed mode','project browser']};
function normalizeSearch(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
function chapterMatches(chapter,query){const haystack=normalizeSearch(JSON.stringify(chapter));const tokens=normalizeSearch(query).split(' ').filter(Boolean);return tokens.every(token=>{const singular=token.endsWith('s')?token.slice(0,-1):token;const variants=searchAliases[token]||searchAliases[singular]||[token,singular];return variants.some(value=>haystack.includes(normalizeSearch(value)))})}
function render(){nav.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===active));reader.innerHTML=mode==='flip'?chapterHTML(chapters[active],active):chapters.map(chapterHTML).join('');groupIndexLinks();wire()}
chapters.forEach((c,i)=>{let b=document.createElement('button');b.dataset.category=category(c.title);b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(c.title)+'</strong><small>'+esc(c.description)+'</small></div>';b.onclick=()=>go(i);nav.append(b)});document.querySelector('#count').textContent=chapters.length;document.querySelector('#menu').onclick=()=>rail.classList.toggle('open');document.querySelector('#flip').onclick=()=>{mode='flip';document.querySelector('#flip').classList.add('active');document.querySelector('#scroll').classList.remove('active');render()};document.querySelector('#scroll').onclick=()=>{mode='scroll';document.querySelector('#scroll').classList.add('active');document.querySelector('#flip').classList.remove('active');render()};document.querySelector('#search').oninput=e=>{const q=e.target.value;[...nav.children].forEach((b,i)=>b.hidden=q&&!chapterMatches(chapters[i],q))};document.querySelector('#lightbox button').onclick=()=>document.querySelector('#lightbox').close();addEventListener('popstate',()=>{const slug=new URLSearchParams(location.search).get('chapter');const i=chapters.findIndex(c=>chapterSlug(c.title)===slug);if(i>=0)go(i,false)});if(!requestedSlug)setChapterURL();render();

