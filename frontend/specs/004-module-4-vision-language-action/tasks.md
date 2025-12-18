# Implementation Tasks: Module 4 - Vision-Language-Action (VLA)

**Feature**: Module 4 - Vision-Language-Action: Convergence of LLMs and Robotics
**Created**: 2025-12-06
**Status**: Ready for Implementation

---

## Task Breakdown

### Task 1: Create Module 4 Index/Landing Page

**Description**: Create the Module 4 overview/landing page introducing VLA concepts, the capstone project, and chapter structure.

**Acceptance Criteria**:
- [ ] MDX file created at `docs/module-04-vision-language-action/index.mdx`
- [ ] Frontmatter includes: id ("module-04-intro"), title ("Module 4: Vision-Language-Action"), description, keywords
- [ ] Introduction explains what VLA is: convergence of vision, language understanding, and robot action
- [ ] Overview explains why VLA represents paradigm shift in robotics (from scripted to adaptive, language-driven)
- [ ] Chapter roadmap lists all 4 chapters with 1-sentence descriptions:
  - Chapter 1: Voice-to-Action with OpenAI Whisper
  - Chapter 2: Cognitive Planning with LLMs
  - Chapter 3: Computer Vision for Object Recognition
  - Chapter 4: Capstone Project: The Autonomous Humanoid
- [ ] Prerequisites section clearly states: completion of Modules 1-3 recommended, links back to Module 3
- [ ] Capstone teaser explains final project: voice command → LLM planning → vision-guided navigation → object manipulation
- [ ] VLA architecture diagram (Mermaid or ASCII) shows high-level flow: Voice → Language → Vision → Action
- [ ] Hardware/software requirements clearly stated: NVIDIA GPU (or cloud alternatives), ROS 2 Humble, Isaac Sim, Python 3.8+
- [ ] API access note explains: OpenAI API optional (open-source alternatives provided)
- [ ] CTA encourages learners to start with Chapter 1
- [ ] Word count: 800-1,200 words
- [ ] Content is mobile-responsive and accessible (WCAG 2.1 AA)

**Test Cases**:
1. **Given** a learner completes Module 3, **When** they click "Module 4" in navigation, **Then** they see compelling landing page explaining VLA and capstone
2. **Given** a learner reads prerequisites, **When** they review requirements, **Then** they see links to Modules 1-3 and clear hardware/software needs
3. **Given** a learner views VLA architecture diagram, **When** the diagram renders, **Then** it shows clear flow from voice input to robot action
4. **Given** a learner wants to start learning, **When** they scroll to bottom, **Then** they see CTA link to Chapter 1

**Dependencies**: None (first task, creates entry point)

**Estimated Effort**: 4-6 hours

---

### Task 2: Create Chapter 1 - Voice-to-Action with OpenAI Whisper

**Description**: Write Chapter 1 covering VLA architecture, Whisper STT, ROS 2 audio integration, voice command patterns, error handling, and complete voice-to-ROS pipeline.

**Acceptance Criteria**:
- [ ] MDX file created at `docs/module-04-vision-language-action/01-voice-to-action-whisper.mdx`
- [ ] Frontmatter includes: id, title ("Chapter 1: Voice-to-Action with OpenAI Whisper"), sidebar_label, description, keywords
- [ ] Content includes story-like intro (1 paragraph) about human-robot voice interaction scenario
- [ ] VLA introduction section explains: what VLA models are, how they combine multimodal perception (vision, language, action), paradigm shift
- [ ] VLA architecture section with diagram showing: Voice Input → Speech Recognition → Language Understanding → Action Planning → Robot Execution
- [ ] Whisper architecture section explains: how Whisper performs STT, model sizes (tiny, base, small, medium, large), accuracy-latency tradeoffs
- [ ] Whisper integration section covers: audio capture (audio_common, PulseAudio), audio_msgs/Audio message types, transcription node implementation, publishing to ROS topics
- [ ] Voice command patterns section with examples:
  - Navigation commands: "Go to the kitchen", "Move forward 2 meters"
  - Manipulation commands: "Pick up the red cup", "Place the bottle on the table"
  - Query commands: "Where is the charging station?", "What objects do you see?"
- [ ] Error handling section covers: ambiguous commands ("Put the cup over there"), unrecognized speech (low confidence), unsafe requests, out-of-scope tasks
- [ ] Validation logic examples show how to filter unsafe/invalid commands
- [ ] Complete voice-to-ROS pipeline code example in Python showing: audio capture → Whisper transcription → command parsing (regex or NLP) → ROS action client invocation
- [ ] Open-source alternatives section mentions: Whisper.cpp (local CPU inference), faster-whisper (GPU optimization), Vosk, Google Speech-to-Text
- [ ] Real-world example describes warehouse robot responding to voice commands
- [ ] "What You Learned" section lists 3-5 key takeaways
- [ ] At least 2 diagrams: VLA architecture (Mermaid), voice pipeline flow (ASCII or Mermaid)
- [ ] Code examples use Python, properly commented and syntax-highlighted
- [ ] Word count: 3,000-5,000 words
- [ ] All links to Whisper documentation, ROS 2 audio packages are functional
- [ ] Content is mobile-responsive and accessible (WCAG 2.1 AA)

