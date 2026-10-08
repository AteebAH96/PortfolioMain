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
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBUODAsLDBkSEw8VHhsgHx4bHR0hJTApISMtJB0dKjkqLTEzNjY2ICg7Pzo0PjA1NjP/2wBDAQkJCQwLDBgODhgzIh0iMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP/wAARCAIcA3ADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3yiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAnoqDLf32/OjLf32/OgCeioMt/fb86Mt/fb86AJ6Kgy399vzoy399vzoAKKKKYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSGgAJqQQMR8zY9hTYBulJ/uirNAEP2f/AGz+Qo+z/wC2fyFTUUgIfs/+2fyFH2f/AGz+QqaigCH7P/tn8hR9n/2z+QqaigCH7P8A7Z/IUfZ/9s/kKmooAh+z/wC2fyFH2f8A2z+QqaigCH7P/tn8hR9n/wBs/kKmooAh+z/7Z/IUfZ/9s/kKmooAh+z/AO2fyFH2f/bP5CpqKAIfs/8Atn8hR9n/ANs/kKmooAh+z/7Z/IUfZ/8AbP5CpqKAIfs/+2fyFH2f/bP5CpqKAIfs/wDtn8hR9n/2z+QqaigCH7P/ALZ/IUfZ/wDbP5CpqKAIfs/+2fyFH2f/AGz+QqaigCH7P/tn8hR9n/2z+QqaigCH7P8A7Z/IUfZ/9s/kKmooAh+z/wC2fyFH2f8A2z+QqaigCAwEdHz9RUfIJBGCKt1BcDhW75xQAyikFLTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgB9t99/oP61Yqvbfef6D+tWKQBRRRQAUUUUAFFFVbfU7C7u7i0t723mubYgTwxyhniz03Acj8aALVFFFABRRRQAUUUUAFFVZdSsIL+GwlvbeO8nBaK3aUCSQDqVXqelWqACiiigAoqqupWL6i+nLe27X0aB3thKDIq+pXqB71aoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqG5/1Y/wB4VNUNz/qx/vCgCEU6mrTqYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhpaQ0APtvvP9B/WrFV7b7z/Qf1qxSAK8/wDjFbXDeBH1G0kkSfTbiO6BjcqSAcEcdsH9K9AqhremprGhX+myAbbq3eLntuBGaAPGfiP4jvdQ17S9R0uaQW+i6fDqkyxsQD5kiYBx1+X19629W16G4+K76o00h0vw/opu5FRiA7OMrx0JIZcZpfBPw51W08M+IbTxEkBu9RtVs4tkocLEkZVee3J/SneCvhxqcXhvxFaeJWjS81WNLcPFIJNkaJhT+B7e1AEVj8WdUC6bqGqWGkppWoTrCI7W933VvuOFZ07j8qg0PW7fw545+JusXSs0Vr5LlV6sfmAH4kgUuheANc0yWysLrwp4TuooHUSam2fMdAfvbcZ3Y/WtH/hXmo6hq3j1b0xQWmuLGLWVXDHK5ILL25xQBp+GvFHjHUlg1bVtF02z0CW3a4MqTs0yIF3KSO+fp0rC/wCFpeJP7G/4Sr/hG7b/AIRfztm77QftGzdt346de3/661/Del+N0s4PDuuwaUNGitXtpLmCVjNKmwqoAPAPTn2rnF8A+OT4ZPgYzaWugibjUNzecYt27Gz1z/8AroA6LWvH+sReMrPQtB0y1v8A7fp63Ns0shjwxydzH+6FB4AznFZFp8SvGWo2mrQ2nhqx/tDRmf7ez3BEQAzwg6lvlbvjAHrW9H4Pv7X4o6Vq8EcZ0my0r7JvaQb8gED5fy5qLw/4S1bT7vx1JcRRBdYldrTbKDuBVwM/3eooAq3nxXdfCHh/UbOwgOp605jihnn2RRFTh2Zv7oOPTrWr4N8cXWt69f6BqsNiuoWsQnWbT5/NgmQkDg9QQSOK5MfC3V5vAnhu3kjsG1bRppHNrcnfBOjtkoxH0FdV4H8P3+m6hc3V94Y0DRx5eyM6cS0jZOTuOANvA4oA53x9c3tp8YfCs2nWYu7wWkqwws+xWY7hy3YDOT9K3/DHjfV9Um17SNU0y1tdd0pN/lpMRDKCPl+Y5wM459DUHjHwt4i1Hx7o2vaGbNf7PtnGblztZyT8hA5wQcZ7VjD4b+I9Z07xXfatdWltrOtokcccDExxqhB2luuDtA/CgC3pvxK1mLxVpWk61b6HJFqUnlI+lXvnNA/YOM/5/CrD+OvFOua7q1n4R0SwubTS5vIlmvLgoZH5yFA6dD1rEsPh94kOp+FrybStE0+LSLpBJFZH55EAGZGbHzHI+77mtOHwx418I69rcvhePSbyx1Wc3AF5IyNA5z2HXr+PFAGVe+IrXwv8ZNe1fViEWLRosxxnJeQ7cIvqSc/zr0fwhf69quirf69Z21lLOd8NtCG3RxnpvJP3j7YxXGan8M5vEnxB1HUNcghfT7jTUhjljl+ZJwoG4L7c4zXUeArPxHpehnSvEKxSPZt5dtdRy7zNEPu7h1BH8sUAdXRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFQ3P+rH+8KmqG5/1Y/3hQBCtOpq06mAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFIaWkNAD7b7z/Qf1qxVe2+8/0H9asUgCiiqGq3MttHbGJtpe6ijbgHKlsEUAX6Kzb/VJLW4aGC189o4fOlzIE2rkjjjk8Hjjp1qs3iBmbzILMy2gmihMpkCkM+3+HHQbx3oA26KydU1VtOndtjyLHaPN5YIG4qyj068/Sp7K/muLi4t57YQTQhWwJN4ZWzg5wPQ0AX6KwbLW72e0tt9lE11cNIURZsLtU4JJI46gY5zU1zq8x0OK/s4FLySInlytjblwpGRnvkfrQBsUVlDVp/tF3GbSNUtVHmSvOFXcVDYGR79Tj+lQQeITcoqQWySXLTNEEWcFDtUMW346YI7daANyisSz1eWXWrnTmUPMsgYruAEUexSTnHzfMcf4VPc6x9muZrYwEzK8SxLux5gc4z04wQ2fpQBqUVhN4iKwfaGsz9nkjleBxIMybATgjHy5AOOtT3mt/ZDIBatIUhikAVwC299mPwoA1qKzb/VTpunR3FzEiSyOsYTzflDH1bHAxznFVI/EL3cKC0tRJMUkZx5oCqEO3IbHzZPTp+FAG7RXMJrl/wDZrYxos00kdpuEjBFzJnJGBweK1LTVWudSns3hSJoiRhpPnb/aC45U+ufyoA06K519Wv4NSvWeLzYUuI7aCFJFGSwU5OVz39fwq0+tSxyOXsx5MMiRTyLLnY7Y6DHzAblyePpQBsUVgpr93LJCkemA+e8iRE3AGShIOeOBxx1qW71aR/DsWo2qMryGIhDgn5nUFeeO5GaANmisVtcnWUW32DN2Z/JMYmG0fIXDbsdMD0zUE3iMWbyRyKrSm4kRRLKsagIFJ+bH+0AO9AHQ0Vh2OoXeo6wGQ+XYC1jlCZG5i+77w257diOnfNJFrV3m4WS0iZ/thtrdUlxuIyfmyOMAE55+lAG7RWYusINLubyaFka2LLLGDn5l7A988YPvVGTXbmyuLxr6BYxGkAji80FdzswzvwMDjnPTFAHQ0VzMviKSaEzwnYiW9yXVCrAsmzBViOR8x7d+RV6bX0tzIssDB4pnSRd3RFTeX6dNuOPU4oA2KK56HxQJoWKWgkl3RBUinDA+YcDLYwCD1FWxrLrP9mltdt156ReWsmQQy7twOBwAG7fw0Aa1FFFABUNz/qx/vCpqhuf9WP8AeFAEK06mrTqYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhpaQ0APtvvP8AQf1qxVe2+8/0H9asUgCq19YxX8AilMihXV1aNipBByDmrNFAGZJodtMq+bJcMwQxs5mO50JztY9xVK80SWfUUMMKQ24milZhcNg7Mf8ALPGM/KBnPT6V0GaM0AU7vTLa+ZmnViWhaE4Yj5SQT/IVMltEl1LcqD5kqqrHPGFzj+ZpzXEKvsaVA2QMFhnJ6D8akoAzP7CtFQKjTpskZ4ykpBj3dQp7A+lTvplq+miwCFIAAFCMQVwcgg9c5Gc1cooAovpNrJBcROJGFwVaRi5ySoABz6/KKjOiWpjYbpxIZPN84SkOG2hSQe2QMY6VpUUAUV0m1WZZgJPNWUShy5zu2hTz6EAZHeopdPe516C9lRFjtUYREMSzs2OSMcAc469a06KAM1NCsUdiY3ZCrqsbOSiBvvbR2zSJoVmobcZpCyopLyknCNuUfga06KAK95Zw30HkzBsZDKysVZWHQgjoarS6NbzLGJJLguisvmecwZlbqpI6jgVo0UAZp0Ky8jylWRRsiRSshBUR52EHsRmpY9MhS8F0zzSSqCE8yQsEz1wO2cVdooApvpls8jSFW3NOs5+Y/fUAD9AOKZJpFrLeG5YSZZld0DkI7LjaxXoSMD8hV+igCnFpltCbcorZt2do8sTgvnd9etNbSbRtLXTirfZ124G8g8HI569RV6igChBpFtBJHIPNeVJDL5jyFmZiuzk9/l4psmjWsjFx5scplaUSRyFWBYAHB9DgcVo0UAV4bOKGd5l3GR40jZmYnIXOPx5NVpNFtZGmOZV82QS/LIRscfxL6H1rRooAqJptqlhJZmPdDLu8wMSS5bqSeuTVddCswswYzyPMEDSPMxfKElSD2IJ7Vp0UAZ8mj200PlzNNL+6eLc8pLFXxnn8BUjaXaPfSXbRbpZIvJfJyCv06fjVyigDPi0e3iiWIyXEiJIjoJJi20qcgDPaom01rjW2vp1VFjhMMWxzubJ5Y9MY5A+prVooAZFGIYUiUswRQoLsWJx6k9TT6KKACobn/Vj/AHhU1Q3P+rH+8KAIVp1NWnUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApDS0hoAfbfef6D+tWKr233n+g/rVikAVyPxFgkuPDtsiRtIo1C3MgELzAIH+YsifMVx1ArrqKAPMb59dhtHOiXV3b21rp1vJbx2liUjklMzK42SKWxt/hznoan1DUPENjZXmnrLqkzLqLx2975fzCMQq6htsZ3AsSoIUDIwTXoZniU4Mi5+tJ9oh/56L+dAHmMY1nUb3T7m+sp/Na50iaU/ZduH8tzISQOx65Py+1epjoKi+0Q/wDPRfzo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9Fo+0Q/8APRaAJaKi+0Q/89Fo+0Q/89FoAloqL7RD/wA9FpftEP8Az0X86AJKKM5GRRQAVDc/6sf7wqaobn/Vj/eFAEK06mrTqYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhpaQ0APtvvP9B/WrFV7b7z/AEH9asUgCo5eSidmOD9MZqSo5P8AWRf7x/kaAHgADAGB6ClpGO1S2CcDOB1NUjq1sFQrvbeiuoVck7jgD68H8jQBeoqnHqUEpwN4YK7MCuCu0gEH35FV7jWVRA0ELS/JvOTjA27v5Y/MUAalFZra1bwxBpwY3+bcmQdoGMn3HI/Op01KCS48hN5k64C/w4zu+h9fWgC3RWeNYtmXgSF/MEewKCckEjocdqE1m2ZC5WZVCO2WTGdn3h9RQBoUVnNqqkxrHG6u0kalZFwdrZww/I1Jaapa3kxihfLbSw/2lBxkfj60AXaKpHU4Asr7ZTHG23eE4Zs7cL6nPFNOqwjaojmMpZk8oJ8wIGSPyOaAL9FVLTUYLxwsYkG5PMQumNy9MirdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUARL8kxQfdI3Y9KlqL/l6H+5/WpaACobn/AFY/3hU1Q3P+rH+8KAIVp1NWnUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApDS0hoAfbfef6D+tWKr233n+g/rVikAVHJ/rIv94/yNSUyRSwBX7ynIoAcThSQCT6DvWXaaUPJkaUNFI83moFYExY+6B27n25NaPnAfeRwf90n+VHnL/dk/79t/hQBTOkxFflnmVyHDyAjLbsbs8Y7Dp0xTH0ePaqxuNoUKRIu8HC7c9R24PY+lX/OX+7J/37b/AAo85f7sn/ftv8KAKh0qDEZjZonRSu5ADkE5OdwPcUsmlQyySyM8u+VSjsGxlCMbfoOo96tecv8Adk/79t/hR5y/3ZP+/bf4UAU4dIgikEnmSMwdX/hAyoIHAAGMGm3OlobJ0iLs4SUICw5L5zn86vecv92T/v23+FHnL/dk/wC/bf4UAU4tLT5HllleVShyxHG3oOB0yTT4NNW2jMcM8qR4woG35RnPBxn25zxVnzl/uyf9+2/wo85f7sn/AH7b/CgCt/Zkex4xLKIi29UBHyNu3ZBxnr+FLHp0UcyzGSR5QzMWYj5iQBzx6AdKsecv92T/AL9t/hR5y/3ZP+/bf4UAQ29hFbNCUZz5UXlLk9uOvvxVqo/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85f7sn/ftv8ACgCSio/OX+7J/wB+2/wo85eyyf8AfBoAT/l6H+5/WpajRSXMjDBIwB6CpKACobn/AFY/3hU1Q3P+rH+8KAIVp1NWnUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApDS0hoAfbfef6D+tWKr233n+g/rVikAUUVFc3VvZwma5nihjBwXkcKPzNAEtFMjljmjWSJ1dGGVZTkEexp9ABRRRQAUUVDb3dvd+b9nmSXypDFJsbO1x1U+4oAmooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKhuf9WP94VNUNz/AKsf7woAhWnU1adTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK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/wDhR/xB/wCgEv8A4GQf/F0f8KP+IP8A0Al/8DIP/i6APPKK9D/4Uf8AEH/oBL/4GQf/ABdH/Cj/AIg/9AJf/AyD/wCLoA88or0P/hR/xB/6AS/+BkH/AMXR/wAKP+IP/QCX/wADIP8A4ugDzyivQ/8AhR/xB/6AS/8AgZB/8XR/wo/4g/8AQCX/AMDIP/i6AOv/AGa/+Q3rv/XtF/6Ga+ja8X+CXgHxJ4O1TVptc08WsdxAiRkTxybiGJP3WOK9ooAKhuf9WP8AeFTVDc/6sf7woAhWnU1adTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgB9t95/oP61Yqvbfef6D+tWKQBRRRQAUUhYDqQKNy/3h+dAC0Um5f7w/Ojcv8AeH50ALRSbl/vD86Ny/3h+dAC0Um5f7w/Ojcv94fnQAtFJuX+8Pzo3L/eH50ALRSbl/vD86Ny/wB4fnQAtFJuX+8Pzo3L/eH50ALRSbl/vD86Ny/3h+dAC0Um5f7w/Ojcv94fnQAtFJuX+8Pzo3L/AHh+dAC0Um5f7w/Ojcv94fnQAtFJuX+8Pzo3L/eH50ALRSbl/vD86Ny/3h+dAC0Um5f7w/Ojcv8AeH50ALRSbl/vD86NynuPzoAWiiigAqG5/wBWP94VNUNz/qx/vCgCFadTVp1MAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKQ0tIaAH233n+g/rViq9t95/oP61YpAFcx4812fQPDTz2rbbmZxDG+M7Sckn64Brp64D4t/wDIs2n/AF+L/wCgNXXgYRniIRltc5sZNwoSlHex5BPcz3UrSzzSSyMclnYsT+JqLJ9aKK+4SS2Pjm2wyfWjJ9aKKYgyfWjJ9aKKADJ9aMn1oooAMn1oyfWiigAy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ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgB9t95/oP61Yqvbfef6D+tWKQBRRRQAUUUUAFFFFABRRRQAVlarp8t7eWbx/KYQ7LL/cfjaffoQfbNatFAHKmw1JrVS1tIsrLL5apMAIJWkZgx55GCOeenTmrmvQajcSQLaxMwQblkQgEPuHqRgY9jW9RQBzj2N0YpFe3uHkNxvuGWXHnx7mwF+bjAK8cdMU42N417lIpkJfKymT5Vh8vGwjPXd7e+a6GigDmVs9QufJSW3njjRbaN8yj5trNvPB6cj61Pp+nS2+qxTS27kLFJEkhfdsAkYqDznG0jHWt+igDlpLa+uJb+3t5H22rbYyr/eDuHZeT1C/KM+tSW+nTQzw3BtppmW2kRGlCbkbcWUEbsY7Dn0ziuiihigUrFGkakkkIoAyepp9AGHfabImk2kdvAbgQTrNLAxUGXklvbOTux04qK5sbu9nmuYIZrVvsTLbq7hQkxLckKSM4I5966Gito1nFWRlKkpO7OMn03VP7KaCCG7JZnZQ+wNG4UBduHwFJyc5Jz25qafSb0NeGK3kUy3STStGVPnJ5YGACw5D8kHFdbRWn1ufZEfVo92YVxZXH9nabG63V1FF/x8Rs6iV/lOM4IBwcZ59+cVUg0rUQ0c0/mtcR/ZQredngN+878/KSD611FFQsRJKxToRbuYGgWN9a3U73r3JkK4ctt8tzuJ3DBJJx6gccVv0UVnUqOpLmZcIKEbIKKKKgsKKKKACiiigAooooAKhuf9WP94VNUNz/AKsf7woAhWnU1adTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgB9t95/oP61YqtbffcewqzSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqG5/1Y/3hU1Q3P+rX/eFAEK06mrTqYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhpaKAGBjG4cDPqParSSJIMqwPtVYio2QHqKANCis3yx6UeWPSgDSorN8selHlj0oA0qKzfLHpR5Y9KANKis3yx6UeWPSgDSorN8selHlj0oA0qKzfLHpR5Y9KANKis3yx6UeWPSgDSorN8selHlj0oA0qKzfLHpR5Y9KANKis3yx6UeWPSgDSorN8selHlj0oA0qKzfLHpR5Y9KANKis3yx6UeWPSgDSorN8selHlj0oA0qKzfLHpR5Y9KANKis3yx6UeWPSgDSorN8selHlj0oA0WdUGWYAe9VJJPNcEfdHT3qMRgdqeBQA4UtAooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApMUtFADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FADcUYp1FACYpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z", // EditDesk live preview
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
