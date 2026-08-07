(() => {
  window.newInstallationChapter = () => '<article class="chapter new-installation-chapter" id="new-installation">' +
    '<div class="kicker">NEW PPX18 USER · COMPLETE INSTALLATION</div>' +
    '<h1>New PPX18 Installation</h1>' +
    '<p class="deck">Use this chapter when PPX18 has never been installed on this computer.</p>' +

    '<p class="release-summary"><strong>Migrating from Pro Plan X17?</strong> Do not use these new-user instructions. <button class="update-guide-link" type="button" data-update-guide>Open How to Update PPX18 →</button></p>' +
    '<p class="release-summary"><strong>Would you prefer help?</strong> <a href="https://www.rabbittdesign.net/shop/p/assisted-install-or-modification-on-any-package" target="_blank" rel="noreferrer">Purchase an assisted installation from Rabbitt Design.</a></p>' +

    '<div class="accordion-stack new-installation-steps">' +
      '<details open><summary><span>01</span><div><strong>Step 1 — Install the Fonts and Help Files</strong><small>Install the required PPX18 fonts and the enhanced Chief Architect Help folder</small></div></summary>' +
      '<div class="detail-body">' +
        '<h3>Install the required fonts</h3>' +
        '<p>Open the <strong>Step 1</strong> folder in the downloaded PPX18 installation files. Select the supplied font files, right-click the selection, and choose <strong>Install</strong> or <strong>Install for all users</strong>.</p>' +
        '<p>The PPX18 fonts provide formatting that ordinary Chief Architect fonts cannot produce. They create rich-text-style schedule output, rich-text-style room labels, and full-height superscript characters in window and door labels.</p>' +

        '<details class="optional-install-detail"><summary><span>OPTIONAL</span><div><strong>Create a custom PPX18 font for your branding</strong><small>Advanced option for users who want PPX18 labels to use a different typeface</small></div></summary>' +
        '<div class="detail-body"><p>You can create a custom PPX18-compatible font when your business uses a particular branded typeface. This is an advanced, optional process.</p>' +
        '<ol><li>Install <strong>FontForge</strong>, which is a free font-editing application.</li><li>Download or obtain the font file you are licensed to use.</li><li>Open FontForge and run its script-execution command.</li><li>Target the PPX18 font-generation script supplied with the installation files.</li><li>Use the generated font as your custom PPX18 font and install it in Windows.</li></ol>' +
        '<p>Additional details will be added to this section as the custom-font workflow is expanded.</p></div></details>' +

        '<h3>What the PPX18 Help folder does</h3>' +
        '<p>The X18 installation package includes a replacement Help folder inside the Step 1 folder. This folder replaces Chief Architect\'s standard installed Help files with a PPX18-enhanced copy that adds Rabbitt Design Systems instructions to Chief Architect\'s live, integrated Help menu.</p>' +
        '<p>The enhanced Help remains context-sensitive. When you request help from an element, dialog, or panel, Chief Architect opens the related Help topic with the PPX18 instructions at the top. For example, Dashboard Help explains how to start a new project in the Pro Plan.</p>' +

        '<h3>Locate the installed Help folder</h3>' +
        '<ol><li>In Chief Architect, open the <strong>Edit</strong> menu and select <strong>Preferences</strong>.</li><li>Open the <strong>Folders</strong> subpanel.</li><li>Click <strong>Show All Folders</strong>.</li><li>Select the <strong>Help</strong> folder, then click <strong>Show in Explorer</strong> on Windows or <strong>Show in Finder</strong> on macOS.</li></ol>' +
        '<p>Explorer or Finder opens the installed location so you can identify the Help folder that must be backed up and replaced.</p>' +

        '<h3>Back up the original Help folder</h3>' +
        '<p>Before replacing anything, make a backup copy of Chief Architect\'s original Help folder and store it somewhere else on your machine. Keep that backup unchanged so the standard Chief Architect Help can be restored if needed.</p>' +

        '<h3>Install the PPX18-enhanced Help folder</h3>' +
        '<ol><li>Close Chief Architect.</li><li>Open the <strong>Step 1</strong> folder in the PPX18 X18 installation package.</li><li>Locate the packaged replacement <strong>Help</strong> folder.</li><li>Copy that Help folder into the installed location you opened from Preferences. Replace the installed Help folder only after confirming that your original backup is safely stored elsewhere.</li></ol>' +
        '<p>This replacement injects Rabbitt Design Systems information and PPX18-specific instructions into Chief Architect\'s interactive Help system.</p>' +

        '<h3>Use the interactive Help menu</h3>' +
        '<ol><li>Open Chief Architect and work in the Pro Plan.</li><li>Open or select the element, dialog, or panel for which you need instructions, then press <strong>F1</strong>.</li><li>Move the Help window onto a side screen so the instructions remain visible while you work.</li></ol>' +
        '<p>The Help topic opens at the relevant PPX18 instructions when that topic has a Rabbitt Design Systems section. The rest of Chief Architect\'s standard Help remains available below it.</p>' +
      '</div></details>' +

      '<details open><summary><span>02</span><div><strong>Step 2 — Install the PPX18 Libraries</strong><small>Open the CALIBZ file with Chief Architect X18</small></div></summary>' +
      '<div class="detail-body"><p>Open the <strong>Step 2</strong> folder in the downloaded PPX18 installation files. Right-click the supplied <strong>CALIBZ</strong> file and open it with <strong>Chief Architect X18</strong>.</p><p>The library installation may take approximately <strong>five to ten minutes</strong>, depending on the computer and the amount of library content being installed. Allow Chief Architect to finish before continuing.</p></div></details>' +

      '<details open><summary><span>03</span><div><strong>Step 3 — Install the Toolbar Configurations</strong><small>Import every TOOLBAR file from the downloaded PPX18 Step 3 folder</small></div></summary>' +
      '<div class="detail-body"><div class="install-guide-layout"><div class="install-procedure">' +
        '<p>In Chief Architect, open <strong>Tools &gt; Toolbars and Hotkeys &gt; Customize Toolbars</strong>. Open <strong>Configurations</strong> and choose <strong>Import</strong>.</p>' +
        '<p>When the Import dialog box opens, navigate to the <strong>Step 3</strong> folder inside your downloaded PPX18 installation files. Chief Architect normally opens its own toolbar folder first; that is not the correct folder. Select every <strong>TOOLBAR</strong> file in the PPX18 Step 3 folder and choose <strong>Replace All</strong>.</p>' +
        '<p>Wait for <strong>Importing Place Library Object Buttons</strong> to finish. If prompted, choose <strong>Select All New</strong>, then choose <strong>Done</strong>.</p>' +
      '</div><aside class="install-images" aria-label="Toolbar installation screenshots">' +
        '<figure class="install-shot"><a href="../images/install-update/pdf-image-23.jpg" target="_blank" rel="noreferrer"><img src="../images/install-update/pdf-image-23.jpg" alt="Open Customize Toolbars"></a><figcaption><strong>Open Customize Toolbars</strong><span>Open Tools, Toolbars and Hotkeys, Customize Toolbars.</span></figcaption></figure>' +
        '<figure class="install-shot"><a href="../images/install-update/pdf-image-3.jpg" target="_blank" rel="noreferrer"><img src="../images/install-update/pdf-image-3.jpg" alt="Import toolbar configurations"></a><figcaption><strong>Import toolbar configurations</strong><span>Navigate to the PPX18 Step 3 folder and select all TOOLBAR files.</span></figcaption></figure>' +
        '<figure class="install-shot"><a href="../images/install-update/pdf-image-4.jpg" target="_blank" rel="noreferrer"><img src="../images/install-update/pdf-image-4.jpg" alt="Toolbar import progress"></a><figcaption><strong>Wait for the import</strong><span>Allow the library-object button import to finish.</span></figcaption></figure>' +
        '<figure class="install-shot"><a href="../images/install-update/pdf-image-5.jpg" target="_blank" rel="noreferrer"><img src="../images/install-update/pdf-image-5.jpg" alt="Select all new buttons"></a><figcaption><strong>Complete the import</strong><span>Choose Select All New, then Done.</span></figcaption></figure>' +
      '</aside></div></div></details>' +

      '<details open><summary><span>04</span><div><strong>Step 4 — Install the Pro Plan Project</strong><small>Open the CA Project file with Chief Architect X18</small></div></summary>' +
      '<div class="detail-body"><p>Open the <strong>Step 4</strong> folder in the downloaded PPX18 installation files. Right-click the supplied <strong>Pro Plan CA Project</strong> file and open it with <strong>Chief Architect X18</strong>.</p></div></details>' +

      '<details><summary><span>05</span><div><strong>Step 5 — Bonus and Additional Items</strong><small>Optional files and links that are not required for the main PPX18 installation</small></div></summary>' +
      '<div class="detail-body"><p>The <strong>Step 5</strong> folder contains bonus and additional items. These files do not need to be opened or installed for the main PPX18 system to work.</p><p>Step 5 also contains the live product link that can be used later to return to the newest Dropbox-hosted installation files.</p></div></details>' +
    '</div>' +
  '</article>';

})();