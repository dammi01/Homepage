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

# 3. Determine the commit message
if [ -z "$1" ]; then
  COMMIT_MSG="chore: Release v$new_version"
else
  COMMIT_MSG="$1 (v$new_version)"
fi
echo "💬 Using commit message: '$COMMIT_MSG'"

# 4. Commit version bump and any other changes to main
git add .
git commit -m "$COMMIT_MSG"
git tag -a "v$new_version" -m "$COMMIT_MSG"
echo "✅ Changes and tag v$new_version committed to 'main' branch."

# --- Deployment Logic ---

# 5. Get the latest main branch from remote
git fetch origin main

# 6. Forcefully create a local gh-pages branch from the latest main
# This ensures we have all the latest files.
git checkout -B gh-pages origin/main

echo "🚀 Switched to temporary 'gh-pages' branch."

# 7. Push this new branch to GitHub. The --force flag is crucial
# because it replaces the entire history of the remote gh-pages branch.
# This is what we want for a clean deployment.
git push -f origin gh-pages

echo "✅ Successfully pushed to 'gh-pages' branch on GitHub."

# 8. Return to the main branch
git checkout main

# 9. Push main branch commits and tags
git push origin main --tags

echo "✅ Pushed 'main' branch and tags to remote."
echo "🎉 Deployment complete!"