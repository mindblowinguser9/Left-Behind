"use strict";

/* ==========================================================
   LEFT BEHIND: script
   All the text for the three objects lives in the "objects" list.
   To fix or change a fact, edit it here. Everything else updates.
   Only facts from our verified fact sheet are used.
   ========================================================== */

const objects = [
  {
    id: "lrv",
    name: "Lunar Roving Vehicle",
    status: "Intentionally left behind",
    statusNote: "Each crew left its rover on the Moon at the end of its mission.",
    mission: "Apollo 15, 16 and 17 (1971–1972)",
    location:
      "The Moon: Hadley-Apennine region (Apollo 15), Descartes Highlands (Apollo 16) and Taurus-Littrow valley (Apollo 17)",
    background:
      "Apollo 15, 16 and 17 each carried a Lunar Roving Vehicle, a battery-powered rover that let astronauts explore far beyond walking distance. " +
      "David Scott and James Irwin used the first one on Apollo 15. John Young and Charles Duke used the second on Apollo 16, " +
      "and Gene Cernan and Harrison Schmitt used the third on Apollo 17.",
    happened:
      "When each mission ended, the crew left its rover on the Moon and flew home in the lunar module. " +
      "In images released in 2011, NASA's Lunar Reconnaissance Orbiter (LRO) showed the Apollo 17 rover parked east of its lander, " +
      "with the rover's tracks and the astronauts' footprints still visible on the surface.",
    learned: [
      "Science: A rover let crews travel far from their lander. NASA's Apollo rover page says the major scientific discoveries of Apollo 15, 16 and 17 would not have been possible without it.",
      "Engineering: On Apollo 17 the rover drove 35.9 km in 4 hours 26 minutes of driving time. Its longest single trip was 20.1 km, and its greatest distance from the lander was 7.6 km.",
      "Monitoring: An orbiter can study an old site decades later. LRO's images of the Apollo 17 site show the rover tracks as sharp parallel lines."
    ],
    story:
      "By the early 1970s, Apollo astronauts wanted to explore farther than they could walk in bulky spacesuits. " +
      "Their answer was the Lunar Roving Vehicle, a battery-powered rover carried to the Moon on Apollo 15, 16 and 17. " +
      "On Apollo 17, Gene Cernan and Harrison Schmitt drove theirs 35.9 kilometers in 4 hours 26 minutes of driving time, " +
      "and ventured up to 7.6 kilometers from their lander. " +
      "When each mission ended, the crew left its rover on the Moon and flew home. " +
      "NASA's history page on the rover says the major scientific discoveries of those three missions would not have been possible without it. " +
      "Decades later, NASA's Lunar Reconnaissance Orbiter photographed the Apollo 17 site, " +
      "and its images show the rover's tracks as sharp parallel lines."
  },
  {
    id: "backshell",
    name: "Perseverance Parachute and Backshell",
    status: "Discarded landing hardware",
    statusNote: "Released on purpose during landing. It was never meant to be recovered.",
    mission: "Mars 2020 / Perseverance rover (landed February 18, 2021)",
    location: "Jezero Crater, Mars, about a mile from where the rover landed",
    background:
      "Perseverance, part of NASA's Mars 2020 mission, landed in Jezero Crater, an ancient dried-up lakebed. " +
      "The Ingenuity helicopter traveled with it. Two pieces of landing hardware did their job and were then let go: " +
      "a cone-shaped backshell that protected the rover in deep space and during its fiery descent, " +
      "and a supersonic parachute that slowed the fall.",
    happened:
      "At about 1.3 miles (2 km) up, the parachute and backshell separated from the rover, and a sky crane lowered Perseverance the rest of the way. " +
      "The backshell hit the surface at about 78 mph (125 km/h). " +
      "On April 19, 2022, on its 26th flight, Ingenuity flew 26 feet (8 m) above the site and photographed the parachute, backshell and debris. " +
      "NASA released the images on April 27, 2022. They show the site as it was in 2022, not as it looks today.",
    learned: [
      "Engineering: NASA reported that the parachute canopy showed no signs of damage from the supersonic airflow during inflation, and that many of its 80 suspension lines appeared intact.",
      "Landing data: JPL engineer Ian Clark said Perseverance had the best-documented Mars landing in history, with cameras showing everything from parachute inflation to touchdown.",
      "Future missions: In 2022, NASA said studying this hardware could help plan later missions, including bringing Mars samples back to Earth."
    ],
    story:
      "Landing a rover on Mars is hard, so NASA's Perseverance used hardware that was built to be thrown away. " +
      "A cone-shaped backshell protected the rover in deep space and during its fiery descent at nearly 12,500 miles per hour (20,000 km/h). " +
      "A parachute about 70.5 feet (21.5 m) wide, the biggest ever used on Mars, slowed the fall. " +
      "At about 1.3 miles (2 km) up, the parachute and backshell separated, " +
      "and a rocket-powered sky crane lowered the rover to the surface on February 18, 2021. " +
      "The backshell hit the ground at about 78 miles per hour, roughly a mile away. " +
      "In April 2022, the Ingenuity helicopter photographed the wreckage from the air. " +
      "The images showed the parachute and its lines still looked intact after a year on Mars."
  },
  {
    id: "opportunity",
    name: "Opportunity Rover",
    status: "Retired rover",
    statusNote: "The mission ended in 2019. NASA could not regain contact, so this rover was not discarded.",
    mission: "Mars Exploration Rover mission (rover MER-B), landed January 2004",
    location: "Perseverance Valley, on the western rim of Endeavour Crater, Mars",
    background:
      "Opportunity was one of NASA's two twin Mars Exploration Rovers, which landed on Mars in 2004. " +
      "It was a solar-powered rover designed for a 90-day mission. " +
      "In the end it worked for about 15 years and reached Perseverance Valley on the rim of Endeavour Crater.",
    happened:
      "Opportunity's last communication with Earth came on June 10, 2018, during a huge dust storm. " +
      "After months of recovery attempts, NASA declared the mission complete on February 13, 2019. " +
      "The rover's final image was a 360-degree panorama built from pictures taken between May 13 and June 10, 2018. " +
      "Opportunity remains in Perseverance Valley, its final resting place.",
    learned: [
      "Engineering: Opportunity was designed for 90 days and lasted about 60 times longer than planned. It drove more than 28 miles (45 km).",
      "Engineering: The rover was solar-powered. The 2018 dust storm blocked its sunlight and its signals stopped, which shows how much solar-powered rovers depend on sunlight.",
      "Legacy: NASA's JPL says Opportunity's record-breaking exploration laid the groundwork for future missions to the Red Planet."
    ],
    story:
      "Opportunity was built for a 90-day mission on Mars. " +
      "Instead, the solar-powered rover worked for about 15 years, roughly 60 times its planned lifetime, " +
      "and drove more than 28 miles (45 kilometers). " +
      "In June 2018, a huge dust storm covered its location in Perseverance Valley and blocked the sunlight its solar panels needed. " +
      "Its last signal reached Earth on June 10, 2018. " +
      "For months, NASA sent recovery commands, but Opportunity never answered. " +
      "On February 13, 2019, NASA declared the mission complete. " +
      "Opportunity was not thrown away. It simply could not be recovered, and it remains in Perseverance Valley. " +
      "NASA's JPL says its record-breaking exploration laid the groundwork for future missions to the Red Planet."
  }
];

