const formatLanguageFilter = (language) => {
  // FORMATER TO REQ LANGUAGE
  switch (language) {
    case 'Javascript' || 'javascript':
      return 'JavaScript';
    case 'html':
      return 'HTML';
    case 'python':
      return 'Python'
    case 'dart':
      return 'Dart'
    case 'vue':
      return 'Vue'
    case 'java':
      return 'Java'
    case 'c%' || 'csharp':
      return 'C#';
    case 'scss':
      return 'SCSS';
    case 'css':
      return 'CSS';
    case 'objective-c':
      return 'Objective-C';
    case 'swift':
      return 'Swift';
    default:
      return language
  }
};

module.exports = formatLanguageFilter;