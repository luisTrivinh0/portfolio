# Retorna

## Overview

Retorna is a SaaS product and service marketplace designed around recurring customer relationships and service follow-up.

The product evolved from a more traditional SaaS model into a free marketplace-oriented platform, requiring changes in onboarding, authentication, product positioning and user flows.

## Product challenge

Service businesses often lose revenue because customer follow-up depends on memory, spreadsheets or informal messaging.

The product addresses that operational gap by centralizing customer and service information and creating a structured way to reconnect with customers according to the service cycle.

As the product evolved, the engineering challenge became broader than implementing features. It required balancing product discovery, technical simplicity and a low-friction onboarding experience.

## Responsibilities

- Product and technical ownership across the stack.
- Frontend development and UX flows.
- Backend and API integration.
- Authentication flows, including Google sign-in.
- Database-backed application features.
- Marketplace and onboarding flows.
- Production deployment and iteration.
- Integration of public demos and product communication.
- Technical decisions driven by real prospect feedback.

## Engineering themes

### End-to-end ownership

Features are considered complete only when frontend behavior, backend rules, persistence, authentication and deployment work together.

### Authentication simplification

Reducing signup friction became important as the product moved toward a free marketplace. Google authentication was integrated while preserving the application's own session model and backend validation.

### Product-driven architecture

The codebase needed to support changes in business model without requiring a full rewrite. The focus was on keeping product rules explicit and avoiding unnecessary infrastructure.

### Production feedback loops

Real usage and prospect conversations influenced prioritization. Engineering decisions were continuously evaluated against actual adoption friction rather than only internal assumptions.

## Technical areas

- Web frontend
- Backend APIs
- Authentication
- Google OAuth integration
- Database persistence
- SaaS workflows
- Marketplace flows
- Deployment
- Public product demos
- Third-party integrations

## Trade-offs

### Build versus abstract

Early product stages benefit from speed, but excessive shortcuts create friction later. The approach is to keep boundaries clear while postponing abstractions that do not yet solve a real recurring problem.

### Free onboarding versus account integrity

A low-friction product still needs trustworthy session handling and backend validation. Authentication changes were made without moving trust entirely to the client.

### Product evolution versus technical churn

The marketplace pivot required changes in positioning and flow, but the architecture was kept stable wherever the underlying domain behavior remained useful.

## What this demonstrates

Retorna demonstrates the ability to work beyond isolated tickets: understanding the product, making technical decisions, shipping end-to-end features and adapting the application as the business model changes.

It also reflects experience operating with incomplete information, where engineering and product discovery happen together.

## Confidentiality

This portfolio entry describes product-level and engineering concepts only. Sensitive production configuration, credentials and private operational data are excluded.
