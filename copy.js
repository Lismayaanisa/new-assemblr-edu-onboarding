/* User-facing copy for the onboarding journey.
   Source data (roles, motivations, welcome slides, flows, JTBD) is in data.js.
   This file adds what the onboarding needs on top: the checklist wording, the
   outcome after each job, and the coach-mark text for every flow step. */
(function () {
  const ROLES = {
    student: { label: "Student", phrase: "a student", accent: "#b61855" },
    educator: { label: "Educator", phrase: "an educator", accent: "#e8af1b" },
    parent: { label: "Parent", phrase: "a parent", accent: "#17936a" },
    university: { label: "University student", phrase: "a university student", accent: "#3792f2" },
    lecturer: { label: "Lecturer", phrase: "a lecturer", accent: "#12a9e6" },
    other: { label: "Other", phrase: "a creator", accent: "#2b398f" }
  };

  /* What the user is making, per motivation (index matches data.js). */
  const NOUN = {
    student: ["assignment", "assessment", "competition entry", "first project", "project", "project"],
    educator: ["lesson", "lesson", "assessment", "lesson", "lesson", "lesson"],
    parent: ["child's assignment", "project", "project", "project", "first project", "project"],
    university: ["assignment", "research", "assessment", "competition entry", "first project", "project"],
    lecturer: ["research", "training project", "class project", "program", "project", "project"],
    other: ["3D/AR experience", "learning content", "project", "community project", "first project", "personal project", "project"]
  };

  /* Who will see the work. */
  const AUDIENCE = {
    student: ["your teacher", "your teacher", "the judges", "your friends", "your friends", "your friends"],
    educator: ["your students", "your students", "the assessors", "your students", "your students", "your students"],
    parent: ["your child's teacher", "your family", "your family", "your family", "your family", "your family"],
    university: ["your lecturer", "your examiners", "your lecturer", "the judges", "your friends", "your audience"],
    lecturer: ["your colleagues", "the educators you train", "your students", "your students", "your colleagues", "your audience"],
    other: ["your audience", "your learners", "your clients", "your community", "your friends", "your friends", "your audience"]
  };

  const CHECKLIST_TITLE = {
    student: "Explore quick tour",
    educator: "Get your class ready",
    parent: "Your first steps together",
    university: "Explore quick tour",
    lecturer: "Explore quick tour",
    other: "Explore quick tour"
  };

  /* Checklist jobs. They describe what the user gets, in their words, and name
     the feature only as the way to get there. Key: role:motivation:slide.
     Slides 2 and 3 fall back to role:*:slide. */
  const JOBS = {
    "student:0:0": ["Show your teacher the idea in 3D", "Build your class project in the Editor, then view it in AR."],
    "student:0:1": ["Make a game your friends will want to play", "Use Visual Coding so objects move, react, and score."],
    "student:0:2": ["Build the project with your classmates", "Use Collaborate so everyone edits the same project at once."],
    "student:1:0": ["Show your teacher what you understand", "Build your assessment in the Editor, then view it in 3D and AR."],
    "student:1:1": ["Turn your assessment into a game", "Use Visual Coding so objects move, react, and score."],
    "student:1:2": ["Build the assessment with your classmates", "Use Collaborate so you edit the same project together."],
    "student:2:0": ["Give the judges something they can walk around", "Build your entry in the Editor, then view it in AR."],
    "student:2:1": ["Make a game the judges can play", "Use Visual Coding so objects move, react, and score."],
    "student:2:2": ["Build your entry with your team", "Use Collaborate so you edit the same project together."],
    "student:3:0": ["Make your first project and see it in AR", "Build it in the Editor, one step at a time."],
    "student:3:1": ["Make your first game with moving objects", "Use Visual Coding so objects move, react, and score."],
    "student:3:2": ["Build your first project with a friend", "Use Collaborate so you edit the same project together."],
    "student:4:0": ["See a real topic come alive in your room", "Open a ready-to-use project in Edu Kits, then view it in AR."],
    "student:4:1": ["Make a game you can play right away", "Use Visual Coding so objects move, react, and score."],
    "student:4:2": ["Build something new with a friend", "Use Collaborate so you edit the same project together."],
    "student:5:0": ["Turn your idea into something you can hold", "Build it in the Editor, then view it in AR."],
    "student:5:1": ["Make a game from your own idea", "Use Visual Coding so objects move, react, and score."],
    "student:5:2": ["Build your idea with a friend", "Use Collaborate so you edit the same project together."],
    "student:*:1": ["Make a game your friends will want to play", "Use Visual Coding so objects move, react, and score."],
    "student:*:2": ["Build the project with your classmates", "Use Collaborate so everyone edits the same project at once."],

    "educator:0:0": ["Present today's lesson so students can explore it", "Open Topic and present learning slides for your subject."],
    "educator:0:1": ["Add a ready-made model to today's lesson", "Find a project for your subject in Edu Kits and open it in class."],
    "educator:1:0": ["Help students see what they're learning", "Turn your lesson idea into 3D in the Editor, using ready-to-use objects."],
    "educator:1:1": ["Put your lesson in every student's hands", "Show it on screen, or share a link students open on their phones."],
    "educator:2:0": ["Give students a task they can explore", "Build the assessment in the Editor with ready-to-use objects."],
    "educator:2:1": ["Let assessors open the work on their phones", "Show it on screen, or share a link they open in 3D and AR."],
    "educator:3:0": ["Show students 3D and AR in a few minutes", "Start with a ready-to-use project in Edu Kits. No setup needed."],
    "educator:3:1": ["Let every student explore it on their phone", "Show it on screen, or share a link students open on their phones."],
    "educator:4:0": ["Learn the Editor by building one lesson", "Each step shows you one part of the Editor, at your own pace."],
    "educator:4:1": ["Hand the lesson to every student", "Show it on screen, or share a link students open on their phones."],
    "educator:5:0": ["Build a 3D lesson for the subject you teach", "Start with ready-to-use objects in the Editor and make them yours."],
    "educator:5:1": ["Share the lesson so students can explore it", "Show it on screen, or share a link students open on their phones."],
    "educator:*:2": ["Keep your class's work in one place", "Use Class to share materials, give assignments, and see every student's project."],

    "parent:0:0": ["Help your child show their assignment in 3D", "Build it together in the Editor, then view it in AR at home."],
    "parent:0:1": ["Make a game together, one block at a time", "Use Visual Coding so objects move, react, and score."],
    "parent:0:2": ["Turn your child's drawing into 3D", "Use AI-3D Generation to turn a photo of their drawing into 3D."],
    "parent:1:0": ["Explore a hard topic together in 3D", "Open a ready-to-use project in Edu Kits and view it in AR."],
    "parent:1:1": ["Make a hard topic feel like play", "Use Visual Coding so objects move, react, and score."],
    "parent:1:2": ["Turn a picture of the topic into 3D", "Use AI-3D Generation to turn a picture or a few words into 3D."],
    "parent:2:0": ["Make learning time something you can play with", "Place 3D objects in the Editor together, then view them in AR."],
    "parent:2:1": ["Build a game you play together", "Use Visual Coding so objects move, react, and score."],
    "parent:2:2": ["Turn a drawing into something you can spin", "Use AI-3D Generation to turn a picture or a few words into 3D."],
    "parent:3:0": ["Help your child finish their first creation", "They build in the Editor while you guide, then you view it in AR."],
    "parent:3:1": ["Help your child make their first game", "Use Visual Coding so objects move, react, and score."],
    "parent:3:2": ["Help your child turn a drawing into 3D", "Use AI-3D Generation to turn a photo of their drawing into 3D."],
    "parent:4:0": ["Discover 3D and AR side by side", "Build your first project in the Editor, then view it in AR."],
    "parent:4:1": ["Make your first game together", "Use Visual Coding so objects move, react, and score."],
    "parent:4:2": ["Turn a picture into 3D together", "Use AI-3D Generation to turn a picture or a few words into 3D."],
    "parent:5:0": ["Make something together you can hold", "Build a project with your child in the Editor, then view it in AR."],
    "parent:5:1": ["Make a game from an idea you share", "Use Visual Coding so objects move, react, and score."],
    "parent:5:2": ["Turn your idea into a 3D object together", "Use AI-3D Generation to turn a picture or a few words into 3D."],
    "parent:*:1": ["Make a game together, one block at a time", "Use Visual Coding so objects move, react, and score."],
    "parent:*:2": ["Turn your child's drawing into 3D", "Use AI-3D Generation to turn a photo of their drawing into 3D."],

    "university:0:0": ["Show your assignment on a real page", "Build it in the Editor, then place it on a printed Custom Marker."],
    "university:0:1": ["Make your project respond when people use it", "Use Visual Coding so objects move, react, and respond."],
    "university:0:2": ["Create a 3D object your assignment needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:1:0": ["Let examiners see your research on the page", "Build it in the Editor, then show it on a printed Custom Marker."],
    "university:1:1": ["Let examiners try a project that responds", "Use Visual Coding so objects move, react, and respond."],
    "university:1:2": ["Create the 3D object your research needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:2:0": ["Make your assessment easy to walk through", "Build it in the Editor, then show it on a Custom Marker."],
    "university:2:1": ["Make the assessment respond when someone uses it", "Use Visual Coding so objects move, react, and respond."],
    "university:2:2": ["Create a 3D object for your assessment", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:3:0": ["Give the judges something they can hold", "Build your entry in the Editor, then show it on a Custom Marker."],
    "university:3:1": ["Give the judges a project they can play with", "Use Visual Coding so objects move, react, and respond."],
    "university:3:2": ["Create a 3D object the judges have not seen", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:4:0": ["Make your first project appear on a real page", "Learn the Editor, then see your work on a Custom Marker."],
    "university:4:1": ["Make your first project move and respond", "Use Visual Coding so objects move, react, and respond."],
    "university:4:2": ["Create your first 3D object from a picture", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:5:0": ["Bring your idea off the screen and onto the page", "Build it in the Editor, then show it on a Custom Marker."],
    "university:5:1": ["Make your idea respond when people use it", "Use Visual Coding so objects move, react, and respond."],
    "university:5:2": ["Create the 3D object your idea needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "university:*:1": ["Make your project respond when people use it", "Use Visual Coding so objects move, react, and respond."],
    "university:*:2": ["Create a 3D object that does not exist yet", "Use AI-3D Generation to turn an image or text into 3D."],

    "lecturer:0:0": ["Let colleagues turn your research in 3D", "Build a model in the Editor they can turn, zoom, and view in AR."],
    "lecturer:0:1": ["Make your research appear on a printed page", "Connect the 3D to a printed image with Custom Marker."],
    "lecturer:0:2": ["Create the 3D model your research needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:1:0": ["Build a sample your trainees can follow", "Learn the Editor first, then walk others through the same steps."],
    "lecturer:1:1": ["Show trainees how a print comes alive", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:1:2": ["Show trainees how to make a 3D object", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:2:0": ["Show students what 3D and AR can do", "Build a short project in the Editor, then let them view it in AR."],
    "lecturer:2:1": ["Let students see 3D appear on a printed page", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:2:2": ["Show students a 3D object made from a picture", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:3:0": ["Prototype one activity you can reuse", "Build it once in the Editor, then use it across your courses."],
    "lecturer:3:1": ["Make a printed page part of the activity", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:3:2": ["Create a 3D object you can reuse in the program", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:4:0": ["See what you can make in a few minutes", "Build a short project in the Editor and view it in AR."],
    "lecturer:4:1": ["See a printed page come alive", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:4:2": ["See a picture become a 3D object", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:5:0": ["Turn your idea into a project people can view", "Build it in the Editor, then view it in AR."],
    "lecturer:5:1": ["Make your idea appear on a printed page", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:5:2": ["Create a 3D object from your idea", "Use AI-3D Generation to turn an image or text into 3D."],
    "lecturer:*:1": ["Make a printed page come alive", "Connect 3D and AR to a printed image with Custom Marker."],
    "lecturer:*:2": ["Create the 3D object you need", "Use AI-3D Generation to turn an image or text into 3D."],

    "other:0:0": ["Let people try your experience on their phones", "Build it in the Editor, then view it in AR."],
    "other:0:1": ["Make your experience appear on a real object", "Show 3D and AR on a print or product with Custom Marker."],
    "other:0:2": ["Create a 3D object from a picture or a few words", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:1:0": ["Turn your lesson into something people can explore", "Build it in the Editor with ready-to-use objects, then view it in AR."],
    "other:1:1": ["Make the lesson appear on a printed page", "Show 3D and AR on a print or product with Custom Marker."],
    "other:1:2": ["Create a 3D object your lesson needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:2:0": ["Build a project you can show in the room", "Start in the Editor with ready-to-use 3D objects."],
    "other:2:1": ["Make your work appear on a print or product", "Show 3D and AR on a print or product with Custom Marker."],
    "other:2:2": ["Create a 3D object the project needs", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:3:0": ["Give your community something they can open", "Build it in the Editor, then share one link everyone can open."],
    "other:3:1": ["Let your community see it on a real object", "Show 3D and AR on a print or product with Custom Marker."],
    "other:3:2": ["Create a 3D object your community can explore", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:4:0": ["Learn by making one project", "Each step shows you one part of the Editor."],
    "other:4:1": ["Learn by making a print come alive", "Show 3D and AR on a print or product with Custom Marker."],
    "other:4:2": ["Learn by turning a picture into 3D", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:5:0": ["Bring your own project into the room", "Build it in the Editor, then view it in AR."],
    "other:5:1": ["Make your project appear on something you can hold", "Show 3D and AR on a print or product with Custom Marker."],
    "other:5:2": ["Create a 3D object for your own project", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:6:0": ["Turn your idea into a project you can view", "Build it in the Editor, then view it in AR."],
    "other:6:1": ["Make your idea appear on a real object", "Show 3D and AR on a print or product with Custom Marker."],
    "other:6:2": ["Create a 3D object from your idea", "Use AI-3D Generation to turn an image or text into 3D."],
    "other:*:1": ["Make a print or product come alive", "Show 3D and AR on a print or product with Custom Marker."],
    "other:*:2": ["Create a 3D object from a picture or a few words", "Use AI-3D Generation to turn an image or text into 3D."]
  };

  /* What the user can do once a job is finished (the JTBD, said to them). */
  const DONE = {
    "Editor": ["Your project is ready to explore", (c) => `You built a 3D scene, published it, and viewed it in 3D and AR. ${cap(c.audience)} can open it the same way.`],
    "Visual Coding": ["Your game is ready to play", () => "You made objects move, react, and score, then played your game in 3D."],
    "Collaborate": ["You're building together", () => "Your classmate joined your project. Invite more people the same way, and everyone can publish and share."],
    "Edu Kits": ["You brought 3D/AR to life", () => "You found a ready-to-use project for your subject and viewed it in 3D and AR."],
    "Topic": ["Your lesson is ready to present", () => "You opened learning slides for your subject and presented them with 3D."],
    "Class": ["Your class is ready", () => "You set up a class, gave an assignment, and can see every student's project in one place."],
    "Publish and share (3D/AR viewer)": ["Everyone can explore your project", (c) => `You presented your project, and ${c.audience} can view it in 3D and AR on their phones.`],
    "AI-3D Generation": ["You created your own 3D object", () => "You turned an idea into a 3D object, added it to a project, and shared it."],
    "Editor + Custom Marker": ["Your project is on the page", () => "You built a 3D scene and made it appear on a printed Custom Marker. Anyone who scans it sees the same thing."],
    "Custom Marker": ["Your print just came alive", () => "You connected 3D/AR to a printed image, so it appears whenever someone scans it."]
  };

  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /* Coach-mark copy for each flow step. c = { role, noun, audience, together }. */
  const STEP = {
    "Create project": (c) => ({
      title: `Start your ${c.noun}`,
      body: c.together ? "Sit with your child and tap Create project. You'll open a blank scene to build in together." : "Every project starts with a blank scene. Tap Create project to open the Editor.",
      hint: "Tap Create project"
    }),
    "3D library": () => ({ title: "Find a 3D object", body: "The 3D library has ready-to-use objects for many subjects. Tap 3D library to choose one.", hint: "Tap 3D library" }),
    "Drop 3D object": (c) => ({
      title: "Place it in your scene",
      body: c.together ? "Let your child drag the planet onto the canvas. You can move, turn, and resize it anytime." : "Drag the planet onto the canvas. You can move, turn, and resize it anytime.",
      hint: "Drag the planet onto the canvas, or tap it"
    }),
    "Add garnish": (c) => ({ title: "Add a label that explains it", body: `A short title helps ${c.audience} understand what they're looking at. Tap Text, type a label, then tap Add.`, hint: "Type a label, then tap Add", open: "Tap Text" }),
    "Publish": (c) => ({ title: `Publish your ${c.noun}`, body: "Publishing saves a version others can open. Give it a name you'll recognize, then tap Publish.", hint: "Check the name, then tap Publish", open: "Tap Publish" }),
    "Publish the project": (c) => ({ title: `Publish your ${c.noun}`, body: "Publishing saves a version others can open. Give it a name you'll recognize, then tap Publish.", hint: "Check the name, then tap Publish", open: "Tap Publish" }),
    "Share": (c) => ({ title: `Share it with ${c.audience}`, body: "Tap Copy link, then send it however you like: chat, email, or your class group.", hint: "Tap Copy link" }),
    "Share the project": (c) => ({ title: `Share it with ${c.audience}`, body: "Tap Copy link, then send it however you like: chat, email, or a group.", hint: "Tap Copy link" }),
    "View in 3D and AR": () => ({ title: "See it in 3D, then in AR", body: "Drag to turn it around. Then tap View in AR to place it in your room with your phone.", hint: "Tap View in AR" }),
    "View in 3D": (c) => ({ title: "Play your game in 3D", body: `Tap the planet 3 times to score. This is exactly what ${c.audience} will see.`, hint: "Tap the planet 3 times to score" }),
    "Pick a Visual Coding template": () => ({ title: "Choose how your game plays", body: "Each template comes with ready-made blocks. Tap Visual Coding, pick one, then tap Use template. You can change the blocks later.", hint: "Pick a template, then tap Use template", open: "Tap Visual Coding" }),
    "Share the Collaborate link": () => ({ title: "Invite your classmates", body: "Tap Collaborate, then Copy invite link. Anyone with the link can join and build the project with you.", hint: "Tap Collaborate, then Copy invite link" }),
    "Another user joins": () => ({ title: "Dimas just joined", body: "You can see each other's cursors and changes as they happen. Invite more classmates the same way." }),
    "Open Edu Kits": () => ({ title: "Open Edu Kits", body: "Edu Kits has ready-to-use 3D/AR projects, so you can start without building anything. Tap Teaching Aids to open it.", hint: "Tap Teaching Aids" }),
    "Open Topic": () => ({ title: "Open Topic", body: "Topic has complete learning slides with 3D, ready to present in class. Tap Browse all next to Ready-to-use slides.", hint: "Tap Browse all" }),
    "Pick a subject and grade": (c) => ({
      title: "Choose a subject and grade",
      body: c.role === "educator" || c.role === "lecturer" ? "Pick one subject and one grade. We'll show what matches the class you teach." : "Pick one subject and one grade. We'll show what matches what you're learning.",
      hint: "Pick one subject and one grade"
    }),
    "Open a project": () => ({ title: "Open a project", body: "Every project is ready to use. Tap the first one to try it.", hint: "Tap the first project" }),
    "Open learning slides": () => ({ title: "Open a set of learning slides", body: "Each set takes your class through a lesson, start to finish. Tap the first set to preview it.", hint: "Tap the first set of slides" }),
    "The teacher presents the learning slides": () => ({ title: "Present to your class", body: "Tap Present to go full screen. Your class can watch the 3D turn as you explain.", hint: "Tap Present" }),
    "Create a Class and add materials": () => ({ title: "Create your class", body: "Tap Class, give it a name your students will recognize, then add your first material.", hint: "Type a name and pick a material", open: "Tap Class" }),
    "Invite students with the class code": () => ({ title: "Invite your students", body: "Students join with this 5-letter code. Tap Copy code, then share it in class or in your chat group.", hint: "Tap Copy code" }),
    "Give an assignment": () => ({ title: "Give your first assignment", body: "Tap New assignment, write what students should make, then tap Give assignment. They'll find it in Class.", hint: "Type a title, then tap Give assignment", open: "Tap New assignment" }),
    "See every student's project": () => ({ title: "See every project in one place", body: "Work shows up here as students turn it in. Open any project to view it in 3D." }),
    "Show it on screen, or share the link": (c) => ({ title: "Choose how to present", body: `Show it on the class screen, or share a link so ${c.audience} can explore on their own phones. Pick one, then tap Continue.`, hint: "Pick a way to present, then tap Continue" }),
    "Students open the link on their phones": () => ({ title: "Students open it on their phones", body: "The link opens your project in 3D, right in the phone's browser." }),
    "Assessors open the link on their phones": () => ({ title: "Assessors open it on their phones", body: "The link opens the project in 3D, right in the phone's browser." }),
    "View it in AR": () => ({ title: "Now view it in AR", body: "Tap View in AR to place the project on a desk or the floor.", hint: "Tap View in AR" }),
    "Upload an image or type a text": (c) => ({
      title: "Start with a picture or a few words",
      body: c.role === "parent" ? "Pick a photo of your child's drawing, or describe the object you want." : "Pick an image, or describe the object you want, like \u201ca hot-air balloon with stripes\u201d.",
      hint: "Pick an image or type a description"
    }),
    "Generate 3D": () => ({ title: "Turn it into 3D", body: "Tap Generate 3D. It can take a moment.", hint: "Tap Generate 3D" }),
    "Add it to the project": () => ({ title: "Add it to your project", body: "Your 3D object is ready. Tap Add to project to use it like any other object.", hint: "Tap Add to project" }),
    "Upload a Custom Marker photo": () => ({ title: "Choose your Custom Marker", body: "Pick the printed image your 3D/AR will appear on: a book page, a poster, or a product label. Then tap Use as Custom Marker.", hint: "Pick an image, then tap Use as Custom Marker", open: "Tap Custom Marker" }),
    "Scan the Custom Marker": () => ({ title: "Scan your Custom Marker", body: "Point your phone camera at the printed image. Tap Scan to try it.", hint: "Tap Scan" }),
    "View AR on top of the Custom Marker": () => ({ title: "There it is, on your Custom Marker", body: "Move the page and the 3D moves with it. Anyone who scans it sees the same thing." }),
    "View AR on top of the Custom Marker or the physical product": () => ({ title: "There it is, on your print", body: "Move the print and the 3D moves with it. Anyone who scans it sees the same thing." })
  };

  /* Short step names for chips and the step bar (data.js keeps the internal names). */
  const LABEL = {
    "Create project": "Create a project",
    "3D library": "Open the 3D library",
    "Drop 3D object": "Place a 3D object",
    "Add garnish": "Add a label",
    "Publish": "Publish",
    "Publish the project": "Publish",
    "Share": "Share the link",
    "Share the project": "Share the link",
    "View in 3D and AR": "View in 3D and AR",
    "View in 3D": "Play it in 3D",
    "Pick a Visual Coding template": "Pick a game template",
    "Share the Collaborate link": "Invite classmates",
    "Another user joins": "Build together",
    "Open Edu Kits": "Open Edu Kits",
    "Open Topic": "Open Topic",
    "Pick a subject and grade": "Pick a subject and grade",
    "Open a project": "Open a project",
    "Open learning slides": "Open learning slides",
    "The teacher presents the learning slides": "Present to your class",
    "Create a Class and add materials": "Create a class",
    "Invite students with the class code": "Invite students",
    "Give an assignment": "Give an assignment",
    "See every student's project": "See student projects",
    "Show it on screen, or share the link": "Choose how to present",
    "Students open the link on their phones": "Students open it",
    "Assessors open the link on their phones": "Assessors open it",
    "View it in AR": "View in AR",
    "Upload an image or type a text": "Add an image or text",
    "Generate 3D": "Generate 3D",
    "Add it to the project": "Add it to a project",
    "Upload a Custom Marker photo": "Choose a Custom Marker",
    "Scan the Custom Marker": "Scan it",
    "View AR on top of the Custom Marker": "See it in AR",
    "View AR on top of the Custom Marker or the physical product": "See it in AR"
  };
  const label = (name) => LABEL[name] || name;

  /* Welcome photos (from the setup-moment prototype) per role and feature. */
  const ART = {
    student: { "Editor": "student-create", "Edu Kits": "student-create", "Visual Coding": "student-code", "Collaborate": "student-collab" },
    educator: { "Topic": "teacher-slides", "Editor": "teacher-present", "Edu Kits": "practice", "Publish and share (3D/AR viewer)": "practice", "Class": "teacher-class" },
    parent: { "Editor": "parent-create", "Edu Kits": "parent-create", "Visual Coding": "parent-code", "AI-3D Generation": "parent-ai" },
    university: { "Editor + Custom Marker": "uni-create", "Visual Coding": "uni-collab", "AI-3D Generation": "uni-ai" },
    lecturer: { "Editor": "lecturer-create", "Custom Marker": "lecturer-ar", "AI-3D Generation": "creator-ai" },
    other: { "Editor": "creator-cover", "Custom Marker": "creator-usecases", "AI-3D Generation": "creator-ai" }
  };
  function art(role, mi, feature) {
    const name = role === "student" && mi === 0 && feature === "Collaborate" ? "student-collab-kids" : (ART[role] || ART.other)[feature] || "editor";
    return `assets/welcome/welcome-${name}.jpg`;
  }
  /* Real demo clips for the welcome page and homepage player.
     A feature plays the clips from that role's folder for the same feature, then starts again.
     Identical clips are shared across roles. Features with no folder stay on a photo. */
  const EDITOR_CLIPS = [
    "assets/welcome/video/student-editor.mp4",
    "assets/welcome/video/student-editor-background.mp4",
    "assets/welcome/video/student-editor-animation.mp4",
    "assets/welcome/video/student-editor-marker-1.mp4",
    "assets/welcome/video/student-editor-marker-2.mp4",
    "assets/welcome/video/student-editor-marker-3.mp4",
    "assets/welcome/video/student-editor-viscode.mp4",
    "assets/welcome/video/student-visual-coding-2.mp4",
    "assets/welcome/video/student-visual-coding-3.mp4"
  ];
  const VISCODE_CLIPS = [
    "assets/welcome/video/student-editor.mp4",
    "assets/welcome/video/student-editor-background.mp4",
    "assets/welcome/video/student-editor-viscode.mp4",
    "assets/welcome/video/student-visual-coding-2.mp4",
    "assets/welcome/video/student-visual-coding-3.mp4"
  ];
  const MARKER_CLIPS = [
    "assets/welcome/video/student-editor-marker-1.mp4",
    "assets/welcome/video/student-editor-marker-2.mp4",
    "assets/welcome/video/student-editor-marker-3.mp4"
  ];
  const CLIP = {
    student: {
      "Editor": EDITOR_CLIPS,
      "Visual Coding": ["assets/welcome/video/student-visual-coding.mp4"],
      "Collaborate": [
        "assets/welcome/video/student-collab-1.mp4",
        "assets/welcome/video/student-collab-2.mp4",
        "assets/welcome/video/student-collab-both.mp4"
      ]
    },
    educator: {
      "Topic": ["assets/welcome/video/educator-topic.mp4"],
      "Edu Kits": ["assets/welcome/video/educator-edukits.mp4"],
      "Class": ["assets/welcome/video/educator-class.mp4"]
    },
    parent: {
      "Editor": EDITOR_CLIPS,
      "Visual Coding": ["assets/welcome/video/student-visual-coding.mp4"],
      "AI-3D Generation": [
        "assets/welcome/video/parent-ai-1.mp4",
        "assets/welcome/video/parent-ai-2.mp4",
        "assets/welcome/video/parent-ai-3.mp4",
        "assets/welcome/video/parent-ai-4.mp4"
      ]
    },
    university: {
      "Editor + Custom Marker": MARKER_CLIPS,
      "Visual Coding": VISCODE_CLIPS,
      "AI-3D Generation": ["assets/welcome/video/university-ai.mp4"]
    },
    lecturer: {
      "Editor": EDITOR_CLIPS,
      "Custom Marker": MARKER_CLIPS,
      "AI-3D Generation": ["assets/welcome/video/university-ai.mp4"]
    },
    other: {
      "Editor": EDITOR_CLIPS,
      "Custom Marker": MARKER_CLIPS,
      "AI-3D Generation": ["assets/welcome/video/university-ai.mp4"]
    }
  };
  const clips = (role, feature) => {
    const list = (CLIP[role] || {})[feature];
    if (!list) return [];
    return Array.isArray(list) ? list : [list];
  };
  const clip = (role, feature) => clips(role, feature)[0] || "";
  /* Most Editor clips are long, so the player shows 3 seconds of each.
     "1 Editor - Custom marker - cut" is the exception: keep it on screen for 5 seconds. */
  const CLIP_HOLD = {
    student: { "Editor": 3 },
    parent: { "Editor": 3 },
    university: { "Editor + Custom Marker": 3, "Visual Coding": 3 },
    lecturer: { "Editor": 3, "Custom Marker": 3 },
    other: { "Editor": 3, "Custom Marker": 3 }
  };
  const clipHold = (role, feature, src) => {
    const file = String(src || "").split("?")[0];
    if (file.endsWith("student-editor-marker-1.mp4")) return 5;
    return (CLIP_HOLD[role] || {})[feature] || 0;
  };

  /* Mission 1 page: welcome is the job line, this explains the feature,
     and the resources are for reading before the user tries it. */
  const BRIEF = {
    "Editor": {
      intro: "The Editor is where you build a 3D scene. You choose objects, place them, and add a short label so the idea is easy to follow.",
      points: [
        ["Place 3D objects", "Open the 3D library and put an object in the scene. You can move, turn, and resize it."],
        ["Add a label", "A short title tells people what they are looking at."],
        ["Publish and view", "Publish the project, share the link, then view it in 3D and AR."]
      ],
      resources: [
        ["The 3D library", "The library has ready-to-use objects for many subjects. Search for one, place it, then adjust it in the scene."],
        ["Labels", "A label sits in the scene with the object. Keep it short, so the project is easy to explain."],
        ["Publish, share, and AR", "Publishing saves a version other people can open. They can turn it in 3D, or view it in AR on a phone."]
      ]
    },
    "Edu Kits": {
      intro: "Edu Kits are ready-to-use 3D/AR projects. You pick a subject and grade, open one, and explore it without building it first.",
      points: [
        ["Find a match", "Filter by subject and grade so the list fits what you're learning or teaching."],
        ["Open a project", "Each project is already built. Open the first one and look around."],
        ["View it in the room", "Turn it in 3D, then view it in AR on a phone."]
      ],
      resources: [
        ["Subjects and grades", "Pick one subject and one grade. The list updates to projects that fit that choice."],
        ["What you get", "A project in Edu Kits is ready to use. You don't place objects or publish anything first."],
        ["3D and AR", "On screen, drag to turn the project. View in AR places it on a desk or the floor."]
      ]
    },
    "Topic": {
      intro: "Topic is a set of learning slides with 3D. You pick a subject and grade, open a lesson, and present it.",
      points: [
        ["Choose the lesson", "Filter by subject and grade, then open a set of slides."],
        ["Preview the slides", "Each set walks through one lesson, with 3D on the slides."],
        ["Present it", "Present goes full screen so people can watch while you explain."]
      ],
      resources: [
        ["Learning slides", "A set covers one lesson from start to finish. The 3D is already on the slides."],
        ["Finding a set", "Subject and grade filters keep the list focused on the class in front of you."],
        ["Presenting", "Present fills the screen. Leave it when the explanation is done."]
      ]
    },
    "Editor + Custom Marker": {
      intro: "You build a 3D scene in the Editor, then connect it to a printed image. When someone scans that Custom Marker, the project appears on the page.",
      points: [
        ["Build the scene", "Place 3D objects in the Editor and add a short label."],
        ["Choose the print", "A Custom Marker is a book page, poster, or product label."],
        ["Scan it", "Point a phone at the print. The 3D stays on the page as it moves."]
      ],
      resources: [
        ["Build in the Editor first", "The scene still starts with 3D objects and a label. Publish it before you connect the print."],
        ["What a Custom Marker is", "A Custom Marker is a printed image. Scan it, and the 3D appears on top of that image."],
        ["Scanning", "Use the phone camera on the printed image. Move the page, and the 3D moves with it."]
      ]
    },
    "Visual Coding": {
      intro: "Visual Coding makes objects move, react, and score. You start from a template, then play the result in 3D.",
      points: [
        ["Start a scene", "Create a project and place a 3D object."],
        ["Pick a template", "Each template has ready-made blocks. You can change them later."],
        ["Play it", "Publish, share, and play the game in 3D."]
      ],
      resources: [
        ["Templates", "Tap to score, spin, or catch. Pick one template to see how the blocks fit together."],
        ["Blocks", "Blocks say what happens when someone taps an object. You can edit them after the template is in."],
        ["Playing in 3D", "The viewer is what other people see. Score points there before you share the link."]
      ]
    },
    "Collaborate": {
      intro: "Collaborate lets people build the same project at the same time. You create a project, share a link, and work together as others join.",
      points: [
        ["Create the project", "Start a scene you want to build with other people."],
        ["Share the link", "Anyone with the Collaborate link can join."],
        ["Build together", "You can see each other's cursors and changes as they happen."]
      ],
      resources: [
        ["The invite link", "Copy the link from Collaborate and send it in chat or email."],
        ["Joining", "A person who opens the link lands in the same project."],
        ["Working at the same time", "Changes show up as they happen. Each person can still publish and share."]
      ]
    },
    "Class": {
      intro: "Class keeps a group's work in one place. You create a class, invite people with a code, and give an assignment.",
      points: [
        ["Create the class", "Name it, then add a material students can open."],
        ["Invite with a code", "Students join with a short class code."],
        ["Give an assignment", "Write what they should make. Their projects show up in Class."]
      ],
      resources: [
        ["Materials", "A material is something the class can open, such as an Edu Kits project."],
        ["The class code", "Share the code in class or in a chat group. Students use it to join."],
        ["Assignments", "An assignment tells students what to make. Finished projects are listed together."]
      ]
    },
    "AI-3D Generation": {
      intro: "AI-3D Generation turns a picture or a few words into a 3D object you can place in a project.",
      points: [
        ["Start with an image or text", "Upload a picture, or describe the object you want."],
        ["Generate the 3D", "Wait while it becomes a 3D object."],
        ["Use it in a project", "Add it to a scene, then publish and share."]
      ],
      resources: [
        ["Images and text", "A photo of a drawing works. A short description works too, such as “a hot-air balloon with stripes.”"],
        ["Generating", "Generation can take a moment. The object is ready when the preview appears."],
        ["Adding it", "Add to project places the object in the Editor, like any other 3D object."]
      ]
    },
    "Custom Marker": {
      intro: "Custom Marker connects 3D/AR to a printed image, so a page, poster, or product can show the project on top.",
      points: [
        ["Choose the print", "Pick the image the 3D should appear on."],
        ["Scan it", "Point a phone camera at that print."],
        ["View it in AR", "The 3D stays on the print while the print moves."]
      ],
      resources: [
        ["Which image to use", "A book page, a poster, or a product label can be the Custom Marker."],
        ["Scanning", "The phone camera has to see the printed image clearly."],
        ["What people see", "Anyone who scans the same print sees the same 3D on top of it."]
      ]
    },
    "Publish and share (3D/AR viewer)": {
      intro: "After a project is ready, you choose how people see it: on a shared screen, or from a link on their own phones.",
      points: [
        ["Open the project", "Start from a project that's ready to show."],
        ["Choose how to present", "Show it on screen, or share a link."],
        ["Let people explore", "The link opens the project in 3D, and they can view it in AR."]
      ],
      resources: [
        ["On screen", "Presenting on a shared screen works when everyone is in the same room."],
        ["A link", "The link opens in the phone's browser, in 3D."],
        ["AR", "View in AR places the project in the room once the project is open."]
      ]
    }
  };

  function job(role, mi, si) {
    return JOBS[`${role}:${mi}:${si}`] || JOBS[`${role}:*:${si}`] || ["Create a 3D/AR project", "Build it in the Editor, then view it in AR."];
  }

  function ctx(role, mi) {
    return {
      role,
      noun: (NOUN[role] || NOUN.other)[mi] || "project",
      audience: (AUDIENCE[role] || AUDIENCE.other)[mi] || "your audience",
      together: role === "parent"
    };
  }

  window.OB_COPY = { ROLES, CHECKLIST_TITLE, DONE, STEP, BRIEF, art, clip, clips, clipHold, job, ctx, cap, label };
})();
