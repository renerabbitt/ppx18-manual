window.AI_CATALOG = {
  "edition": "0.1.0",
  "packages": [
    {
      "id": "pdf-cad-to-walls",
      "title": "PDF to DXF & CAD to Walls",
      "type": "AI workflow",
      "folder": "ppx18-pdf-cad-to-walls",
      "version": "1.0.0",
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Package: ppx18-pdf-cad-to-walls, in Agentic Ai Add Ons. This AI-assisted workflow converts a floor-plan screenshot or raster PDF to inch-unit CAD surfaces, doors and windows. The agent reads the new drawing and records its dimensions and opening inventory; reusable scripts generate and check the DXF. It is not a universal unattended plan-recognition tool. The bundled raster helper covers orthogonal plans; angled or curved walls require an explicit trace and appropriate checks."
        },
        {
          "type": "paragraph",
          "text": "DXF-only mode prepares the file and import instructions, then stops. It needs file/image access and the package’s Python dependencies, but no Chief installation, MCP connection or screen control. You handle import and conversion. Example request: Create a checked DXF from this floor plan; I will import and convert it myself."
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
        }
      ],
      "tier": "pro"
    },
    {
      "id": "tab-wall-drawing",
      "title": "Native wall drawing",
      "type": "AI workflow",
      "folder": "ppx18-tab-wall-drawing",
      "version": "1.0.0",
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Package: ppx18-tab-wall-drawing, in Agentic Ai Add Ons. This draws native walls directly in Chief rather than importing a DXF. Its Windows Python helper requires authorized screen control and local calibration. It is dry-run by default. MCP can activate tools and inspect the result, but a canvas gesture that releases the mouse button cannot preserve the held drag needed for Tab input."
        },
        {
          "type": "paragraph",
          "text": "Tab-input lengths follow the inside finished surface. For equal opposing walls, outside span = inside span + 2 × total finished wall thickness; for unequal walls add the two actual thicknesses. With 7 13/16-inch walls, a 24-foot by 15-foot outside envelope has an inside envelope of 22 feet 8 3/8 inches by 13 feet 8 3/8 inches. Derive an L-shaped inside polygon from the whole outside shape; do not subtract twice the thickness from every short notch leg."
        },
        {
          "type": "list",
          "text": "Activate the intended wall tool/type and establish the current inside-face start. Keep Angle Snaps on. Record Object Snaps, turn it off temporarily so nearby geometry cannot pull exact input off its datum, and restore its original state after the run."
        },
        {
          "type": "list",
          "text": "For continuous drawing, hold the right mouse button, move precisely in the intended direction, and press Tab while the button is still held. Release it after Enter Coordinates opens. In verified Relative Polar input, enter the distance and an explicit angle; in Relative Cartesian input, enter exact X/Y offsets. Press Enter to commit. Move in the next direction and repeat Tab/input/Enter without restarting the run. A selected wall’s diamond continuation handle can start an extension."
        },
        {
          "type": "list",
          "text": "Terminate with a combined left-plus-right click or by connecting to another wall. Enter alone does not necessarily finish the tool. Recalibrate after pan, zoom or changed dialog state, and verify actual native geometry after a connected batch. The scripts’ success messages are not proof that a wall was drawn correctly."
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
        }
      ],
      "tier": "pro"
    },
    {
      "id": "chief-mcp-setup",
      "title": "Chief MCP setup",
      "type": "Connection",
      "folder": "Chief-MCP-Setup",
      "version": null,
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Location: Agentic Ai Add Ons > Chief-MCP-Setup. This contains a Windows setup guide and PowerShell installer for the included supported Claude Desktop/Claude Code configurations. The agent must check the customer’s actual client and Chief build. Other clients require their own supported MCP registration; do not assume this installer configures every AI app."
        },
        {
          "type": "paragraph",
          "text": "Chief must be installed/licensed and the compatible build must include the MCP bridge. Enable Chief MCP Server in Chief’s Agentic AI preferences and use Project Management where required. The package does not install/license Chief, grant agent permissions or automatically enable the preference. Verify the connection using application status, documents and discovered tool capabilities before drawing. No separate cloud API key is required for the basic Chief drafting server."
        }
      ],
      "tier": "pro"
    },
    {
      "id": "chief-preferences",
      "title": "Chief Preferences Setup",
      "type": "AI workflow",
      "folder": "chief-preferences-setup",
      "version": null,
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Location: Agentic Ai Add Ons > Chief Preferences Setup. The questionnaire offers the supplied reference profile or individual choices. This concerns application-wide Preferences, not plan defaults, macros, file paths or model content. The skill uses supported MCP fields; when those controls are unavailable it gives manual steps rather than taking over the screen as a fallback. Project Management has separate implications for project handling and needs its own informed choice. Example request: Review the preferences questionnaire with me and apply only the settings I select."
        }
      ],
      "tier": "pro"
    },
    {
      "id": "agent-installation",
      "title": "Pro Plan installation",
      "type": "AI workflow",
      "folder": "ppx18-agent-installation",
      "version": null,
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Location: Agentic AI Installation Instructions > ppx18-agent-installation. This guides new installations and supported updates: Help, fonts, library content, toolbars and project import. It distinguishes installation from assessment, uses the actual downloaded package and preserves unrelated files. Unsupported interface steps may use authorized screen control. It is not a donor-model transfer or a general building-editing permission. Example request: Assess my extracted Pro Plan download and install the components I choose."
        }
      ],
      "tier": "pro"
    },
    {
      "id": "project-information",
      "title": "Project Information",
      "type": "AI workflow",
      "folder": "ppx18-project-information",
      "version": null,
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Location: Agentic AI Installation Instructions > ppx18-project-information. Start with the client and project address. The skill researches and fills existing Project owner fields, Client name/email and Design Load Criteria through supported Chief MCP operations. Project Name is the street name without the number; Street receives the full numbered address. It distinguishes postal city from the actual AHJ and asks for unknown scope of work rather than inventing it."
        },
        {
          "type": "paragraph",
          "text": "The workflow preserves the existing field schema and leaves Applicable Codes CRC, IRC and NBC owner panels untouched. The Project panel’s Code Criteria selector is separate. Automatic climate-zone behavior is preserved unless a specific verified value is authorized. It does not rewrite spec macros or replace CAD macro calls with text. Unknown client contact, parcel, zoning or load values must be reported, not fabricated. Example request: Complete the existing title-block and spec Project Information for this client and address, using verified sources and leaving the code-owner panels unchanged."
        }
      ],
      "tier": "pro"
    },
    {
      "id": "lot-topography",
      "title": "Lot topography",
      "type": "AI workflow",
      "folder": "lot-topography",
      "version": null,
      "status": "Documented workflow",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Location: Agentic Ai Add Ons > Lot Topography Skill. This gathers recorded parcel geometry and existing-ground elevation data, preserves true-north orientation and prepares major contour polylines for Chief/CAD. Its coverage, elevation interval, segment limits, units and datum follow that skill’s instructions and the specific request. Do not apply the architectural DXF package’s inch-unit rule blindly to geographic data; use the topography output’s declared units when importing."
        },
        {
          "type": "paragraph",
          "text": "Recorded boundary evidence and adequate terrain coverage matter more than a plausible-looking contour sketch. The agent should identify data sources, explain approximate or unavailable records and avoid claiming coarse GIS/LiDAR interpolation is a surveyed design surface. Example request: Prepare recorded parcel geometry and existing major contours for this address, with the coverage and units stated before import."
        }
      ],
      "tier": "pro"
    },
    {
      "id": "fancyzones",
      "title": "Floating panel snapping",
      "type": "Programmatic add-on",
      "folder": "Chief-FancyZones",
      "version": "1.0",
      "status": "Verified for Library Browser",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Makes resizable floating Chief Architect Premier X18 panels eligible for PowerToys FancyZones. Library Browser snapping was confirmed; other panels have not been individually verified."
        },
        {
          "type": "paragraph",
          "text": "Install PowerToys, enable FancyZones and Allow child windows snapping, then extract the full package into a permanent folder and run Install.cmd. Float a panel, allow up to two seconds, then Shift-drag its title bar into an assigned zone."
        },
        {
          "type": "paragraph",
          "text": "A hidden local watcher adjusts the floating panel window style. It requires no AI connection or subscription. The standard X18 installation is targeted. Run Uninstall.cmd to remove startup and stop the watcher."
        }
      ],
      "tier": "full"
    },
    {
      "id": "blender-mcp",
      "title": "Blender MCP setup",
      "type": "MCP connection",
      "folder": "Blender MCP setup",
      "version": null,
      "status": "Included in the Full Library add-on collection",
      "tier": "full",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Connect a compatible MCP client to Blender using the supplied installer and integration instructions. This is the connection layer for supported Blender operations, separate from the modeling skill."
        },
        {
          "type": "paragraph",
          "text": "Requires compatible Blender, Python, internet access and a supported MCP client. Follow START-HERE.md and verify the live connection before modeling. The referenced upstream integration version is separate from this installer package version."
        }
      ]
    },
    {
      "id": "blender-for-chief",
      "title": "Blender assets for Chief",
      "type": "AI workflow",
      "folder": "Blender assets for Chief",
      "version": null,
      "status": "Included in the Full Library add-on collection",
      "tier": "full",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Guide your agent through modeling, UV mapping, materials and preparing a Blender asset for Chief Architect. Preserve an editable quad source and prepare a checked handoff with suitable geometry and texture maps."
        },
        {
          "type": "paragraph",
          "text": "Install Chief MCP Setup and Blender MCP Setup first and verify both live connections. Give the agent the complete rabbitt-blender-for-chief skill folder and references. Choose the object, triangle budget, export units, destination, and files-only or automatic Chief import."
        },
        {
          "type": "paragraph",
          "text": "The workflow covers material regions, directional grain, texture maps, smoothing, scale and geometry checks. Review ambiguous reference details before modeling."
        }
      ]
    },
    {
      "id": "cabinet-matching",
      "title": "Cabinet matching & vendor orders",
      "type": "AI workflow",
      "folder": "Cabinet matching & vendor orders",
      "version": "1.3",
      "status": "Included in the Full Library add-on collection",
      "tier": "full",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Match an exported Chief cabinet schedule against an actual vendor catalog and specifications. Prepare a draft vendor order, published SKU pricing where available, discrepancies and linked catalog evidence."
        },
        {
          "type": "paragraph",
          "text": "Version 1.3 includes export and matching skills, the protocol, macro source/import file, example orders and acceptance checks. Extract the kit ZIP and provide START-HERE.md, PROTOCOL.md and the actual vendor catalog."
        },
        {
          "type": "paragraph",
          "text": "Matching exported files does not require MCP. Live Chief operations require a compatible configured Chief MCP connection. Review vendor fit, options and pricing before ordering. This is a workflow kit rather than a cabinet catalog."
        }
      ]
    },
    {
      "id": "headfollow",
      "title": "HeadFollow Color",
      "type": "Windows utility",
      "folder": "HeadFollow Color",
      "version": null,
      "status": "Included in the Full Library add-on collection",
      "tier": "full",
      "blocks": [
        {
          "type": "paragraph",
          "text": "A Windows virtual webcam with automatic head tracking and six output color controls for meetings and recording. Includes the Python runtime and face detection model."
        },
        {
          "type": "paragraph",
          "text": "Requires a physical webcam, 64-bit Windows and the OBS Virtual Camera driver. Extract the complete ZIP, follow INSTALL.md, run Open HeadFollow.cmd and choose OBS Virtual Camera in the meeting or recording app."
        },
        {
          "type": "paragraph",
          "text": "Adjust contrast, tint, warmth, saturation, black level and white level. Settings save automatically. Optional Windows service installation and removal are included. No AI agent connection is required for everyday use."
        }
      ]
    }
  ],
  "releases": [
    {
      "package": "fancyzones",
      "version": "1.0",
      "date": "2026-11-23",
      "title": "Floating panel compatibility",
      "kind": "Initial release",
      "notes": [
        "Allows eligible resizable floating X18 panels to snap with PowerToys FancyZones.",
        "Includes per-user startup installation and uninstallation.",
        "Library Browser snapping verified; other panels remain unverified."
      ],
      "action": "New installation: extract the complete package into a permanent folder and run Install.cmd."
    }
  ]
};