**Test Cases**:
1. **Given** a learner navigates to Chapter 1, **When** the page loads, **Then** frontmatter renders correctly in sidebar as "Voice-to-Action"
2. **Given** a learner reads VLA introduction, **When** they view the architecture diagram, **Then** it clearly shows Voice → Speech → Language → Action → Execution flow
3. **Given** a learner wants Whisper integration details, **When** they read that section, **Then** they see audio capture code, Whisper API call, and ROS topic publishing
4. **Given** a learner views voice command patterns, **When** they review examples, **Then** they see navigation, manipulation, and query command categories with concrete examples
5. **Given** a learner copies Python pipeline code, **When** they review the code, **Then** it includes audio capture, Whisper transcription, parsing, and ROS action invocation
6. **Given** a learner toggles dark mode, **When** viewing diagrams and code, **Then** all content remains high-contrast and readable

**Dependencies**: Task 1 completed (module index provides context)

**Estimated Effort**: 12-16 hours

---

### Task 3: Create Chapter 2 - Cognitive Planning with LLMs

**Description**: Write Chapter 2 covering task decomposition, LLM planning, prompt engineering for robotics, LLM-to-ROS conversion, state tracking, replanning, and safety validation.

**Acceptance Criteria**:
- [ ] MDX file created at `docs/module-04-vision-language-action/02-cognitive-planning-llms.mdx`
- [ ] Frontmatter includes: id, title ("Chapter 2: Cognitive Planning with LLMs"), sidebar_label, description, keywords
- [ ] Content includes story-like intro (1 paragraph) about LLM-based robot task planning scenario
- [ ] Cognitive planning introduction explains: what cognitive planning is, how LLMs enable semantic task understanding, difference from scripted robotics
- [ ] Task decomposition section with concrete examples showing: "Clean the room" → [navigate to room, identify objects, categorize items, pick up trash, place in bin, return to start]
- [ ] Task decomposition shows: high-level goal, subtasks, preconditions, success criteria for each subtask
- [ ] Prompt engineering section covers:
  - System prompts defining robot capabilities, workspace constraints, safety rules
  - Few-shot examples showing input task → output plan format
  - Structured output formats (JSON action sequences)
- [ ] Prompt engineering examples use robotics-specific patterns (not generic LLM prompts)
- [ ] LLM-to-ROS conversion section explains: action types (nav2_msgs/NavigateToPose, moveit_msgs/PickupGoal, custom actions), parameter extraction from LLM JSON, action server invocation
- [ ] LLM-to-ROS code example shows: prompt construction → API call → response parsing → ROS action dispatch
- [ ] State tracking and replanning section covers: detecting plan failures (object not found, navigation timeout, grasp failure), maintaining execution context, triggering LLM replanning with updated state, preserving task history
- [ ] Safety constraints section covers: workspace bounds checking, collision prediction, forbidden action filtering, confidence thresholding for LLM outputs
- [ ] Safety validation code example shows validation layer rejecting unsafe plans
- [ ] Complete LLM-to-action pipeline using GPT-4 with Python code
- [ ] Open-source alternatives section explains: Llama-3-70B, Mistral-8x7B, Qwen-2 for learners without API access
- [ ] Comparison table shows: GPT-4 vs Llama-3 vs Mistral (accuracy, latency, cost, deployment)
- [ ] Real-world example describes service robot using LLM to plan multi-step cleaning task
- [ ] "What You Learned" section lists 3-5 key takeaways
- [ ] At least 2 diagrams: LLM planning pipeline (Mermaid), state tracking flow (ASCII or Mermaid)
- [ ] Code examples use Python and JSON, properly commented and syntax-highlighted
- [ ] Word count: 3,500-5,500 words
- [ ] All links to GPT-4 API docs, Llama-3 resources are functional
- [ ] Content is mobile-responsive and accessible (WCAG 2.1 AA)

