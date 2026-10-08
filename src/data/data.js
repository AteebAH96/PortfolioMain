/**
 * ============================================
 * PORTFOLIO DATA — Edit all your content here
 * ============================================
 * Replace placeholder text, URLs, and images
 * to customize the portfolio with your own content.
 */

export const personalInfo = {
  name: "Ateeb Hussain",
  title: "MERN Stack Developer / Video Editor",
  location: "Karachi, Sindh, Pakistan",
  email: "ateebhussain78@gmail.com",
  phone: "+92-3182725087",
  whatsapp: "923182725087", // without + or dashes for wa.me link
  portfolio: "https://my-portfolio-eightgilt-65.vercel.app/",
  tagline:
    "I build modern web experiences & craft cinematic edits that turn heads.",
  profile:
    "Passionate Web Developer and Video Editor with a strong eye for creativity and detail. I specialize in building modern, responsive websites and creating engaging video content that captures attention. I enjoy combining technical skills with creative ideas to deliver high-quality digital experiences.",
};

export const socialLinks = {
  github: "https://github.com/AteebAH96", // Replace with your GitHub URL
  linkedin: "https://www.linkedin.com/in/ateeb-hussain-ab1808402?utm_source=share_via&utm_content=profile&utm_medium=member_android", // Replace with your LinkedIn URL
  instagram: "https://www.instagram.com/aexrare/", // Replace with your Instagram URL
  youtube: "https://www.youtube.com/@aexrare", // Replace with your YouTube URL
};

