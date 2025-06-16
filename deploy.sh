#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# The branch with your source code
SOURCE_BRANCH="main"

# The branch that GitHub Pages is deploying from
DEPLOY_BRANCH="gh-pages"

# The directory to publish to the deploy branch
# This should contain only your final HTML, CSS, JS, and assets
PUBLISH_DIR="." 

# --- Versioning Logic ---
echo "🔹 Starting versioning process..."

# Check if the VERSION file exists, if not, create it.
if [ ! -f VERSION ]; then
    echo "1.0.0" > VERSION
    git add VERSION
    git commit -m "chore: add VERSION file"
    echo "🔹 Created and committed VERSION file."
fi

# Read the current version from the VERSION file
current_version=$(cat VERSION)
echo "Current version: $current_version"

# Increment the patch version number (the last digit)
new_version=$(echo $current_version | awk -F. -v OFS=. '{$NF = $NF + 1; print}')
echo "New version will be: $new_version"

# Update the VERSION file with the new version number
echo $new_version > VERSION

# --- Git Logic ---
echo "🔹 Starting deployment process..."

# 1. Add and commit the new version number to your source branch
git add VERSION
git commit -m "chore: Bump version to $new_version"
echo "✅ Version bumped and committed to '$SOURCE_BRANCH' branch."

# 2. Push the built site to the deployment branch
# This command forcefully pushes the content of your PUBLISH_DIR 
# to the root of the DEPLOY_BRANCH.
# It's a clean way to update a gh-pages branch.
# The --prefix flag specifies the directory to push.
# The `.` means the current directory.
echo "🚀 Deploying to '$DEPLOY_BRANCH' branch..."
git push origin `git subtree split --prefix $PUBLISH_DIR $SOURCE_BRANCH`:refs/heads/$DEPLOY_BRANCH --force
echo "✅ Site successfully deployed to GitHub Pages."

# 3. Create a new tag for the version
git tag -a "v$new_version" -m "Release version $new_version"
echo "✅ Created tag v$new_version."

# 4. Push all changes, including tags, to the remote repository
git push origin $SOURCE_BRANCH --tags
echo "✅ Pushed commits and tags to remote."

echo "🎉 Deployment complete for version $new_version!"


