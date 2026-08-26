const chapters=window.MANUAL_CHAPTERS;
const chapterSlug=t=>String(t||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const querySlug=new URLSearchParams(location.search).get('chapter');
const hashSlug=decodeURIComponent(location.hash.replace(/^#/,''));
const requestedSlug=querySlug||hashSlug;
let linkMode=querySlug?'query':hashSlug?'hash':'query';
let active=Math.max(0,chapters.findIndex(c=>chapterSlug(c.title)===requestedSlug)),mode='flip';
const nav=document.querySelector('#nav'),reader=document.querySelector('#reader'),rail=document.querySelector('#rail');
const asset=s=>String(s||'').replace(/^\//,'');
const esc=s=>String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const layoutTitles=new Set(['Pro Layout','Layout User Options']);
const detailsTitles=new Set(['Details Plan','Detail designations','Details','Stackable details']);
const specTitles=new Set(['Spec Plan: Project Information','Modifying Spec Notes']);
const generalTitles=new Set(['Index','Why the Pro Plan?','Limited use agreement','Tech Support and Training','Help Folder','Update or Install Instructions','Transfer to Pro Plan','Pre-built showers','Pro Plan Custom Font','Performance Optimizations','Glossary','Troubleshooting']);
const category=t=>specTitles.has(t)?'spec-plan':detailsTitles.has(t)?'details-plan':generalTitles.has(t)?'general':layoutTitles.has(t)?'layout':'pro-plan';

const essentialsExcluded=new Map([
  ['Tags & library search','Not included: Essentials has no supplied library items, so the PPX18 tagging and Library Browser organization system is not part of this plan.'],
  ['Toolbars','Not included: Essentials does not include the PPX18 toolbar configurations.'],
  ['Toolbar Icons','Not included: Essentials does not include PPX18 toolbars or their specialized tools.'],
  ['Area analysis','Not included: the Area Analysis system and Area Analysis library tools are removed from Essentials.'],
  ['Annotation tool','Not included: the automatic Annotation Tool and its specialized object-linking workflow are removed from Essentials.'],
  ['Braced Wall Panel System','Not included: the Braced Wall Panel system is removed from Essentials.'],
  ['Roof Vent NFA Calculator','Not included: the Roof Vent NFA system is removed from Essentials.'],
  ['Foundation Vent System','Not included: the Foundation Vent system is removed from Essentials.'],
  ['Electrical Panel Schedule Tools','Not included: these circuit tools are supplied as toolbar and library tools, neither of which is included with Essentials.'],
  ['Callout Rose','Not included: the specialized linked Callout Rose tool is not supplied with Essentials.'],
  ['Details Plan','Not included: Essentials does not include the All Details plan or the PPX18 detail system.'],
  ['Detail designations','Not included: the Detail Designations system is removed from Essentials.'],
  ['Details','Not included: the PPX18 detail warehouse, global detail annotations, and related library items are removed from Essentials.'],
  ['Stackable details','Not included: the stackable detail and cross-section detail system is removed from Essentials.'],
  ['Pre-built showers','Not included: Essentials has no supplied library items, including the pre-built shower tools.']
]);
const essentialsPartial=new Map([
  ['Why the Pro Plan?','Partially applicable: the core plan, Spec Plan, title block, and layout concepts remain relevant, but Essentials intentionally omits the advanced automation and tool systems described in this overview.'],
  ['Help Folder','Partially applicable: general help and support references remain useful, but files or instructions for omitted toolbars, library items, and detail systems do not apply.'],
  ['New construction','Partially applicable: the core template, plan, and dimension setup guidance applies; the Area Analysis package and its library tools do not.'],
  ['Project preferences','Partially applicable: preferences controlling functions present in Essentials still apply. Settings dedicated to omitted tools, Area Analysis, or detail systems do not.'],
  ['Macro Modification','Partially applicable: this export, AI-edit, import, restart, and testing workflow applies only to macros that are actually included in Essentials.'],
  ['Walkout Basements','Partially applicable: the floor structure, modeling, and automatic layout-naming concepts apply, but Essentials does not include the supplied toolbar wall tool or any library item.'],
  ['Layout User Options','Partially applicable: floor naming, view naming, and scale-label settings apply to the included layouts. Detail-grid and stackable cross-section settings do not because those systems are removed.'],
  ['Transfer to Pro Plan','Partially applicable: this chapter is useful when moving from Essentials into PPX18, but Essentials does not include the Pro Plan Transfer toolbar or library tool.'],
  ['JobTread / Buildertrend / Spreadsheet Linking','Partially applicable: the general CSV and schedule-column concepts may be useful, but Essentials does not include specialized PPX18 library tools.'],
  ['Troubleshooting','Partially applicable: core macro, font, plan, Spec Plan, and layout troubleshooting applies. Troubleshooting for omitted toolbar, library, Area Analysis, ventilation, BWP, annotation, and detail systems does not.']
]);
const essentialsApplicable=new Map([
  ['Index','Applicable: use this index to navigate the manual, then check the Essentials Plan note at the bottom of each chapter.'],
  ['Limited use agreement','Applicable: the product license and use agreement applies to Essentials.'],
  ['Tech Support and Training','Applicable: support and training resources are available for Essentials users.'],
  ['Managed mode','Applicable: Managed Mode applies to the Essentials project, its stripped-down plan and As-Built file, and its two included layouts.'],
  ['Remodel Workflow, As-Built vs Proposed','Applicable: Essentials includes both an As-Built file and a stripped-down working plan, so the As-Built versus proposed workflow applies.'],
  ['Automatic object labels','Applicable: the core automatic labels included in the stripped-down plan remain relevant.'],
  ['Label replacement','Applicable: Label Replacement remains useful for preserving smart labels while customizing their reported text.'],
  ['Walls','Applicable: the wall setup and layer-based wall guidance remains relevant to the Essentials plan.'],
  ['Framing','Applicable: core Chief Architect framing guidance remains relevant to the Essentials plan.'],
  ['Spec Plan: Project Information','Applicable: Essentials includes the Title Block and Spec Plan, including its Project Information workflow.'],
  ['Modifying Spec Notes','Applicable: Essentials includes the Title Block and Spec Plan, and its supplied specification macros can be exported, adapted for the selected jurisdiction, and reimported using this workflow.'],
  ['Pro Layout','Applicable with the included layouts: Essentials provides Rexel ANSI B (11 × 17) and Rexel ARCH D. References to other PPX18 layouts do not apply.'],
  ['Update or Install Instructions','Applicable: use the current change log and the instructions supplied for the Essentials package.'],
  ['Pro Plan Custom Font','Applicable: the custom font supports the included smart-label and schedule formatting.'],
  ['Performance Optimizations','Applicable: these general plan and rendering performance recommendations remain useful.'],
  ['Glossary','Applicable: use the glossary for terms that appear in the Essentials files and in relevant manual chapters.']
]);
function essentialsCompatibility(title){
  if(essentialsExcluded.has(title))return {state:'excluded',label:'Not included',detail:essentialsExcluded.get(title)};
  if(essentialsPartial.has(title))return {state:'partial',label:'Partially applicable',detail:essentialsPartial.get(title)};
  return {state:'applicable',label:'Applicable',detail:essentialsApplicable.get(title)||'Applicable where this chapter describes core Chief Architect, plan, Spec Plan, title block, or layout features included with Essentials.'};
}
function essentialsFooterHTML(title){
  const info=essentialsCompatibility(title);
  return '<section class="essentials-compat essentials-'+info.state+'" aria-label="Essentials Plan compatibility"><div class="essentials-heading"><span>ESSENTIALS PLAN</span><strong>'+esc(info.label)+'</strong></div><p>'+esc(info.detail)+'</p><p class="essentials-scope"><strong>Essentials package:</strong> a stripped-down working plan, companion As-Built file, Title Block and Spec Plan, plus Rexel ANSI B (11 × 17) and Rexel ARCH D layouts. It includes no PPX18 toolbars or library items.</p></section>';
}


function setChapterURL(){const slug=chapterSlug(chapters[active].title),url=new URL(location.href);url.searchParams.delete('restore');url.searchParams.delete('verify');url.searchParams.delete('deploy');url.searchParams.delete('audit');if(linkMode==='hash'){url.searchParams.delete('chapter');url.hash=slug}else{url.searchParams.set('chapter',slug);url.hash=''}history.replaceState({chapter:active},'',url)}
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
  return '<article id="chapter-'+i+'" data-category="'+category(c.title)+'" class="chapter '+special+'"><div class="chapter-kicker">CHAPTER '+String(i+1).padStart(2,'0')+'</div><h1>'+esc(c.title)+'</h1><p class="deck">'+esc(c.description)+'</p><div class="lesson"><div class="prose">'+body+'</div></div>'+essentialsFooterHTML(c.title)+'</article>';
}

function showTool(button){const chapter=button.closest('.chapter'),catalog=button.closest('.tool-catalog'),c=chapters[Number(chapter.id.replace('chapter-',''))],x=c.icons[Number(button.dataset.toolIndex)];catalog.querySelectorAll('.tool-tile').forEach(b=>b.classList.toggle('active',b===button));catalog.querySelector('[data-tool-image]').src='toolbar-icons/'+x.file;catalog.querySelector('[data-tool-name]').textContent=x.name;catalog.querySelector('[data-tool-source]').textContent=x.sourceName||x.name;catalog.querySelector('[data-tool-description]').textContent=x.description;catalog.querySelector('[data-tool-type]').textContent=x.toolType||'PPX18 toolbar tool';catalog.querySelector('[data-tool-works]').textContent=x.worksWith||'See tool description'}
function wire(){document.querySelectorAll('.chapter-link').forEach(b=>b.onclick=()=>{let id=Number(b.dataset.target),i=id?chapters.findIndex(c=>c.id===id):chapters.findIndex(c=>c.title===b.dataset.title);if(i>=0)go(i)});document.querySelectorAll('[data-img]').forEach(b=>b.onclick=()=>{const d=document.querySelector('#lightbox');d.querySelector('img').src=b.dataset.img;d.showModal()});document.querySelectorAll('.tool-tile').forEach(b=>b.onclick=()=>showTool(b))}
function groupIndexLinks(){document.querySelectorAll('.index .prose').forEach(p=>{const links=[...p.querySelectorAll(':scope>.chapter-link')];if(!links.length)return;[['pro-plan','PLAN FILE'],['details-plan','DETAILS PLAN'],['spec-plan','SPEC PLAN'],['layout','LAYOUT'],['general','GENERAL']].forEach(([key,label])=>{const group=links.filter(b=>b.dataset.category===key);if(!group.length)return;const h=document.createElement('h2');h.dataset.category=key;h.textContent=label;const box=document.createElement('div');box.className='index-link-group';box.dataset.category=key;group.forEach(b=>box.append(b));p.append(h,box)})})}
const searchAliases={basement:['basement','walkout','lower level','floor name','story name'],walkout:['walkout','basement','lower level'],label:['label','labels','annotation','automatic text','type code'],labels:['label','labels','annotation','automatic text'],annotation:['annotation','label','keynote','note'],details:['detail','details','cad detail','designation'],layout:['layout','sheet','title block','layout box'],sheet:['sheet','layout','title block'],support:['support','help','training','discord','facebook'],help:['help','support','troubleshooting','training'],install:['install','installation','update','import'],update:['update','install','installation','import'],macro:['macro','macros','options','preferences'],macros:['macro','macros','options','preferences'],options:['options','preferences','project information','settings'],remodel:['remodel','as built','existing','scope'],asbuilt:['as built','existing','remodel'],newconstruction:['new construction','proposed','dimension defaults'],area:['area','coverage','square footage','lot','conditioned'],coverage:['coverage','area','square footage','lot'],wall:['wall','walls','wall type','layers'],room:['room','rooms','ceiling height','living area'],window:['window','windows','opening','egress'],cabinet:['cabinet','cabinets','kitchen'],toolbar:['toolbar','toolbars','button','icon'],performance:['performance','speed','slow','optimization'],slow:['slow','performance','optimization'],roof:['roof','vent','ventilation','nfa'],framing:['framing','rafter','joist','truss'],font:['font','text style','characters'],project:['project','managed mode','project browser']};
function normalizeSearch(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
function chapterMatches(chapter,query){const searchable={title:chapter.title,description:chapter.description,blocks:chapter.blocks,icons:chapter.icons};const haystack=normalizeSearch(JSON.stringify(searchable));const tokens=normalizeSearch(query).split(' ').filter(Boolean);return tokens.every(token=>{const singular=token.endsWith('s')?token.slice(0,-1):token;const variants=searchAliases[token]||searchAliases[singular]||[token,singular];return variants.some(value=>haystack.includes(normalizeSearch(value)))})}
function render(){nav.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===active));reader.innerHTML=mode==='flip'?chapterHTML(chapters[active],active):chapters.map(chapterHTML).join('');groupIndexLinks();wire()}
function enableWorkingSearch(){const search=document.querySelector('#search'),count=document.querySelector('#count'),box=document.createElement('div');box.className='search-results';box.hidden=true;search.closest('.search').append(box);function snippet(chapter,query){const words=normalizeSearch(query).split(' ').filter(Boolean),texts=[chapter.description,...(chapter.blocks||[]).map(x=>x.text),...(chapter.icons||[]).flatMap(x=>[x.name,x.description])].filter(Boolean);const found=texts.find(text=>words.some(word=>normalizeSearch(text).includes(word)))||chapter.description||'';return found.length>170?found.slice(0,167)+'...':found}function runSearch(q){const query=String(q||'').trim(),matches=[];[...nav.children].forEach((b,i)=>{const match=!query||chapterMatches(chapters[i],query);b.hidden=query?!match:false;if(match&&query)matches.push(i)});box.replaceChildren();if(query){matches.sort((a,b)=>{const title=normalizeSearch(query);return Number(normalizeSearch(chapters[b].title).includes(title))-Number(normalizeSearch(chapters[a].title).includes(title))});count.textContent=matches.length+' RESULTS';matches.forEach(i=>{const button=document.createElement('button'),title=document.createElement('strong'),preview=document.createElement('small');title.textContent=chapters[i].title;preview.textContent=snippet(chapters[i],query);button.append(title,preview);button.onclick=e=>{e.preventDefault();go(i);box.hidden=true};box.append(button)});if(!matches.length){const empty=document.createElement('p');empty.textContent='No matching chapters';box.append(empty)}box.hidden=false}else{count.textContent=chapters.length;box.hidden=true}return matches}search.oninput=e=>runSearch(e.target.value);search.onsearch=e=>runSearch(e.target.value);search.onfocus=e=>{if(e.target.value.trim())runSearch(e.target.value)};search.onkeydown=e=>{if(e.key==='Enter'){const matches=runSearch(e.target.value);if(matches.length){go(matches[0]);box.hidden=true}}else if(e.key==='Escape'){search.value='';runSearch('');search.blur()}}}
setTimeout(enableWorkingSearch,0);
chapters.forEach((c,i)=>{let b=document.createElement('button');b.dataset.category=category(c.title);b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(c.title)+'</strong><small>'+esc(c.description)+'</small></div>';b.onclick=()=>go(i);nav.append(b)});document.querySelector('#count').textContent=chapters.length;document.querySelector('#menu').onclick=()=>rail.classList.toggle('open');document.querySelector('#flip').onclick=()=>{mode='flip';document.querySelector('#flip').classList.add('active');document.querySelector('#scroll').classList.remove('active');render()};document.querySelector('#scroll').onclick=()=>{mode='scroll';document.querySelector('#scroll').classList.add('active');document.querySelector('#flip').classList.remove('active');render()};document.querySelector('#search').oninput=e=>{const q=e.target.value;[...nav.children].forEach((b,i)=>b.hidden=q&&!chapterMatches(chapters[i],q))};document.querySelector('#lightbox button').onclick=()=>document.querySelector('#lightbox').close();function openURLChapter(){const query=new URLSearchParams(location.search).get('chapter'),hash=decodeURIComponent(location.hash.replace(/^#/,'')),slug=query||hash;if(!slug)return;linkMode=query?'query':'hash';const i=chapters.findIndex(c=>chapterSlug(c.title)===slug);if(i>=0)go(i,false)}addEventListener('popstate',openURLChapter);addEventListener('hashchange',openURLChapter);if(!requestedSlug)setChapterURL();render();
