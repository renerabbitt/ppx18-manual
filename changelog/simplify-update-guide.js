(() => {
  const shot = (src, alt, caption) =>
    '<figure><a href="' + src + '" target="_blank" rel="noreferrer"><img src="' + src + '" alt="' + alt + '"></a><figcaption>' + caption + '</figcaption></figure>';

  const buildUpdateGuide = () => '<article class="chapter update-chapter simple-update-guide" id="updating">' +
    '<div class="kicker">PPX18 UPDATE AND INSTALL GUIDE</div>' +
    '<h1>How to Update PPX18</h1>' +
    '<p class="deck">Follow the sections below for the files included with your release.</p>' +
    '<p class="assisted-install"><strong>Would you prefer help?</strong> <a href="https://www.rabbittdesign.net/shop/p/assisted-install-or-modification-on-any-package" target="_blank" rel="noreferrer">Purchase an assisted installation from Rabbitt Design.</a></p>' +

    '<section class="simple-update-step">' +
      '<div class="simple-step-copy"><h2>1. Replace the PPX18 Library</h2>' +
      '<p><strong>If you have other Rabbitt Design systems installed:</strong> Open the Library Browser and open <strong>Tags</strong>. If Tags are hidden, click the gear icon and place a check next to <strong>Tags</strong>. Select the <strong>z.sys-ProPlan</strong> tag, select every item in the filtered results, and delete those items.</p>' +
      '<p><strong>If PPX18 is your only Rabbitt Design system:</strong> Select the main <strong>Rabbitt Design Library</strong> folder and delete it.</p>' +
      '<p>After the deletion finishes, scroll to <strong>Trash</strong> or <strong>User Trash</strong>, right-click it, and choose <strong>Empty Trash</strong>. Open the <strong>Step 2</strong> folder in your downloaded PPX18 installation files, then double-click the supplied <strong>CALIBZ</strong> file to install the replacement Library.</p>' +
      '<p>When installation is complete, there should be only one main <strong>Rabbitt Design Library</strong> folder. If duplicate main folders remain, delete all of them, empty Trash, and install the CALIBZ file again.</p></div>' +
      '<aside class="simple-step-images">' +
        shot('/images/install-update/pdf-image-12.jpg','Delete the outdated PPX18 Library','Delete the Pro Plan items or the main Rabbitt Design Library folder.') +
        shot('/images/install-update/pdf-image-18.png','Empty Trash or User Trash','Empty Trash before installing the replacement CALIBZ file.') +
      '</aside>' +
    '</section>' +

    '<section class="simple-update-step">' +
      '<div class="simple-step-copy"><h2>2. Replace Toolbar Configurations</h2>' +
      '<p>In Chief Architect, open <strong>Tools &gt; Toolbars and Hotkeys &gt; Customize Toolbars</strong>. Open <strong>Configurations</strong> and choose <strong>Import</strong>.</p>' +
      '<p>When the Import dialog box opens, navigate to the <strong>Step 3</strong> folder inside your downloaded PPX18 installation files. Chief Architect normally opens its own toolbar folder first; that is not the correct folder. Select every <strong>TOOLBAR</strong> file in the PPX18 Step 3 folder and choose <strong>Replace All</strong>.</p>' +
      '<p>Wait for <strong>Importing Place Library Object Buttons</strong> to finish. If prompted, choose <strong>Select All New</strong>, then choose <strong>Done</strong>.</p></div>' +
      '<aside class="simple-step-images">' +
        shot('/images/install-update/pdf-image-23.jpg','Open Customize Toolbars','Open Tools, Toolbars and Hotkeys, Customize Toolbars.') +
        shot('/images/install-update/pdf-image-3.jpg','Import the toolbar configurations','Navigate to the PPX18 Step 3 folder and select all TOOLBAR files.') +
        shot('/images/install-update/pdf-image-4.jpg','Toolbar import progress','Allow the library-object button import to finish.') +
        shot('/images/install-update/pdf-image-5.jpg','Select all new buttons','Choose Select All New, then Done.') +
      '</aside>' +
    '</section>' +

    '<section class="simple-update-step simple-project-step"><div class="simple-step-copy">' +
      '<h2>3. Install the Pro Plan Project</h2>' +
      '<p>Open the <strong>Step 4</strong> folder in your downloaded PPX18 installation files. Double-click the <strong>Pro Plan CA Project</strong> file to install it in Chief Architect X18.</p>' +
    '</div></section>' +

    '<section class="download-files-chapter">' +
      '<div class="kicker">CURRENT PRODUCT FILES</div><h2>How to Find Your Current PPX18 Downloads</h2>' +
      '<p>Sign in at <a href="https://www.rabbittdesign.net" target="_blank" rel="noreferrer"><strong>rabbittdesign.net</strong></a> and open the <strong>Accounts</strong> tab to find your product.</p>' +
      '<p>If the original PPX18 installation files are still on your computer, open the <strong>Step 5</strong> folder. The link inside that folder opens the live Dropbox files. Download the newest files to your computer before installing the update.</p>' +
    '</section>' +

    '<p class="release-check"><strong>Not every release includes a Library or Toolbar update. Check the release notes for your exact version to see which files were updated.</strong></p>' +
  '</article>';

  window.updateChapterClear = buildUpdateGuide;

  const css = [
    '.simple-update-guide{max-width:1200px}',
    '.simple-update-guide h2{margin:0 0 12px;padding:0;border:0!important;background:transparent!important;color:#111!important;font:800 25px/1.3 Arial,sans-serif}',
    '.simple-update-guide p{font-size:18px;line-height:1.6}',
    '.simple-update-guide .assisted-install{margin:20px 0 32px;padding:16px 18px;background:#f7f2fb;border-left:5px solid #111}',
    '.simple-update-step{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(300px,.75fr);gap:32px;margin:0;padding:28px 0;border-top:1px solid #bbb}',
    '.simple-project-step{grid-template-columns:1fr}',
    '.simple-step-images{display:grid;gap:14px;align-content:start}',
    '.simple-step-images figure{margin:0;min-width:0}',
    '.simple-step-images a{display:block}',
    '.simple-step-images img{display:block;width:100%;height:auto;max-height:300px;object-fit:contain;border:1px solid #bbb;background:#fff}',
    '.simple-step-images figcaption{padding:7px 2px 0;font:600 15px/1.4 Arial,sans-serif;color:#222}',
    '.download-files-chapter{margin-top:12px;padding:28px 0;border-top:2px solid #111}',
    '.download-files-chapter .kicker{margin-bottom:8px}',
    '.release-check{margin:16px 0 0;padding:18px;background:#f7f2fb;border-left:5px solid #111}',
    '@media(max-width:850px){.simple-update-step{grid-template-columns:1fr}.simple-step-images{grid-template-columns:1fr 1fr}}',
    '@media(max-width:580px){.simple-step-images{grid-template-columns:1fr}.simple-update-guide h2{font-size:23px}}'
  ].join('');

  const style = document.createElement('style');
  style.id = 'simple-update-guide-styles';
  style.textContent = css;
  document.head.appendChild(style);

  const replaceVisibleGuide = () => {
    const current = document.querySelector('#reader .update-chapter:not(.simple-update-guide)');
    if (current) current.outerHTML = buildUpdateGuide();
  };

  new MutationObserver(replaceVisibleGuide).observe(document.querySelector('#reader') || document.body, {childList:true, subtree:true});
  replaceVisibleGuide();
})();