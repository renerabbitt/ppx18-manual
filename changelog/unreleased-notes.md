# PPX18 260722 - Unreleased Development

## New Features
- Added Flood Zone and Map ID fields to Spec Plan Project Information

## Patches and Improvements
- Added a new CAD detail "Manual - Applicable Codes" so that people can use manual input for their code criteria from the Project Information Tool instead of the automatic criteria coming from the Code Cycle input field of the Project Information Tool
- Improved the RabsBoxLabel macro for false positives as well as allowing more flexibility in Elevation camera labels.
- Patched Applicable codes label on all Layout files which was not using RabsBoxLabel as it should have been
- Added a section explaining the 2 additional template pages in the manual
- Removed invisible text boxes from all Layout files
- Patched all spec writing labels to use rabsboxlabel
- Swapped page index position for design load criteria on Arrow Layouts. Moved Info closer to the roll edge on smaller sheet sizes
- Re-built regular Townsend Layouts With new G1 Spec and Info

## Removed or Replaced
- Removed the Applicable Codes text box from the Spec files working plan view and moved it to the CAD block listed in patches and improvements
