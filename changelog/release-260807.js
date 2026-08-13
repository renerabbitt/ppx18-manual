(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;

    const data = await response.json();
    const release260807 = {
      version: "PPX18 260807",
      status: "Current release",
      groups: {
        "Plan Template": [
          "Moved the Detailed Designations system into its own dedicated plan file to eliminate continual background parsing while drafting.",
          "Rewrote the CSV system so it loads once when Chief Architect starts instead of rereading the CSV file whenever an object is drawn.",
          "Made Applicable Codes respond directly to Project Information, including the selected code-cycle year and editable IRC criteria for the user's region.",
          "Added sill-cap and protective-coating designations and updated the related rigid-insulation details.",
          "Added breadcrumb notes to Layout macros so their purpose and relationships are easier to follow."
        ],
        "Layout Files": [
          "Updated every Pro Plan Layout so detail pages reference the dedicated Detailed Designations plan.",
          "Preserved the Detailed Designations link on the main Pro Plan page; it now opens the dedicated plan.",
          "Added breadcrumb notes to all Layout macros."
        ],
        "Library": [
          "Added BWP connection notes to the Pro Plan Tools Library for the Braced Wall Panel connection-note system.",
          "A Library update is required only for users who use the BWP tools."
        ],
        "User Manual": [
          "Added new Detailed Designations chapters explaining the dedicated-plan workflow.",
          "Added a Title Block Plan chapter section explaining the easiest method for exchanging specification writing.",
          "Updated the CSV instructions to tell users to restart Chief Architect after editing the CSV file."
        ],
        "General": [
          "Updated the CSV parser for macOS so paths using the tilde home-folder shortcut expand and parse correctly.",
          "Corrected several detail errors."
        ]
      },
      changes: {
        "New Features": [
          "Split the Detailed Designations system into its own dedicated plan file. The Detailed Designations link on the main Pro Plan page still works, but now opens the dedicated plan.",
          "Updated all Pro Plan Layouts so their detail pages reference the dedicated Detailed Designations plan.",
          "Added sill-cap and protective-coating options to Detail Designations and added those options to the new rigid-insulation details.",
          "Applicable Codes now follow Project Information automatically, including the selected code-cycle year. Users can edit the IRC code criteria for their region without switching the output to a manual override.",
          "Added breadcrumb notes to all Layout macros so users and future editors can more easily understand what each macro controls.",
          "Added a new Title Block Plan chapter section to the User Manual explaining the easiest method for exchanging specification writing."
        ],
        "Performance Improvements": [
          "Rewrote the CSV system so it loads once during the Chief Architect session instead of reading the CSV file every time an object is drawn. After editing the CSV file, restart Chief Architect to load the changes.",
          "Moved the extensive Detailed Designations system out of the main Pro Plan. Chief Architect was continually parsing every Note in that system while drafting, adding approximately 100–400 milliseconds of lag per wall during testing, particularly through roughly the first 15 walls.",
          "The revised Pro Plan now performs very close to Chief Architect's default Residential Template in testing with Automatic Roofs and Automatic Foundations enabled.",
          "Removed the BWP connection notes from the plan CAD detail and moved them to the Pro Plan Tools Library so they are not continually parsed in the main plan."
        ],
        "Patches and Improvements": [
          "Updated the CSV parser for macOS so paths using the tilde home-folder shortcut expand and parse correctly.",
          "Corrected several detail errors.",
          "Added BWP connection notes to the Pro Plan Tools Library for the Braced Wall Panel connection-note system.",
          "Added new Detailed Designations chapters to the PPX18 User Manual.",
          "Issued the 260807 check set. Only the Pro Plan template/project package has changed since 260803, except for the optional BWP Library content."
        ],
        "Removed or Replaced": [
          "Replaced the Detailed Designations system stored inside the main Pro Plan with a dedicated Detailed Designations plan.",
          "Removed the BWP connection notes from the plan CAD detail after adding them to the Pro Plan Tools Library.",
          "Removed the need to switch Applicable Codes output to a manual override; regional IRC criteria and the code-cycle year are now controlled through Project Information."
        ],
        "Known Issue": [
          "A Project Information input glitch has been observed. The exact cause has not yet been identified; a Chief Architect case will be reported and the changelog will be updated when more information is available.",
          "Until the dedicated Detailed Designations workflow has received broader testing, check the detail designations before printing.",
          "When placing a Detailed Designation from the Library, open either the Detailed Designations plan or the Layout once during each Chief Architect session. After either file has been opened, the Library designation tools should work normally for the remainder of that session."
        ]
      },
      downloads: ["Pro Plan Project", "Library — BWP users only"],
      safe: [],
      avoid: []
    };

    const previous = data
      .filter(item => item.version !== "PPX18 260807" && item.version !== "PPX18 260812")
      .map(item => ({...item, status: item.version === "PPX18 260803" ? "Previous release" : item.status}));

    const unreleased260812 = {
      version: "PPX18 260812",
      status: "Unreleased development",
      groups: {},
      changes: {},
      downloads: [],
      safe: [],
      avoid: []
    };

    return new Response(JSON.stringify([unreleased260812, release260807, ...previous]), {
      status: response.status,
      headers: {"Content-Type": "application/json"}
    });
  };
})();