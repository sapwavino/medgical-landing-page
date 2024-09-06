# Medgical Landing Page

## Branch: LANDING PAGE THEME SWITCH

### CHANGES

[x] Redesigned pages with a light theme using brand colors while retaining most of the original design scheme
[x] Added dark and light themes with System-dependent theme switcher
[x] Removed hard-coded black background on body element to allow a more seamless theme switch
[x] Changed nav item font & added hover animations
[x] Added inverted stars background image to keep consistency between themes
[x] Changed background color for floating nav bar on desktop in light theme
[x] Added color varieties(from brand guide) to different elements on feature cards
[x] Added state for theme switch to handle dynamic changes appropriately between pages and components
[x] Adjusted Privacy & Anonymity English text by removing redundant "by AI"
[x] Capitalized hero title for more emphasis and hierarchy
[x] Added hover animation to try for free button
[x] Changed "Hospitals and clinics from different sizes ..." to "Hospitals and clinics of different sizes ..."
[x] Handled theme switch for FAQs i.e adjusted font and background colors and underline on hover
[x] Made adjustments to footer elements e.g compliance tags, sponsor logos
[x] Join now button now has a prop (smallLight) to cover cases where the background is dark and the text needs to be white

### NOTES

- Some file changes are format changes made by my editor's formatter (Prettier, mostly)
- This branch also includes modifications to previous branches

### TODO

- Adjust the edges of the feedback carousel to work properly with light theme
- Use a consistent shade of white across different elements
- Add fade effect on top/bottom edges of cards to help text fade out more elegantly in light mode e.g TranscriptorBot
- Add theme switch button to allow users toggle themes (also add browser storage for theme switch)
