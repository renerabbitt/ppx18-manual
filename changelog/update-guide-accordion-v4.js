(() => {
  const shot = (src, alt, title, caption) =>
    '<figure class="install-shot"><a href="' + src + '" target="_blank" rel="noreferrer"><img src="' + src + '" alt="' + alt + '"></a><figcaption><strong>' + title + '</strong><span>' + caption + '</span></figcaption></figure>';

  const buildUpdateGuide = () => '<article class="chapter update-chapter simple-update-guide" id="updating">' +
    '<div class="kicker">PPX18 UPDATE AND INSTALL GUIDE</div>' +
    '<h1>How to Update PPX18</h1>' +
    '<p class="deck">Clear instructions for installing the files included with your PPX18 release.</p>' +
    '<p class="release-summary"><strong>Would you prefer help?</strong> <a href="https://www.rabbittdesign.net/shop/p/assisted-install-or-modification-on-any-package" target="_blank" rel="noreferrer">Purchase an assisted installation from Rabbitt Design.</a></p>' +

    '<div class="accordion-stack update-instruction-stack">' +
      '<details open><summary><span>01</span><div><strong>Replace the PPX18 Library</strong><small>Delete the previous Pro Plan Library and install the CALIBZ file from Step 2</small></div></summary>' +
      '<div class="detail-body"><div class="install-guide-layout"><div class="install-procedure">' +
        '<p><strong>If you have other Rabbitt Design systems installed:</strong> Open the Library Browser and open <strong>Tags</strong>. If Tags are hidden, click the gear icon and place a check next to <strong>Tags</strong>. Select the <strong>z.sys-ProPlan</strong> tag, select every item in the filtered results, and delete those items.</p>' +
        '<p><strong>If PPX18 is your only Rabbitt Design system:</strong> Select the main <strong>Rabbitt Design Library</strong> folder and delete it.</p>' +
        '<p>After the deletion finishes, scroll to <strong>Trash</strong> or <strong>User Trash</strong>, right-click it, and choose <strong>Empty Trash</strong>. Open the <strong>Step 2</strong> folder in your downloaded PPX18 installation files, then double-click the supplied <strong>CALIBZ</strong> file to install the replacement Library.</p>' +
        '<p>When installation is complete, there should be only one main <strong>Rabbitt Design Library</strong> folder. If duplicate main folders remain, delete all of them, empty Trash, and install the CALIBZ file again.</p>' +
      '</div><aside class="install-images" aria-label="Library installation screenshots">' +
        shot('../images/install-update/pdf-image-12.jpg','Delete the outdated PPX18 Library','Delete the previous PPX18 Library','Delete the Pro Plan items or the main Rabbitt Design Library folder.') +
        shot('../images/install-update/pdf-image-18.png','Empty Trash or User Trash','Empty Trash','Empty Trash before installing the replacement CALIBZ file.') +
      '</aside></div></div></details>' +

      '<details open><summary><span>02</span><div><strong>Replace Toolbar Configurations</strong><small>Import every TOOLBAR file from the PPX18 Step 3 folder</small></div></summary>' +
      '<div class="detail-body"><div class="install-guide-layout"><div class="install-procedure">' +
        '<p>In Chief Architect, open <strong>Tools &gt; Toolbars and Hotkeys &gt; Customize Toolbars</strong>. Open <strong>Configurations</strong> and choose <strong>Import</strong>.</p>' +
        '<p>When the Import dialog box opens, navigate to the <strong>Step 3</strong> folder inside your downloaded PPX18 installation files. Chief Architect normally opens its own toolbar folder first; that is not the correct folder. Select every <strong>TOOLBAR</strong> file in the PPX18 Step 3 folder and choose <strong>Replace All</strong>.</p>' +
        '<p>Wait for <strong>Importing Place Library Object Buttons</strong> to finish. If prompted, choose <strong>Select All New</strong>, then choose <strong>Done</strong>.</p>' +
      '</div><aside class="install-images" aria-label="Toolbar installation screenshots">' +
        shot('../images/install-update/pdf-image-23.jpg','Open Customize Toolbars','Open Customize Toolbars','Open Tools, Toolbars and Hotkeys, Customize Toolbars.') +
        shot('../images/install-update/pdf-image-3.jpg','Import the toolbar configurations','Import toolbar configurations','Navigate to the PPX18 Step 3 folder and select all TOOLBAR files.') +
        shot('../images/install-update/pdf-image-4.jpg','Toolbar import progress','Wait for the import','Allow the library-object button import to finish.') +
        shot('../images/install-update/pdf-image-5.jpg','Select all new buttons','Complete the import','Choose Select All New, then Done.') +
      '</aside></div></div></details>' +

      '<details open><summary><span>03</span><div><strong>Install the Pro Plan Project</strong><small>Open the Pro Plan CA Project file from Step 4</small></div></summary>' +
      '<div class="detail-body"><p>Open the <strong>Step 4</strong> folder in your downloaded PPX18 installation files. Double-click the <strong>Pro Plan CA Project</strong> file to install it in Chief Architect X18.</p></div></details>' +

      '<details><summary><span>04</span><div><strong>How to Find Your Current PPX18 Downloads</strong><small>Use your account or the live link stored in the Step 5 folder</small></div></summary>' +
      '<div class="detail-body"><p>Sign in at <a href="https://www.rabbittdesign.net" target="_blank" rel="noreferrer"><strong>rabbittdesign.net</strong></a> and open the <strong>Accounts</strong> tab to find your product.</p><p>If the original PPX18 installation files are still on your computer, open the <strong>Step 5</strong> folder. The link inside that folder opens the live Dropbox files. Download the newest files to your computer before installing the update.</p></div></details>' +
    '</div>' +

    '<p class="release-summary release-check"><strong>Not every release includes a Library or Toolbar update.</strong> Check the release notes for your exact version to see which files were updated.</p>' +
  '</article>';

  window.updateChapterClear = buildUpdateGuide;


  const replaceVisibleGuide = () => {
    const current = document.querySelector('#reader .update-chapter:not(.simple-update-guide)');
    if (current) current.outerHTML = buildUpdateGuide();
  };

  new MutationObserver(replaceVisibleGuide).observe(document.querySelector('#reader') || document.body, {childList:true, subtree:true});
  replaceVisibleGuide();
})();