# TODO: Rework SportsSponsorship.tsx Page

## Overview
Completely restructure the SportsSponsorship.tsx page to match the detailed spec, including all 12 sections in order, with new content, data structures, and components. Use existing UI components and add anchor-based navigation, sticky mobile CTA, and analytics events.

## Steps to Complete

### 1. Update Hero Section (#hero)
- Modify hero layout: Left (heading, subheading, bullets, CTAs), Right (illustration/mentor image/cohort card)
- Add pill tag: "Cohort 01 · Seats: 50 · Applications Open"
- Update content: H1, subheading, bullets, buttons (Apply Now, Download Brochure)
- Ensure responsive stacking on mobile

### 2. Add Why Now Section (#why-now)
- Create two-column layout: Left (market growth paragraph), Right (3-4 stat cards)
- Implement StatCard component if needed
- Add stats: e.g., "15,000+ athletes in KIBI network", etc.

### 3. Update Mentor Section (#mentor)
- Layout: Image left, text right (reverse on mobile)
- Add bio bullets: National Startup Award, PM felicitation, etc.
- Optional LinkedIn button

### 4. Restructure Curriculum Section (#curriculum)
- Use accordion or vertical timeline
- Define WeekModule type and data array
- Group weeks: 1-2, 3-4, 5-6, 7-8 (live), 9-10, 11-12, 13-14, 15, 16

### 5. Add Internship Block (#internship)
- Card or band with iconography
- Elements: "2-month internship @ KIBI Sports", stipend, bullets, timeline

### 6. Update Outcomes Section (#outcomes)
- Two subsections: Job Roles (badges/chips), Growth Path (table/list)
- Approximate salary ranges

### 7. Add Who Should Join Section (#who-should-join)
- Grid of cards with icons for personas: Students, Freelancers, etc.

### 8. Add Real Projects Section (#projects)
- 3-4 sample project cards in responsive grid

### 9. Add Comparison Section (#compare)
- Comparison table: Khelpreneurs Cohort vs Traditional Courses
- Responsive stacking on mobile

### 10. Add Testimonials / Logos Section (#testimonials)
- Placeholder: Logo strip or "Coming Soon" testimonials
- Implement component for future population

### 11. Update FAQ Section (#faq)
- Use accordion component
- Define FAQItem type and data array
- Questions around time commitment, who for, etc.

### 12. Update Final CTA Section (#apply)
- Band with short line, primary button, secondary (Talk to Advisor)

### 13. Add Anchor-Based Navigation
- Mini sub-nav at top of page for sections: Curriculum, Outcomes, FAQs, Apply
- Scroll to sections on click

### 14. Add Sticky Mobile CTA
- Bottom bar on mobile with "Apply Now" button

### 15. Implement Analytics Events
- Fire events: view_cohort_page, click_apply_now, etc.

### 16. Create Reusable Components
- PrimaryButton, SecondaryButton, SectionHeader, Accordion, TestimonialCard, Badge

### 17. Update SEO Meta
- Title, description, Open Graph image

### 18. Test Responsiveness & UX
- Mobile-first, anchor scrolling, subtle animations

### 19. Final Review & Cleanup
- Ensure all sections match spec, no placeholder content left
- Verify links and buttons work
