# Mobile Card Stack Animation - Usage Guide

## Overview

This is a **pure animation component** for Next.js that creates a GSAP + ScrollTrigger card-stack animation on mobile devices.

**What it does:**
- Pins the section when it reaches viewport top
- Animates cards entering one-by-one as user scrolls
- Controls all animation with scroll
- Releases pin after final card
- Mobile only (≤767px)

**What it does NOT do:**
- Define card content
- Style cards
- Add colors or typography
- Create headers or titles
- Handle card images

## Installation

GSAP is already installed. Component location:

```
components/
  MobileCardStack/
    MobileCardStack.tsx
    MobileCardStack.module.css
```

## Basic Usage

### Step 1: Define Your Cards

```tsx
const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
```

### Step 2: Create Your Card Content Component

This component receives `children` as slot content. You fill each card slot:

```tsx
import MobileCardStack from "@/components/MobileCardStack/MobileCardStack";

export function MyCardSection() {
  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    // ... more cards
  ];

  return (
    <MobileCardStack cards={cards}>
      {/* Optional: heading, intro, or other content before cards */}
      <div>
        <h2>Your Section Title</h2>
        <p>Your intro text</p>
      </div>
    </MobileCardStack>
  );
}
```

### Step 3: Style Your Cards via CSS

The component renders a `.mobile-card-stack-item` div for each card. Style them:

```css
.mobile-card-stack-item {
  /* Your card styling goes here */
  border: 2px solid #color;
  background: #color;
  border-radius: 1rem;
  padding: 2rem;
}
```

### Step 4: Add Content to Each Card

Use the card index or ID in your CSS to target specific cards:

```tsx
// Each card div has data-card-index attribute
// Use CSS or render content via Portal/index if needed
```

## Complete Example

**components/MyCardSection.tsx**

```tsx
"use client";

import MobileCardStack from "@/components/MobileCardStack/MobileCardStack";

const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export function MyCardSection() {
  return (
    <MobileCardStack cards={cards}>
      {/* Header/intro before cards */}
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Section Title</h2>
      </div>
    </MobileCardStack>
  );
}
```

**styles/my-cards.css**

```css
.mobile-card-stack-item {
  border: 2px solid #ddd;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .mobile-card-stack-item[data-card-index="0"] {
    background: #f0f0f0;
  }

  .mobile-card-stack-item[data-card-index="1"] {
    background: #f5f5f5;
  }

  /* ... more cards ... */
}

@media (min-width: 768px) {
  .mobile-card-stack-item {
    /* Desktop layout - handled by parent container */
  }
}
```

## Animation Sequence

### Phase 1: Normal Page Scroll
- Page scrolls normally
- Section is not pinned
- Cards in normal flow

### Phase 2: Section Reaches Top
- Section top reaches viewport top (`start: "top top"`)
- **ScrollTrigger pins the section**
- Page stops scrolling
- User scroll controls animation timeline

### Phase 3: First Card
- Card 1 is visible at centered position
- Cards 2-8 are below viewport (y: window.innerHeight)
- Hold 0.5s

### Phase 4-10: Each Card Enters
For each card 2 through 8:

1. **New card rises from bottom**
   - y: window.innerHeight → y: 0
   - scale: 1 (stable)
   - duration: 1s
   - easing: power3.out

2. **Previous card recedes**
   - y: 0 → y: -70 (moves up)
   - scale: 1 → scale: 0.94 (shrinks)
   - duration: 1s
   - easing: power2.inOut
   - **Simultaneous with incoming card**

3. **Z-index management**
   - New card gets zIndex: 1000 + index
   - New card appears ABOVE previous card
   - Previous card goes behind

### Phase 11: Final Settle
- All 8 cards animated
- Final card visible
- 0.5s hold

### Phase 12: Pin Release
- ScrollTrigger end reached
- **Pin is released**
- Page continues naturally
- Next section appears
- **No black space, no jump, no glitch**

### Reverse Scroll
- User scrolls up
- Animation reverses naturally
- Cards move backward in order
- ScrollTrigger controls automatically

## Animation Properties

### Timeline

