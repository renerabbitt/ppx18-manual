(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;

    const data = await response.json();
    const release260812 = {
      version: "PPX18 260812",
      status: "Current release",
      groups: {
        "Plan Template": [
          "Deleted an unnecessary hidden CAD block containing schedules from the Area Analysis CAD detail.",
          "Added a default set that switches the Working Plan View to New Construction."
        ],
        "Layout Files": [
          "Repaired the Nexus Layout, which had become corrupted in the previous release."
        ],
        "Library": [
          "Corrected the red-brick texture used by the Brick Wall tool.",
          "Updated the material region created by the Lap Siding tool.",
          "Repaired the Pro Plan Transfer Tool so it can continue transferring settings to doors despite the current Chief Architect X18 style-palette regression.",
          "Removed stored macros from many Library objects where they could conflict with Pro Plan macros.",
          "Corrected wall-layer names containing typos or extra spaces and updated Library wall types that use those layers.",
          "Added another mapped layer for specific wall types, including fire walls.",
          "Corrected Foundation Vents so they no longer add framing for an opening simply because the vents are built from Chief Architect's Window tool."
        ],
        "User Manual": [
          "Updated the New Construction chapter with the correct location of the New Construction Area Analysis schedule.",
          "Added a new chapter explaining the PPX18 font system."
        ],
        "General": [
          "Added a complete Full Library contents listing to the Full Library shop listing so prospective users can review what is included."
        ]
      },
      changes: {
        "New Features": [
          "Added a default set that switches the Working Plan View to New Construction.",
          "Added a new Fonts chapter to the PPX18 User Manual.",
          "Added a complete Full Library contents listing to the Full Library shop listing so users can review what is included before purchasing."
        ],
        "Patches and Improvements": [
          "Repaired the Nexus Layout, which had become corrupted in the previous release.",
          "Corrected the red-brick texture used by the Brick Wall tool.",
          "Updated the material region created by the Lap Siding tool.",
          "Repaired the Pro Plan Transfer Tool so it can continue applying current Pro Plan settings to doors despite the door-related style-palette regression in Chief Architect X18.",
          "Corrected wall-layer names containing typos or extra spaces and updated the Library wall types that use those layers.",
          "Added another mapped layer for specific wall types, including fire walls.",
          "Corrected Foundation Vents so they no longer add framing for an opening simply because the vents are built from Chief Architect's Window tool.",
          "Updated the New Construction chapter in the User Manual with the correct location of the New Construction Area Analysis schedule."
        ],
        "Removed or Replaced": [
          "Deleted an unnecessary hidden CAD block containing schedules from the Area Analysis CAD detail.",
          "Removed stored macros from many Library objects where those macros could conflict with the current Pro Plan macro system."
        ],
        "Known Issues": [
          "Chief Architect X18 Official introduced a regression affecting style-palette tools that target doors. Previously, an exterior-door source could apply its selected settings to another exterior door of any type when the door-type option was left unchecked. Changes to the door options in X18 broke that behavior for affected style-palette tools. The Pro Plan Transfer Tool has been repaired with a workaround, but other door-targeting style-palette tools may remain unavailable until Chief Architect issues a patch. Users who rely on this behavior are encouraged to report the regression to Chief Architect.",
          "Some additional Library objects still contain stored macros. Removing and rebuilding them is time-consuming, so the remaining objects will be corrected progressively in future releases."
        ]
      },
      downloads: ["Pro Plan Project", "Library", "Layout Files", "User Manual"],
      safe: [],
      avoid: []
    };

    const previous = data
      .filter(item => item.version !== "PPX18 260812" && item.version !== "PPX18 260807")
      .map(item => ({...item, status: item.status === "Current release" ? "Previous release" : item.status}));

    const currentDevelopment = {
      version: "Current Unreleased Development",
      status: "Unreleased development",
      groups: {},
      changes: {},
      downloads: [],
      safe: [],
      avoid: []
    };

    const release260807 = data.find(item => item.version === "PPX18 260807");
    const priorRelease = release260807 ? {...release260807, status: "Previous release"} : null;

    return new Response(JSON.stringify([
      currentDevelopment,
      release260812,
      ...(priorRelease ? [priorRelease] : []),
      ...previous
    ]), {
      status: response.status,
      headers: {"Content-Type": "application/json"}
    });
  };
})();
