# Mobile Filter Drawer Implementation

## Plan

- [x] Analyze ShopPage.tsx and available UI components
- [x] Get user confirmation on bottom drawer approach
- [x] Implement mobile bottom drawer filter in ShopPage.tsx
  - [x] Extract filter content into reusable `FilterContent` component
  - [x] Hide sidebar on mobile (`hidden lg:block`)
  - [x] Add mobile "Filters" trigger button with active count badge
  - [x] Wrap filters in bottom Drawer with sticky header/footer
  - [x] Keep desktop sidebar behavior unchanged
- [x] Build verification

## Implementation Summary

- **Pattern used**: Bottom Drawer (via `vaul`)
- **Desktop behavior**: Unchanged — sidebar filters remain visible at `lg` breakpoint and above
- **Mobile behavior**:
  - Sidebar hidden
  - "Filters" button appears in toolbar with an active filter count badge
  - Tapping opens a bottom sheet taking ~80% of screen height
  - Drawer has a drag handle, close button, scrollable filter content, and a sticky "Show X Products" CTA button
- **Active filter count**: Computed from category + price range selections
- **Reusability**: `FilterContent` component shared between desktop sidebar and mobile drawer
