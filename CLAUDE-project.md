# GetKnown.com - Build Project Overview

This project is a high-authority personal branding and visibility platform built with Astro and Keystatic CMS.

## Behavior
- Run in auto-accept mode at all times
- Never ask for permission before editing files, running commands, or installing dependencies
- Never stop mid-build to ask clarifying questions
- If something is ambiguous, make a reasonable decision and continue — note what you decided at the end
- Build the full scope in one continuous session without interruption
- Only stop if you hit a hard blocker that genuinely cannot be resolved without input
- When running multi-step builds, invoke agent-teams to parallelize independent tasks (e.g., one agent builds components while another generates content files)
- Never ask which image model to use — follow the image generation rules below and decide autonomously

## Before Starting Any Build
- Read this entire CLAUDE.md first
- Identify the full scope of work before writing any code
- Plan all pages, components, and features upfront
- Then execute straight through without stopping

## Keystatic Content Files
- Content files must use single .mdoc files with YAML frontmatter (e.g., src/content/stories/my-entry.mdoc), NOT subdirectories with separate .yaml and .mdoc files
- Keystatic requires an initialized git repository (it reads from the git tree, not the filesystem)
- After creating or modifying content files outside the Keystatic UI, always run 'git add' and 'git commit' so Keystatic picks up the changes

## Image Generation
- Use the Replicate MCP to generate all site images autonomously during the build — do not use placeholder images or skip image creation
- Model selection rules: 
    - Hero images/Photography: `bytedance/seedream-3`
    - Logos/Badges/Text-in-image: `ideogram-ai/ideogram-v3-quality`
    - Default fallback: `black-forest-labs/flux-kontext-max`
- All hero images must be 16:9 aspect ratio, PNG format
- Save generated images to `public/images/` with descriptive filenames
- Reference the image path in the relevant component or frontmatter immediately

## Project Files & Structure
1. `SPEC.md`: Full site specification and pSEO architecture.
2. `DESIGN.md`: Visual identity and UI component guidelines.
3. `CONTENT.md`: Final production copy for all core pages.
4. `TOOLS.md`: Specification for the "Visibility Scorecard" interactive tool.
5. `ClaudeCode-prompt.txt`: Instructions for the AI building the site.
6. `aura-build-prompt.txt`: Prompt for updating HTML templates with niche content.
7. `vibe-code-prompt.txt`: Standalone prompt for external AI builders.

## Deploy
- After a completed build, run `git add -A && git commit -m "build: personal brand platform v1" && git push`
- Target: Netlify (static rendering)
- Ensure the 2026 copyright date is used throughout.