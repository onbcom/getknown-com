# Interactive Tool: The Visibility Scorecard

## Overview
A multi-step assessment that evaluates a user's current digital authority and provides a "Visibility Score" (0-100) along with a recommended action plan.

## User Flow
1.  **Step 1: The Presence Check**
    *   Input: "On which platforms are you most active?" (Multi-select: LinkedIn, X, personal website, Medium, Podcasts, None).
    *   Input: "When was your last professional post or article published?" (Select: Today, This week, Last month, 6+ months ago).
2.  **Step 2: The Social Proof Test**
    *   Input: "Have you been featured in third-party media in the last 12 months?" (Yes/No).
    *   Input: "Do you have a central 'home' (personal website/link-in-bio) for your expertise?" (Yes/No).
3.  **Step 3: Goal Alignment**
    *   Input: "What is your primary goal?" (Get more clients, Raise funding, Land speaking gigs, Build a legacy).
4.  **Step 4: The Result**
    *   User enters Email to see their score.

## Logic / Outputs
- **Low Score (0-40) - "The Invisible Expert"**: High expertise, no digital footprint. 
    *   *Action*: Focus on "Visibility Foundations" (LinkedIn optimization + personal site).
- **Medium Score (41-75) - "The Rising Voice"**: Active but inconsistent.
    *   *Action*: Focus on "Content Continuity" and "Guesting Flywheel" (Podcasts).
- **High Score (76-100) - "The Industry Icon"**: High authority, needs scaling.
    *   *Action*: Focus on "Systemized PR" and "Category Leadership."

## Post-Result CTA
*   "Download Your 2026 Visibility Roadmap" (PDF)
*   "Book a Personal Brand Strategy Session"

## Tracking Events
*   `visibility_scorecard_start`
*   `visibility_scorecard_step_complete`
*   `visibility_scorecard_result_generated`
*   `lead_capture_success`

## Keystatic Configuration
The descriptions and scoring logic for these results will be stored in `src/content/tools/visibility-scorecard.mdoc` to allow for easy updates to the advice given in 2026. *Note: Ensure git is initialized and changes are committed for Keystatic to detect tool content updates.*