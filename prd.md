AET Ski Website Redesign PRD
	1.	Executive Summary
	•	Redesign aim: Increase quote conversions by 10% and enhance visual appeal
	•	Brand attributes: Genuine, Reliable, Warm, Welcoming, Experienced
	2.	Business Objectives & Goals
	•	Increase quote conversion rate by +10% over baseline
	•	Improve site visual appeal aligned with brand attributes
	3.	Target Users
	•	Individuals and families on annual ski holidays
	•	Age: 40–70
	•	Home markets: UK, France, Switzerland, Germany
	•	Income: £90K–£250K annual
	4.	User Journeys & Flows
4.1 Discover & Search Transfers
	•	Homepage → Routes page to view service routes
4.2 Request & Receive Quote
	•	7-step modal form:
	1.	Journey (one-way/return, select points)
	2.	Dates (collection/return with “I’m not sure”)
	3.	People (adults, children)
	4.	Luggage & Equipment (assumed + extra items)
	5.	Lead Passenger Details (name, email*, phone)
	6.	Summary (edit links, additional info)
	7.	Success (confirmation, reference, actions)
	5.	Functional Requirements
	•	Quote form modal: persistent data save after each step
	•	Edit links in summary navigate back to respective steps
	•	One-way selection hides return date/time fields
	•	Dynamic assumed luggage calculation
	•	Responsive: grid spans per breakpoint
	6.	Technical & Integration Requirements
	•	Front-end: Next.js, React, Tailwind CSS, Lucide, flag-icons
	•	Back-end: Node.js
	•	CMS/DB: Sanity CMS
	•	APIs & Services: MapTiler, Cloudinary
	•	Analytics: Google Analytics (event tracking)
	•	Version Control: GitHub
	•	Hosting: Ionos.fr, Fasthosts.co.uk
	•	Email platform: __________ (TBD)
	7.	Design & Brand Guidelines
	•	Grid & Responsiveness: breakpoints at 380px, 768px, 1440px
	•	Columns/Gutters: mobile 4/16/24; tablet 8/20/56; desktop 12/24/84
	•	Typography: Geist, GT Walsheim Trial; capture size, line-height, spacing
	•	Color palette: initial limited set; roles and states defined; dot-notation tokens
	•	Spacing: base unit 4px
	•	Border radii tokens: radius.sm/md/lg
	•	Component organization: token-driven, minimal hierarchy, automated docs
	•	Methodology: Tailwind + ITCSS, BEM-style kebab-case names
	8.	Success Metrics & Analytics
	•	KPI: Quote submissions ÷ modal opens, +10% target
	•	Track: step completions, drop-offs, form submissions, success views
	•	Mobile vs desktop conversion split
	•	Page-load performance (<2s)
	•	User satisfaction (post-quote survey)
	9.	Data Collection & Tracking Plan
	•	Instrument via GA: pageviews, modal events, step events, success page
	•	Dashboard: funnel visualization, conversion widget, device split
	•	Baseline: collect first 4 weeks post-launch
	10.	Timeline & Milestones

	•	Design sign-off: August 5, 2025
	•	Dev complete: August 12, 2025
	•	QA & Testing: August 12–19, 2025
	•	Pre-launch prep & smoke tests: August 20–23, 2025
	•	Launch: August 24, 2025

	11.	Assumptions & Constraints

	•	Content provided by Aug 5
	•	No budget for new tools
	•	Fixed launch date, no scope creep buffer
	•	English only
	•	WCAG 2.1 AA target
	•	Hosting must handle peak traffic
	•	Sanity schema finalized by design sign-off

	12.	Risks & Mitigations

	•	Content delays → use placeholders, parallelize
	•	API integration issues → lock versions, smoke tests
	•	Timeline slippage → daily standups, backlog triage
	•	Performance bottlenecks → budget <2s, optimize images

	13.	Appendix

	•	Email platform decision pending