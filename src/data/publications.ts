// Titles, citations and INSPIRE record IDs checked against the public INSPIRE API.
// The PDG chapter links to its parent Review of Particle Physics record.
type Paper = {
  title: string;
  citation: string;
  inspire: number;
  label?: string;
  companion?: { title: string; citation: string; inspire: number };
  extra?: { label: string; url: string };
};
type PublicationGroup = { id: string; title: string; papers: Paper[] };

export const publications: PublicationGroup[] = [
  {
    id: 'tcc', title: 'Tcc · Doubly charmed tetraquark',
    papers: [{
      title: 'Observation of an exotic narrow doubly charmed tetraquark',
      citation: 'LHCb · Nature Physics 18 (2022) 751–754', inspire: 1915457,
      label: 'Discovery',
      companion: {
        title: 'Study of the doubly charmed tetraquark Tcc⁺',
        citation: 'LHCb · Nature Communications 13 (2022) 3351', inspire: 1915358,
      },
    }],
  },
  {
    id: 'methods', title: 'Methods', papers: [
      { title: 'Dalitz-plot decomposition for three-body decays', citation: 'JPAC · Physical Review D 101 (2020) 034033', inspire: 1758460 },
      { title: 'Wigner rotations for cascade reactions', citation: 'K. Habermann & M. Mikhasenko · Physical Review D 111 (2025) 056015', inspire: 2827198 },
    ],
  },
  {
    id: 'reviews', title: 'Reviews', papers: [
      { title: 'Resonances', citation: 'PDG · Chapter in the Review of Particle Physics, Physical Review D 110 (2024) 030001', inspire: 2817040, label: 'INSPIRE · parent review', extra: { label: 'Read the Resonances chapter', url: 'https://pdg.lbl.gov/2024/reviews/rpp2024-rev-resonances.pdf' } },
      { title: 'Scattering Theory', citation: 'C. Hanhart & M. Mikhasenko · Encyclopedia of Particle Physics, vol. 1 (2026), pp. 107–119', inspire: 3167200 },
      { title: 'Novel approaches in hadron spectroscopy', citation: 'JPAC · Progress in Particle and Nuclear Physics 127 (2022) 103981', inspire: 1997164 },
    ],
  },
  {
    id: 'light-mesons', title: 'Light meson spectroscopy', papers: [
      { title: 'Nature of the a₁(1420)', citation: 'M. Mikhasenko, B. Ketzer & A. Sarantsev · Physical Review D 91 (2015) 094015', inspire: 1341619 },
      { title: 'Triangle Singularity as the Origin of the a₁(1420)', citation: 'COMPASS · Physical Review Letters 127 (2021) 082501', inspire: 1800396 },
      { title: 'Determination of the pole position of the lightest hybrid meson candidate', citation: 'JPAC · π₁(1600) · Physical Review Letters 122 (2019) 042002', inspire: 1697661 },
      { title: 'π⁻p → η⁽′⁾π⁻p in the double-Regge region', citation: 'L. Bibrzycki et al. · European Physical Journal C 81 (2021) 647; erratum 915', inspire: 1859521 },
      { title: 'First Observation of an Exotic Reggeon', citation: 'COMPASS & JPAC · arXiv:2607.17850 (2026)', inspire: 3181789 },
    ],
  },
  {
    id: 'three-body', title: 'Three-body unitarity', papers: [
      { title: 'Three-body scattering: Ladders and Resonances', citation: 'M. Mikhasenko, Y. Wunderlich et al. · JHEP 08 (2019) 080', inspire: 1731591 },
      { title: 'Khuri–Treiman equations for ππ scattering', citation: 'JPAC · European Physical Journal C 78 (2018) 574', inspire: 1662941 },
      { title: 'Khuri–Treiman equations for 3π decays of particles with spin', citation: 'JPAC · Physical Review D 101 (2020) 054018', inspire: 1758017 },
      { title: 'ω → 3π and ωπ⁰ transition form factor revisited', citation: 'JPAC · European Physical Journal C 80 (2020) 1107', inspire: 1798661 },
      { title: 'Khuri–Treiman analysis of J/ψ → π⁺π⁻π⁰', citation: 'JPAC · Physical Review D 108 (2023) 014035', inspire: 2652616 },
      { title: 'Pole position of the a₁(1260) from τ-decay', citation: 'JPAC · Physical Review D 98 (2018) 096021', inspire: 1696497 },
    ],
  },
  {
    id: 'heavy-baryons', title: 'Heavy flavor baryons', papers: [
      { title: 'Observation of excited Ωc⁰ baryons in Ωb⁻ → Ξc⁺K⁻π⁻ decays', citation: 'LHCb · Physical Review D 104 (2021) L091102', inspire: 1879440 },
    ],
  },
  {
    id: 'exotics', title: 'Exotics · Pentaquarks', papers: [
      { title: 'Observation of a narrow pentaquark state, Pc(4312)⁺, and of two-peak structure of the Pc(4450)⁺', citation: 'LHCb · Physical Review Letters 122 (2019) 222001', inspire: 1728691 },
      { title: 'Interpretation of the LHCb Pc(4312)⁺ Signal', citation: 'JPAC · Physical Review Letters 123 (2019) 092001', inspire: 1730812 },
      { title: 'A triangle singularity and the LHCb pentaquarks', citation: 'M. Mikhasenko · arXiv:1507.06552 (2015)', inspire: 1384521 },
    ],
  },
  {
    id: 'spin', title: 'Spin', papers: [
      { title: 'Λc⁺ polarimetry using the dominant hadronic mode', citation: 'LHCb · JHEP 07 (2023) 228', inspire: 2623821 },
    ],
  },
];
