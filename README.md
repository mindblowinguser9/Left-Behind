# LEFT BEHIND

**An Interactive Archive of Humanity's Footprints Beyond Earth**

Team SinNombre · NASA Space Apps Challenge 2026
Challenge: *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*

LEFT BEHIND is a small interactive website that tells the stories of three machines left on the Moon and Mars:

| Object | Where | Status label used |
|---|---|---|
| Apollo Lunar Roving Vehicle | The Moon (Apollo 15, 16, 17 sites) | Intentionally left behind |
| Perseverance parachute and backshell | Jezero Crater, Mars | Discarded landing hardware |
| Opportunity rover | Perseverance Valley, Mars | Retired rover |

It is an **independent student project. It is not made by NASA and is not endorsed by NASA.**

## How to run it

1. Put these three files together in one folder (for example `left-behind`):
   - `index.html`
   - `style.css`
   - `script.js`
2. Double-click `index.html`. It opens in your browser (Chrome, Edge, Firefox or Safari).

That is all. There is nothing to install and it works without an internet connection (the source links need internet to open).

## What to test

1. The title, subtitle, introduction and **Explore the Archive** button show. The button scrolls to the archive.
2. Click each of the three cards. A file opens below with name, status, mission, location, background, what happened, what we learned and a story.
3. Click the same card again, press **Close**, or press **Esc**. The file closes.
4. Scroll to **The Stories**. Click **Open the full file** on a story. It jumps back and opens that object.
5. Check **Why It Matters** and **Sources**. Click each source link and confirm it opens.
6. Make the browser window narrow (like a phone). Nothing should scroll sideways.
7. Press **Tab** repeatedly. You can reach every menu link, card and button, and the focus outline is visible. Press **Enter** on a card to open it.

If something looks wrong: press **F12**, open the **Console** tab, and read the red message. The most common cause is a file name that is not exactly `index.html`, `style.css` or `script.js`, or files saved in different folders.

## How the code is organised

- `index.html`: the page structure (the five sections).
- `style.css`: the design. Colors are defined once at the top under `:root`.
- `script.js`: all object text lives in the `objects` list at the top. To fix a fact, edit it there. The cards' detail boxes and the Stories section both read from that one list, so they always match.

## Facts and sources

Only facts from `FACT_SHEET.md` marked as confirmed were used. Claims that could not be confirmed were left out (for example the exact reasons the Apollo rovers were left behind, and Opportunity's water findings). The full list of sources is in the **Sources** section of the site.

## Limits you should know about

- The official Space Apps challenge page could not be opened by the assistant that helped build this (the site blocks automated access). The challenge title and summary were taken from a partner site's copy. **Read the official page yourself** for exact submission rules, deadlines and any rules about AI tools.
- The assistant read short excerpts of the NASA pages, not the full pages. **Open each source link once** and confirm the facts match before you submit.
- Apollo 16's landing site (Descartes Highlands) and the Apollo 15 and 17 site names were not confirmed against a NASA mission page in this session. Check them on NASA's Apollo mission pages.
- "Battery-powered" for the rover comes from the Smithsonian National Air and Space Museum, not a NASA page. It is listed as a non-NASA source.
- No NASA photographs are used. The card pictures are simple original drawings, so there are no image licences to manage and no broken image links.