**Test Cases**:
1. **Given** a learner navigates to Chapter 2, **When** the page loads, **Then** frontmatter renders correctly in sidebar as "Cognitive Planning"
2. **Given** a learner reads task decomposition, **When** they view the example, **Then** they see "Clean the room" broken into subtasks with preconditions and success criteria
3. **Given** a learner wants prompt engineering guidance, **When** they read that section, **Then** they see robotics-specific system prompts, few-shot examples, and JSON schemas
4. **Given** a learner views LLM-to-ROS conversion, **When** they review the code, **Then** they see prompt construction, API call, JSON parsing, and ROS action invocation
5. **Given** a learner reads safety validation, **When** they view the validation logic, **Then** they see workspace bounds checking, collision prediction, and forbidden action filtering
6. **Given** a learner without OpenAI API, **When** they read alternatives section, **Then** they see Llama-3 and Mistral with deployment guidance

**Dependencies**: Task 2 completed (Chapter 1 provides voice input context)

**Estimated Effort**: 14-18 hours

---

### Task 4: Create Chapter 3 - Computer Vision for Object Recognition

**Description**: Write Chapter 3 covering vision foundation models (CLIP, SAM, Grounding DINO), object detection/segmentation, 6D pose estimation, visual grounding, ROS 2 integration, and inference optimization.

**Acceptance Criteria**:
- [ ] MDX file created at `docs/module-04-vision-language-action/03-computer-vision-object-recognition.mdx`
- [ ] Frontmatter includes: id, title ("Chapter 3: Computer Vision for Object Recognition"), sidebar_label, description, keywords
- [ ] Content includes story-like intro (1 paragraph) about vision-guided robot manipulation scenario
- [ ] Computer vision role section explains: how vision grounds language-based planning in physical world, complements voice and LLM planning
- [ ] Vision foundation models section covers:
  - CLIP: Contrastive Language-Image Pre-training, image-text matching, use cases
  - SAM: Segment Anything Model, instance segmentation, use cases
  - Grounding DINO: Open-vocabulary object detection, text-based detection, use cases
- [ ] Model comparison table shows: CLIP vs SAM vs Grounding DINO (purpose, inputs, outputs, performance)
- [ ] Object detection and segmentation section covers: bounding box detection, instance segmentation masks, confidence thresholding, non-maximum suppression, multi-object tracking
- [ ] 6D pose estimation section covers: rotation and translation estimation, coordinate frame transformations (camera → robot base), pose refinement algorithms, how pose informs grasp planning
- [ ] Visual grounding section shows: combining natural language queries ("the red cup on the left table") with vision models to locate objects in cluttered scenes, spatial reasoning
- [ ] ROS 2 integration section covers: vision node architecture (camera subscriber, model inference, detection publisher), message types (sensor_msgs/Image, vision_msgs/Detection2DArray, geometry_msgs/PoseStamped), TF frame management
- [ ] Inference optimization section covers: model conversion (PyTorch → TensorRT/ONNX), batch processing, FPS benchmarks (target ≥10 FPS), hardware acceleration on NVIDIA GPUs
- [ ] Complete vision-to-grasp pipeline code example: camera image → Grounding DINO detection → SAM segmentation → 6D pose estimation → publish grasp pose
- [ ] Lighter alternatives section mentions: MobileNet, YOLO for CPU-only or resource-constrained environments
- [ ] Real-world example describes humanoid robot using vision to identify and grasp household objects
- [ ] "What You Learned" section lists 3-5 key takeaways
- [ ] At least 2 diagrams: Vision pipeline (Mermaid), visual grounding process (ASCII or image)
- [ ] Code examples use Python, properly commented and syntax-highlighted
- [ ] Word count: 3,500-5,500 words
- [ ] All links to CLIP, SAM, Grounding DINO repos are functional
- [ ] Content is mobile-responsive and accessible (WCAG 2.1 AA)

**Test Cases**:
1. **Given** a learner navigates to Chapter 3, **When** the page loads, **Then** frontmatter renders correctly in sidebar as "Computer Vision"
2. **Given** a learner reads vision foundation models, **When** they view the comparison table, **Then** they see CLIP, SAM, Grounding DINO with clear purpose and use case distinctions
3. **Given** a learner wants to understand 6D pose estimation, **When** they read that section, **Then** they see rotation/translation explanation and camera-to-robot coordinate transformations
4. **Given** a learner views visual grounding examples, **When** they review the section, **Then** they see how language queries ("red cup on left") combine with vision to locate specific objects
5. **Given** a learner copies vision-to-grasp pipeline code, **When** they review the code, **Then** it shows camera subscription, detection, segmentation, pose estimation, and grasp pose publishing
6. **Given** a learner wants CPU alternatives, **When** they read optimization section, **Then** they see MobileNet and YOLO as lighter options

**Dependencies**: Task 3 completed (Chapter 2 provides LLM planning context)

**Estimated Effort**: 14-18 hours

---

### Task 5: Create Chapter 4 - Capstone Project: The Autonomous Humanoid

**Description**: Write Chapter 4 covering the capstone project: end-to-end VLA system integration with voice, LLM planning, vision, navigation, and manipulation in Isaac Sim.

