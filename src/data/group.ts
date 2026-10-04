export const links = {
  faculty: 'https://www.physik.ruhr-uni-bochum.de/en/Professuren/prof-dr-mikhail-mikhasenko/',
  group: 'https://www.ep1.ruhr-uni-bochum.de/en/research/research-group-mikhasenko/',
  members: 'https://www.ep1.ruhr-uni-bochum.de/en/the-institute/members/',
  teaching: 'https://www.ep1.ruhr-uni-bochum.de/en/teaching/',
  email: 'mailto:mikhail.mikhasenko@rub.de',
};
export const projects = [
  {number: '01', tag: 'HADRON SPECTROSCOPY', title: 'What holds exotic matter together?', text: 'Exploring tetraquarks and pentaquarks, hadronic molecules, hybrids and glueballs. We connect heavy- and light-flavor spectroscopy through LHCb and COMPASS.', detail: 'Exotic states · Strong interaction'},
  {number: '02', tag: 'AMPLITUDES & COMPUTING', title: 'From collision data to particle properties.', text: 'Reaction modeling, partial-wave analysis and phenomenology connect experimental observations to the underlying physics. Machine learning helps us investigate complex data.', detail: 'Amplitude analysis · Machine learning'},
  {number: '03', tag: 'DETECTOR DEVELOPMENT', title: 'Building the next view of a collision.', text: 'Our work on the LHCb SciFi tracker connects detector operation and upgrades with photosensor readout, silicon photomultipliers and fast front-end electronics.', detail: 'SciFi tracker · Photosensor readout'},
];
export const career = [
  ['Nov 2023–present', 'Professor (W2TTW3)', 'Institute of Experimental Physics I, Ruhr University Bochum'],
  ['2021–2023', 'Research Fellow', 'ORIGINS Excellence Cluster, LMU Munich'],
  ['2019–2021', 'Senior Research Fellow', 'CERN, Switzerland'],
  ['2014–2019', 'Ph.D. · summa cum laude', 'University of Bonn, Helmholtz Institute for Radiation and Nuclear Physics. Supervisor: Prof. Dr. Bernhard Ketzer.'],
];
type Course = {
  term: string;
  name: string;
  detail: string;
  references?: { label: string; url: string }[];
};

export const courses: Course[] = [
  {
    term: 'Summer 2026',
    name: 'Introduction to Programming with Julia for Physicists',
    detail: '16160237-SS 2026',
  },
  {
    term: 'Summer 2026',
    name: 'Introduction to Nuclear and Particle Physics II',
    detail: 'Lecture & exercises · 160401 / 160402',
    references: [
      { label: 'Moodle (internal)', url: 'https://moodle.ruhr-uni-bochum.de/course/view.php?id=70537' },
      { label: 'Recommended textbook', url: 'https://www.amazon.de/Experimental-Foundations-Particle-Physics/dp/0521521475' },
    ],
  },
  {
    term: 'Summer 2026',
    name: 'Ruhr Hadron Physics Seminar',
    detail: 'With M. Fritsch and F. Afzal · 160419',
    references: [{ label: 'Seminar programme', url: 'https://indico.global/category/528/' }],
  },
  {
    term: 'Winter 2025/26',
    name: 'Introduction to Nuclear and Particle Physics I',
    detail: 'KT1 · Lecture & exercises',
    references: [{ label: 'KT1 teaching study', url: 'https://inspirehep.net/literature/3200750' }],
  },
  {
    term: 'Winter 2025/26',
    name: 'Hadron and Particle Physics',
    detail: 'Seminar with M. Fritsch and F. Afzal · 160435',
  },
  {
    term: '2025',
    name: 'RUB–TU Dortmund Data Analysis',
    detail: 'Co-developed block course · 16 lectures and eight tutorials',
    references: [{ label: 'Course materials', url: 'https://rub-ep1.github.io/Data-Analysis-Block-Course-2025/' }],
  },
  { term: 'Summer 2025', name: 'Hadron Physics', detail: 'Lecture & exercises with F. Afzal · 160414 / 160415' },
  { term: 'Summer 2025', name: 'Hadrons at Large Hadron Collider', detail: 'Seminar · 160432' },
  { term: 'Winter 2024/25', name: 'Data Analysis in High Energy Physics', detail: '160430 / 160431' },
];
export const leadership = [
  ['DEMOS · Speaker & PI', 'Democratizing Models (2025–2028): a cross-disciplinary consortium developing reusable scientific models.'],
  ['SHARP · Hadron spectroscopy', 'Leader of Working Group 2 in COST Action CA24159, connecting the hadron structure and spectroscopy communities.'],
  ['LHCb · Physics coordination', 'Beauty and Quarkonia convenor, October 2026–October 2028; Charm-Hadron Decays and Properties coordinator, 2022–2024.'],
  ['COMPASS & PDG', 'COMPASS spectroscopy coordinator, 2022–2026; member of the Particle Data Group meson team since 2019.'],
];
export const software = [
  ['GIModel.jl', 'Meson masses, wavefunctions and decays from the Godfrey–Isgur quark model.', 'https://github.com/mmikhasenko/GIModel.jl'],
  ['ThreeBodyDecays.jl', 'Three-body decay kinematics and amplitude models.', 'https://github.com/mmikhasenko/ThreeBodyDecays.jl'],
  ['HadronicLineshapes.jl', 'Reusable resonance models for hadronic amplitudes.', 'https://github.com/mmikhasenko/HadronicLineshapes.jl'],
  ['CascadeDecays.jl', 'Decay amplitudes built from sequential decay chains in a cascade basis.', 'https://github.com/RUB-EP1/CascadeDecays.jl'],
  ['NumericalDistributions.jl', 'Numerically defined probability distributions with automatic normalization and sampling.', 'https://github.com/mmikhasenko/NumericalDistributions.jl'],
  ['LorentzVectorBase.jl', 'Shared interfaces for four-momenta and relativistic kinematics in high-energy physics.', 'https://github.com/JuliaHEP/LorentzVectorBase.jl'],
  ['FourVectors.jl', 'Cartesian four-momenta, spatial rotations and Lorentz boosts.', 'https://github.com/JuliaHEP/FourVectors.jl'],
];
export const training = [
  ['International K-matrix Day', 'An annual open-access programme founded in 2024, bringing together lectures, exercises, code and recordings.', 'https://rub-ep1.github.io/kmatrix-day-2025/'],
  ['Schools & advanced lectures', 'Amplitude analysis at the CERN Summer Programme (2020), Scattering Theory in the Global Classroom (2022), and the Bochum school Modern Techniques in Hadron Spectroscopy (2024).', null],
  ['Research-shaped teaching', 'Reproducible computational notebooks connect foundational skills to research problems. Our 2026 study examines the benefits and limits of AI-integrated particle physics education.', 'https://inspirehep.net/literature/3200750'],
];
