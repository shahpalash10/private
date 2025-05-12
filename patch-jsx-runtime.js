// This script patches the react-pdf module to use the correct import for jsx-runtime
const fs = require('fs');
const path = require('path');

// Function to recursively find files
function findFiles(dir, pattern) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search directories
      results = results.concat(findFiles(filePath, pattern));
    } else if (pattern.test(file)) {
      // If the file matches the pattern, add it to results
      results.push(filePath);
    }
  });
  
  return results;
}

// Find all JS files in the react-pdf directory
const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');
const reactPdfPath = path.join(nodeModulesPath, 'react-pdf');

if (fs.existsSync(reactPdfPath)) {
  console.log('Patching react-pdf module...');

  const jsFiles = findFiles(reactPdfPath, /\.js$/);
  
  // Find and replace problematic imports in all JS files
  let patchCount = 0;
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace import without extension
    const originalContent = content;
    content = content.replace(
      /from\s+["']react\/jsx-runtime["']/g,
      'from "react/jsx-runtime.js"'
    );
    content = content.replace(
      /from\s+["']react\/jsx-dev-runtime["']/g,
      'from "react/jsx-dev-runtime.js"'
    );
    
    // If content was modified, save the file
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      patchCount++;
      console.log(`Patched: ${file}`);
    }
  });
  
  console.log(`Patched ${patchCount} files in react-pdf module`);
} else {
  console.error('Could not find react-pdf module');
}

// Also check for any other packages with the same issue
const packagesToCheck = ['@react-pdf/renderer'];

packagesToCheck.forEach(pkgName => {
  const pkgPath = path.join(nodeModulesPath, pkgName);
  if (fs.existsSync(pkgPath)) {
    console.log(`Checking ${pkgName} module...`);
    const jsFiles = findFiles(pkgPath, /\.js$/);
    
    let patchCount = 0;
    jsFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      const originalContent = content;
      content = content.replace(
        /from\s+["']react\/jsx-runtime["']/g,
        'from "react/jsx-runtime.js"'
      );
      content = content.replace(
        /from\s+["']react\/jsx-dev-runtime["']/g,
        'from "react/jsx-dev-runtime.js"'
      );
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        patchCount++;
        console.log(`Patched: ${file}`);
      }
    });
    
    console.log(`Patched ${patchCount} files in ${pkgName} module`);
  }
});

console.log('Patching completed');