**Acceptance Criteria**:
- [ ] MDX file created at `docs/module-04-vision-language-action/04-capstone-autonomous-humanoid.mdx`
- [ ] Frontmatter includes: id, title ("Chapter 4: Capstone - Autonomous Humanoid"), sidebar_label, description, keywords
- [ ] Content includes story-like intro (1 paragraph) about completing the VLA journey with capstone project
- [ ] Project overview section explains: capstone goals (integrate voice, planning, vision, navigation, manipulation), learning objectives, expected outcomes
- [ ] System architecture diagram shows comprehensive data flow: Microphone → Whisper → LLM Planner → Vision Module → SLAM (Isaac ROS) → Nav2 → Manipulation Controller → Robot Actuators
- [ ] Architecture diagram includes: component boundaries, ROS 2 topics/actions, message types, data flow arrows
- [ ] Step-by-step implementation guide covers:
  - (a) Environment setup: Isaac Sim installation, ROS 2 packages, Python dependencies (requirements.txt)
  - (b) Voice command node: Audio capture, Whisper integration, command parsing
  - (c) LLM planner integration: Prompt templates, API configuration, plan validation
  - (d) Vision pipeline setup: Camera subscriber, CLIP/SAM/Grounding DINO integration, detection publisher
  - (e) Navigation configuration: Nav2 params from Module 3, humanoid-specific costmap settings
  - (f) Manipulation controller: Grasp planning, arm control, force sensing
  - (g) System integration: Master launch file, node coordination, error handling
- [ ] Each implementation step includes: purpose, code snippets, configuration files, testing guidance
- [ ] Example scenario walkthrough: "Pick up the blue bottle and place it in the recycling bin"
- [ ] Scenario walkthrough shows detailed execution trace: voice input → transcription → LLM plan → object detection → navigation → grasp → navigation → place
- [ ] Each walkthrough step shows: inputs, processing, outputs, state transitions
- [ ] Testing and validation section covers:
  - Unit tests: Voice transcription accuracy, LLM plan validity (JSON schema), vision detection precision/recall
  - Integration tests: End-to-end pipeline with mock inputs, component communication
  - Scenario-based testing: Full capstone in Isaac Sim with success/failure metrics
- [ ] Troubleshooting section covers common failure modes:
  - Whisper low confidence: Background noise, accents → noise cancellation, model tuning
  - LLM hallucinations: Invalid actions, unsafe plans → validation layer, prompt refinement
  - Vision false positives: Misidentified objects → confidence thresholding, visual confirmation
  - Navigation timeout: Blocked paths, map errors → replanning, manual intervention
  - Grasp failures: Pose estimation errors, object slip → pose refinement, force control
- [ ] Each troubleshooting entry includes: symptom, diagnosis, solution
- [ ] Extensions and next steps section covers:
  - Multi-object manipulation sequences
  - Human-robot collaboration (shared workspace safety)
  - Learning from human feedback (RLHF for robotics)
  - Sim-to-real transfer techniques
  - Advanced research directions
- [ ] Module 4 completion summary congratulates learner on completing all 4 modules
- [ ] Summary highlights skills gained: ROS 2 (Module 1), Digital Twins (Module 2), Isaac perception (Module 3), VLA systems (Module 4)
- [ ] Career pathways section suggests: embodied AI research, robotics engineering, VLA system development, humanoid robotics
- [ ] Links to community resources, research papers, open-source VLA projects
- [ ] "What You Learned" section lists 5-7 key takeaways (capstone is comprehensive)
- [ ] At least 3 diagrams: System architecture (Mermaid), scenario flow (ASCII or Mermaid), component integration (Mermaid)
- [ ] Code examples use Python, YAML, Bash, properly commented and syntax-highlighted
- [ ] Word count: 4,000-6,000 words (longest chapter due to capstone complexity)
- [ ] All links to Isaac Sim docs, ROS 2 packages, external resources are functional
- [ ] Content is mobile-responsive and accessible (WCAG 2.1 AA)

**Test Cases**:
1. **Given** a learner navigates to Chapter 4, **When** the page loads, **Then** frontmatter renders correctly in sidebar as "Capstone Project"
2. **Given** a learner views system architecture, **When** the diagram renders, **Then** it shows complete pipeline from microphone to robot actuators with all components and data flow
3. **Given** a learner follows implementation guide, **When** they read each step, **Then** they see purpose, code snippets, configuration, and testing guidance
4. **Given** a learner reviews scenario walkthrough, **When** they read "pick up blue bottle" trace, **Then** they see detailed execution at each step (voice → plan → vision → navigate → grasp)
5. **Given** a learner encounters Whisper low confidence error, **When** they consult troubleshooting section, **Then** they see symptom, diagnosis, and solution (noise cancellation, model tuning)
6. **Given** a learner completes Chapter 4, **When** they reach the end, **Then** they see congratulations message, skills summary, career pathways, and community links

