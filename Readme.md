# Markdown checkboxes -> Apple Reminders

# Overview
This little app requires a bit of setup, but for my use case, it is well worth it. When propperly set up, it will monitor your filesystem for changes to files ending in .md. When a markdown file changes it will grep it, find `- [ ]` and create an apple Reminder from the text that follows. 

# Requirements
- redis
- fswatch
- An Apple computer
- node.js

# Usage
1. Clone this Repo
2. brew install redis
3. brew install fswatch
4. `cd todos && node watch.js`

# Configuration
You will need to change the watched dir in watch.js (I'll make that configurable in .env soon)

