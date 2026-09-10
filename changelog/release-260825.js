(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;

    const data = await response.json();
    const release260825 = {
      version: "PPX18 260825",
      status: "Current release",
      groups: {
        "Pro Plan Template": [
          "Added a Title Block E reference to the plan.",
          "Removed the border from the Area Analysis CAD block and from the New Construction Area Analysis block. Layout boxes now supply the borders.",
          "Added a New Jersey county-based climate-zone lookup.",
          "Added an AI prompt for mapping.",
          "Expanded the behavior applied in views when an object is placed on the Demo layer.",
          "Improved window and door label wrapping with another wrapping level and added an All Options macro setting that can remove rough-opening output.",
          "Turned on window and door labels in the Working Framing Saved Plan View.",
          "Added pressure-treated bottom-plate support.",
          "Added a Floor Surface Overview camera layer set and a Black and White Vector View.",
          "Updated the disclaimer to use both designer_name and company_name automatically.",
          "Updated the Pro Plan Transfer Tool so it also initializes the Area Analysis coverage calculation."
        ],
        "Spec Plan": [
          "Added soil-bearing capacity to the Spec Plan.",
          "Restored the IRC specification after an earlier version was unintentionally regionalized for New Jersey.",
          "Removed an AI remnant from the landscaping specification.",
          "Converted the specification system to macro-driven output across the CAD details and added breadcrumb instructions to the Spec Plan macros."
        ],
        "Title Block Plan": [
          "Added soil-bearing capacity to the Title Block Plan.",
          "Added the Title Block E reference used by the Pro Plan."
        ],
        "All Details Plan": [
          "Added assignable beam annotations. Users can assign schedule numbers 1 through 8 to eight beam designations, including macros such as %$beam1%.",
          "Added new annotations, including TJI floor-framing members."
        ],
        "Layout Files": [
          "Expanded the plan view in Willow E.",
          "Added Rexel ProArch ANSI D.",
          "Removed Arrow ANSI C.",
          "Moved Area Analysis borders from the plan CAD blocks to the Layout boxes in every Layout.",
          "Renamed the overview cameras to Floor Surface Overview and Black and White Vector View."
        ],
        "Library": [
          "Repaired the Red Brick Wall tool by removing overlapping 3D cladding and slightly reducing its polygon count.",
          "Added 14 brick textures and the related cladding profile used by the Brick Wall tool.",
          "Updated the Full Library with additional cladding profiles, several fixes, and the removal of macro-driven objects that could conflict with the Pro Plan.",
          "Repaired the Full Library Shelf Painter tools.",
          "Added pressure-treated bottom plates.",
          "Updated the Pro Plan Transfer Tool so it initializes the Area Analysis coverage system.",
          "Updated the Shower tools, which had been linked to the curbless-shower options instead of the with-curb options.",
          "Added assignable beam annotations to the Annotations Library.",
          "Removed the redundant Flare tool because Flare Color provides the same function."
        ],
        "Toolbars": [
          "Fixed toolbar links for the One Click Shower systems that had incorrectly opened the One Click Curbless Shower systems.",
          "Added an experimental toolbar-palette configuration. It is not linked into the primary toolbar configuration while testing continues, but users may enable it manually from the toolbar configurations menu."
        ],
        "Materials": [
          "Removed the pattern from the composition-shingle roof material for cleaner elevations.",
          "Updated the overview tile texture to use a simpler vector pattern with fewer pattern lines."
        ],
        "Interactive Help and User Manual": [
          "Added a Modifying Spec Notes chapter to the User Manual.",
          "Added several sections to the interactive Help menu."
        ],
        "Installation Files": [
          "Removed the Inter font because it does not contain a proper font subfamily."
        ]
      },
      changes: {
        "New Features": [
          "Added a New Jersey county-based climate-zone lookup.",
          "Added an AI prompt for mapping.",
          "Added soil-bearing capacity to the Title Block Plan and Spec Plan.",
          "Added a default camera layer set named Floor Surface Overview and added a Black and White Vector View.",
          "Added pressure-treated bottom-plate support.",
          "Added new annotations, including TJI floor-framing members.",
          "Added assignable beam annotations to the All Details Plan and the Annotations Library. Eight beam designations can be assigned schedule numbers 1 through 8 using macros such as %$beam1%.",
          "Added an experimental toolbar-palette configuration. It is not linked into the primary toolbar configuration while testing continues. To inspect it, right-click a blank area of the Chief Architect toolbars, open Toolbar Configurations, and select the experimental configuration.",
          "Added a Modifying Spec Notes chapter to the User Manual.",
          "Added several new sections to the interactive Help menu."
        ],
        "Patches and Improvements": [
          "Added a Title Block E reference to the Pro Plan.",
          "Expanded the plan view in Willow E and added Rexel ProArch ANSI D.",
          "Changed Area Analysis presentation so the plan CAD blocks have no border; the Layout boxes now create the borders in every Layout.",
          "Repaired the Red Brick Wall tool by removing overlapping 3D cladding and slightly reducing its polygon count.",
          "Added 14 new brick textures and the related cladding profile used by the Brick Wall tool to the Full Library.",
          "Improved Window TBR label wrapping in the As-Built Plan and added another wrapping level for window and door labels.",
          "Added an All Options macro setting that can remove rough-opening output from window and door labels.",
          "Turned on window and door labels in the Working Framing Saved Plan View.",
          "Expanded the behavior applied in views when an object is placed on the Demo layer.",
          "Repaired the Full Library Shelf Painter tools.",
          "Removed the composition-shingle roof pattern for cleaner elevations and simplified the overview tile vector pattern.",
          "Restored the IRC specification after it had been unintentionally regionalized for New Jersey.",
          "Updated the Pro Plan Transfer Tool so it initializes the Area Analysis coverage calculation.",
          "Updated the Shower tools so they open the with-curb options instead of the curbless-shower options.",
          "Updated the disclaimer to populate designer_name and company_name automatically.",
          "Converted the Spec Plan specification system to macro-driven output across all applicable CAD details and added breadcrumb instructions to the specification macros."
        ],
        "Removed or Replaced": [
          "Removed Arrow ANSI C.",
          "Removed the Inter font from the installation package because it does not contain a proper font subfamily.",
          "Removed the redundant Flare tool because Flare Color provides the same function.",
          "Removed an AI remnant from the landscaping specification.",
          "Removed the border from the New Construction Area Analysis block.",
          "Removed macro-driven Full Library objects that could conflict with the Pro Plan and replaced affected content with current versions where available.",
          "Renamed Overview Camera to Floor Surface Overview and renamed Overview Camera 2 to Black and White Vector View."
        ]
      },
      downloads: [
        "Pro Plan Template",
        "Spec Plan",
        "Title Block Plan",
        "All Details Plan",
        "Layout Files",
        "Library",
        "Toolbars"
      ],
      safe: [
        "Direct upgrade from PPX18 260812 only: selected Pro Plan default settings, except Windows, Doors, Cabinets, and Default Sets."
      ],
      avoid: [
        "Do not import defaults into the 260825 Title Block Plan or Spec Plan.",
        "Do not import Windows, Doors, Cabinets, or Default Sets into the 260825 Pro Plan.",
        "Do not reuse an older custom Spec Plan specification without adding the new specification macros required by 260825."
      ]
    };

    const previous = data
      .filter(item =>
        item.version !== "Current Unreleased Development" &&
        item.version !== "PPX18 260909" &&
        item.version !== "PPX18 260825" &&
        item.version !== "PPX18 260812"
      )
      .map(item => ({...item, status: item.status === "Current release" ? "Previous release" : item.status}));

    const release260812 = data.find(item => item.version === "PPX18 260812");
    const unreleased260909 = {
      version: "PPX18 260909",
      status: "Unreleased development",
      groups: {},
      changes: {},
      downloads: [],
      safe: [],
      avoid: []
    };

    return new Response(JSON.stringify([
      unreleased260909,
      release260825,
      ...(release260812 ? [{...release260812, status: "Previous release"}] : []),
      ...previous
    ]), {
      status: response.status,
      headers: {"Content-Type": "application/json"}
    });
  };
})();