**Dependencies**: Tasks 2-3-4 completed (all VLA components covered in prior chapters)

**Estimated Effort**: 18-24 hours (most complex chapter, capstone integration)

---

### Task 6: Create VLA Architecture Diagrams

**Description**: Design and create high-quality Mermaid diagrams for VLA architecture, voice pipeline, LLM planning flow, vision pipeline, and capstone system integration.

**Acceptance Criteria**:
- [ ] VLA architecture diagram (for Module index and Chapter 1) shows: Voice → Speech Recognition → Language Understanding → Action Planning → Execution
- [ ] Voice pipeline diagram (for Chapter 1) shows: Microphone → Audio Capture → Whisper STT → Command Parsing → ROS Action Client
- [ ] LLM planning flow diagram (for Chapter 2) shows: Task Input → Prompt Construction → LLM API → JSON Parsing → Validation → ROS Actions
- [ ] State tracking diagram (for Chapter 2) shows: Plan Execution → Failure Detection → Context Update → LLM Replan → Resume Execution
- [ ] Vision pipeline diagram (for Chapter 3) shows: Camera → Image Processing → Grounding DINO → SAM → 6D Pose → Grasp Publisher
- [ ] Capstone system architecture diagram (for Chapter 4) shows all components: Voice, LLM, Vision, SLAM, Nav2, Manipulation with ROS topics/actions labeled
- [ ] Scenario flow diagram (for Chapter 4) shows: Voice Command → LLM Plan → Detect Object → Navigate → Grasp → Navigate → Place with state transitions
- [ ] All diagrams use Mermaid syntax (preferred) or high-quality ASCII art
- [ ] All diagrams render correctly in both dark and light modes
- [ ] All diagrams are responsive (no horizontal scroll on mobile)
- [ ] All diagrams include alt text for accessibility
- [ ] Diagrams are visually clear with proper spacing, labels, and arrows

**Test Cases**:
1. **Given** a learner views VLA architecture diagram in Chapter 1, **When** the page loads, **Then** the diagram clearly shows Voice → Speech → Language → Action → Execution flow
2. **Given** a learner views LLM planning flow in Chapter 2, **When** the diagram renders, **Then** it shows Task → Prompt → API → Parse → Validate → Execute
3. **Given** a learner toggles dark mode, **When** viewing any Mermaid diagram, **Then** colors auto-adjust for readability
4. **Given** a learner views capstone architecture on mobile, **When** the diagram renders, **Then** it remains legible without horizontal scrolling
5. **Given** a screen reader user encounters diagram, **When** they navigate to it, **Then** alt text provides meaningful description

**Dependencies**: None (can be done in parallel with chapter writing, then embedded)

**Estimated Effort**: 6-8 hours

---

### Task 7: Create Code Examples for Voice, LLM, and Vision Pipelines

**Description**: Write, test, and document Python code examples for Whisper + ROS 2 integration, LLM planning with GPT-4/Llama-3, and vision pipeline with CLIP/SAM/Grounding DINO.

**Acceptance Criteria**:
- [ ] Whisper + ROS 2 voice pipeline example (`voice_command_node.py`):
  - Audio capture using audio_common or sounddevice
  - Whisper transcription (API or local model)
  - Command parsing with regex or spaCy
  - ROS topic publisher (std_msgs/String or custom msg)
  - Error handling for low confidence, timeout
  - Well-commented with docstrings
- [ ] LLM planning pipeline example (`llm_planner_node.py`):
  - Prompt template for robotics tasks
  - GPT-4 API call with error handling
  - Alternative: Llama-3 via Hugging Face Transformers
  - JSON schema validation for plan outputs
  - ROS action client for plan execution
  - Safety constraint checking
  - Well-commented with docstrings
- [ ] Vision pipeline example (`vision_detection_node.py`):
  - Camera image subscriber (sensor_msgs/Image)
  - Grounding DINO inference for object detection
  - SAM inference for segmentation
  - 6D pose estimation (simplified or placeholder)
  - Detection publisher (vision_msgs/Detection2DArray)
  - TensorRT optimization notes
  - Well-commented with docstrings
- [ ] All code examples use Python 3.8+ with type hints
- [ ] All code examples include requirements.txt or dependency list
- [ ] All code examples are syntax-checked (no errors)
- [ ] All code examples include usage instructions (how to run)
- [ ] Code examples are conceptually accurate even if not production-ready
- [ ] Code examples avoid hardcoded API keys (use environment variables)

