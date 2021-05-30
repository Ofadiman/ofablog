#!/usr/bin/env sh

# Script deletes all the local branches that have been merged into the `main` branch.
# It only runs on the `main` branch.

# Declare script colors.
COLOR_BLUE='\033[0;34m'
COLOR_GREEN="\033[0;32m"
COLOR_RED='\033[0;31m'
COLOR_YELLOW='\033[0;33m'
COLOR_DEFAULT='\033[0m'

ERROR="${COLOR_RED}[ERROR]${COLOR_DEFAULT}"
SUCCESS="${COLOR_GREEN}[SUCCESS]${COLOR_DEFAULT}"
INFO="${COLOR_BLUE}[INFO]${COLOR_DEFAULT}"

current_branch="$(git rev-parse --abbrev-ref HEAD)"
main_branch="main"

if [[ "${current_branch}" != "${main_branch}" ]]; then
  echo "${ERROR} The script can only be run on the ${COLOR_YELLOW}${main_branch}${COLOR_DEFAULT} branch!"
  echo "${INFO} The current branch is ${COLOR_YELLOW}${current_branch}${COLOR_DEFAULT}."
  exit 0
fi

echo "${INFO} Pulling changes from the origin in fast forward mode."
git pull --ff-only

echo "${INFO} Deleting locally merged branches."
git branch -r --merged | grep -v main | sed 's/origin\///' | xargs git branch -d

echo "${SUCCESS} All locally merged branches have been deleted."
