#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🔹 Starting deployment..."

# --- Versioning and Commit Message ---

# 1. Ensure we are on the main branch
if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
  echo "❌ Error: This script must be run from the 'main' branch."
  exit 1
fi

# 2. Increment version
current_version=$(cat VERSION)
new_version=$(echo $current_version | awk -F. -v OFS=. '{$NF = $NF + 1; print}')
echo $new_version > VERSION
echo "⬆️  Version bumped from $current_version to $new_version"

# 3. **NEW STEP**: Update the version number directly in index.html
# This command finds the span with id="version-number" and replaces its content.
# It works on both Linux and macOS.
sed -i.bak "s#<span class=\"version-number\" id=\"version-number\">.*</span>#<span class=\"version-number\" id=\"version-number\">${new_version}</span>#" index.html && rm index.html.bak
echo "🔄 Updated version in index.html to ${new_version}"

# 4. Determine the commit message
if [ -z "$1" ]; then
  COMMIT_MSG="chore: Release v$new_version"
else
  COMMIT_MSG="$1 (v$new_version)"
fi
echo "💬 Using commit message: '$COMMIT_MSG'"

# 5. Commit version bump and any other changes to main
git add .
git commit -m "$COMMIT_MSG"
git tag -a "v$new_version" -m "$COMMIT_MSG"
echo "✅ Changes and tag v$new_version committed to 'main' branch."

# --- Deployment Logic ---

# 6. Get the latest main branch from remote
git fetch origin main

# 7. Forcefully create a local gh-pages branch from the latest main
git checkout -B gh-pages origin/main

echo "🚀 Switched to temporary 'gh-pages' branch."

# 8. Push this new branch to GitHub. The --force flag is crucial.
git push -f origin gh-pages

echo "✅ Successfully pushed to 'gh-pages' branch on GitHub."

# 9. Return to the main branch
git checkout main

# 10. Push main branch commits and tags
git push origin main --tags

echo "✅ Pushed 'main' branch and tags to remote."
echo "🎉 Deployment complete!"