**Test Cases**:
1. **Given** a learner copies voice pipeline code, **When** they review it, **Then** they see audio capture, Whisper call, parsing, and ROS publishing
2. **Given** a learner runs syntax check on LLM planner code, **When** they execute `python -m py_compile llm_planner_node.py`, **Then** no syntax errors are reported
3. **Given** a learner reads vision pipeline code, **When** they review the comments, **Then** each major section (image sub, inference, publishing) has clear docstring
4. **Given** a learner without OpenAI API, **When** they view LLM example, **Then** they see Llama-3 alternative code path
5. **Given** a learner wants to understand dependencies, **When** they check requirements.txt, **Then** they see whisper, openai, transformers, opencv-python, ros2 packages

**Dependencies**: None (can be done in parallel with chapter writing)

**Estimated Effort**: 10-12 hours

---

### Task 8: Update Module 4 Sidebar Navigation

**Description**: Update `sidebars.js` to include all Module 4 chapters in the correct order.

**Acceptance Criteria**:
- [ ] Module 4 category added to `sidebars.js` with label "Module 4: Vision-Language-Action"
- [ ] Module 4 items array includes in order:
  1. `module-04-vision-language-action/index`
  2. `module-04-vision-language-action/01-voice-to-action-whisper`
  3. `module-04-vision-language-action/02-cognitive-planning-llms`
  4. `module-04-vision-language-action/03-computer-vision-object-recognition`
  5. `module-04-vision-language-action/04-capstone-autonomous-humanoid`
- [ ] Sidebar renders correctly on desktop with Module 4 section collapsible
- [ ] Clicking each chapter link navigates to the correct page
- [ ] Active chapter is highlighted in sidebar when viewing that page
- [ ] Sidebar is mobile-responsive (hamburger menu on <768px)
- [ ] Module 4 appears after Module 3 in sidebar order

**Test Cases**:
1. **Given** a learner is on desktop, **When** they view the sidebar, **Then** they see "Module 4: Vision-Language-Action" category with all 4 chapters + index listed
2. **Given** a learner clicks on Chapter 3 in sidebar, **When** the page loads, **Then** Chapter 3 is highlighted as active in the sidebar
3. **Given** a learner is on mobile (<768px), **When** they tap the hamburger menu, **Then** the sidebar drawer opens showing Module 4 navigation
4. **Given** a learner clicks on module index, **When** the page loads, **Then** they see the Module 4 overview/introduction page
5. **Given** a learner expands Module 4 in sidebar, **When** the section opens, **Then** chapters appear in correct order (index, Ch1, Ch2, Ch3, Ch4)

**Dependencies**: Tasks 1-5 completed (all chapter files must exist)

**Estimated Effort**: 30 minutes

---

### Task 9: Update Homepage Module Overview for Module 4

**Description**: Update the homepage to include Module 4 in the module overview section.

**Acceptance Criteria**:
- [ ] Homepage (`src/pages/index.js` or equivalent) updated to include Module 4 card/section
- [ ] Module 4 title: "Module 4: Vision-Language-Action (VLA)"
- [ ] Module 4 description: "The convergence of LLMs and robotics. Learn voice-to-action with Whisper, cognitive planning with LLMs, computer vision for object recognition, and complete an autonomous humanoid capstone project."
- [ ] Module 4 shows chapter count: 4 chapters
- [ ] Module 4 includes CTA button or link to Module 4 index or Chapter 1
- [ ] Module 4 card/section is visually consistent with Modules 1-3 presentation
- [ ] Responsive layout maintains proper grid/flex on all screen sizes
- [ ] Module 4 appears as the 4th module in sequence (after Module 3)

**Test Cases**:
1. **Given** a learner visits the homepage, **When** they scroll to module overview, **Then** they see Module 4 listed after Modules 1-3
2. **Given** a learner reads Module 4 description, **When** they review the text, **Then** it accurately describes VLA, voice, LLM planning, vision, and capstone focus
3. **Given** a learner clicks Module 4 CTA, **When** the link is clicked, **Then** they navigate to Module 4 index or Chapter 1
4. **Given** a learner views homepage on mobile, **When** the module cards render, **Then** Module 4 card is properly sized and readable
5. **Given** a learner views homepage on desktop, **When** modules are displayed in grid, **Then** Module 4 maintains visual consistency with other modules

**Dependencies**: Task 1 completed (Module 4 index must exist for link target)

**Estimated Effort**: 1 hour

---

### Task 10: Update Search Indexing for Module 4 Content

**Description**: Ensure all Module 4 content is properly indexed by Docusaurus search (built-in or Algolia).

