#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# The branch with your source code
SOURCE_BRANCH="main"

# The branch that GitHub Pages is deploying from
DEPLOY_BRANCH="gh-pages"

# The directory to publish to the deploy branch
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

# Define the commit message. Use the first argument ($1) if it exists,
# otherwise use a default message including the new version number.
if [ -z "$1" ]; then
  COMMIT_MSG="chore: Bump version to $new_version"
else
  COMMIT_MSG="$1"
fi
echo "💬 Using commit message: '$COMMIT_MSG'"

# 1. Add and commit the new version number and any other changes to your source branch
git add .
git commit -m "$COMMIT_MSG"
echo "✅ Changes committed to '$SOURCE_BRANCH' branch."

# 2. Push the built site to the deployment branch
# This command forcefully pushes the content of your PUBLISH_DIR 
# to the root of the DEPLOY_BRANCH.
echo "🚀 Deploying to '$DEPLOY_BRANCH' branch..."
git push origin `git subtree split --prefix $PUBLISH_DIR $SOURCE_BRANCH`:refs/heads/$DEPLOY_BRANCH --force
echo "✅ Site successfully deployed to GitHub Pages."

# 3. Create a new tag for the version, using the commit message as the tag annotation
git tag -a "v$new_version" -m "$COMMIT_MSG"
echo "✅ Created tag v$new_version."

# 4. Push all changes, including tags, to the remote repository
git push origin $SOURCE_BRANCH --tags
echo "✅ Pushed commits and tags to remote."

echo "🎉 Deployment complete for version $new_version!"
```

### How to Use the New Script

Now, when you want to deploy, you can run it with your message in quotes:

```bash
./deploy.sh "Updated my resume and fixed a link in the footer"
```

The text "Updated my resume and fixed a link in the footer" will be used as the commit message.

If you run it the old way, without a message:

```bash
./deploy.sh
```

It will simply use the default message, `chore: Bump version to 1.0.48` (or whatever the next version is). So you haven't lost any functionality, only gained a new o