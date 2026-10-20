(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;

    const data = await response.json();
    const release261008 = {
      version: "PPX18 261008",
      status: "Current release",
      groups: {
        "Pro Plan Template": [
          "Changed the room-label option abbreviation from Adj. FF to Adj. FE.",
          "Added new icons that identify Layout and Camera View tabs.",
          "Renamed wall layers to create a clearer and more reliable convention for the layer-based wall-display system.",
          "Added a Minnesota climate-zone lookup based on the Ruby script supplied by Brett Palmer.",
          "Corrected elevation defaults affected by a second-floor elevation glitch.",
          "Corrected layer-set settings used by framing views.",
          "Corrected wall-framing behavior in material lists.",
          "Corrected the Working Kitchen window and door label text style.",
          "New walls are now designated with the Layer Painter by applying the Walls, Exterior New layer.",
          "Applying the Demo layer to a window now changes it to a to-be-removed condition.",
          "Corrected a layer setting in the Furred Stem Wall for Stepped Foundation.",
          "Updated the All Options macro with a 21-inch bathroom base-cabinet depth threshold. Base cabinets that are 21 inches deep no longer display 21 in the cabinet label.",
          "Removed obsolete layer sets, dimension defaults, and older settings."
        ],
        "Spec Plan": [
          "Added Louisiana to the specification-writing system.",
          "Updated the National Building Code specifications and rewrote all NBC specification content.",
          "Added Ontario Building Code specifications.",
          "Added Wildland-Urban Interface specification CAD details."
        ],
        "All Details Plan": [
          "Added a Portal Frame with SST detail."
        ],
        "Layout Files": [
          "Added missing rendering instructions to affected Layout files."
        ],
        "Library": [
          "Updated the Pro Plan Library to support the renamed wall-layer convention.",
          "Added new cladding profiles to the Full Library."
        ],
        "Toolbars": [
          "Added an optional toolbar update that corresponds with the renamed wall-layer system.",
          "Added a Depth to 21 tool to the Bathroom Fixtures toolbar."
        ],
        "User Manual": [
          "Corrected the Builder Trend lookup documentation after repairing the lookup system.",
          "Updated instructions for the revised wall-layer and wall-designation workflow."
        ]
      },
      changes: {
        "New Features": [
          "Added a Portal Frame with SST detail to the All Details Plan.",
          "Added new icons for Layout and Camera View tabs.",
          "Added a Minnesota climate-zone lookup based on the Ruby script supplied by Brett Palmer.",
          "Added Louisiana to the specification-writing system.",
          "Updated and completely rewrote the National Building Code specifications.",
          "Added Ontario Building Code specifications.",
          "Added Wildland-Urban Interface specification CAD details.",
          "Added new cladding profiles to the Full Library.",
          "New walls can now be designated by using the Layer Painter to apply the Walls, Exterior New layer.",
          "Applying the Demo layer to a window now changes the window to a to-be-removed condition.",
          "Added a Depth to 21 tool to the Bathroom Fixtures toolbar."
        ],
        "Patches and Improvements": [
          "Changed Adj. FF to Adj. FE in the room-label options.",
          "Repaired an error in the Builder Trend lookup system and updated the User Manual.",
          "Renamed wall layers using a clearer convention that drives the layer-based wall-display system.",
          "Corrected elevation defaults affected by a second-floor elevation glitch.",
          "Corrected several layer-set settings used by framing views.",
          "Corrected wall-framing behavior in material lists.",
          "Corrected the Working Kitchen window and door label text style.",
          "Corrected a layer setting in the Furred Stem Wall for Stepped Foundation.",
          "Updated the All Options macro with a 21-inch bathroom base-cabinet depth threshold so a standard 21-inch cabinet does not display 21 in its base-cabinet label.",
          "Added missing rendering instructions to affected Layout files."
        ],
        "Removed or Replaced": [
          "Removed the newer wall tools and wall types. Use the Layer Painter and the Walls, Exterior New layer to designate new walls.",
          "Removed obsolete layer sets, dimension defaults, and older settings."
        ]
      },
      downloads: [
        "Pro Plan Template",
        "Spec Plan",
        "All Details Plan",
        "Layout Files",
        "Library",
        "Toolbars (optional)"
      ],
      safe: [],
      avoid: [
        "Do not retain older wall-layer names in custom wall types. User-created walls must be conformed to the new 261008 wall-layer convention.",
        "Do not assume removed layer sets, dimension defaults, wall tools, or wall types should be imported from an earlier PPX18 version."
      ]
    };

    const previous = data
      .filter(item =>
        item.version !== "Current Unreleased Development" &&
        item.version !== "PPX18 260909" &&
        item.version !== "PPX18 261008"
      )
      .map(item => ({...item, status: item.status === "Current release" ? "Previous release" : item.status}));

    const unreleased = {
      version: "Current Unreleased Development",
      status: "Unreleased development",
      groups: {},
      changes: {},
      downloads: [],
      safe: [],
      avoid: []
    };

    return new Response(JSON.stringify([
      unreleased,
      release261008,
      ...previous
    ]), {
      status: response.status,
      headers: {"Content-Type": "application/json"}
    });
  };
})();
