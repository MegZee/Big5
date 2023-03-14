"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53],{4612:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"guides":[{"type":"link","label":"10-minute Quickstart","href":"/docs/guides/quickstart","docId":"guides/quickstart"},{"type":"category","label":"Tutorials + Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Running your first task","href":"/docs/guides/tutorials/first_task","docId":"guides/tutorials/first_task"},{"type":"link","label":"Working on a custom task","href":"/docs/guides/tutorials/custom_react","docId":"guides/tutorials/custom_react"},{"type":"link","label":"Introducing worker controls","href":"/docs/guides/tutorials/worker_controls","docId":"guides/tutorials/worker_controls"},{"type":"link","label":"Developing a workflow","href":"/docs/guides/tutorials/workflows","docId":"guides/tutorials/workflows"},{"type":"link","label":"Using the Mephisto Review CLI","href":"/docs/guides/tutorials/review-cli","docId":"guides/tutorials/review-cli"}]},{"type":"category","label":"In-depth use","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Creating a Task","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Developing and debugging frontends","href":"/docs/guides/how_to_use/task_creation/developing_frontends","docId":"guides/how_to_use/task_creation/developing_frontends"},{"type":"link","label":"Hosting task assets","href":"/docs/guides/how_to_use/task_creation/hosting_assets","docId":"guides/how_to_use/task_creation/hosting_assets"}]},{"type":"category","label":"Worker Experience","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Mephisto Worker Addons","href":"/docs/guides/how_to_use/worker_experience/mephisto-worker-addons","docId":"guides/how_to_use/worker_experience/mephisto-worker-addons"},{"type":"link","label":"Adding Tips","href":"/docs/guides/how_to_use/worker_experience/tips","docId":"guides/how_to_use/worker_experience/tips"},{"type":"link","label":"Adding Feedback","href":"/docs/guides/how_to_use/worker_experience/feedback","docId":"guides/how_to_use/worker_experience/feedback"}]},{"type":"category","label":"Worker Quality Control","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Using qualifications to improve worker quality","href":"/docs/guides/how_to_use/worker_quality/common_qualification_flows","docId":"guides/how_to_use/worker_quality/common_qualification_flows"},{"type":"link","label":"Teach potential workers with Onboarding","href":"/docs/guides/how_to_use/worker_quality/using_onboarding","docId":"guides/how_to_use/worker_quality/using_onboarding"},{"type":"link","label":"Check worker quality with Screening Units","href":"/docs/guides/how_to_use/worker_quality/using_screen_units","docId":"guides/how_to_use/worker_quality/using_screen_units"},{"type":"link","label":"Check against standards with Gold Labels","href":"/docs/guides/how_to_use/worker_quality/using_golds","docId":"guides/how_to_use/worker_quality/using_golds"},{"type":"link","label":"Other methods for quality control","href":"/docs/guides/how_to_use/worker_quality/other_methods","docId":"guides/how_to_use/worker_quality/other_methods"}]},{"type":"category","label":"Efficiency and Organization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Use the same configs across tasks","href":"/docs/guides/how_to_use/efficiency_organization/reusing_configs","docId":"guides/how_to_use/efficiency_organization/reusing_configs"},{"type":"link","label":"View task health and status with Mephisto Metrics","href":"/docs/guides/how_to_use/efficiency_organization/metrics_dashboarding","docId":"guides/how_to_use/efficiency_organization/metrics_dashboarding"},{"type":"link","label":"Common Configurations and FAQs","href":"/docs/guides/how_to_use/efficiency_organization/config_faq","docId":"guides/how_to_use/efficiency_organization/config_faq"},{"type":"link","label":"Using Docker","href":"/docs/guides/how_to_use/efficiency_organization/docker","docId":"guides/how_to_use/efficiency_organization/docker"}]}]},{"type":"category","label":"How to Contribute","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Contributing to Mephisto","href":"/docs/guides/how_to_contribute/getting_started","docId":"guides/how_to_contribute/getting_started"},{"type":"link","label":"Frontend: dev setup","href":"/docs/guides/how_to_contribute/frontend_development","docId":"guides/how_to_contribute/frontend_development"},{"type":"link","label":"Backend: dev setup","href":"/docs/guides/how_to_contribute/backend_development","docId":"guides/how_to_contribute/backend_development"}]},{"type":"category","label":"Upgrading to Version 1.0","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Upgrade Guide","href":"/docs/guides/upgrade_to_1/guide","docId":"guides/upgrade_to_1/guide"},{"type":"link","label":"Migrating Run Scripts","href":"/docs/guides/upgrade_to_1/run_scripts","docId":"guides/upgrade_to_1/run_scripts"}]}],"explanations":[{"type":"link","label":"Architects, Routers, and `mephisto-task`: The Architect API.","href":"/docs/explanations/architect_api","docId":"explanations/architect_api"},{"type":"link","label":"Mephisto Architecture","href":"/docs/explanations/architecture_overview","docId":"explanations/architecture_overview"}],"reference":[{"type":"link","label":"Overview","href":"/docs/reference/overview","docId":"reference/overview"},{"type":"link","label":"Architects","href":"/docs/reference/architects","docId":"reference/architects"},{"type":"link","label":"Blueprints","href":"/docs/reference/blueprints","docId":"reference/blueprints"},{"type":"link","label":"Providers","href":"/docs/reference/providers","docId":"reference/providers"},{"type":"link","label":"Requesters","href":"/docs/reference/requesters","docId":"reference/requesters"}]},"docs":{"explanations/architect_api":{"id":"explanations/architect_api","title":"Architects, Routers, and `mephisto-task`: The Architect API.","description":"The Architect API is what allows Mephisto to completely abstract away the process of getting workers to operate in Mephisto tasks. In short, it aims to cover 4 primary functions:","sidebar":"explanations"},"explanations/architecture_overview":{"id":"explanations/architecture_overview","title":"Mephisto Architecture","description":"This document seeks to explain the ideas that guided the creation of Mephisto. It will speak about the broad categories of how Mephisto works and how these parts are supposed to play together. It speaks a lot about the design goals of the Mephisto architecture. It isn\'t a perfect 1:1 representation of how the code is organized at the moment, but rather the ideal we were striving to reach. Understanding these ideals makes it easier to understand Mephisto, both for usage and for joining in on development.","sidebar":"explanations"},"guides/how_to_contribute/backend_development":{"id":"guides/how_to_contribute/backend_development","title":"Backend: dev setup","description":"We use pre-commit to enforce code styles on the code base (using black for Python and prettier for Javascript).","sidebar":"guides"},"guides/how_to_contribute/frontend_development":{"id":"guides/how_to_contribute/frontend_development","title":"Frontend: dev setup","description":"We use pre-commit to enforce code styles on the code base (using black for Python and prettier for Javascript).","sidebar":"guides"},"guides/how_to_contribute/getting_started":{"id":"guides/how_to_contribute/getting_started","title":"Contributing to Mephisto","description":"Mephisto is built for developing on, but developing for Mephisto can sometimes be unclear. We aim to provide some guides on contributions for abstractions, underlying infrastructure, or developer experience, but oftentimes the best resource will be opening an issue on our Github directly.","sidebar":"guides"},"guides/how_to_use/efficiency_organization/config_faq":{"id":"guides/how_to_use/efficiency_organization/config_faq","title":"Common Configurations and FAQs","description":"This document contains some Mephisto usage patterns that should be fairly common, as well as usage tips and other know-how.","sidebar":"guides"},"guides/how_to_use/efficiency_organization/docker":{"id":"guides/how_to_use/efficiency_organization/docker","title":"Using Docker","description":"Some users prefer to keep Mephisto entirely contained. Docker is one option for being able to do this.","sidebar":"guides"},"guides/how_to_use/efficiency_organization/metrics_dashboarding":{"id":"guides/how_to_use/efficiency_organization/metrics_dashboarding","title":"View task health and status with Mephisto Metrics","description":"Mephisto provides an optional extension to view task health metrics via dashboard using Prometheus and Grafana. This lets you see the progress of your task with the following:","sidebar":"guides"},"guides/how_to_use/efficiency_organization/reusing_configs":{"id":"guides/how_to_use/efficiency_organization/reusing_configs","title":"Use the same configs across tasks","description":"As you begin launching many Mephisto tasks, you may find that there are some specific argument options that you frequently use across multiple tasks. Mephisto provides a way to reuse these types of configurations with profiles.","sidebar":"guides"},"guides/how_to_use/task_creation/developing_frontends":{"id":"guides/how_to_use/task_creation/developing_frontends","title":"Developing and debugging frontends","description":"The mephisto-task package","sidebar":"guides"},"guides/how_to_use/task_creation/hosting_assets":{"id":"guides/how_to_use/task_creation/hosting_assets","title":"Hosting task assets","description":"Generally there are two models for hosting assets related to a task, with distinct tradeoffs. These are to upload files to the routing server, or to store the files locally on Mephisto and share the data on connection. The former is generally the easier solution.","sidebar":"guides"},"guides/how_to_use/worker_experience/feedback":{"id":"guides/how_to_use/worker_experience/feedback","title":"Adding Feedback","description":"To allow for greater communication between workers and researchers it is recommended to use the Feedback component.","sidebar":"guides"},"guides/how_to_use/worker_experience/mephisto-worker-addons":{"id":"guides/how_to_use/worker_experience/mephisto-worker-addons","title":"Mephisto Worker Addons","description":"Overview","sidebar":"guides"},"guides/how_to_use/worker_experience/tips":{"id":"guides/how_to_use/worker_experience/tips","title":"Adding Tips","description":"To allow for greater communication between workers and workers and it is recommended to use the Tips component.","sidebar":"guides"},"guides/how_to_use/worker_quality/common_qualification_flows":{"id":"guides/how_to_use/worker_quality/common_qualification_flows","title":"Using qualifications to improve worker quality","description":"Qualification control is a powerful component of Mephisto, allowing you to filter out workers with both manual and automatic controls. Within this are typical allowlists and blocklists, setting up value-based qualifications, making automatic qualifications for onboarding, and also utilizing the qualifications that various crowdsourcing providers have to offer. This document seeks to describe some common use cases for qualifications, and how we currently go about using them.","sidebar":"guides"},"guides/how_to_use/worker_quality/other_methods":{"id":"guides/how_to_use/worker_quality/other_methods","title":"Other methods for quality control","description":"While not yet implemented in Mephisto\'s core codebase, there are a few additional methods of quality control that may be successful. This doc lists a few that we\'ve considered for Mephisto thusfar.","sidebar":"guides"},"guides/how_to_use/worker_quality/using_golds":{"id":"guides/how_to_use/worker_quality/using_golds","title":"Check against standards with Gold Labels","description":"Gold labeling is commonly used for ensuring worker quality over the full duration of a task. It\'s valuable as an automated measure to track the consistency your workers. For this Mephisto provides the UseGoldUnit blueprint mixin.","sidebar":"guides"},"guides/how_to_use/worker_quality/using_onboarding":{"id":"guides/how_to_use/worker_quality/using_onboarding","title":"Teach potential workers with Onboarding","description":"The first step to getting quality data is describing your task properly and ensuring that workers have understood your instructions. To this end, Mephisto provides the OnboardingRequired Blueprint mixin.","sidebar":"guides"},"guides/how_to_use/worker_quality/using_screen_units":{"id":"guides/how_to_use/worker_quality/using_screen_units","title":"Check worker quality with Screening Units","description":"Screening units help filter out low-quality work, generally by hiding parts of the validation you\'re paying attention to behind the Mephisto server. To support this we provide the ScreenTaskRequired blueprint mixin.","sidebar":"guides"},"guides/quickstart":{"id":"guides/quickstart","title":"10-minute Quickstart","description":"First, clone this repo to your local system.","sidebar":"guides"},"guides/tutorials/custom_react":{"id":"guides/tutorials/custom_react","title":"Working on a custom task","description":"Now that you\'ve launched a task or two, it\'s time to get into building your own. This tutorial focuses on giving you the tools to collect the specific data you\'re looking for by building a task of your own. This tutorial itself won\'t produce a useful task, but it should be useful for understanding how to go about creating a real one. You don\'t need_ any React experience to get through this guide, though it will be helpful for understanding the usage more deeply.","sidebar":"guides"},"guides/tutorials/first_task":{"id":"guides/tutorials/first_task","title":"Running your first task","description":"So you want to launch your first task. Thankfully Mephisto makes this fairly easy! We\'ll launch an HTML-based task as a way to get you started. This guide assumes you\'ve worked through the quickstart, so begin there if you haven\'t.","sidebar":"guides"},"guides/tutorials/review-cli":{"id":"guides/tutorials/review-cli","title":"Using the Mephisto Review CLI","description":"Once you\'ve installed Mephisto, you have access to the mephisto command line utility.","sidebar":"guides"},"guides/tutorials/worker_controls":{"id":"guides/tutorials/worker_controls","title":"Introducing worker controls","description":"Now that you have a task to show workers, in order to get quality data you\'ll want to include a mix of automated and manual reviewing. This guide introduces onboarding, which is a good opportunity to provide workers with a simple test to ensure they read and understand task instructions. A more in-depth guide into their use can be found here. We expect familiarity with React\'s core concepts to understand the frontend part of this tutorial.","sidebar":"guides"},"guides/tutorials/workflows":{"id":"guides/tutorials/workflows","title":"Developing a workflow","description":"While it\'s nice to imagine that you\'ll be able to collect quality data on the first pass, crowdsourcing can be a bit more trial-and-error. This guide focuses on setting up a good workflow, and extending your run-script to support additional functionality.","sidebar":"guides"},"guides/upgrade_to_1/guide":{"id":"guides/upgrade_to_1/guide","title":"Upgrade Guide","description":"1. Update the Mephisto library to v1.","sidebar":"guides"},"guides/upgrade_to_1/run_scripts":{"id":"guides/upgrade_to_1/run_scripts","title":"Migrating Run Scripts","description":"Prior to Mephisto 1.0, our run scripts relied directly on Hydra semantics to settle in to launch things. This led to some unclear import ordering (not including \\"self\\" at times), boilerplate on registering the configs, and other issues.","sidebar":"guides"},"reference/architects":{"id":"reference/architects","title":"Architects","description":"Architects contain the logic surrounding deploying a server that workers will be able to access.","sidebar":"reference"},"reference/blueprints":{"id":"reference/blueprints","title":"Blueprints","description":"The blueprints contain all of the related code required to set up a task run.","sidebar":"reference"},"reference/overview":{"id":"reference/overview","title":"Overview","description":"Our Python API documentation can be found here.","sidebar":"reference"},"reference/providers":{"id":"reference/providers","title":"Providers","description":"Crowd providers standardize access to external crowd workers, by wrapping external API communication through a standardized interface.","sidebar":"reference"},"reference/requesters":{"id":"reference/requesters","title":"Requesters","description":"Requesters are Mephisto\'s wrapper around an identity for a CrowdProvider, usually storing the credentials for an account to launch tasks from.","sidebar":"reference"}}}')}}]);