// Pro Plan add-on documentation. Paid skill archives remain in the customer download.
(() => {
  const chapters = window.MANUAL_CHAPTERS;
  const chapter = {
  "id": 43,
  "title": "AI Skills and Integrations",
  "description": "Install the Pro Plan AI add-ons, choose DXF-only or full operation, and use Tab input, MCP, preferences, project information and topography workflows.",
  "blocks": [
    {
      "type": "heading",
      "text": "What an AI skill does"
    },
    {
      "type": "paragraph",
      "text": "An AI skill is a reusable set of instructions, sometimes with scripts and examples, that teaches an agent how to carry out a defined workflow. A skill does not provide an AI subscription, install Chief Architect, grant screen access, or connect to Chief by itself. Chief MCP is the connection to supported application commands and data; screen control is a separate capability."
    },
    {
      "type": "heading",
      "text": "Find and install the add-ons"
    },
    {
      "type": "paragraph",
      "text": "In your extracted Pro Plan download, open Agentic Ai Add Ons for workflow packages and Agentic AI Installation Instructions for installation and Project Information skills. Availability follows your actual download and purchase. The public manual documents these tools; it does not contain the paid package ZIPs."
    },
    {
      "type": "list",
      "text": "Extract the selected ZIP and give the entire folder to your agent, including SKILL.md, references, scripts and examples. Ask it to read SKILL.md and its installation guide before acting. A single pasted file may omit required helper scripts."
    },
    {
      "type": "list",
      "text": "Have the agent discover your AI clientâ€™s actual skills/configuration location. For the new PDF-to-DXF and Tab-input packages, the included install.py accepts an explicit skills directory and can create an isolated Python environment. Existing installations require an update option and receive a dated backup. Other add-ons have their own setup steps."
    },
    {
      "type": "list",
      "text": "Choose the task and operating mode. Installing a skill does not authorize changes to an open plan or allow keyboard/mouse input. Authorize screen control for the relevant task when needed. A permission granted on another customerâ€™s computer does not transfer to yours."
    },
    {
      "type": "list",
      "text": "Use the included synthetic examples and offline tests first. They verify file generation or input planning, not your live Chief interface. On a new machine the agent must discover actual controls, wall types, paths and hotkeys; it must not reuse another computerâ€™s screen coordinates."
    },
    {
      "type": "heading",
      "text": "PDF or image to DXF and CAD to Walls"
    },
    {
      "type": "paragraph",
      "text": "Package: ppx18-pdf-cad-to-walls, in Agentic Ai Add Ons. This AI-assisted workflow converts a floor-plan screenshot or raster PDF to inch-unit CAD surfaces, doors and windows. The agent reads the new drawing and records its dimensions and opening inventory; reusable scripts generate and check the DXF. It is not a universal unattended plan-recognition tool. The bundled raster helper covers orthogonal plans; angled or curved walls require an explicit trace and appropriate checks."
    },
    {
      "type": "paragraph",
      "text": "DXF-only mode prepares the file and import instructions, then stops. It needs file/image access and the packageâ€™s Python dependencies, but no Chief installation, MCP connection or screen control. You handle import and conversion. Example request: Create a checked DXF from this floor plan; I will import and convert it myself."
    },
    {
      "type": "paragraph",
      "text": "Full operation prepares the DXF, imports it into the intended Chief floor, finishes the layer mapping, runs CAD to Walls with matching wall types, checks the model and saves. It normally needs authorized screen control for import dialogs that MCP cannot complete. MCP can handle supported commands, inspection and dialog edits. A completely MCP-only route is valid only when the installed server actually supports the entire path. Example request: Prepare, import and convert this plan in the active editable floor; screen control is authorized for this task."
    },
    {
      "type": "paragraph",
      "text": "Use inches. Map source DXF_Walls to the existing Chief layer \" DXF walls\", DXF_Windows to \" DXF Windows\", and DXF_Doors to \" DXF Doors\". Each destination begins with one ASCII space; walls is lowercase. Complete all three mappings in Import Drawing, then set the same wall/window/door categories in CAD to Walls. Selecting an exterior wall type alone does not map the layers. Audit-generated layers are not finalized assignments."
    },
    {
      "type": "paragraph",
      "text": "Default example widths are 7 13/16 inches exterior and 4.5 inches interior; use your actual requested finished-face widths and matching native wall types. Keep exterior inside finished faces fixed and add thickness outward. Verify General Wall Defaults > Resize About = Inner Surface, especially before any later wall-type resize. The agent must inspect both a source overlay and a CAD-only preview, including every doorway return, jamb, hinge, swing and thickness transition. Passing counts or sampled dimensions alone does not establish completeness."
    },
    {
      "type": "heading",
      "text": "Direct wall drawing with Tab input"
    },
    {
      "type": "paragraph",
      "text": "Package: ppx18-tab-wall-drawing, in Agentic Ai Add Ons. This draws native walls directly in Chief rather than importing a DXF. Its Windows Python helper requires authorized screen control and local calibration. It is dry-run by default. MCP can activate tools and inspect the result, but a canvas gesture that releases the mouse button cannot preserve the held drag needed for Tab input."
    },
    {
      "type": "paragraph",
      "text": "Tab-input lengths follow the inside finished surface. For equal opposing walls, outside span = inside span + 2 Ã— total finished wall thickness; for unequal walls add the two actual thicknesses. With 7 13/16-inch walls, a 24-foot by 15-foot outside envelope has an inside envelope of 22 feet 8 3/8 inches by 13 feet 8 3/8 inches. Derive an L-shaped inside polygon from the whole outside shape; do not subtract twice the thickness from every short notch leg."
    },
    {
      "type": "list",
      "text": "Activate the intended wall tool/type and establish the current inside-face start. Keep Angle Snaps on. Record Object Snaps, turn it off temporarily so nearby geometry cannot pull exact input off its datum, and restore its original state after the run."
    },
    {
      "type": "list",
      "text": "For continuous drawing, hold the right mouse button, move precisely in the intended direction, and press Tab while the button is still held. Release it after Enter Coordinates opens. In verified Relative Polar input, enter the distance and an explicit angle; in Relative Cartesian input, enter exact X/Y offsets. Press Enter to commit. Move in the next direction and repeat Tab/input/Enter without restarting the run. A selected wallâ€™s diamond continuation handle can start an extension."
    },
    {
      "type": "list",
      "text": "Terminate with a combined left-plus-right click or by connecting to another wall. Enter alone does not necessarily finish the tool. Recalibrate after pan, zoom or changed dialog state, and verify actual native geometry after a connected batch. The scriptsâ€™ success messages are not proof that a wall was drawn correctly."
    },
    {
      "type": "paragraph",
      "text": "When you say MOVE, the agent should use a Tab-input displacement: six feet left is 72 inches at 180 degrees. When you say FIX a distance or SET a displayed span, it should select the adjacent/perpendicular wall that must move, click the displayed dimension and enter the required value. Selecting the wall whose length is being measured is a different action. Verify whether the dimension measures inside surfaces, framing or outside faces."
    },
    {
      "type": "paragraph",
      "text": "For revision identification, the workflow places or reuses a Wall Schedule with callouts enabled, Group Similar Objects off and Walls, Labels displayed. Each wall then has its own number for instructions such as move W10. Existing IDs and annotation styles should be preserved. This does not authorize changing room labels or macros."
    },
    {
      "type": "paragraph",
      "text": "Example request: Use the Tab-input skill to draw an L-shaped house with an overall outside envelope of 24 feet by 15 feet, using my actual exterior wall thickness. Screen control is authorized for this task. Verify the closed footprint and add unique wall callouts."
    },
    {
      "type": "heading",
      "text": "Chief Architect MCP setup"
    },
    {
      "type": "paragraph",
      "text": "Location: Agentic Ai Add Ons > Chief-MCP-Setup. This contains a Windows setup guide and PowerShell installer for the included supported Claude Desktop/Claude Code configurations. The agent must check the customerâ€™s actual client and Chief build. Other clients require their own supported MCP registration; do not assume this installer configures every AI app."
    },
    {
      "type": "paragraph",
      "text": "Chief must be installed/licensed and the compatible build must include the MCP bridge. Enable Chief MCP Server in Chiefâ€™s Agentic AI preferences and use Project Management where required. The package does not install/license Chief, grant agent permissions or automatically enable the preference. Verify the connection using application status, documents and discovered tool capabilities before drawing. No separate cloud API key is required for the basic Chief drafting server."
    },
    {
      "type": "heading",
      "text": "Chief Preferences Setup"
    },
    {
      "type": "paragraph",
      "text": "Location: Agentic Ai Add Ons > Chief Preferences Setup. The questionnaire offers the supplied reference profile or individual choices. This concerns application-wide Preferences, not plan defaults, macros, file paths or model content. The skill uses supported MCP fields; when those controls are unavailable it gives manual steps rather than taking over the screen as a fallback. Project Management has separate implications for project handling and needs its own informed choice. Example request: Review the preferences questionnaire with me and apply only the settings I select."
    },
    {
      "type": "heading",
      "text": "Pro Plan agent installation"
    },
    {
      "type": "paragraph",
      "text": "Location: Agentic AI Installation Instructions > ppx18-agent-installation. This guides new installations and supported updates: Help, fonts, library content, toolbars and project import. It distinguishes installation from assessment, uses the actual downloaded package and preserves unrelated files. Unsupported interface steps may use authorized screen control. It is not a donor-model transfer or a general building-editing permission. Example request: Assess my extracted Pro Plan download and install the components I choose."
    },
    {
      "type": "heading",
      "text": "Project Information for title blocks and specifications"
    },
    {
      "type": "paragraph",
      "text": "Location: Agentic AI Installation Instructions > ppx18-project-information. Start with the client and project address. The skill researches and fills existing Project owner fields, Client name/email and Design Load Criteria through supported Chief MCP operations. Project Name is the street name without the number; Street receives the full numbered address. It distinguishes postal city from the actual AHJ and asks for unknown scope of work rather than inventing it."
    },
    {
      "type": "paragraph",
      "text": "The workflow preserves the existing field schema and leaves Applicable Codes CRC, IRC and NBC owner panels untouched. The Project panelâ€™s Code Criteria selector is separate. Automatic climate-zone behavior is preserved unless a specific verified value is authorized. It does not rewrite spec macros or replace CAD macro calls with text. Unknown client contact, parcel, zoning or load values must be reported, not fabricated. Example request: Complete the existing title-block and spec Project Information for this client and address, using verified sources and leaving the code-owner panels unchanged."
    },
    {
      "type": "heading",
      "text": "Lot Topography Skill"
    },
    {
      "type": "paragraph",
      "text": "Location: Agentic Ai Add Ons > Lot Topography Skill. This gathers recorded parcel geometry and existing-ground elevation data, preserves true-north orientation and prepares major contour polylines for Chief/CAD. Its coverage, elevation interval, segment limits, units and datum follow that skillâ€™s instructions and the specific request. Do not apply the architectural DXF packageâ€™s inch-unit rule blindly to geographic data; use the topography outputâ€™s declared units when importing."
    },
    {
      "type": "paragraph",
      "text": "Recorded boundary evidence and adequate terrain coverage matter more than a plausible-looking contour sketch. The agent should identify data sources, explain approximate or unavailable records and avoid claiming coarse GIS/LiDAR interpolation is a surveyed design surface. Example request: Prepare recorded parcel geometry and existing major contours for this address, with the coverage and units stated before import."
    },
    {
      "type": "heading",
      "text": "Choose access to match the task"
    },
    {
      "type": "paragraph",
      "text": "Use DXF-only when you want a file and prefer to handle Chief yourself. Use the Tab workflow when exact native drawing/moves are the goal and you can authorize control of the computer. Use full DXF import/conversion when you want the complete model workflow. Use MCP for supported inspection and editing without assuming it exposes every command. Keep preference setup, installation, project-information entry and drawing as their own scoped tasks; granting one does not authorize the others."
    },
    {
      "type": "paragraph",
      "text": "Ask for the actual result and verification: file location, imported layer assignments, saved model status, and any unresolved items. Source interpretation and customer UI calibration still take time. Short script runtimes are not the full request-to-delivery time, and offline tests are not live Chief verification."
    }
  ],
  "chapterLinks": [
    {
      "label": "Walls and native modeling",
      "targetTitle": "Walls"
    },
    {
      "label": "Title block and Spec Plan fields",
      "targetTitle": "Spec Plan: Project Information"
    },
    {
      "label": "Pro Plan installation and updates",
      "targetTitle": "Update or Install Instructions"
    },
    {
      "label": "Project preferences",
      "targetTitle": "Project preferences"
    }
  ]
};
  const existing = chapters.find(c => c.title === chapter.title);
  if (existing) Object.assign(existing, chapter); else chapters.push(chapter);
  // Display AI setup immediately after Help without changing stable chapter IDs/URLs.
  const aiPosition = chapters.findIndex(c => c.title === chapter.title);
  const [aiChapter] = chapters.splice(aiPosition, 1);
  const helpPosition = chapters.findIndex(c => c.title === 'Help Folder');
  chapters.splice(helpPosition + 1, 0, aiChapter);
  const index = chapters.find(c => c.title === 'Index');
  if (index) {
    index.chapterLinks ||= [];
    if (!index.chapterLinks.some(l => l.targetTitle === chapter.title))
      index.chapterLinks.push({label: chapter.title, targetTitle: chapter.title, targetId: chapter.id});
  }
  if (index?.chapterLinks) {
    const aiLinkPosition = index.chapterLinks.findIndex(l => l.targetTitle === chapter.title);
    const [aiLink] = index.chapterLinks.splice(aiLinkPosition, 1);
    const helpLinkPosition = index.chapterLinks.findIndex(l => l.targetTitle === 'Help Folder');
    index.chapterLinks.splice(helpLinkPosition + 1, 0, aiLink);
  }
  for (const title of ['Walls', 'Spec Plan: Project Information', 'Update or Install Instructions']) {
    const parent = chapters.find(c => c.title === title);
    if (!parent) continue;
    parent.chapterLinks ||= [];
    if (!parent.chapterLinks.some(l => l.targetTitle === chapter.title))
      parent.chapterLinks.push({label: 'AI skills and integrations', targetTitle: chapter.title, targetId: chapter.id});
  }
})();