**Acceptance Criteria**:
- [ ] All Module 4 MDX files include proper frontmatter (title, description, keywords)
- [ ] Search configuration (`docusaurus.config.js`) includes Module 4 docs path if using custom indexing
- [ ] Build process generates search index including Module 4 content
- [ ] Searching for "VLA", "Whisper", "LLM planning", "computer vision", "capstone" returns relevant Module 4 results
- [ ] Search results distinguish between modules (show "Module 4" context)
- [ ] Search results show chapter titles and context snippets
- [ ] Search is accessible via keyboard (keyboard shortcut working)

**Test Cases**:
1. **Given** a learner searches for "Whisper ROS integration", **When** results appear, **Then** Chapter 1 (Voice-to-Action) is included with relevant snippet
2. **Given** a learner searches for "LLM task decomposition", **When** results appear, **Then** Chapter 2 (Cognitive Planning) is included with context showing it's from Module 4
3. **Given** a learner searches for "CLIP SAM Grounding DINO", **When** results appear, **Then** Chapter 3 (Computer Vision) is included
4. **Given** a learner searches for "capstone autonomous humanoid", **When** results appear, **Then** Chapter 4 and Module 4 index are included
5. **Given** a learner uses keyboard shortcut (Ctrl+K or Cmd+K), **When** search modal opens, **Then** they can type and search Module 4 content

**Dependencies**: Tasks 1-5 completed (all chapter content must exist)

**Estimated Effort**: 1-2 hours

---

### Task 11: Create Module 4 Performance and Accessibility Tests

**Description**: Test Module 4 pages for performance (Lighthouse), accessibility (WCAG 2.1 AA), and mobile responsiveness.

**Acceptance Criteria**:
- [ ] All Module 4 pages (index + 4 chapters) achieve Lighthouse Performance score ≥ 90 on desktop
- [ ] All Module 4 pages achieve Lighthouse Performance score ≥ 85 on mobile (acceptable slightly lower due to slower network simulation)
- [ ] All Module 4 pages load in under 3 seconds on simulated 3G connection
- [ ] All Module 4 pages pass WCAG 2.1 AA accessibility checks (axe DevTools or WAVE)
- [ ] All images and diagrams include meaningful alt text
- [ ] All code examples are keyboard-navigable (tab to code block, copy button accessible)
- [ ] Color contrast ratios pass AA standards in both light and dark modes
- [ ] All interactive elements (links, buttons) have proper focus indicators
- [ ] All Module 4 pages are fully responsive (320px to 2560px width tested)
- [ ] Mobile navigation (hamburger menu, sidebar drawer) works on Module 4 pages
- [ ] No horizontal scroll on any screen size
- [ ] All headings use proper hierarchy (h1 → h2 → h3, no skipping levels)

**Test Cases**:
1. **Given** Chapter 1 page, **When** Lighthouse audit runs on desktop, **Then** Performance score ≥ 90, Accessibility score 100
2. **Given** Chapter 4 (capstone) page, **When** Lighthouse audit runs on mobile, **Then** Performance score ≥ 85, load time < 3s on 3G
3. **Given** any Module 4 page in dark mode, **When** axe DevTools runs, **Then** 0 critical accessibility violations
4. **Given** a keyboard user on Chapter 2, **When** they tab through the page, **Then** all links, code blocks, and navigation elements are focusable with visible focus ring
5. **Given** a mobile user (375px width), **When** they view Chapter 3, **Then** diagrams scale appropriately, no horizontal scroll, all text readable
6. **Given** a screen reader user on Module 4 index, **When** they navigate the page, **Then** all diagrams have alt text, headings are properly structured

**Dependencies**: Tasks 1-5 completed (all pages must be built)

**Estimated Effort**: 4-6 hours

---

### Task 12: Conduct Technical Accuracy Review for Module 4

**Description**: Subject matter expert (SME) review of Module 4 content for technical accuracy in VLA, Whisper, LLMs, vision models, and robotics integration.

**Acceptance Criteria**:
- [ ] SME reviews all 4 chapters for technical accuracy
- [ ] Whisper architecture and integration patterns verified as accurate
- [ ] LLM planning concepts, prompt engineering, and safety validation reviewed
- [ ] Vision foundation models (CLIP, SAM, Grounding DINO) descriptions confirmed accurate
- [ ] ROS 2 integration patterns (topics, actions, message types) verified
- [ ] Capstone system architecture reviewed for feasibility and best practices
- [ ] Code examples reviewed for correctness (syntax, logic, ROS 2 patterns)
- [ ] Any inaccuracies identified are documented with corrections
- [ ] All corrections are applied to MDX files
- [ ] SME signs off on technical accuracy