export const skills = {
  video: [
    { name: "Premiere Pro", abbr: "Pr", type: "adobe" },
    { name: "After Effects", abbr: "Ae", type: "adobe" },
    { name: "Media Encoder", abbr: "Me", type: "adobe" },
  ],
  development: [
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss", color: "#1572B6" },
    { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "React.js", icon: "SiReact", color: "#61DAFB" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", icon: "SiExpress", color: "var(--text-primary)" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "VS Code", icon: "VscVscode", color: "#007ACC" },
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "var(--text-primary)" },
    { name: "Vercel", icon: "SiVercel", color: "var(--text-primary)" },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Freelance Video Editor",
    company: "Self-Employed",
    period: "2022 – Present",
    startYear: 2022,
    endYear: 2026,
    track: "video", // 'video' or 'audio' track for timeline
    color: "#9999FF",
    bullets: [
      "Edited professional videos for social media and digital platforms.",
      "Enhanced video quality, colours and audio.",
      "Worked on reels, promotional videos and cinematic edits with transitions.",
      "Delivered work on client deadlines.",
    ],
  },
  {
    id: 2,
    role: "Data Entry Operator / Video Editor",
    company: "Zapp.pk",
    period: "Apr 2025 – Oct 2025",
    startYear: 2025,
    endYear: 2025.6,
    track: "audio",
    color: "#FF6B9D",
    bullets: [
      "Uploaded and managed products on the company website backend.",
      "Maintained inventory records and product information.",
      "Edited promotional and vendor video content.",
      "Organised product data with accuracy.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Advanced Diploma in Software Engineering (Web Development)",
    institution: "Aptech Pakistan, Karachi",
    period: "2022 – 2025",
    description:
      "3-year program focused on full-stack development with HTML, CSS, JavaScript, React.js, Node.js, MongoDB.",
  },
];

export const projects = {
  web: [
    {
      id: 1,
      title: "EditDesk",
      description:
        "Production client portal for a video-editing business. Clients register, place orders, track status, message the editor and receive delivery links; the admin runs the full pipeline from Pending to Delivered. JWT auth, MongoDB Atlas, serverless backend \u2014 live on Vercel.",
      image: "", // Add your project screenshot path
      tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      liveUrl: "https://editdesk-e9er.vercel.app/",
      githubUrl: "#", // repo is private \u2014 make it public to link it here
    },
    {
      id: 2,
      title: "PROJECT 2",
      description: "Responsive landing page with animations.",
      image: "",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "PROJECT 3",
      description: "Full-stack e-commerce platform.",
      image: "",
      tech: ["React", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "PROJECT 4",
      description: "Portfolio website with dark mode.",
      image: "",
      tech: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  video: [
    {
      id: 1,
      title: "Avengers: Doomsday — Cinematic Fan Edit",
      description: "High-energy fan edit for the upcoming Avengers: Doomsday. Dramatic pacing, cinematic colour grading and beat-synced transitions.",
      thumbnail: "https://i.ytimg.com/vi/G6OUcYP8fKY/hqdefault.jpg", // YouTube video thumbnail
      videoUrl: "https://www.youtube.com/embed/G6OUcYP8fKY", // YouTube embed URL
    },
    {
      id: 2,
      title: "Marvel's Spider-Man 2 — Insomniac Games Edit",
      description: "Cinematic gameplay edit from Insomniac's Spider-Man 2. Smooth transitions, punchy sound design and movie-style colour grading.",
      thumbnail: "https://i.ytimg.com/vi/LTj6bx5Ot9U/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/LTj6bx5Ot9U",
    },
    {
      id: 3,
      title: "The Batman — Dark Cinematic Edit",
      description: "Moody, atmospheric edit of The Batman. Deep shadows, teal-and-orange grade and tension-driven pacing.",
      thumbnail: "https://i.ytimg.com/vi/pGVjEUnB9XQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/pGVjEUnB9XQ",
    },
    {
      id: 4,
      title: "Spider-Man: Brand New Day — Trailer Edit",
      description: "Fan-made trailer-style edit for the upcoming Spider-Man: Brand New Day. Fast cuts, dynamic motion graphics and synced audio.",
      thumbnail: "https://i.ytimg.com/vi/Y0jr7_T937c/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Y0jr7_T937c",
    },
    {
      id: 5,
      title: "PUBG Mobile Lobby Edit — Vol. 1",
      description: "Cinematic lobby showcase with smooth camera flow, glow effects and beat-synced transitions.",
      thumbnail: "/thumbnails/tiktok-7691957250642005269.jpg",
      videoUrl: "https://www.tiktok.com/@aexateeb/video/7691957250642005269?is_from_webapp=1&sender_device=pc&web_id=7661331262954751495", // Paste full URL: https://www.tiktok.com/@username/video/VIDEO_ID
    },
    {
      id: 6,
      title: "PUBG Mobile Lobby Edit — Vol. 2",
      description: "Premium lobby edit — clean outfit reveals, dynamic zooms and polished sound design.",
      thumbnail: "/thumbnails/tiktok-7689218512136457493.jpg",
      videoUrl: "https://www.tiktok.com/@aexateeb/video/7689218512136457493?is_from_webapp=1&sender_device=pc&web_id=7661331262954751495", // Paste full TikTok video URL here
    },
    {
      id: 7,
      title: "PUBG Mobile Lobby Edit — Vol. 3",
      description: "Stylish lobby edit with seamless transitions, light leaks and bass-boosted audio sync.",
      thumbnail: "/thumbnails/tiktok-7682893121885048084.jpg",
      videoUrl: "https://www.tiktok.com/@aexateeb/video/7682893121885048084?is_from_webapp=1&sender_device=pc&web_id=7661331262954751495", // Paste full TikTok video URL here
    },
    {
      id: 8,
      title: "PUBG Mobile Lobby Edit — Vol. 4",
      description: "High-end lobby showcase — cinematic angles, smooth velocity ramps and crisp detailing.",
      thumbnail: "/thumbnails/tiktok-7650653933618072853.jpg",
      videoUrl: "https://www.tiktok.com/@aexateeb/video/7650653933618072853?is_from_webapp=1&sender_device=pc&web_id=7661331262954751495", // Paste full TikTok video URL here
    },
  ],
};

/**
 * Floating icons shown in the Hero section.
 * Each entry has a name, position offsets, and icon reference.
 * On mobile, only the first 6 are shown.
 */
export const floatingIcons = [
  { name: "React", icon: "SiReact", color: "#61DAFB", x: 10, y: 20 },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933", x: 80, y: 15 },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248", x: 70, y: 70 },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", x: 15, y: 75 },
  { name: "HTML5", icon: "SiHtml5", color: "#E34F26", x: 90, y: 45 },
  { name: "CSS3", icon: "SiCss", color: "#1572B6", x: 5, y: 50 },
  { name: "Git", icon: "SiGit", color: "#F05032", x: 50, y: 10 },
  { name: "GitHub", icon: "SiGithub", color: "var(--text-primary)", x: 45, y: 80 },
  { name: "VS Code", icon: "VscVscode", color: "#007ACC", x: 25, y: 40 },
  { name: "Express", icon: "SiExpress", color: "var(--text-primary)", x: 60, y: 35 },
  { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3", x: 35, y: 60 },
  { name: "Vercel", icon: "SiVercel", color: "var(--text-primary)", x: 85, y: 80 },
];

export const adobeTools = [
  { name: "Premiere Pro", abbr: "Pr", x: 30, y: 25 },
  { name: "After Effects", abbr: "Ae", x: 65, y: 55 },
  { name: "Media Encoder", abbr: "Me", x: 20, y: 65 },
];
