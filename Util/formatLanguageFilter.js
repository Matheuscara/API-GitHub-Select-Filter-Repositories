const formatLanguageFilter = (language) => {
  switch (language) {
    case 'Javascript' || 'javascript':
      return 'JavaScript';
		case 'c%' || 'csharp':
			return 'C#';
    default:
      break;
  }
};

module.exports = formatLanguageFilter;
