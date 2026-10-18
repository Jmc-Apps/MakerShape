MakerShape v3.9
===============

To open: double-click index.html (Chrome or Safari). Everything runs offline —
no internet or installation needed. Keep all the files in this folder together.

Your design is saved automatically in the browser, and you can also use
Save (⌘S) to keep a .makershape file. Export gives you:
  STL - single colour, works with every slicer
  3MF - Bambu Studio: a ready Bambu project for the A1 - each colour becomes a
        filament and shapes/parts/painted faces are assigned automatically
  3MF - other slicers: multi-colour, each shape a separate coloured part
  OBJ - multi-colour, as a zip holding the .obj and its .mtl colour file

Hosting later: upload this whole folder to any web host (e.g. Cloudflare Pages).
Opened from a web address, it becomes an installable app (PWA) that works offline.

Trackpad
  Two-finger swipe ........ orbit (change the angle of view)
  Pinch ................... zoom           Shift + two-finger swipe .. pan
  ⌘-drag .................. pan            Drag a shape .............. move it
  Drag on empty space ..... box-select     Shift-drag ................ add to selection
  Click empty space ....... deselect       Shift-click a shape ....... add/remove it
  White corner squares .... resize         Dark top square ........... height
  Dark cone above shape ... lift up/down   Shift while resizing ...... keep proportions
  Curved arrows (hover) ... rotate: the flat one right above the top turns it round Z (on the
                            workplane); the tall ")" beside the right or left side tips it
                            front to back (round X). Pointing at one says what it does;
                            inside the shaded band = 22.5° steps, outer circle = free.
                            (To turn round Y, type it in the panel's Rotation Y°.)

Mouse: scroll wheel zooms, right-drag orbits, middle-drag or ⌘-drag pans.

Keys
  ⌘Z / ⇧⌘Z undo / redo     ⌘D duplicate     ⌫ delete       ⌘A select all
  ⌘G group  ⇧⌘G ungroup    H solid/hole     E edges (round / chamfer)
  R rotate                 L align          F zoom to selection
  K sketch                 U push / pull
  D drop onto whatever is below (another shape or the workplane)
  Arrows nudge by the Snap Grid amount (0.1 mm when snap is Off)
  Shift+arrows = 10x the snap, Alt+↑/↓ = up/down   Esc cancel / deselect

Open-source parts (licences in the 'licenses' folder): OpenCascade (LGPL-2.1)
via replicad, three.js, opentype.js, and the Inter font (SIL OFL).

Edges (E): click edges, choose Round or Chamfer, Apply. Each Apply is a step in the Steps list:
- Click a rounded or chamfered face to pick it, then "Remove this rounding" to take away just
  that one (handy when a corner comes out twisted).
- Edit changes an earlier step (its edges and size) - the shape shows how it was before that
  step while you edit. × removes a step. Later steps are rebuilt on top.
- Twisted corner? Round the edges that meet there in one step, or use a smaller radius.

Size boxes: click a corner handle (or drag it) and the width and depth show on the workplane
along the two edges that meet there; the top handle shows the height. Click a box, type a size
(sums and, in parametric mode, formulas work) and press Enter - the shape changes from that
handle, so the opposite corner (or the base) stays put. Tab moves between boxes, Esc hides them.
Shapes whose size comes from their settings (threads, generators, Gridfinity) show it read-only.

Toolbar order: New · Open · Save | Import · Trace photo · Sketch | Undo · Redo | Duplicate · Delete |
Rotate · Align | Push/Pull · Edges | Hole · Group · Ungroup | Paint … Export. Trace photo offers: Trace a
photo, Picture on a face, or Reference photo. Bin labels are with the Gridfinity shapes. The side panel's
Steps section lists everything done to a shape after it was made (rounded / chamfered edges, push/pulls,
Gridfinity grids) with Edit and ×, and has the Edges, Push/Pull and Grid buttons.

Toolbar: when the window is too narrow for every tool on one line, the tools move to a second
line under the logo, name and Export (the labels go only if even that line is too narrow).

Sketch (K, or the toolbar button): click the workplane or a flat face of a shape - the view turns to
look straight at it. Draw with the tools in the bar:
  V Select (click a line or shape to see and change its measurements in the side panel; drag it
    to move it; ⌫ deletes it)    L Line - click point after point, click back on the first point
    to close the outline (click the same point twice or press Enter to stop)
  R Rectangle (Corners or Centre)   C Circle   A Arc (start, end, then a point on the arc)
  S Slot (the two round ends, then its width)   G Polygon (set the number of sides in the bar)
Points snap to the grid, to ends, middles and centres, and line up square with the last point;
hold Shift for 0.1 mm steps. While drawing, just type a number for an exact size (length and
angle, width and height, radius…) - Tab moves to the next box, Enter places it.
Closed outlines become faces (shaded); an outline inside another is a hole. Lines that don't close
are shown red and left out. There's no constraint solver: lines that share an end stay joined when
you change a line's length or angle in the panel, but other shapes don't follow.
In parametric mode the measurements in the panel can be formulas using your variables, and the
sketch rebuilds when a variable changes (its plane stays put).
Finish (Enter) makes the solid at the Height in the panel and goes straight into Push/Pull with
its top face picked: drag the arrow to set the height. (When a sketch has several separate top
faces - an island inside a hole, or two outlines - each face is pushed or pulled on its own; use
H to change the whole sketch's height.) On a face, tick "Cut into the face" (or push
the top face down through its plane) to make it a hole going into the shape - then group it with
the shape (⌘G) to cut the pocket. Edit later with a double-click, K, or "Edit sketch" in the panel
(also from a group that holds the sketch); any steps on it are rebuilt on top.

Reference photo (Trace photo ▸ Reference photo…, or Photo… in the sketch bar): straighten the sheet
of paper the photo was taken on (A4 / A5 / A3 / Letter / other) and it is laid flat at its true
size, faded, on the workplane (or the plane you're sketching on). No sheet? Place it as it is and
set the scale: click two points on it and type how far apart they really are. The side panel
(nothing selected, or while sketching) moves, turns, fades, hides, locks it, sets its scale again
or puts it on a shape's face. Locked photos can't be clicked; unlocked ones can be dragged. Photos
are saved with the design but never exported.

Push/Pull (U, or the toolbar button): click a flat face of the selected shape, then drag its arrow
out to pull (adds material) or in to push (takes it away) - or type the distance in the bar (minus
pushes) and press Enter. Choose the direction in the bar: Square to face (N), or along the
workplane's X, Y or Z (pull a roof's slope along Z and the walls rise straight up under it). Grid
snap applies; hold Shift for 0.1 mm steps. Each push/pull is a step in the Steps list (Edit
changes its distance or direction) and stays on when you change the shape's size. Works on flat
faces of solid shapes, merged groups, STEP parts and generator parts - not on imported meshes,
threads, text or inlay groups.
Curved faces too: the side of a cylinder or cone, a sketched arc or circle, the wall of a round hole,
a rounded edge. A curved face moves square to itself everywhere (pull a cylinder's side out 3 mm and
it's 3 mm bigger all round; pull a hole's wall in and the hole gets smaller), so X / Y / Z are greyed
out for it. Rounded edges work but leave small steps where they meet the next faces; a sphere can't
be pushed or pulled (resize it instead).

Placing: click on another shape to put the new shape on that surface
(hold Alt to place on the workplane only).

Align (L): click a dot to line shapes up; click one selected shape first to
make it the key shape that stays still. Grey dots are already lined up.
Distribute is in the side panel.

Rotating: hover over a selected shape and curved arrows appear (one above it,
one on each side). Drag one and a dial shows for just that axis: keep the
pointer in the shaded band for 22.5° steps, or move out to the thin outer circle
to turn freely. The Rotate button (R) still works, and you can type angles.
Turned shapes keep their resize squares and dashed box square to the workplane.
A shape turned in 90° steps stretches exactly along them; one turned at another
angle grows or shrinks evenly (type W/D/H to change one size).

Generators (left panel, under Gridfinity) - the Thread is here too (bolts, rods, nuts, holes):
  Snap-lock case - a hinged case of any size using the SnapLock box's own hinge and latch
    design (from the STEP file): width, depth, height, lid height (at least 20 mm, and the base
    at least 20 mm), walls, corner radius; 1-4 latches and 1-3 hinges (or Auto). Latch fit:
    Loose / Standard (as designed) / Snug, plus Fine-tune in 0.05 mm steps - "Make a test-fit
    piece" prints one latch and one hinge cut from a small case so you can check the fit first.
    The lid's top edge is square: round or chamfer it yourself with Edges (E) - your edges are
    kept when you edit the case. The back and side edges round or chamfer up to about 2 mm;
    the front edge beside the latch lugs can't be (the app tells you rather than making a
    broken lid). Options: recessed label panel on the front, grip ribs on the sides, dividers,
    or sized for Gridfinity bins with a baseplate in the floor.
    Edges: Square, Chamfer or Rounded (up to 3 mm) on the lid's top edge and the base's bottom
    edge. The front latch lugs stop where the lid's edge starts - that part of the lug is above
    the latch, so the latch works exactly the same.
    Gridfinity feet: the base gets standard Gridfinity feet so the case drops into a baseplate.
    They're worked out from the case's size: the 42 mm squares line up with the front of the
    latches and the left grip ribs, so the whole case (latches and hinges included) fits inside
    the grid, but the feet themselves are only under the base - cut short wherever its walls end
    partway through a square (slivers under 8 mm are left flat). The summary shows how many
    whole feet there are and how many squares the case takes up.
    Sized for Gridfinity bins: the tallest bins that fit are cut into the inside of the back
    wall, e.g. "9U · 8U+LIP" (9U bins, or 8U with a stacking lip), and shown in the summary. Gridfinity grid on the lid: a baseplate grid on top of the lid for bins to sit
    on (it adds 4.65 mm; the feet add 4.75 mm - the summary shows the total height). The lid's grid
    covers the lid itself, so it has fewer squares than a footprint that includes the latches.
    Padlock tabs: a flat tab on the lid and one on the base at the seam, shaped like a tab design
    that's known to work: closed, the lid's tab sits on the base's and the holes line up for a
    padlock shackle (hole 4-10 mm, 7 mm by default; 45° underneath so both print without
    supports). They sit in the widest free stretch of the front (two latches move out towards
    the corners to make room).
    Card box: tick "Make it a card box", choose one deck or two, the card width and length (poker
    63.5 x 88.9 mm by default), the deck's height and the card clearance. The case is sized
    round a card tray (0.7 mm round the tray, 1.3 mm above it): one deck lies lengthwise, two
    decks stand side by side. The tray has tapered corner posts with a slanted lead-in, a
    window to push the deck up through and a thumb notch to lift it out (the plate is flat
    between the posts); ribs inside the lid
    rest just above the deck so the cards can't rattle (the case is at least 40 mm tall for the
    latches, so on a thin deck the tray's plate is raised a little too).
    Solid base / Solid lid: the inside is filled in (walls, rim, hinges and latches unchanged,
    so it still closes), ready for tool-shaped pockets. "Space above" leaves open room over the
    base's fill. Cut pockets with Photo Tracer: select the base (or the lid, laid out upside
    down), open Trace photo and choose "Cut pocket" - it measures from the filled face and keeps
    inside the walls; do it again to add more pockets to the same part. Or group hole shapes
    with it yourself. "Edit snap-lock case..." still works on a pocketed part (select its group):
    the pockets stay where they are. The base, lid (upside down)
    and latches are laid out for printing; "Show assembled" puts it together and "Edit..."
    changes any setting later. (Check the SnapLock design's licence on MakerWorld before
    sharing or selling cases made with it.)
  Threaded jar - diameter, height, walls, thread length, pitch, 1 or 2 starts (2 = fewer turns
    to close) and fit; grip grooves on the lid, a recessed label band, stackable (the bottom
    screws onto the jar below) or a Gridfinity base. The lid prints upside down.
  Gear - spur gears with straight, helical or herringbone teeth: teeth, module (tooth size -
    gears only mesh with the same module), thickness and play; a meshing pair (built at the
    right distance apart, ratio shown), a rack and pinion, or a GT2 belt pulley (teeth, belt
    width, flanges). Shaft hole: none, round, D-shaft or hex (across the flats, e.g. 5.5 mm for
    an M3 nut); optional hub with an M3 set-screw hole.
  Cookie cutter - choose a picture (a drawing, logo or shape on a plain background; transparent
    PNGs work well) and make a cutter, a cutter + stamp, or a stamp only, like CookieCAD. The
    cutter follows the picture's outline (Join gaps closes small gaps; holes are filled in) and
    tapers from a thicker base wall to a thin cutting edge, with a flange round the bottom
    (width and thickness). The stamp presses the picture's darker lines into the dough (Stamp
    lines slider; Thicken lines makes fine lines printable): line height, backing plate, gap to
    the cutter, and a handle that presses into two holes in its back. The cutter prints edge
    up; the stamp and handle print upside down as laid out.
  Lithophane - a photo that shows when lit from behind: flat or curved (angle), width, frame,
    thinnest and thickest (light parts thin, dark parts thick; Negative swaps them), a separate
    stand with a slot, or a hanging tab with a hole; Draft / Normal / Fine detail. The preview
    shows roughly how it will look lit up. Print it standing up, in white, at 100% infill.
  Bin label - labels that sit on the label tab of a Gridfinity bin: bin width in units,
    compartments, the text (or one label per line for several), inlaid or raised. Change a
    label's words later in the panel like any text on a surface.