```
Duration: Based on timeline.duration() × window.innerHeight

Structure:
├─ Hold 0.5s (card 1)
├─ Card 2 + recede Card 1 (1s)
├─ Card 3 + recede Card 2 (1s)
├─ Card 4 + recede Card 3 (1s)
├─ Card 5 + recede Card 4 (1s)
├─ Card 6 + recede Card 5 (1s)
├─ Card 7 + recede Card 6 (1s)
├─ Card 8 + recede Card 7 (1s)
└─ Final settle 0.5s
```

Total: ~9.5s timeline
Scroll duration = 9.5s × window.innerHeight

### ScrollTrigger Settings

```typescript
{
  animation: tl,           // GSAP timeline
  trigger: section,        // Section element
  start: "top top",        // Pin when section top reaches viewport top
  end: () => "+=" + (tl.duration() * window.innerHeight),
  pin: true,               // Pin the section
  pinSpacing: true,        // Create scroll distance
  scrub: 1,                // Scroll controls animation (1 = 1 second lag)
  anticipatePin: 1,        // Smooth pinning
  invalidateOnRefresh: true, // Recalculate on resize
  fastScrollEnd: false,    // Smooth end behavior
}
```

### Per-Card Animation

**Incoming Card:**
```javascript
{
  y: 0,              // From window.innerHeight
  scale: 1,
  duration: 1,
  ease: "power3.out"
}
```

**Receding Card:**
```javascript
{
  y: -70,
  scale: 0.94,
  duration: 1,
  ease: "power2.inOut"
}
```

**Timing:**
- Simultaneous (no delay between incoming and receding)

## Responsive Behavior

### Mobile (≤767px)
✅ Animation active
✅ Cards stacked absolutely
✅ Section pins on scroll
✅ One timeline, one ScrollTrigger

### Desktop (>767px)
❌ Animation disabled
✅ Cards use normal layout
✅ No ScrollTrigger
✅ User styles cards as grid/flex

## Test Checklist

### Basic Functionality

- [ ] Load page at mobile width (≤767px)
  - Expected: Cards load in initial positions, no animation yet

- [ ] Scroll page downward
  - Expected: Page scrolls normally until section reaches top

- [ ] Section reaches viewport top
  - Expected: Section pins, page stops scrolling

- [ ] Continue scrolling down slowly
  - Expected: Card 2 rises from below, Card 1 recedes

- [ ] Check z-index while Card 2 enters
  - Expected: Card 2 is visibly above Card 1

- [ ] Continue scrolling
  - Expected: Card 3 enters, Card 2 recedes, Card 3 on top

- [ ] Scroll through all cards
  - Expected: Every card enters in order (1→2→3→4→5→6→7→8)

- [ ] Reach final card (Card 8)
  - Expected: Card 8 remains visible, timeline at end

- [ ] Continue scrolling after Card 8
  - Expected: Pin releases smoothly, next section appears

- [ ] Check for black space after animation
  - Expected: NO black space, NO gap, NO glitch

### Scroll Behavior

- [ ] Scroll up slowly while cards animating
  - Expected: Animation reverses smoothly

- [ ] Scroll up to first card
  - Expected: All cards return to initial positions

- [ ] Scroll down again
  - Expected: Animation replays correctly

- [ ] Very fast scroll/swipe on mobile
  - Expected: Cards maintain correct z-index order, no overlap errors

### Responsive Behavior

- [ ] Start at desktop width (>768px)
  - Expected: No animation runs, normal layout

- [ ] Resize to mobile (≤767px)
  - Expected: Animation initializes, works correctly

- [ ] Resize back to desktop
  - Expected: Animation kills cleanly, no duplicate triggers

- [ ] Resize mobile (change height due to address bar)
  - Expected: No major jumps, only refresh (no timeline reset)

### React/Next.js Behavior

- [ ] Open DevTools, check console
  - Expected: No errors, no warnings about refs

- [ ] Enable React Strict Mode / hot reload
  - Expected: Animation initializes correctly, no duplicates

- [ ] Hard refresh page
  - Expected: Animation ready immediately, no race conditions

### Pin/Unpin Quality

- [ ] Pin releases after Card 8
  - Expected: Immediate smooth transition to next section

- [ ] Scroll slowly near the unpin point
  - Expected: No sudden jump, no glitch, smooth flow

