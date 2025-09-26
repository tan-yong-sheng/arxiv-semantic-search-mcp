import { Category } from './types';

// Categories supported by ArXiv Xplorer API (for search validation)
export const API_SUPPORTED_CATEGORIES = [
  'cs.AI', 'cs.LG', 'cs.CL', 'cs.CV', 'cs.IR', 'cs.NE', 'stat.ML', 'math.ST', 'physics.data-an'
];

// Comprehensive ArXiv category list (for get_categories function)
export const COMPREHENSIVE_CATEGORIES: Category[] = [
  // Computer Science (cs.*)
  { id: 'cs.AI', name: 'Artificial Intelligence', description: 'Covers all areas of AI except Vision, Robotics, Machine Learning, Multiagent Systems, and Computation and Language' },
  { id: 'cs.AR', name: 'Hardware Architecture', description: 'Systems organization and hardware architecture' },
  { id: 'cs.CC', name: 'Computational Complexity', description: 'Models of computation, complexity classes, structural complexity' },
  { id: 'cs.CE', name: 'Computational Engineering, Finance, and Science', description: 'Applications of computer science to mathematical modeling' },
  { id: 'cs.CG', name: 'Computational Geometry', description: 'Roughly includes material in ACM Subject Classes I.3.5 and F.2.2' },
  { id: 'cs.CL', name: 'Computation and Language', description: 'Natural language processing' },
  { id: 'cs.CR', name: 'Cryptography and Security', description: 'Authentication, public key cryptosystems, proof-carrying code' },
  { id: 'cs.CV', name: 'Computer Vision and Pattern Recognition', description: 'Image processing, computer vision, pattern recognition' },
  { id: 'cs.CY', name: 'Computers and Society', description: 'Impact of computers on society, computer ethics, information technology' },
  { id: 'cs.DB', name: 'Databases', description: 'Database management, datamining, and data processing' },
  { id: 'cs.DC', name: 'Distributed, Parallel, and Cluster Computing', description: 'Fault-tolerance, distributed algorithms' },
  { id: 'cs.DL', name: 'Digital Libraries', description: 'All aspects of digital library design and document creation' },
  { id: 'cs.DM', name: 'Discrete Mathematics', description: 'Combinatorics, graph theory, applications of probability' },
  { id: 'cs.DS', name: 'Data Structures and Algorithms', description: 'Data structures and analysis of algorithms' },
  { id: 'cs.ET', name: 'Emerging Technologies', description: 'Alternative approaches to information processing' },
  { id: 'cs.FL', name: 'Formal Languages and Automata Theory', description: 'Automata theory, formal language theory, grammars' },
  { id: 'cs.GL', name: 'General Literature', description: 'Introductory material, survey material, predictions of future trends' },
  { id: 'cs.GR', name: 'Graphics', description: 'All aspects of computer graphics' },
  { id: 'cs.GT', name: 'Computer Science and Game Theory', description: 'Intersection of computer science and game theory' },
  { id: 'cs.HC', name: 'Human-Computer Interaction', description: 'Human factors, user interfaces, collaborative computing' },
  { id: 'cs.IR', name: 'Information Retrieval', description: 'Indexing, dictionaries, retrieval, content and analysis' },
  { id: 'cs.IT', name: 'Information Theory', description: 'Theoretical and experimental aspects of information theory' },
  { id: 'cs.LG', name: 'Machine Learning', description: 'All aspects of machine learning research' },
  { id: 'cs.LO', name: 'Logic in Computer Science', description: 'Finite model theory, logics of programs, modal logic' },
  { id: 'cs.MA', name: 'Multiagent Systems', description: 'Multiagent systems, distributed artificial intelligence' },
  { id: 'cs.MM', name: 'Multimedia', description: 'Roughly includes material in ACM Subject Class H.5.1' },
  { id: 'cs.MS', name: 'Mathematical Software', description: 'Roughly includes material in ACM Subject Class G.4' },
  { id: 'cs.NA', name: 'Numerical Analysis', description: 'Alias for math.NA' },
  { id: 'cs.NE', name: 'Neural and Evolutionary Computing', description: 'Neural networks, connectionism, genetic algorithms' },
  { id: 'cs.NI', name: 'Networking and Internet Architecture', description: 'Computer communication networks, network protocols' },
  { id: 'cs.OH', name: 'Other Computer Science', description: 'For documents that don\'t fit elsewhere' },
  { id: 'cs.OS', name: 'Operating Systems', description: 'Roughly includes material in ACM Subject Classes D.4.1, D.4.2' },
  { id: 'cs.PF', name: 'Performance', description: 'Performance measurement, queueing, and simulation' },
  { id: 'cs.PL', name: 'Programming Languages', description: 'Language semantics, features, programming approaches' },
  { id: 'cs.RO', name: 'Robotics', description: 'Roughly includes material in ACM Subject Class I.2.9' },
  { id: 'cs.SC', name: 'Symbolic Computation', description: 'Roughly includes material in ACM Subject Class I.1' },
  { id: 'cs.SD', name: 'Sound', description: 'All aspects of computing with sound, and sound as information channel' },
  { id: 'cs.SE', name: 'Software Engineering', description: 'Design tools, software metrics, testing and debugging' },
  { id: 'cs.SI', name: 'Social and Information Networks', description: 'Design, analysis, modeling of social networks' },
  { id: 'cs.SY', name: 'Systems and Control', description: 'Alias for eess.SY' },

  // Economics (econ.*)
  { id: 'econ.EM', name: 'Econometrics', description: 'Econometric Theory, Micro-Econometrics, Macro-Econometrics' },
  { id: 'econ.GN', name: 'General Economics', description: 'General methodological, applied, empirical contributions' },
  { id: 'econ.TH', name: 'Theoretical Economics', description: 'Theoretical contributions to Contract Theory, Decision Theory' },

  // Electrical Engineering and Systems Science (eess.*)
  { id: 'eess.AS', name: 'Audio and Speech Processing', description: 'Processing signals representing audio, speech, language' },
  { id: 'eess.IV', name: 'Image and Video Processing', description: 'Theory, algorithms, architectures for image/video processing' },
  { id: 'eess.SP', name: 'Signal Processing', description: 'Theory, algorithms, performance analysis of signal/data analysis' },
  { id: 'eess.SY', name: 'Systems and Control', description: 'Theoretical and experimental research in control systems' },

  // Mathematics (math.*)
  { id: 'math.AC', name: 'Commutative Algebra', description: 'Commutative rings, modules, ideals, homological algebra' },
  { id: 'math.AG', name: 'Algebraic Geometry', description: 'Algebraic varieties, stacks, sheaves, schemes' },
  { id: 'math.AP', name: 'Analysis of PDEs', description: 'Existence, uniqueness, boundary conditions, PDE theory' },
  { id: 'math.AT', name: 'Algebraic Topology', description: 'Homotopy theory, homological algebra, algebraic treatments' },
  { id: 'math.CA', name: 'Classical Analysis and ODEs', description: 'Special functions, orthogonal polynomials, harmonic analysis' },
  { id: 'math.CO', name: 'Combinatorics', description: 'Discrete mathematics, graph theory, enumeration' },
  { id: 'math.CT', name: 'Category Theory', description: 'Enriched categories, topoi, abelian categories' },
  { id: 'math.CV', name: 'Complex Variables', description: 'Holomorphic functions, automorphic group actions, complex geometry' },
  { id: 'math.DG', name: 'Differential Geometry', description: 'Complex, contact, Riemannian, pseudo-Riemannian geometry' },
  { id: 'math.DS', name: 'Dynamical Systems', description: 'Dynamics of differential equations, mechanics, iterations' },
  { id: 'math.FA', name: 'Functional Analysis', description: 'Banach spaces, function spaces, real functions' },
  { id: 'math.GM', name: 'General Mathematics', description: 'Mathematical material of general interest' },
  { id: 'math.GN', name: 'General Topology', description: 'Continuum theory, point-set topology, spaces with structure' },
  { id: 'math.GR', name: 'Group Theory', description: 'Finite groups, topological groups, representation theory' },
  { id: 'math.GT', name: 'Geometric Topology', description: 'Manifolds, orbifolds, polyhedra, cell complexes' },
  { id: 'math.HO', name: 'History and Overview', description: 'Biographies, philosophy, education, recreational mathematics' },
  { id: 'math.IT', name: 'Information Theory', description: 'Alias for cs.IT' },
  { id: 'math.KT', name: 'K-Theory and Homology', description: 'Algebraic and topological K-theory' },
  { id: 'math.LO', name: 'Logic', description: 'Logic, set theory, point-set topology, formal mathematics' },
  { id: 'math.MG', name: 'Metric Geometry', description: 'Euclidean, hyperbolic, discrete, convex geometry' },
  { id: 'math.MP', name: 'Mathematical Physics', description: 'Application of mathematics to physics problems' },
  { id: 'math.NA', name: 'Numerical Analysis', description: 'Numerical algorithms for problems in analysis' },
  { id: 'math.NT', name: 'Number Theory', description: 'Prime numbers, diophantine equations, analytic number theory' },
  { id: 'math.OA', name: 'Operator Algebras', description: 'Algebras of operators on Hilbert space' },
  { id: 'math.OC', name: 'Optimization and Control', description: 'Operations research, linear programming, control theory' },
  { id: 'math.PR', name: 'Probability', description: 'Theory and applications of probability and stochastic processes' },
  { id: 'math.QA', name: 'Quantum Algebra', description: 'Quantum groups, skein theories, operadic algebra' },
  { id: 'math.RA', name: 'Rings and Algebras', description: 'Non-commutative rings, universal algebra, linear algebra' },
  { id: 'math.RT', name: 'Representation Theory', description: 'Linear representations of algebras and groups' },
  { id: 'math.SG', name: 'Symplectic Geometry', description: 'Hamiltonian systems, symplectic flows' },
  { id: 'math.SP', name: 'Spectral Theory', description: 'Schrodinger operators, operators on manifolds' },
  { id: 'math.ST', name: 'Statistics Theory', description: 'Applied, computational and theoretical statistics' },

  // Physics categories
  { id: 'astro-ph.CO', name: 'Cosmology and Nongalactic Astrophysics', description: 'Early universe, cosmic microwave background' },
  { id: 'astro-ph.EP', name: 'Earth and Planetary Astrophysics', description: 'Interplanetary medium, planetary physics' },
  { id: 'astro-ph.GA', name: 'Astrophysics of Galaxies', description: 'Galaxies or Milky Way phenomena' },
  { id: 'astro-ph.HE', name: 'High Energy Astrophysical Phenomena', description: 'Cosmic rays, gamma rays, X-rays' },
  { id: 'astro-ph.IM', name: 'Instrumentation and Methods', description: 'Detector design, experiment proposals' },
  { id: 'astro-ph.SR', name: 'Solar and Stellar Astrophysics', description: 'White dwarfs, brown dwarfs, stellar evolution' },
  { id: 'cond-mat.dis-nn', name: 'Disordered Systems and Neural Networks', description: 'Glasses, spin glasses, neural networks' },
  { id: 'cond-mat.mes-hall', name: 'Mesoscale and Nanoscale Physics', description: 'Semiconducting nanostructures, quantum dots' },
  { id: 'cond-mat.mtrl-sci', name: 'Materials Science', description: 'Techniques, synthesis, characterization' },
  { id: 'cond-mat.other', name: 'Other Condensed Matter', description: 'Work that doesn\'t fit other classifications' },
  { id: 'cond-mat.quant-gas', name: 'Quantum Gases', description: 'Ultracold atomic and molecular gases, Bose-Einstein condensation' },
  { id: 'cond-mat.soft', name: 'Soft Condensed Matter', description: 'Membranes, polymers, liquid crystals' },
  { id: 'cond-mat.stat-mech', name: 'Statistical Mechanics', description: 'Phase transitions, thermodynamics, field theory' },
  { id: 'cond-mat.str-el', name: 'Strongly Correlated Electrons', description: 'Quantum magnetism, non-Fermi liquids' },
  { id: 'cond-mat.supr-con', name: 'Superconductivity', description: 'Superconductivity theory and experiment' },
  { id: 'gr-qc', name: 'General Relativity and Quantum Cosmology', description: 'Gravitational physics, cosmology' },
  { id: 'hep-ex', name: 'High Energy Physics - Experiment', description: 'Results from particle physics experiments' },
  { id: 'hep-lat', name: 'High Energy Physics - Lattice', description: 'Lattice field theory, phenomenology' },
  { id: 'hep-ph', name: 'High Energy Physics - Phenomenology', description: 'Theoretical particle physics' },
  { id: 'hep-th', name: 'High Energy Physics - Theory', description: 'Formal aspects of quantum field theory, string theory' },
  { id: 'math-ph', name: 'Mathematical Physics', description: 'Application of mathematics to physics problems' },
  { id: 'nlin.AO', name: 'Adaptation and Self-Organizing Systems', description: 'Adaptation, self-organizing systems' },
  { id: 'nlin.CD', name: 'Chaotic Dynamics', description: 'Dynamical systems, chaos, quantum chaos' },
  { id: 'nlin.CG', name: 'Cellular Automata and Lattice Gases', description: 'Computational methods, time series' },
  { id: 'nlin.PS', name: 'Pattern Formation and Solitons', description: 'Pattern formation, coherent structures' },
  { id: 'nlin.SI', name: 'Exactly Solvable and Integrable Systems', description: 'Integrable PDEs, Painleve analysis' },
  { id: 'nucl-ex', name: 'Nuclear Experiment', description: 'Experimental nuclear physics results' },
  { id: 'nucl-th', name: 'Nuclear Theory', description: 'Theory of nuclear structure covering wide area' },
  { id: 'physics.acc-ph', name: 'Accelerator Physics', description: 'Accelerator theory, simulation, technology' },
  { id: 'physics.ao-ph', name: 'Atmospheric and Oceanic Physics', description: 'Atmospheric physics, climate science' },
  { id: 'physics.app-ph', name: 'Applied Physics', description: 'Applications to new technology, devices, materials' },
  { id: 'physics.atm-clus', name: 'Atomic and Molecular Clusters', description: 'Clusters, nanoparticles properties' },
  { id: 'physics.atom-ph', name: 'Atomic Physics', description: 'Atomic structure, spectra, collisions, cold atoms' },
  { id: 'physics.bio-ph', name: 'Biological Physics', description: 'Molecular, cellular, neurological biophysics' },
  { id: 'physics.chem-ph', name: 'Chemical Physics', description: 'Physics of atoms, molecules, clusters' },
  { id: 'physics.class-ph', name: 'Classical Physics', description: 'Newtonian dynamics, Maxwell\'s equations' },
  { id: 'physics.comp-ph', name: 'Computational Physics', description: 'Computational science applied to physics' },
  { id: 'physics.data-an', name: 'Data Analysis, Statistics and Probability', description: 'Methods for physics data analysis' },
  { id: 'physics.ed-ph', name: 'Physics Education', description: 'Research study results, teaching improvements' },
  { id: 'physics.flu-dyn', name: 'Fluid Dynamics', description: 'Turbulence, instabilities, fluid flows' },
  { id: 'physics.gen-ph', name: 'General Physics', description: 'General physics topics' },
  { id: 'physics.geo-ph', name: 'Geophysics', description: 'Atmospheric, biogeosciences, computational geophysics' },
  { id: 'physics.hist-ph', name: 'History and Philosophy of Physics', description: 'History and philosophy of physics' },
  { id: 'physics.ins-det', name: 'Instrumentation and Detectors', description: 'Instrumentation for natural science research' },
  { id: 'physics.med-ph', name: 'Medical Physics', description: 'Radiation therapy, biomedical imaging' },
  { id: 'physics.optics', name: 'Optics', description: 'All aspects of optics from adaptive to X-ray' },
  { id: 'physics.plasm-ph', name: 'Plasma Physics', description: 'Fundamental plasma physics, magnetic confinement' },
  { id: 'physics.pop-ph', name: 'Popular Physics', description: 'Popular physics topics' },
  { id: 'physics.soc-ph', name: 'Physics and Society', description: 'Structure, dynamics of societies and groups' },
  { id: 'physics.space-ph', name: 'Space Physics', description: 'Space plasma physics, heliophysics, space weather' },
  { id: 'quant-ph', name: 'Quantum Physics', description: 'Quantum physics topics' },

  // Quantitative Biology (q-bio.*)
  { id: 'q-bio.BM', name: 'Biomolecules', description: 'DNA, RNA, proteins, molecular structures' },
  { id: 'q-bio.CB', name: 'Cell Behavior', description: 'Cell signaling, morphogenesis, apoptosis' },
  { id: 'q-bio.GN', name: 'Genomics', description: 'DNA sequencing, gene finding, genomic structure' },
  { id: 'q-bio.MN', name: 'Molecular Networks', description: 'Gene regulation, signal transduction' },
  { id: 'q-bio.NC', name: 'Neurons and Cognition', description: 'Synapse, cortex, neural networks' },
  { id: 'q-bio.OT', name: 'Other Quantitative Biology', description: 'Work that doesn\'t fit other classifications' },
  { id: 'q-bio.PE', name: 'Populations and Evolution', description: 'Population dynamics, evolution, phylogeny' },
  { id: 'q-bio.QM', name: 'Quantitative Methods', description: 'Experimental, numerical, statistical methods' },
  { id: 'q-bio.SC', name: 'Subcellular Processes', description: 'Assembly of subcellular structures, transport' },
  { id: 'q-bio.TO', name: 'Tissues and Organs', description: 'Blood flow, biomechanics, tumor growth' },

  // Quantitative Finance (q-fin.*)
  { id: 'q-fin.CP', name: 'Computational Finance', description: 'Computational methods, Monte Carlo, PDE' },
  { id: 'q-fin.EC', name: 'Economics', description: 'Alias for econ.GN' },
  { id: 'q-fin.GN', name: 'General Finance', description: 'Development of quantitative methodologies' },
  { id: 'q-fin.MF', name: 'Mathematical Finance', description: 'Mathematical and analytical methods' },
  { id: 'q-fin.PM', name: 'Portfolio Management', description: 'Security selection, optimization, strategies' },
  { id: 'q-fin.PR', name: 'Pricing of Securities', description: 'Valuation and hedging of financial securities' },
  { id: 'q-fin.RM', name: 'Risk Management', description: 'Measurement and management of financial risks' },
  { id: 'q-fin.ST', name: 'Statistical Finance', description: 'Statistical, econometric analyses of markets' },
  { id: 'q-fin.TR', name: 'Trading and Market Microstructure', description: 'Market microstructure, liquidity' },

  // Statistics (stat.*)
  { id: 'stat.AP', name: 'Applications', description: 'Biology, education, engineering, environmental sciences' },
  { id: 'stat.CO', name: 'Computation', description: 'Algorithms, simulation, visualization' },
  { id: 'stat.ME', name: 'Methodology', description: 'Design, surveys, model selection, multiple testing' },
  { id: 'stat.ML', name: 'Machine Learning', description: 'Machine learning with statistical grounding' },
  { id: 'stat.OT', name: 'Other Statistics', description: 'Work that doesn\'t fit other classifications' },
  { id: 'stat.TH', name: 'Statistics Theory', description: 'Alias for math.ST' }
];

export const getCategories = (): string[] => {
  return COMPREHENSIVE_CATEGORIES.map(cat => cat.id);
};

export const validateCategories = (categories: string[]): string[] => {
  // Only validate against API-supported categories for search functionality
  return categories.filter(cat => API_SUPPORTED_CATEGORIES.includes(cat));
};

export const getApiSupportedCategories = (): Category[] => {
  // Return only categories that are actually supported by the API for search
  return COMPREHENSIVE_CATEGORIES.filter(cat => API_SUPPORTED_CATEGORIES.includes(cat.id));
};