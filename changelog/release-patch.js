(() => {
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await originalFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;
    const data = await response.json();
    const notes260722 = {
      "New Features": [
        "Added Flood Zone and Map ID fields to Spec Plan Project Information.",
        "Added additional Project Information headings so related settings are easier to find and complete.",
        "Added a Street Name macro that reads the street name from Title Block Information and displays it on the Plot Plan.",
        "Added load-path color coding for manually placed beams and posts. These structural members now display with a blue vector color and are also tinted blue in 3D views.",
        "Added keynotes to the Front Elevation camera. The keynotes are connected to detailed designations for siding material, roofing material, and other exterior specifications.",
        "Added expanded Area Analysis diagnostic tools that show the full calculation breakdown used to derive area totals.",
        "Added direct links from relevant CAD details to their corresponding sections in the PPX18 User Manual.",
        "Added direct links from Layout files to the Layout chapter in the PPX18 User Manual.",
        "Added bookmarkable links to individual User Manual sections so a specific section can be saved or shared directly."
      ],
      "Patches and Improvements": [
        "Added a new CAD detail named Manual - Applicable Codes. This lets users enter code criteria manually through the Project Information Tool instead of using the automatic criteria generated from the Code Cycle field.",
        "Improved the RabsBoxLabel macro to reduce false positives and provide more flexibility for elevation camera labels.",
        "Patched the Applicable Codes label on all Layout files so it correctly uses RabsBoxLabel.",
        "Added a section to the user manual explaining the two additional template pages.",
        "Removed invisible text boxes from all Layout files.",
        "Patched all specification-writing labels to use RabsBoxLabel.",
        "Repaired the Braced Wall Panel tool in the Pro Plan Library.",
        "Expanded the Project Information Tool so walkout-basement configuration and other Layout options can be controlled from one central location.",
        "Rebuilt the Layout-settings workflow to use the Project Information Tool instead of the former text-box-based system. This makes the settings easier to understand and more stable across Layout pages.",
        "Cleaned up the Spec Plan title block to improve organization and readability.",
        "Refined several additional title-block styles.",
        "Updated the Area Analysis chapter in the PPX18 User Manual to explain the expanded diagnostic tools and calculation breakdowns.",
        "Repaired mulled-window label output following an X18 update that removed required name-value pairs. Because a mulled window no longer provides a usable frame-material value, its frame-material label now reports See Spec."
      ],
      "Removed or Replaced": [
        "Removed the Applicable Codes text box from the Spec Plan working plan view and moved that information to the Manual - Applicable Codes CAD detail described above."
      ]
    };
    const release260722 = {
      version: "PPX18 260722",
      status: "Previous release",
      groups: {
        "Spec Plan": [
          "Added Flood Zone and Map ID fields to Spec Plan Project Information.",
          "Added additional Project Information headings so related settings are easier to locate.",
          "Added a Manual - Applicable Codes CAD detail for manually entered code criteria.",
          "Removed the former Applicable Codes text box from the Spec Plan working plan view.",
          "Patched all specification-writing labels to use RabsBoxLabel.",
          "Cleaned up and refined the Spec Plan title block for improved readability.",
          "Repaired mulled-window label output and changed the unavailable frame-material value to See Spec."
        ],
        "Layout Files": [
          "Patched the Applicable Codes label on all Layout files so it correctly uses RabsBoxLabel.",
          "Removed invisible text boxes from all Layout files.",
          "Added centralized walkout-basement and other Layout configuration through the Project Information Tool.",
          "Replaced the former text-box-based Layout-settings workflow with the Project Information Tool.",
          "Added links from Layout files to the Layout chapter in the PPX18 User Manual.",
          "Updated and refined several title-block styles."
        ],
        "Plan Template": [
          "Added a Street Name macro that places the street name from Title Block Information on the Plot Plan.",
          "Added blue load-path color coding for manually placed beams and posts in vector and 3D views.",
          "Added specification-linked keynotes to the Front Elevation camera."
        ],
        "Library": [
          "Repaired the Braced Wall Panel tool.",
          "Added expanded Area Analysis diagnostic tools showing how totals are calculated."
        ],
        "User Manual": [
          "Added links from related CAD details and Layout files to the corresponding manual chapters.",
          "Added bookmarkable and shareable links to individual manual sections.",
          "Expanded the Area Analysis chapter to explain the new diagnostic tools.",
          "Added a section explaining the two additional template pages."
        ],
        "General": [
          "Improved the RabsBoxLabel macro to reduce false positives and provide more flexibility for elevation camera labels.",
          "Expanded and reorganized Project Information headings."
        ]
      },
      changes: notes260722,
      downloads: ["Pro Plan", "Spec Plan", "Layout Files", "Library"],
      safe: ["Direct upgrade from PPX18 260720 only: ALL Default Settings for the Pro Plan", "Direct upgrade from PPX18 260720 only: Project Information for the Spec Plan and Layout"],
      avoid: ["Do not apply this release-specific import permission to PPX18 260714 or earlier versions."]
    };
    const release260729 = {
      version: "PPX18 260729",
      status: "Current release",
      groups: {
        "Plan Template": [
          "Added a Floor Joists Reference Display Layer Set for objects configured to cut the floor and affect floor framing.",
          "Added new default sets for New Construction and Remodel projects, including revised wall display and dimension defaults.",
          "Completed a major macro-system overhaul to improve plan speed and reduce redundant processing.",
          "Rewrote the window and door macros for faster performance and removed unused legacy options."
        ],
        "Library": [
          "Repaired cabinet doors and other library items that were not using the default cabinet material.",
          "Revised the Foundation Vent system so each vent reads the crawlspace square footage entered directly in the vent instead of running the slower automatic whole-crawlspace calculation.",
          "Moved the full Area Analysis breakdown schedules to Library CAD blocks that can be placed only when diagnostic information is needed.",
          "Added patched-library folders to the Update folder inside Step 2 - Library Files for users who prefer a smaller Library update."
        ],
        "Toolbars": [
          "Updated the Area Analysis toolbar to place the new diagnostic CAD blocks.",
          "Added the toolbar integration required by the new interactive Help system."
        ],
        "Help and Manual": [
          "Added a live interactive Rabbitt Design Help package that replaces the standard Chief Architect Help interface and integrates Rabbitt Design System help into Chief Architect's built-in Help menu.",
          "Added and updated manual sections for the revised Foundation Vent system and other current features."
        ]
      },
      changes: {
        "New Features": [
          "Added a Floor Joists Reference Display Layer Set. Use it when working with objects configured to cut the floor and affect floor framing.",
          "Added new default sets for New Construction and Remodel projects. These sets change how walls appear in floor-plan views and include revised dimension defaults.",
          "Added a live interactive Rabbitt Design Help package. It replaces the standard Chief Architect Help interface and integrates Rabbitt Design System help directly into Chief Architect's built-in Help menu.",
          "Added patched-library folders to the Update folder inside Step 2 - Library Files, providing a faster alternative to replacing the complete PPX18 Library."
        ],
        "Patches and Improvements": [
          "Repaired cabinet doors and other library items that were not configured to use the default cabinet material.",
          "Completed a major macro-system overhaul. The Pro Plan now processes faster, uses shorter code, and contains fewer redundant or outdated systems.",
          "Revised the Foundation Vent workflow for better performance. Enter the crawlspace square footage directly in each vent as explained in the updated Help and User Manual.",
          "Converted the detailed Area Analysis breakdown schedules into CAD blocks stored in the Library and linked them to the Area Analysis toolbar. Place them only when diagnostic information is needed.",
          "Rewrote the window and door macros for improved speed and reliability and removed unused options and legacy error-prone systems.",
          "Added and updated User Manual sections for the current features and revised workflows."
        ],
        "Removed or Replaced": [
          "Removed the automatic whole-crawlspace parsing from the Foundation Vent system because its performance cost slowed the Pro Plan.",
          "Removed the always-present above-grade and below-grade Area Analysis breakdown schedules. They are now optional Library CAD blocks available from the Area Analysis toolbar.",
          "Replaced the standard Chief Architect Help interface with the new interactive Rabbitt Design Help package."
        ]
      },
      downloads: ["Library", "Toolbars", "Interactive Help Package"],
      safe: [],
      avoid: []
    };
    const previous = data.find(item => item.version === "PPX18 260720");
    if (previous) previous.status = "Previous release";
    const withoutOldDevelopment = data.filter(item => item.version !== "PPX18 260722");
    const patched = [
      {version:"PPX18 260803",status:"Unreleased development",groups:{},changes:{},downloads:[],safe:[],avoid:[]},
      release260729,
      release260722,
      ...withoutOldDevelopment
    ];
    return new Response(JSON.stringify(patched), {status: response.status, headers: {"Content-Type":"application/json"}});
  };
})();

