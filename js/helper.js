/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
/*************************************/
/* Helper functions                  */
/*************************************/

// Get main group type of a node
const getGroup = (type) => {
  switch (type) {
    case 'Media':
    case 'Art & Culture':
      return groups[0];

    case 'Politics':
    case 'Civics':
    case 'Democracy':
      return groups[1];

    case 'Community':
    case 'Intercultural':
    case 'Service':
    case 'Conflict resolution':
    case 'Anti-Hate':
    case 'Polarization':
    case 'Religion':
    case 'Interfaith':
      return groups[2];

    case 'Sharing Economy':
    case 'Business':
    case 'International Relief':
      return groups[3];

    case 'Technology':
    case 'Digital Equity':
    case 'Interdependence':
      return groups[4];

    case 'Education':
    case 'Research':
      return groups[5];
  }
};

// Get color of a node
const getColor = (type) => {
  const group = getGroup(type);
  switch (group) {
    case 'communications':
      return colors.find(color => color.id === 'red');
    case 'civics':
      return colors.find(color => color.id === 'yellow');
    case 'community':
      return colors.find(color => color.id === 'blue');
    case 'economy':
      return colors.find(color => color.id === 'orange');
    case 'technology':
      return colors.find(color => color.id === 'teal');
    case 'education':
      return colors.find(color => color.id === 'pistachio');
  }
};