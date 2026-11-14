(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;

    const data = await response.json();
    const groups = {
      "Pro Plan Template": [
        "Restored affected reference-display wall colors to red.",
        "Set the bifold-door label offset to 0.",
        "Turned off interior fixtures in section-view layer sets.",
        "Turned off room labels in all section views.",
        "Renamed the roof-working layer set to Working - Roof Modeling and added a Roofs Only layer set for reference views.",
        "Turned on ceiling planes in the working-roofs layer set and Saved Plan View.",
        "Corrected the Roof Framing Saved Plan View keynote type; it had been linked to RCP notes.",
        "Updated the dimension extension-line distance for kitchen elevations.",
        "Turned off room labels in kitchen elevations.",
        "Updated layer sets to display the brick layer correctly.",
        "Corrected the door-label macro so double doors are no longer labeled with a single-door hinge swing side.",
        "Added additional wall types to the Pro Plan Template.",
        "Standardized wall colors and line weights in section and elevation layer sets.",
        "Changed window-schedule wrapping from 9 to 7."
      ],
      "Spec Plan and Layout Files": [
        "Corrected Washington and New Jersey handling in the title-block and specification macros."
      ],
      "All Details Plan": [
        "Added an energy-heel truss detail.",
        "Restored missing house-wrap annotations in affected details."
      ],
      "Library": [
        "Replaced the refrigerator-cabinet library item that caused an error in the cabinet-pricing system."
      ],
      "Toolbars": [
        "Updated the five-panel cantina-door toolbar item.",
        "Reworked the main wide toolbar configuration: removed other toolbars, added parent tools where appropriate, relocated some toolbars, restored Extended and Default tools to their out-of-the-box configuration, added tools, and removed some custom tools."
      ],
      "All Plan and Layout Files": [
        "Cleared existing Time Tracker entries from all four PPX18 plans and all sixteen layouts."
      ],
      "Installation and Help": [
        "Updated the Help menu replacement for the newest Chief Architect version.",
        "Added agentic AI instructions for installing Pro Plan.",
        "Added the topography skills package to the Pro Plan installation package."
      ],
      "User Manual": [
        "Updated the Toolbar Icons chapter."
      ],
      "Shop Support": [
        "Built a new shop bot to help with product comparisons and other shop questions."
      ]
    };
    const release = {
      version: "PPX18 261114",
      status: "Current release",
      groups,
      changes: groups,
      downloads: ["Pro Plan Template", "Spec Plan", "All Details Plan", "Layout Files", "Library", "Toolbars", "Help Menu Replacement", "Agentic AI Installation Instructions", "Topography Skills Package"],
      safe: [],
      avoid: []
    };
    const previous = data
      .filter(item => item.version !== "Current Unreleased Development" && item.version !== release.version)
      .map(item => ({...item, status: item.status === "Current release" ? "Previous release" : item.status}));
    const unreleased = {
      version: "Current Unreleased Development",
      status: "Unreleased development",
      groups: {}, changes: {}, downloads: [], safe: [], avoid: []
    };
    return new Response(JSON.stringify([unreleased, release, ...previous]), {
      status: response.status,
      headers: {"Content-Type": "application/json"}
    });
  };
})();
