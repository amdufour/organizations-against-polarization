/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
/*************************************/
/* Initialize variables              */
/*************************************/

// Screen size's related variables
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const width = screenWidth > 1200 ? (1200 / 12 * 8) : (screenWidth - 30);
const height = screenHeight - 100;

// Colors
const colors = [
  { id: 'red', hex: '#F94144' },
  { id: 'orange', hex: '#F3722C' },
  { id: 'yellow', hex: '#F9C74F' },
  { id: 'pistachio', hex: '#90BE6D' },
  { id: 'teal', hex: '#43AA8B' },
  { id: 'blue', hex: '#577590' }
];
const white = '#FBFDFE';
const grey = '#727A87';

// Data related variables
const groups = ['communications', 'civics', 'community', 'economy', 'technology', 'education'];
const radiusMin = 8;  // Minimum radius of a node
const radiusMax = 60; // Maximum radius of a node

// State variable
let isActiveElement = false;
let highlightedNodes = [];



/*************************************/
/* Main functions                    */
/*************************************/

// Node radius scale
const nodeRadiusScale = d3.scaleLinear()
.domain(d3.extent(nodes, d => d.estimated_people_impacted))
.range([radiusMin, radiusMax]);

// Get radius of a node
const getRadius = (peopleImpacted) => {
return peopleImpacted == 'nan' ? 5 : nodeRadiusScale(peopleImpacted);
};

// Append data to links and nodes
d3.selectAll('.links-group path')
  .data(links)
  .join('path');

d3.selectAll('g.node')
  .data(nodes)
  .join('g')
  .on('mouseenter', d => {
        d3.event.stopPropagation();
        isActiveElement ? highlightNode(d.id) : highlightElements(d.id, false);
        showInfo(d);
      })
      .on('mouseleave', d => {
        isActiveElement
          ? !highlightedNodes.includes(d.id) ? unHighlightNode(d.id) : null
          : unhighlightElements();
        hideInfo();
      })
      .on('click', d => {
        // if (window.innerWidth > 768) {
          handleClick(d);
        // }
      });

// Append legend
addRadiusLegend(getRadius(1000000), getRadius(500000), getRadius(5000));


/*************************************/
/* Update Copyright years            */
/*************************************/
const creationYear = 2020;
const currentYear = new Date().getFullYear();
const copyrightYears = currentYear === creationYear ? currentYear : `${creationYear}-${currentYear}`;
document.querySelector('.copyright-years').innerHTML = copyrightYears;
