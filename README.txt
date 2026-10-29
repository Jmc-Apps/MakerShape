MakerShape v6.3
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

Heraldry - build a coat of arms to print face up, flat back on the bed, multi-colour on the AMS. Everything
is in one place: Generators > Coat of arms opens a picker with 1 Shield, 2 Divisions, 3 Ordinaries,
4 Charges and 5 Helm, crest and motto (and the Make coat of arms button).
- Shield: Heater, French, Spanish, Swiss, Kite, Round or Lozenge. Face: Flat, Curved (side to side) or
  Domed, with Curve = how much higher the middle is. Rim width / Rim up (0 = no rim). Hanging: a hole,
  a keyhole slot in the back (for a screw head up to 9 mm) or two pockets for 8 x 3 mm magnets.
  In a coat of arms the keyhole (and the magnet pockets and hole) go through everything behind
  the shield too - mantling, scroll - so nothing fills them. The keyhole: push the screw head into the
  round hole, then let the shield drop so the head slides up behind the 1.6 mm lip (screw up to
  4.6 mm, head up to 9 mm across and 2.2 mm thick).
- Division (per pale, per fess, per bend, per bend sinister, per chevron, per saltire, quarterly) and
  Ordinary (chief, fess, pale, bend, bend sinister, chevron, cross, saltire, bordure, canton, pile,
  rim colour): select the shield, then click it in the picker or pick one under "Add to this shield". Lines:
  straight, wavy, indented, embattled, engrailed, invected. They stay on their shield - move, resize
  or reshape the shield and they follow. Placing one on its shield (its panel): Width, Up / down and
  Left / right (a share of the shield's height and width, so they stay put if the shield is resized),
  and for a chevron or per chevron the Angle of the arms (smaller = flatter). Counterchanged charges
  follow the line wherever it's moved. Each is a skin of colour (Depth, 1 mm) over the shield, so the
  AMS only swaps colours near the top; ordinaries stand 0.6 mm proud (Raised).
- Charges: lion rampant, mullet, estoile, crescent, roundel, annulet, lozenge, mascle, billet, cross
  couped, cross crosslet, cross patee, cross flory, fleur-de-lis, heart, key, tower, crown. Click one,
  then click on the shield: it sinks in just enough to sit snugly on the curve. They are sculpted
  (rounded over at the top in steps that match the print's layers). Facing: dexter or sinister.
  The lion's mane, fur and claws are engraved lines (Engraving depth, 0 = smooth).
- Counterchange: select a charge lying on a divided shield and press Counterchange. It is split along
  the division and each half takes the tincture of the other side (e.g. a lion per fess sable and
  argent on a field per fess argent and sable). The halves move and resize together and follow the
  shield; Undo counterchange puts it back. (No need to stack two copies of a charge in groups.)
- Helm: great helm, close helm, open helm and crowned helm, drawn as smooth curves after reference
  pictures: skull, visor, bevor and neck plates as separate raised layers, eye slits, visor bars and
  breathing holes cut in, and gold trim, rosettes, fleurs and scrollwork standing just proud of the steel.
  Two-tone (steel + gold, each its own shape) or Single colour (one piece; the trim still stands out in
  relief): pick in the Coat of arms picker before placing, or switch on a helm's panel.
- Crest, added separately: red plume, blue & white plume (two colours), dragon crest (with its crown),
  cloth mantle (red with gold embroidery) and torse. Drop one on a helm and it goes where it belongs on
  that helm (and is sized to suit it). Plumes and the cloth sit behind the helm.
- Mantling: four red-and-gold designs (each colour its own part - recolour them freely); they sit
  behind the shield and helm. Each prints as one piece: a 0.8 mm base of the first colour runs under
  the whole mantling (filling gaps up to 3 mm), and the lining colour sits on it, meeting the first
  colour with no gap - so no part of it can come off the print on its own.
- Motto scrolls: rolled ends, looped ends, swallowtails, curled tails and swept tails (a curved band whose
  ends fold back into swallowtails sweeping up and out), plus the simple one, drawn
  as smooth curves: the front ribbon with a rim line along both edges, and the rolls, folds and tails as
  layers in front of or behind it. The motto is its own Text shape locked to the ribbon's curve: type
  any words and they follow it (long words shrink to stay on the scroll). Select it to change the words,
  font, letter size or curve.
- Colours: the panel offers the heraldic tinctures (Or, Argent, Gules, Azure, Vert, Purpure, Sable)
  and picks a contrasting one for each new part (metal on colour, colour on metal).
- Make coat of arms (on the shield's panel) groups the shield, its divisions and ordinaries and the
  charges, helm, crest and motto around it into one Inlay group: each tincture is one colour part.
The lion rampant is traced from "lion rampant" by szquirrel (Openclipart, public domain). The helms and
scrolls are drawn after, and the crest pieces and mantlings traced from, reference pictures supplied for
MakerShape.

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
Several shapes selected: one dashed box goes round them all, with corner squares, a top square and the lift
cone. Dragging resizes the selection as if it were one shape (⇧ keeps proportions): every shape grows or
shrinks by the same amount and keeps its place relative to the others; text letters grow too, and shapes
that can't change size (threads, generated parts) just move. The side panel has Size and Position boxes
for the whole selection (with Keep proportions).

New shapes: Wedge (a ramp, high at the back), Star and Star pyramid (a star rising to a point) - set
the number of Points (3-24) and the Inner ratio (inner ÷ outer radius: 0.1 is spiky, 0.95 almost
round; both can be formulas in parametric mode) - and Heart. All resize, stretch, become holes,
group, round / chamfer and push / pull like the other shapes (the heart's curved sides too).

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
    Compartments: Dividers (equal parts across and deep), Bento walls built in (walls printed as
    part of the base), or Bento insert (a separate tray that drops into the base, 0.4 mm clear of
    the walls, up to just below the rim unless you set its height). Both bento choices use the
    compartments editor (see Bento tray), with divider thickness, how much lower the dividers are
    than the walls, and finger notches; the insert also has its own walls, floor and scoop.
    Size: Outside size (width, depth, height) or Room inside - type the space you need inside
    (height = floor to the inside of the lid) and the outside is worked out from it.
    Gasket seal: the base's lip gets wider (inwards, with a 45° ledge under it so it prints) and a
    groove along its top; a separate ring, printed in TPU (85A-95A), presses into the groove, and
    the lid's ceiling squeezes it when the latches close. No claim of waterproof - it keeps dust
    and spills out. Gridfinity cases get 2.8 mm wider so the bins still fit.
    Folding lid handle: a recess in the lid shaped round the handle (a U-shaped channel, the lid
    left solid in the middle - so printing the lid upside down only bridges narrow strips, with no
    supports), with a finger notch in front of the grip; lift the
    handle to carry, fold it flat to stack. Printed in place (the default): the handle is part of
    the lid - it lies in the recess, flush with the lid's top, with pins on its arm ends in holes in
    the recess's end walls, 0.4-0.5 mm clear all round, so it prints with the lid (upside down)
    and comes off the printer already fitted. The inside of the lid is printed as a bridge over
    it, so slow bridges down (about 10 mm/s) and raise the bridge flow in the slicer; work the
    handle up and down a few times afterwards to free it. Or Separate, clicks on: a flat U printed
    on its own that presses down into the recess until its arm ends click onto a ball on each end
    wall. Not with the Gridfinity grid on the lid or lid feet.
    Stacking: L-shaped seats in the four corners under the base and on top of the lid, with 45°
    lead-ins; four small feet (chamfered at the ends) are glued into the base's seats and drop
    into the lid seats of the case below, so stacked cases can't slide off. (Not with Gridfinity
    feet or the lid grid - those stack already.)
    Lid feet for Gridfinity bins: with "Sized for Gridfinity bins", tick "Feet under the lid" and
    the lid gets a grid of Gridfinity feet that drop into the stacking lips of the bins, closing
    each bin so nothing spills from one to the next. The lid is set for the tallest bins with a
    stacking lip that fit (shown in the summary and marked inside the back wall); the summary
    says how much lower or taller to make the case to avoid filling the lid in.
    Carry handle: on the front (in the free stretch between the latches - two latches move out to
    the corners to make room; needs a wider case, about 160 mm+) or one on each end (in place of the
    grip ribs). The handle is one smooth rounded U. It clips on like the latches: two rounded lugs on
    the base each have a small ball on the outside, and each arm end has a dimple inside - push the
    handle down over the lugs (a shallow channel in each arm guides the ball) until the balls click
    into the dimples; it pivots on them. Folded down flat against the wall a smaller bump clicks
    into a second dimple, so it stays put. It prints flat on its outer face, no supports. Grip length (0 = as long as fits),
    rounded grip, finger grooves. The summary says if there isn't room and why.
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
  Press-fit box - a plain box with a flat lid that pushes on and clicks shut. Under the lid is a
    plug, a band about 4 mm wide that fits just inside the walls; pockets in it leave thin spring
    arms along its edge, each joined at one end, that bend sideways in the plane of the lid (along
    the printed layers, so they're strong). Near each arm's tip is a wedge-shaped ridge: as the lid
    goes on the arms bend in, then the ridges click into a groove round the inside of the walls.
    Size: outside (height includes the lid) or room inside; walls (1.7-1.9 mm or more, for the
    groove), floor, corners, lid thickness, fit (the gap round the plug, 0.15 mm) and grip (Light
    / Normal / Firm - how far the ridges stand out; the dialog shows an arm from below and a cut
    through the joint). Optional thumb dip in the front rim to lift the lid. Prints without
    supports: the box upright, the lid upside down. Too tight or too loose? Change the grip or the
    fit and print just the lid again.
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
  Bento tray - a tray, or a Gridfinity bin (width × depth in grid units, height in U, stacking
    lip, magnet holes), split into compartments. The editor shows the inside from above: click a
    compartment to pick it - the + on its right edge splits it side by side, the + on its bottom
    edge splits it front to back, the bin removes it (its neighbour takes the room). Click a size
    (↔ width, ↕ depth) to type it exactly - the compartments beside it share what's left, the
    outside stays the same. Drag a divider to move it (0.5 mm steps, Shift = 0.1 mm). Give the
    picked compartment a label (sunk into its floor). Reset goes back to one compartment.
    Settings: walls, dividers, floor, outside corners, inside corners, scoop (the floor curves up
    into the walls so small parts slide out), dividers lower than the walls, finger notches in the
    dividers, and a lift-off lid whose rim pushes into the top (or into a Gridfinity bin's lip).
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
Exporting shapes that aren't grouped: shapes that touch or sit in each other (a lion on a shield, a
motto on its scroll) go into the 3MF as parts of one object, so the slicer keeps them where they were
instead of dropping each onto the plate. Pieces behind (mantling, plumes) are listed first and smaller
pieces after bigger ones, so where they overlap the piece in front keeps its colour. Shapes standing
apart stay separate objects.

All the heavy 3D work - shields, charges, helms, groups, rounded edges, text on a curve,
generator parts, and making the triangles for an export - is done by a second copy of the 3D engine
running in the background. The page only draws and listens to you, so it stays responsive: while
something builds you see "Building…" (or the preview appears a moment later when placing a detailed
shape), but the page never freezes or asks to close. Simple shapes (boxes, cylinders and the like) are
still built straight away on the page, as they're instant. The background engine also pre-builds each
new shape while you work, so combining them later only has the combining left to do.

If opening your last design ever freezes MakerShape, the next start offers to start with an empty
design instead, and a link saves that last design as a file (open it again later with Open). If
building it at start-up takes very long, the same choice appears after 20 seconds. The background
engine gives up on any single build after 4 minutes and says so, rather than leaving you waiting.

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
Covering a whole face: on the picture's panel, "Cover face" stretches the picture to
fill the face it's on, and "Fit to face" makes it as big as it goes keeping its shape.
- Flat face: sized to the face and trimmed to the face's outline (a round top stays round),
  0.4 mm in from the edges.
- Cylinder (or another curved outline, like an oval): right round, top to bottom; Fit fills the
  height and goes as far round as its shape allows.
- Sphere: right round like a map of the world (squeezed towards the top and bottom).
- Half-sphere: Cover wraps it right round the dome; Fit lays it over the dome as seen from above.
Once stretched, the panel shows its height too (Tall), and Unstretch puts it back to its own
proportions. A picture over a whole curved face is combined as triangles (fast), so rounded or
chamfered edges can't go on that group.
Tip: dark objects on white paper trace best; avoid strong shadows (light from above or
use a lightbox). iPhone HEIC photos: share or export them as JPG first.

Combine modes for groups: Merge (one solid) or Inlay (each shape stays its own
colour part; smaller shapes cut their space out of bigger ones) - Inlay exports
to 3MF as one object made of coloured parts, ready for multi-colour printing.
Engrave (coats of arms): a group with a shield can also be set to Engrave. On the shield, one tincture
(chosen on the group's panel - the lightest, e.g. Argent, to start with) is cut into the shield's face
as deep as Depth, and everything in the other tinctures - field, divisions, ordinaries, charges - sits
flat at the face: the shield becomes one solid in one colour, to print in one colour and paint or fill
the recesses. The helm, mantling, motto and the rest stay as in Inlay.
Engrave the motto into the scroll (a tick box on an Inlay or Engrave group with a motto scroll): the
words are cut into the scroll's ribbon as deep as Depth, instead of standing on it - the scroll and its
motto print as one piece in the scroll's colour.
Grouping shapes of different colours makes an Inlay group by default (pick Merge on the
group's panel to fuse them into one solid instead). Merge checks every join: where the 3D
engine would quietly lose a piece (detailed shapes that only just touch), the pieces are
kept side by side instead, so nothing disappears.

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
  Select (S) - Lasso, Box or Line. Drag around an area (or a box over it) and everything inside,
    as you see it, takes the colour: the surfaces facing you, on the selected shapes, or on every
    shape under the drawing if none are selected. Line: drag a line across a shape, then click the
    side to colour. "Colour right through" colours back and hidden surfaces too. Alt puts the
    part's own colour back; Esc cancels a drawing. (With Select, use a two-finger swipe to turn
    the view.) The surface is divided finer along the outline, so the colour edge is crisp.
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

Bent text: a Text shape's Bend (mm) curves the words along an arc - how much higher the ends sit
than the middle (minus arches them the other way; 0 = straight). A motto on a scroll has a Curve
(radius, mm) instead, so any words follow the scroll.

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
(Models whose surface has gaps or tangles - common with 3D scans and sculpts - are repaired as they're
imported: holes filled, twisted and doubled triangles sorted out, touching corners pulled apart - so they
can be grouped, cut and split. The import message says how many holes were filled. Models already in a
design are repaired the same way when you group or split them.)
(Very detailed models - over 800,000 triangles, like 3D scans and sculpts - get a choice on import:
simplify to 500k triangles (recommended: it looks the same - the summary says how far the surface moved,
usually well under 0.1 mm), to 250k or to 1 million, or keep them all (up to 2 million). It's done in the
background in a few seconds, even for a 3-million-triangle file.)
(Groups with an imported STL/3MF model in them are combined as triangles, by a separate mesh engine
(Manifold), instead of being turned into exact solids first - so even detailed models (tens of thousands
of triangles, like a coat of arms exported earlier) group, merge or inlay in seconds rather than
freezing. Merge, Inlay, holes, colours, resizing and export all work the same; rounded edges and
Push/Pull aren't available on such a group. The model has to be closed (watertight): if it isn't, the
app says so - repair it in your slicer and import it again.)
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
  Pick your printer (or type your print bed size - it's remembered, see Print bed) and big grids are split into tiles
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

Too big to print: when a shape (or group) is bigger than your printer - the bed less its edge, and the
build height - its panel says so and offers "Split to fit the printer…". It's cut evenly into the fewest
pieces that fit (or more, if you like), with square holes across every cut - half in each piece, only
where there's solid material round them, and at least 2 on every separate part of a cut (say a wing and
the base cut by the same plane) so the pieces can't turn. Thin parts of a cut get smaller pegs (down to
3 mm), each hole matching its peg; if a part only has room for one, or none, the app says to glue it too -
and the pegs to go in them, one model per peg size, laid out lying down for printing. Snap pegs (the default) have a slot in each end,
making two springy prongs with a bump on the outside, and each hole has a notch all round where the bumps
click in: push a peg halfway into one piece, then press the next piece on until it clicks. Or plain
square pegs to glue, or no pegs. Peg size (8 mm) and Fit (the gap round each peg, 0.15 mm) are set in the
dialog. Colours are kept (an inlay group's pieces stay inlay groups). The pieces replace the original
(undo puts it back) and are laid out flat on the workplane, ready to print one by one.

Print bed: the button in the status bar ("Print bed 256 × 256 × 256") sets your printer - pick it from
the list (Bambu A1 / P1S / X1C, A1 mini, H2D, Prusa, Creality…) or choose Custom and type the bed size
and build height, plus the edge to keep clear. It's remembered, and everything that splits big prints into pieces uses
it: Gridfinity drawer grids, SKÅDIS boards and anything added later. Changing the printer in one of
those dialogs changes it here too.

SKÅDIS & pegboards (left panel) - pegboards with the IKEA SKÅDIS hole pattern (slots 5 × 15 mm with round ends,
in columns 20 mm apart; each column has a slot every 40 mm and every other column is 20 mm higher),
and bins that hang on them - or any other pegboard pattern:
- Hole pattern (boards and bins): IKEA SKÅDIS, standard pegboard (¼″ / 6.35 mm round holes on a
  1″ / 25.4 mm grid), or Custom for any other board: slots, round or square-cornered holes; hole
  width and height; Across (column spacing) and Down (spacing in a column), centre to centre; and
  Staggered (every other column half a step higher, like SKÅDIS). Make a bin with the same pattern
  as its board: its hooks go on one row of holes (at least 30 mm apart) and are sized to fit
  through the holes - small round holes make small hooks, so keep those bins for light things.
  The screw holes and spacers go half way between columns; if the columns are too close for the
  screw heads, the panel says which screws fit.
- Board: pick an IKEA size (36, 56 or 76 × 56 cm) or type any width and height; thickness (5 mm,
  like IKEA's) and corners. On the wall: spacers on the back (printed stand-offs, 12 mm to start,
  so hooks fit behind the board, with countersunk screw holes through them), countersunk holes
  only (add your own spacers), or no holes. The holes sit half way between two columns, clear of
  the slots and of the hooks behind. Bigger than the print bed: one piece, separate tiles (screw
  them up side by side), or tiles that clip together with dovetails (Join fit sets how loose).
  Tiles split half way between slots, so the pattern carries on across the joins, and are named
  A1, A2… (A is the top row). They're laid out face down for printing (spacers up, no supports);
  "Show assembled" puts the board together.
- Bin: outside width, depth and height, walls, floor, corners and compartments; hooks 40 mm apart
  (on one row of slots), as many as fit. Hooks: separate clips (the bin prints standing up and the
  clips print flat - no supports anywhere; each clip slides up into a channel on the back of the
  bin from underneath until it clicks: a springy finger at the bottom of the clip snaps over a
  ledge, so it can't slide back out, and the bin hangs on the closed tops of the channels. Press
  the bottom of a clip in towards the bin to slide it out again) or built in (one piece - each hook tip hangs in mid-air, so support the tips when printing).
  Front: full height, or lower with sloped sides - type the front's height and the sides slope up
  from it to the full height at the back wall (handy for reaching in; the back and its hooks stay
  the same).
  Bins 52 mm or taller also get a peg into the slot 40 mm below each hook, so they don't swing.
  Board: the thickness of your SKÅDIS board (5 mm for IKEA's). To hang a bin: tilt it, put the
  hooks through two slots, push it flat to the board and let it drop.

Messages (at the bottom of the 3D view) stay up until you close them with their ×, or the next message replaces them.
Fasteners (left panel): Keyhole, Countersunk (screw hole), Magnet (pocket), Insert (heat-set), Nut trap and
French cleat. Click one, choose the size, how many and the height (80% up the face by default), then click
a flat face. For the ones that hang things (keyhole, countersunk, magnet, cleat) click the flat face that
goes against the wall - turn the view to see underneath if the shape is lying on the bed (a curved
plaque or a dome with a flat back is fine). Countersunk holes go right through, with the countersink on
the front. On a curved front the countersink goes where the front comes furthest in under the
head, with a head-sized counterbore running straight out from it, so the screw head sits down all round. Inserts and nut traps go into the face you click. They're spread evenly across the face at
that height (within the face's outline, clear of its edges) and cut as holes - into the group the shape
is in, or a new group with it. "Up" is towards the back of the workplane for a face lying flat, upwards
for a standing one (a keyhole's slot runs up).
- Keyhole: standard (screw up to 4.6 mm, head up to 9 mm; needs 5 mm of material) or large (5.8 / 12 mm).
- Countersunk: a hole right through with a 90-degree countersink for 3-5 mm screws.
- Magnet: a pocket 0.2 mm bigger than the magnet (8x3, 6x3, 10x2, 10x3, 12x3, 6x2, 5x2 mm).
- Insert: a hole sized for M2-M5 brass heat-set inserts, with a small lead-in.
- Nut trap: a hex pocket for an M3-M6 nut, with the screw hole right through.
- French cleat: a 45-degree groove across the back and a matching wall strip (made next to the part, with
  countersunk screw holes): screw the strip to the wall with its sloping edge up and away from the wall,
  lift the piece over it, push it to the wall and let it drop.
If the part is too thin for a fastener at a spot, the app says so before adding it.

Left panel: click a section's heading (Shapes, Gridfinity, SKÅDIS & pegboards, Generators, User
Shapes) to fold it away - handy for getting to your User Shapes quickly. It remembers which are folded.

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