Caps Lock: with the bucket or eyedropper (Paint pane and Photo Tracer) Caps Lock shows a thin
precise crosshair instead of the icon.

Photo Tracer (Trace photo button): turns a photo into an outline in real millimetres.
1 Sheet - photograph the object lying on a sheet of paper, from above, with the whole sheet
  in view. The sheet's corners are found for you; drag them if they're off, and pick the
  sheet size (A4, A5, A3, Letter or your own). The photo is straightened so the outline is
  true to size even if the photo was taken at an angle.
2 Outline - teal shows what counts as the object; the orange line is the outline that will
  be made. Sensitivity, Remove specks, Fill holes, Smooth and Clearance (grow the outline,
  e.g. 0.5-1 mm so a tool drops into its pocket easily). Paint in / Rub out fixes bits by hand.
3 Use it - add it as a solid or a hole (any height), cut it as a pocket into the shape you
  had selected (a solid Gridfinity bin or any block: depth, optional finger notch, a warning
  and a "make the bin bigger" button if it doesn't fit), put it on a face as a picture, or
  save it as an SVG file.
Tracer tools: View, Paint in / Rub out (brush - turn Caps Lock on to see its size), Fill in /
Fill out (bucket: click an area and everything joined to it of a similar colour goes in or
out; Tolerance sets how far it spreads), Lasso in / out (drag round an area, or click point
to point and click the first point or press Enter to close; Shift = in, Alt = out).
A magnifier shows while you drag sheet corners or place lasso points; arrow keys nudge the
last point (Shift = 10 px). ⌘Z / ⇧⌘Z undo and redo inside the tracer.
Colours (Picture): switch Outline to Colours to keep a picture's colours. "Merge similar"
joins shades that look alike (higher = fewer colours); then merge more by hand until you
reach your Target (the panel shows how many are left to merge): drag one colour onto another
(it takes the look of the one you drop it on), ⇧-click several and merge them, or press
"Merge closest" to join the two most alike. "Split" undoes a merge. Each colour is matched to
a filament (click the dot to change it), tick "cut away" for colours to drop (the background
starts cut away). Blended pixels along edges join one of the colours touching them, so there
are no dark rims or stray specks, and the outlines run smoothly between pixels; neighbouring
colours share the same edge. Edge smoothing rounds them more; Smallest detail gives bits too
thin to print to the colour next to them. The preview shows the shapes that will be made.
Brush, Bucket and Lasso recolour or cut away parts. On a face each colour becomes its own
part - Inlay (flush) or Raised - ready for the AMS; the panel counts the filaments you'll need.
Pictures on flat faces are built as exact outline shapes (lighter and much faster than before).
If the 3D engine ever runs out of memory on something very detailed, the change is undone and the
engine restarts by itself - try fewer colours or a higher "Smallest detail".
Colour relief: on a Raised picture, tick "Colour relief" and each colour gets its own height:
"Biggest lowest", "Darkest on top" or "Lightest on top" set them in steps (Step size), then
fine-tune any colour's Height in the list.
Transparent PNGs: the see-through parts are shown as a grey checkerboard and left out. In
Outline, "Shape from: Transparency" makes everything visible the shape (or choose Colours to
trace a drawing inside it); in Colours they're always cut away and don't count as a colour.
Turning before you use it: in the last step, turn the outline a quarter either way, set any
angle (⇧ for 15° steps), Straighten it to sit square in the smallest box, or Mirror it. The
pocket check uses the turned shape and offers "Turn 90° to fit" when that's all it needs.
Click the workplane instead to get the picture on its own white plate.
Picture (left panel): trace a logo or drawing (no sheet needed - you set its width), then
click a face to put it on: Raised, Inlay (own colour, flush) or Engraved, like text. It
follows curved faces too. Clicking the workplane makes it a flat picture shape.
Tip: dark objects on white paper trace best; avoid strong shadows (light from above or
use a lightbox). iPhone HEIC photos: share or export them as JPG first.

Combine modes for groups: Merge (one solid) or Inlay (each shape stays its own
colour part; smaller shapes cut their space out of bigger ones) - Inlay exports
to 3MF as one object made of coloured parts, ready for multi-colour printing.

Part colours: select a group with text, a picture or other inlaid parts and the panel lists
each part - Body, each Text, each picture colour - with its own colours. Changes show at
once (no rebuilding). Point at a row to see that part light up; click a part of the shape to
find its row. ⇄ swaps two parts' colours (click ⇄ on one, then on the other). If the body is
made of several shapes, tick "Colour each piece of the body separately". The panel counts the
filaments the design needs and warns above 4 (AMS lite).

Paint (toolbar button or P): a small pane to colour the surface.
  Bucket - "Whole part" colours a shape or one part of a group; "One face" colours just the
    face you click (a side of a box, the top of raised text, a curved surface).
  Brush - drag over the surface; size 0.5-20 mm ([ and ] change it), Caps Lock shows the brush,
    Alt paints back to the part's own colour, ⇧-click draws a straight line from the last
    point, "Stay on the face I start on" keeps stripes neat.
  Pick - eyedropper: click the shape to take its colour.
  Clear paint removes it from the selected shapes; ⌘Z undoes a stroke or fill. Keys: B brush,
  G bucket, I pick, Esc to finish. Drag empty space to turn the view while painting.
Paint is colour only (the shape doesn't change); it moves, turns and stretches with the shape.
It exports to the Bambu 3MF as Bambu Studio paint (multi-colour on the A1), to the other 3MF
as coloured triangles, and to OBJ; STL stays one colour. Detail finer than the 0.4 mm nozzle
won't show in the print. Paint on shapes you then group stays on them but only shows when
they're ungrouped - paint the group itself instead.

Groups keep each shape's colour (Multicolour). Pick a single colour swatch to
paint the whole group, or press Multicolour again to get the colours back.

Groups fit their resize guides and W/D/H to the shape that's left after their holes,
so a dome cut from a sphere shows the dome's real size.
Resizing: groups resize like a single shape - drag the corner or height handles,
type W/D/H, or set Scale % in the panel. Hold Shift while dragging a handle to
keep the proportions in all three directions (works for single shapes too).
A group stretched by different amounts in W, D and H passes the stretch down to the
shapes inside it, so it keeps real edges you can round or chamfer. That works when
every shape inside is square to the group (turned in 90° steps) and is a basic
shape or group; otherwise (text, threads, imports, odd angles) the group is shown as
a stretched copy without pickable edges, and a message says which shape is why.
Threads inside a resized group are stretched with it, so they may no longer fit
a standard bolt or nut - the panel warns you when that applies.

Text on shapes: drop Text onto a shape and it follows the surface - wrapping around
any curve: cylinders, cones, spheres, ovals, rounded corners and other extruded
curves follow the surface exactly; free-form shapes (e.g. a squashed sphere) get
the text projected onto them. Curves that aren't perfectly round take a few
seconds to build. If you move or resize the shape afterwards, press Re-fit to
surface in the panel. In the
panel choose Raised (stands out), Inlay (set in flush as its own colour) or
Engrave (cut in), and adjust size, depth, spacing, Around and Up/down.
The text is grouped with its shape; Ungroup to detach it.

Import (top bar, or drop a file on the workplane):
- STL and 3MF (including Bambu Studio projects - each part comes in with its colour).
  These are triangle meshes: move, resize, colour, group them or cut holes in them.
  Their edges can't be rounded, and very detailed models are slow to combine.
- STEP (.step / .stp) - e.g. from Fusion 360: File > Export > STEP. Comes in as an exact
  solid, so edges can be rounded and holes cut cleanly. (Fusion's timeline and
  parameters can't come across - only the finished shape.)
- Imported models are stored in the browser and inside saved .makershape files.

Colours: black and white come first; brown has been added.

QR code (left panel): click the workplane for a QR plate (white plate, black code inlaid -
two colours on the A1), or click a shape's face to put the code on it. In the panel: Link,
Text, Wi-Fi or Contact; error correction; size; Raised / Inlay (best to scan) / Engrave;
"Dark background" for codes on dark shapes. Keep squares 1 mm or bigger. Flat faces scan
best - on curves, test-scan before printing.

Gridfinity (left panel):
- Drawer grid: enter the inside size of your drawer and a gap. Choose full (42 mm),
  half (21 mm) or full + half cells at the edges, and where the leftover filler goes.
  Pick your printer (or type your print bed size) and big grids are split into tiles
  that lock together with dovetail joins. Tiles are named A1, A2… (on the border, or
  under the floor when magnet holes are on). "Lay tiles out for printing" spreads them
  apart; "Edit drawer grid…" changes everything later.
- Bin: size in grid units (W/D in 42 mm steps, .5 for half; H in 7 mm units). Hollow bins
  have compartments, label tab and finger scoop; Solid bins are a block to cut tool shapes
  into. Both can have the stacking lip, magnet and screw holes.
- Base: Gridfinity feet with a flat top at 7 mm - put your own design on it and group.
- Grid on top of any shape: select a shape, "Add Gridfinity grid to top…" - cut into the
  top or built on top, with the same grid and filler options.
- Snap Grid 42 mm / 21 mm: bins and bases dropped on the workplane line up with the grid.

Workplane: shows the MakerShape logo and your design's name.

Parametric design (per design): switch Parametric on in the bottom bar. It is saved with
each design and starts off for new designs.
- Variables (fx button next to it): give measurements names, e.g. wall = 2, bolt_d = 6.
  Variables can use each other (dia = wall*15).
- Formulas: type a formula into any measurement - size, position, rotation, sides, text
  settings, the shape under a surface text, or a round/chamfer size - e.g. wall*2 or
  bolt_d + 0.4. Fields with a formula show fx; click the field to edit the formula.
  Formulas can use + - * / ^, brackets, sqrt, abs, round, min, max, sin/cos/tan (degrees), pi.
- Change a variable and everything that uses it updates. Rounded/chamfered edges stay on
  the right edges, and surface text follows the shape it sits on (no Re-fit needed).
- Typing a plain number or dragging a handle replaces that field's formula.
- Switching Parametric off keeps your formulas; switching it back on brings them back.
- Grouped shapes stay together when variables resize them: shapes keep their distance to the
  nearest side (a wall on the edge of a plate stays on the edge, things on top go up), and a
  small shape flush against a bigger one grows away from it. X/Y/Z formulas survive grouping.

Home view: the house button shows the workplane from the front, tilted down.

Threads: pick Thread from the shapes, then choose Bolt, Rod, Nut or Hole and a
standard size (Metric, UNC/UNF, BSW, BSP) or Custom (diameter, pitch or TPI,
profile, starts, left/right hand). Fit clearance makes printed threads screw
together. A Hole thread cuts a real thread into any shape you group it with.

User Shapes: select shapes and press Shift+Cmd+S (or Save as User Shape) to keep
them for future designs. Use the ... button on a card to rename, update,
duplicate or delete. Export/Import saves or loads the whole collection as a
.makershape-library file (keep a backup - the collection lives in this browser).

Fonts (Chrome only): select a text shape and click the Font button. The first
time, Chrome asks to let MakerShape use your fonts. In other browsers, text
always uses MakerShape's default font.
