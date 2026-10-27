export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
];

export const heroContent = {
  eyebrow: 'Healthcare robotics',
  headline: 'Intelligent automation for remote patient care',
  description:
    'A connected care robot with clinical sensing, visual inspection, and a unified dashboard for doctors and patients — designed for monitoring, remote interaction, and safe clinical workflows.',
  primaryCta: { href: '#features', label: 'Explore capabilities' },
  secondaryCta: { href: '#contact', label: 'Get in touch' },
  image: '/images/robotpic.png',
  imageAlt: 'Healthcare robot product illustration',
};

export const aboutContent = {
  id: 'about',
  title: 'About the robot',
  paragraphs: [
    'This project presents a healthcare-oriented robot platform that combines on-device sensing with a web-based control dashboard. The system supports temperature, pulse, respiration, and visual inspection workflows alongside behavioral and health analysis features.',
    'The dashboard connects patients and clinicians through registration portals, remote interaction, live checkups, and structured records — extending care beyond the bedside while keeping vitals and history accessible in one place.',
  ],
};

export const featuresSection = {
  id: 'features',
  title: 'Robot',
  titleAccent: 'Features',
  subtitle: 'Clinical sensing and monitoring capabilities',
};

export const robotFeatures = [
  { id: 'temperature', title: 'Temperature', icon: '/images/temperature.png' },
  { id: 'pulse', title: 'Pulse', icon: '/images/pulse.png' },
  { id: 'visual', title: 'Visual Inspection', icon: '/images/visual-inspection.png' },
  { id: 'respiration', title: 'Respiration', icon: '/images/respiration.png' },
  {
    id: 'behavioral',
    title: 'Behavioral Monitoring',
    icon: '/images/behavioral-monitoring.png',
  },
  { id: 'health', title: 'Health Care Analysis', icon: '/images/health-analysis.png' },
];

export const dashboardSection = {
  id: 'dashboard',
  title: 'Robot',
  titleAccent: 'Dashboard',
  subtitle: 'Dashboard to manage the robot',
};

export const dashboardFeatures = [
  {
    id: 'portal',
    title: 'Registration Portal',
    description:
      'Dashboard includes separate registration portals for patient and doctor.',
    icon: '/images/portal.png',
  },
  {
    id: 'remote',
    title: 'Remote Interaction',
    description:
      'Remote patient interaction with the doctor from anywhere in the world.',
    icon: '/images/remote-interaction.png',
  },
  {
    id: 'vitals',
    title: 'Monitor Vitals',
    description: 'Monitor the vitals of patients remotely.',
    icon: '/images/monitoring-vital.png',
  },
  {
    id: 'live',
    title: 'Live Checkup',
    description: 'Live checkup through a high-definition camera.',
    icon: '/images/live-checkup.png',
  },
  {
    id: 'history',
    title: "Patient's History",
    description: "Record and access patient's history along with diagnosis.",
    icon: '/images/patient-history.png',
  },
  {
    id: 'pictorial',
    title: 'Pictorial Record',
    description: "Pictorial record of patient's checkup on the dashboard.",
    icon: '/images/pictorial-record.png',
  },
  {
    id: 'clinical',
    title: 'Clinical Tools',
    description:
      'Point-of-care clinical decision-support tools such as MDCalc.',
    icon: '/images/clinical-decision.png',
  },
  {
    id: 'distance',
    title: 'Monitor Distance',
    description: 'Social distance monitoring on the dashboard.',
    icon: '/images/social-distance.png',
  },
  {
    id: 'sentiment',
    title: 'Sentiment Recognition',
    description: 'Feature that helps recognize sentiments.',
    icon: '/images/sentiment-analysis.png',
  },
  {
    id: 'uv',
    title: 'UV Light Sanitization',
    description: 'UV light sanitization capability on the dashboard.',
    icon: '/images/uv-light.png',
  },
];

export const dashboardSlides = [
  { id: 1, src: '/images/Dashboard1.jpg', alt: 'Dashboard interface preview 1' },
  { id: 2, src: '/images/Dashboard2.jpg', alt: 'Dashboard interface preview 2' },
  { id: 3, src: '/images/Dashboard3.jpg', alt: 'Dashboard interface preview 3' },
  { id: 4, src: '/images/Dashboard4.jpg', alt: 'Dashboard interface preview 4' },
];

export const partnersSection = {
  id: 'partners',
  title: 'Our',
  titleAccent: 'Partners',
};

export const partnerLogos = [
  { id: 'p1', src: '/images/pic1.JPG', alt: 'Partner organization logo' },
  { id: 'p2', src: '/images/pic2.JPG', alt: 'Partner organization logo' },
  { id: 'p3', src: '/images/pic3.JPG', alt: 'Partner organization logo' },
  { id: 'p4', src: '/images/pic4.JPG', alt: 'Partner organization logo' },
  { id: 'p5', src: '/images/pic5.JPG', alt: 'Partner organization logo' },
];

export const contactSection = {
  id: 'contact',
  title: 'Contact Us',
  items: [
    {
      id: 'location',
      icon: '/images/map-icon.png',
      label: 'London 145 United Kingdom',
      href: null,
    },
    {
      id: 'phone',
      icon: '/images/phone-icon.png',
      label: '+7586656566',
      href: 'tel:+7586656566',
    },
    {
      id: 'email',
      icon: '/images/email-icon.png',
      label: 'demo@gmail.com',
      href: 'mailto:demo@gmail.com',
    },
  ],
};

export const footerLinks = navLinks.filter((link) => link.href !== '#contact');

export const socialLinks = [
  { id: 'fb', href: '#', icon: '/images/fb-icon.png', label: 'Facebook' },
  { id: 'in', href: '#', icon: '/images/in-icon.png', label: 'LinkedIn' },
  { id: 'google', href: '#', icon: '/images/google-icon.png', label: 'Google' },
];