- [ ] Inspect page scroll position when reaching final card
  - Expected: Scroll distance correct, matches timeline duration

### Multi-Instance

- [ ] Add component twice on same page
  - Expected: Each instance has its own timeline, separate ScrollTriggers

- [ ] Scroll through first section, then second section
  - Expected: Both animate independently, no interference

---

## Props

```typescript
interface MobileCardStackProps {
  cards: Card[];           // Array of card objects with `id` property
  children?: ReactNode;    // Optional: heading, intro, etc. before cards
}

interface Card {
  id: string | number;    // Unique identifier for each card
}
```

## CSS Classes

Your styling should target:

```css
/* Section wrapper */
.mobile-card-stack-section

/* Container for heading/content + cards */
.mobile-card-stack-container

/* Card wrapper container */
.mobile-card-stack-cards

/* Individual card (animate this!) */
.mobile-card-stack-item
```

Attributes on `.mobile-card-stack-item`:

```html
<div class="mobile-card-stack-item" data-card-index="0"></div>
<div class="mobile-card-stack-item" data-card-index="1"></div>
<!-- etc -->
```

## Key Implementation Details

### One Timeline, One ScrollTrigger
- All 8 cards controlled by single GSAP timeline
- One ScrollTrigger attached to section
- NOT one trigger per card

### Z-Index Strategy
```
Card 1 initial: zIndex: 100
Card 2 initial: zIndex: 101
Card 3 initial: zIndex: 102
...

When animating:
Set Card N to: zIndex: 1000 + N
```

Ensures each new card appears on top.

### Position Control
```
CSS: transform: translateX(-50%)  // Horizontal centering
GSAP: y, scale, opacity, zIndex    // Animation controls
```

Never mix CSS translateY with GSAP y animation.

### Breakpoint Logic
```typescript
const isMobile = window.innerWidth <= 767;

if (isMobile) {
  // Initialize animation
} else {
  // Kill animation, use normal layout
}
```

Only reinitialize when crossing the 767/768 boundary.

### Cleanup
- Kill ScrollTrigger on unmount
- Revert GSAP context
- Remove event listeners
- Clean up all references

---

## Animation Math

**Timeline Construction:**

```
Event 1: Hold 0.5s
Event 2: Card 2 & recede 1 (1s)
Event 3: Card 3 & recede 2 (1s)
Event 4: Card 4 & recede 3 (1s)
Event 5: Card 5 & recede 4 (1s)
Event 6: Card 6 & recede 5 (1s)
Event 7: Card 7 & recede 6 (1s)
Event 8: Card 8 & recede 7 (1s)
Event 9: Final settle 0.5s

Total: 9.5 seconds
```

**ScrollTrigger Duration:**

```
end: "+=" + (9.5 × window.innerHeight)
```

Example: If window.innerHeight = 800px

```
end: "+=" + (9.5 × 800) = "+=" + 7600px
```

User must scroll 7600px while section is pinned to complete animation.

---

## Debugging

If animation doesn't work:

1. **Check mobile width:**
   ```javascript
   console.log(window.innerWidth);
   // Should be ≤ 767 for animation
   ```

2. **Check cards are rendering:**
   ```javascript
   console.log(cardsRef.current);
   // Should have 8 elements (or however many)
   ```

3. **Check GSAP plugin registration:**
   ```javascript
   console.log(gsap.plugins.scrollTrigger);
   // Should exist
   ```

4. **Check ScrollTriggers:**
   ```javascript
   ScrollTrigger.getAll().forEach(t => console.log(t));
   // Should have exactly 1 for mobile
   ```

5. **Check console for errors:**
   - No ref errors
   - No "cannot read property" errors
   - No duplicate initialization messages

---

## Performance Notes

- `will-change: transform` on cards
- `backface-visibility: hidden` for GPU acceleration
- `transform-origin: center center` for smooth scaling
- `scrub: 1` keeps animation smooth (not 0 which is janky)

---

## Limitations

- **Mobile only** (≤767px), desktop shows normal layout
- **No autoplay** - scroll controls animation
- **CSS positioning** - cards must use absolute positioning on mobile
- **One section per component** - don't nest multiple card-stacks
- **Exact card order** - must be 1→2→3→...→N

---

## License

This animation component is provided as-is for use in the anythink project.