// ---------- Small helper: make an element with optional class and text ----------
function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// ---------- Find the parts of the page we need ----------
const cards = document.querySelectorAll(".card");
const detailBox = document.getElementById("detail");
const storyList = document.getElementById("story-list");
let openId = null; // which object is open right now (null = none)

function findObject(id) {
  return objects.find(function (o) { return o.id === id; });
}

function findCard(id) {
  return document.querySelector('.card[data-id="' + id + '"]');
}

// ---------- Build the detail box for one object ----------
function buildDetail(item) {
  detailBox.textContent = ""; // clear the old content

  // Top row: name, status label, close button
  const head = make("div", "detail-head");
  const titleWrap = make("div");
  const title = make("h3", "", item.name);
  title.id = "detail-title";
  titleWrap.appendChild(title);
  titleWrap.appendChild(make("span", "badge", item.status));

  const closeBtn = make("button", "close-btn", "Close");
  closeBtn.type = "button";
  closeBtn.addEventListener("click", closeDetail);

  head.appendChild(titleWrap);
  head.appendChild(closeBtn);
  detailBox.appendChild(head);

  detailBox.appendChild(make("p", "status-note", item.statusNote));

  // Mission and location
  const meta = make("dl", "meta");
  [["Mission", item.mission], ["Location", item.location]].forEach(function (pair) {
    const row = make("div");
    row.appendChild(make("dt", "", pair[0]));
    row.appendChild(make("dd", "", pair[1]));
    meta.appendChild(row);
  });
  detailBox.appendChild(meta);

  // Text sections
  detailBox.appendChild(make("h4", "", "Historical background"));
  detailBox.appendChild(make("p", "", item.background));

  detailBox.appendChild(make("h4", "", "What happened to it"));
  detailBox.appendChild(make("p", "", item.happened));

  detailBox.appendChild(make("h4", "", "What we learned"));
  const list = make("ul");
  item.learned.forEach(function (line) {
    list.appendChild(make("li", "", line));
  });
  detailBox.appendChild(list);

  detailBox.appendChild(make("h4", "", "The story"));
  detailBox.appendChild(make("p", "story", item.story));
}

// ---------- Open and close ----------
function openDetail(id) {
  const item = findObject(id);
  if (!item) return;

  // Mark only the chosen card as selected
  cards.forEach(function (c) {
    const isThis = c.dataset.id === id;
    c.classList.toggle("selected", isThis);
    c.setAttribute("aria-expanded", isThis ? "true" : "false");
  });

  buildDetail(item);
  detailBox.hidden = false;
  openId = id;

  // Move keyboard focus to the box and make sure it is visible
  detailBox.focus({ preventScroll: true });
  detailBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeDetail() {
  const previous = openId;
  cards.forEach(function (c) {
    c.classList.remove("selected");
    c.setAttribute("aria-expanded", "false");
  });
  detailBox.hidden = true;
  openId = null;

  // Give focus back to the card that was open
  const card = previous ? findCard(previous) : null;
  if (card) card.focus();
}

// ---------- Cards: click or press Enter / Space ----------
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (openId === card.dataset.id) {
      closeDetail(); // clicking the open card again closes it
    } else {
      openDetail(card.dataset.id);
    }
  });
});

// Escape closes the box
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && openId) closeDetail();
});

// ---------- Section C: build the three story cards ----------
objects.forEach(function (item) {
  const article = make("article", "story-card");
  article.appendChild(make("h3", "", item.name));
  article.appendChild(make("span", "badge", item.status));
  article.appendChild(make("p", "", item.story));

  const btn = make("button", "story-btn", "Open the full file");
  btn.type = "button";
  btn.addEventListener("click", function () {
    document.getElementById("archive").scrollIntoView({ behavior: "smooth" });
    openDetail(item.id);
  });
  article.appendChild(btn);

  storyList.appendChild(article);
});