**Test Cases**:
1. **Given** SME reviews Chapter 1 Whisper section, **When** they check model sizes and accuracy claims, **Then** information matches official Whisper documentation
2. **Given** SME reviews Chapter 2 LLM planning code, **When** they check prompt construction and validation, **Then** patterns follow robotics LLM best practices
3. **Given** SME reviews Chapter 3 vision models, **When** they check CLIP/SAM/Grounding DINO descriptions, **Then** model capabilities and limitations are accurately represented
4. **Given** SME reviews Chapter 4 capstone architecture, **When** they check ROS 2 integration, **Then** topic names, message types, and data flow are feasible and follow ROS 2 conventions
5. **Given** SME identifies inaccuracy in 6D pose estimation section, **When** they document correction, **Then** content is updated and SME re-reviews

**Dependencies**: Tasks 1-7 completed (all content and code must exist)

**Estimated Effort**: 8-12 hours (SME time)

---

### Task 13: Conduct Copy Editing and Proofreading for Module 4

**Description**: Copy editing pass for Module 4 content to ensure clarity, grammar, tone consistency, and book-like prose quality.

**Acceptance Criteria**:
- [ ] All 4 chapters + index reviewed for grammar, spelling, punctuation
- [ ] Tone is consistent across chapters: book-like, engaging, educational (not dry documentation)
- [ ] Technical terms are clearly defined on first use
- [ ] Sentence structure is varied and readable (not repetitive)
- [ ] Transitions between sections are smooth
- [ ] Story-like intros are compelling and connect to real-world scenarios
- [ ] "What You Learned" sections are concise and accurate
- [ ] No jargon without explanation (or jargon linked to glossary)
- [ ] Consistent terminology used throughout (e.g., "LLM" not "Large Language Model" after first use)
- [ ] All edits tracked and applied to MDX files
- [ ] Copy editor signs off on quality

**Test Cases**:
1. **Given** copy editor reviews Chapter 1 intro, **When** they read the story-like opening, **Then** it is engaging, grammatically correct, and sets context for VLA
2. **Given** copy editor checks Chapter 2 for technical terms, **When** they encounter "few-shot prompting", **Then** it is defined or explained on first use
3. **Given** copy editor reviews Chapter 3 for tone, **When** they read the content, **Then** it maintains book-like prose (not dry technical reference)
4. **Given** copy editor checks Chapter 4 transitions, **When** they read section-to-section flow, **Then** transitions are smooth and logical
5. **Given** copy editor reviews all "What You Learned" sections, **When** they check clarity, **Then** each takeaway is concise (1 sentence) and captures key learning

**Dependencies**: Tasks 1-7 completed, Task 12 (SME review) completed

**Estimated Effort**: 6-8 hours

---

### Task 14: Create Module 4 Completion Documentation

**Description**: Create PHR (Prompt History Record) for Module 4 implementation and update project documentation.

**Acceptance Criteria**:
- [ ] PHR created in `history/prompts/general/` or feature-specific folder
- [ ] PHR documents: prompt (user request), response (module created), outcome (4 chapters, success criteria met), files (all MDX files listed), tests (validation performed)
- [ ] PHR includes links to spec, plan, and tasks documents
- [ ] Project README updated to mention Module 4 if applicable
- [ ] Any architectural decisions (ADRs) for Module 4 are documented (if applicable)
- [ ] Change log or release notes updated with Module 4 addition

**Test Cases**:
1. **Given** Module 4 is complete, **When** PHR is reviewed, **Then** it accurately documents the implementation process and outcomes
2. **Given** README is updated, **When** a new contributor reads it, **Then** Module 4 is listed alongside Modules 1-3 with brief description
3. **Given** ADRs exist for Whisper, GPT-4, vision model choices, **When** reviewed, **Then** they document rationale, alternatives, and consequences

**Dependencies**: All prior tasks completed

**Estimated Effort**: 2-3 hours

---

## Summary

**Total Tasks**: 14
**Estimated Total Effort**: 110-145 hours (roughly 3-4 weeks for one developer, or 1.5-2 weeks for two developers working in parallel)

**Critical Path**:
1. Task 1 (Module Index) → Task 2 (Chapter 1) → Task 3 (Chapter 2) → Task 4 (Chapter 3) → Task 5 (Chapter 4) → Task 8 (Sidebar) → Task 11 (Performance/Accessibility) → Task 12 (SME Review) → Task 13 (Copy Editing) → Task 14 (Completion Docs)

**Parallel Work Opportunities**:
- Task 6 (Diagrams) can be done in parallel with Tasks 2-5 (Chapter writing)
- Task 7 (Code Examples) can be done in parallel with Tasks 2-5
- Task 9 (Homepage) can be done after Task 1 (independent of chapters 1-4)
- Task 10 (Search) can be done after Tasks 1-5 are complete

**Quality Gates**:
- After Task 5: All content written, ready for integration
- After Task 11: Performance and accessibility validated
- After Task 12: Technical accuracy confirmed
- After Task 13: Content quality and tone validated
- After Task 14: Module 4 complete and documented
