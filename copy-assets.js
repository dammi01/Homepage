const fs = require('fs-extra');
const path = require('path');

// Ensure resumes directory exists in dist
fs.ensureDirSync('dist/assets/resumes');

// Copy resumes
fs.copySync('public/assets/resumes', 'dist/assets/resumes', { overwrite: true });

console.log('Assets copied successfully!');
