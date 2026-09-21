/**
 * Canonical Plus One (+1) Syllabus Data (For DHSE Improvement Exams)
 * Strictly conforms to the 2025-26 Kerala SCERT / DHSE Rationalized Curriculum.
 * Each part features concrete syllabus subtopics and evidence-based study minutes.
 */

export const PLUS_ONE_CHAPTERS = {
  Physics: [
    {
      num: 1,
      name: 'Units and Measurements',
      effort: 'LOW',
      parts: [
        { title: 'SI Units, Dimensions of Physical Quantities & Dimensional Analysis', minutes: 55 },
      ],
    },
    {
      num: 2,
      name: 'Motion in a Straight Line',
      effort: 'MEDIUM',
      parts: [
        { title: 'Position, Average Velocity, Instantaneous Speed & Acceleration', minutes: 60 },
        { title: 'Kinematic Equations of Uniformly Accelerated Motion & Free Fall', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Motion in a Plane',
      effort: 'MEDIUM',
      parts: [
        { title: 'Vector Addition, Resolution of Vectors & Relative Velocity in 2D', minutes: 60 },
        { title: 'Projectile Motion: Time of Flight, Range, Max Height & Uniform Circular Motion', minutes: 70 },
      ],
    },
    {
      num: 4,
      name: 'Laws of Motion',
      effort: 'HIGH',
      parts: [
        { title: "Newton's Laws of Motion, Momentum & Principle of Conservation of Momentum", minutes: 65 },
        { title: 'Static & Kinetic Friction, Rolling Friction & Circular Motion on Banked Roads', minutes: 75 },
      ],
    },
    {
      num: 5,
      name: 'Work, Energy and Power',
      effort: 'HIGH',
      parts: [
        { title: 'Work-Energy Theorem, Kinetic Energy & Work Done by Variable Force', minutes: 65 },
        { title: 'Potential Energy of a Spring, Conservation of Mechanical Energy & Collisions', minutes: 75 },
      ],
    },
    {
      num: 6,
      name: 'System of Particles and Rotational Motion',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Center of Mass, Linear Momentum Conservation & Vector Product of Vectors', minutes: 70 },
        { title: 'Torque, Angular Momentum, Moment of Inertia & Kinematics of Rotational Motion', minutes: 80 },
      ],
    },
    {
      num: 7,
      name: 'Gravitation',
      effort: 'MEDIUM',
      parts: [
        { title: "Universal Law of Gravitation, Kepler's Laws & Acceleration due to Gravity", minutes: 60 },
        { title: 'Gravitational Potential Energy, Escape Speed & Satellite Orbital Motion', minutes: 70 },
      ],
    },
    {
      num: 8,
      name: 'Mechanical Properties of Solids',
      effort: 'LOW',
      parts: [
        { title: "Hooke's Law, Stress-Strain Curve, Young's Modulus & Bulk/Shear Modulus", minutes: 55 },
      ],
    },
    {
      num: 9,
      name: 'Mechanical Properties of Fluids',
      effort: 'HIGH',
      parts: [
        { title: "Pascal's Law, Archimedes Principle & Equation of Continuity", minutes: 65 },
        { title: "Bernoulli's Principle, Torricelli's Law, Viscosity & Surface Tension", minutes: 75 },
      ],
    },
    {
      num: 10,
      name: 'Thermal Properties of Matter',
      effort: 'MEDIUM',
      parts: [
        { title: 'Temperature Scales, Thermal Expansion & Specific Heat Capacity', minutes: 60 },
        { title: "Calorimetry, Latent Heat, Heat Transfer (Conduction, Convection, Radiation) & Newton's Cooling", minutes: 65 },
      ],
    },
    {
      num: 11,
      name: 'Thermodynamics',
      effort: 'HIGH',
      parts: [
        { title: 'Thermal Equilibrium, Zeroth & First Law of Thermodynamics (Work & Internal Energy)', minutes: 65 },
        { title: 'Thermodynamic Processes (Isothermal, Adiabatic, Isochoric) & Second Law of Thermodynamics', minutes: 70 },
      ],
    },
    {
      num: 12,
      name: 'Kinetic Theory',
      effort: 'LOW',
      parts: [
        { title: 'Molecular Nature of Gas, Ideal Gas Equation, Pressure Calculation & Law of Equipartition of Energy', minutes: 55 },
      ],
    },
    {
      num: 13,
      name: 'Oscillations',
      effort: 'HIGH',
      parts: [
        { title: 'Periodic & Simple Harmonic Motion (SHM), Displacement, Velocity & Acceleration', minutes: 65 },
        { title: 'Energy in SHM, Simple Pendulum Period & Forced/Damped Oscillations', minutes: 70 },
      ],
    },
    {
      num: 14,
      name: 'Waves',
      effort: 'HIGH',
      parts: [
        { title: 'Transverse & Longitudinal Waves, Wave Speed, Principle of Superposition', minutes: 65 },
        { title: 'Standing Waves in Pipes (Open/Closed), Stretched Strings, Beats & Harmonics', minutes: 75 },
      ],
    },
  ],

  Chemistry: [
    {
      num: 1,
      name: 'Some Basic Concepts of Chemistry',
      effort: 'HIGH',
      parts: [
        { title: 'Law of Chemical Combinations, Dalton Atomic Theory & Mole Concept Calculations', minutes: 65 },
        { title: 'Empirical/Molecular Formula, Stoichiometry & Concentration Terms (Molarity, Molality)', minutes: 70 },
      ],
    },
    {
      num: 2,
      name: 'Structure of Atom',
      effort: 'HIGH',
      parts: [
        { title: 'Bohr Model of Hydrogen Atom, Dual Character of Matter & Heisenberg Uncertainty Principle', minutes: 65 },
        { title: 'Quantum Mechanical Model, Quantum Numbers (n, l, m, s) & Orbitals Shapes', minutes: 70 },
        { title: 'Aufbau Principle, Pauli Exclusion, Hund Rule & Electronic Configurations', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Classification of Elements & Periodicity',
      effort: 'LOW',
      parts: [
        { title: 'Modern Periodic Law, Periodic Trends: Atomic Radii, Ionization Enthalpy & Electronegativity', minutes: 55 },
      ],
    },
    {
      num: 4,
      name: 'Chemical Bonding and Molecular Structure',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Octet Rule, Ionic Bond, Lattice Enthalpy & Covalent Bond Parameters', minutes: 65 },
        { title: 'VSEPR Theory Geometry Predictions & Valence Bond Theory (Hybridization: sp, sp2, sp3)', minutes: 75 },
        { title: 'Molecular Orbital Theory (O2, N2 Energy Diagrams, Bond Order) & Hydrogen Bonding', minutes: 75 },
      ],
    },
    {
      num: 5,
      name: 'Chemical Thermodynamics',
      effort: 'HIGH',
      parts: [
        { title: 'Internal Energy, Heat, Work, First Law of Thermodynamics & Enthalpy of Reactions', minutes: 65 },
        { title: "Hess's Law, Entropy, Second Law & Gibbs Free Energy Criterion for Spontaneity", minutes: 75 },
      ],
    },
    {
      num: 6,
      name: 'Equilibrium',
      effort: 'VERY_HIGH',
      parts: [
        { title: "Law of Chemical Equilibrium, Equilibrium Constants (Kc, Kp) & Le Chatelier's Principle", minutes: 70 },
        { title: 'Ionic Equilibrium: Acids & Bases Concepts, Ionization of Water, pH Scale', minutes: 75 },
        { title: 'Common Ion Effect, Buffer Solutions, Solubility Product (Ksp) & Salt Hydrolysis', minutes: 75 },
      ],
    },
    {
      num: 7,
      name: 'Redox Reactions',
      effort: 'LOW',
      parts: [
        { title: 'Oxidation States Rules, Balancing Redox Reactions (Ion-Electron & Oxidation Number Methods)', minutes: 55 },
      ],
    },
    {
      num: 8,
      name: 'Organic Chemistry: Basic Principles & Techniques',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'IUPAC Nomenclature of Polyfunctional Organic Compounds & Structural Isomerism', minutes: 70 },
        { title: 'Electronic Displacements: Inductive, Electromeric, Resonance & Hyperconjugation Effects', minutes: 75 },
        { title: 'Reactive Intermediates (Carbocations, Free Radicals) & Purification/Qualitative Analysis', minutes: 70 },
      ],
    },
    {
      num: 9,
      name: 'Hydrocarbons',
      effort: 'HIGH',
      parts: [
        { title: 'Alkanes: Conformations (Ethane), Preparation, Free Radical Halogenation Mechanism', minutes: 65 },
        { title: "Alkenes & Alkynes: Geometrical Isomerism, Markovnikov's Addition & Ozonolysis", minutes: 75 },
        { title: "Aromatic Hydrocarbons: Huckel's Rule, Electrophilic Substitution in Benzene (Nitration, Friedel-Crafts)", minutes: 75 },
      ],
    },
  ],

  Mathematics: [
    {
      num: 1,
      name: 'Sets',
      effort: 'LOW',
      parts: [
        { title: 'Representation of Sets, Subsets, Power Set, Universal Set & Venn Diagrams', minutes: 55 },
        { title: 'Operations on Sets (Union, Intersection, Difference) & De Morgan Laws', minutes: 60 },
      ],
    },
    {
      num: 2,
      name: 'Relations and Functions',
      effort: 'MEDIUM',
      parts: [
        { title: 'Cartesian Product of Sets, Definition of Relations, Domain & Range', minutes: 60 },
        { title: 'Functions, Real Functions (Identity, Polynomial, Modulus, Signum) & Algebra of Functions', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Trigonometric Functions',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Radian Measure, Signs of Trigonometric Functions & Domain/Range', minutes: 65 },
        { title: 'Trigonometric Identities of Sum, Difference & Multiple Angles (sin 2x, cos 2x)', minutes: 75 },
        { title: 'Product-to-Sum Formulas & Comprehensive Proof-Based Trigonometric Equations', minutes: 75 },
      ],
    },
    {
      num: 4,
      name: 'Complex Numbers and Quadratic Equations',
      effort: 'MEDIUM',
      parts: [
        { title: 'Algebra of Complex Numbers, Modulus & Conjugate of Complex Numbers', minutes: 60 },
        { title: 'Square Root of Complex Numbers & Solving Quadratic Equations in C', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Linear Inequalities',
      effort: 'LOW',
      parts: [
        { title: 'Algebraic Solutions of Linear Inequalities in One Variable & Number Line Representation', minutes: 55 },
      ],
    },
    {
      num: 6,
      name: 'Permutations and Combinations',
      effort: 'HIGH',
      parts: [
        { title: 'Fundamental Principle of Counting, Factorial Notation & Permutations (nPr)', minutes: 65 },
        { title: 'Combinations (nCr) Properties & Applied Word Problems in Selection', minutes: 70 },
      ],
    },
    {
      num: 7,
      name: 'Binomial Theorem',
      effort: 'MEDIUM',
      parts: [
        { title: 'Binomial Theorem for Positive Integral Indices & General/Middle Term Calculations', minutes: 60 },
      ],
    },
    {
      num: 8,
      name: 'Sequences and Series',
      effort: 'MEDIUM',
      parts: [
        { title: 'Arithmetic Progression (AP) General Term & Sum of n Terms', minutes: 60 },
        { title: 'Geometric Progression (GP) General Term, Sum of n Terms & Geometric Mean', minutes: 65 },
      ],
    },
    {
      num: 9,
      name: 'Straight Lines',
      effort: 'HIGH',
      parts: [
        { title: 'Slope of a Line, Angle Between Two Lines & Various Forms of Line Equations', minutes: 65 },
        { title: 'General Equation of a Line & Distance of a Point From a Line', minutes: 70 },
      ],
    },
    {
      num: 10,
      name: 'Conic Sections',
      effort: 'HIGH',
      parts: [
        { title: 'Standard Equations and Properties of Circles and Parabolas', minutes: 65 },
        { title: 'Standard Equations, Foci, Vertices, Eccentricity of Ellipse and Hyperbola', minutes: 75 },
      ],
    },
    {
      num: 11,
      name: 'Introduction to Three Dimensional Geometry',
      effort: 'LOW',
      parts: [
        { title: 'Coordinate Axes, Coordinate Planes, Distance Formula & Section Formula in 3D', minutes: 55 },
      ],
    },
    {
      num: 12,
      name: 'Limits and Derivatives',
      effort: 'HIGH',
      parts: [
        { title: 'Intuitive Idea of Limits, Standard Algebraic & Trigonometric Limits', minutes: 65 },
        { title: 'Derivative as Rate of Change, First Principle of Differentiation & Product/Quotient Rules', minutes: 75 },
      ],
    },
    {
      num: 13,
      name: 'Statistics',
      effort: 'MEDIUM',
      parts: [
        { title: 'Measures of Dispersion: Range, Mean Deviation About Mean and Median', minutes: 60 },
        { title: 'Variance and Standard Deviation of Ungrouped & Grouped Frequency Distributions', minutes: 65 },
      ],
    },
    {
      num: 14,
      name: 'Probability',
      effort: 'MEDIUM',
      parts: [
        { title: 'Random Experiments, Sample Spaces, Events & Mutually Exclusive Events', minutes: 60 },
        { title: 'Axiomatic Approach to Probability & Addition Rule for Two Events', minutes: 65 },
      ],
    },
  ],

  'Computer Science': [
    {
      num: 1,
      name: 'The Discipline of Computing',
      effort: 'LOW',
      parts: [
        { title: 'History of Computing, Von Neumann Architecture, Generation of Computers & Software Types', minutes: 50 },
      ],
    },
    {
      num: 2,
      name: 'Data Representation and Boolean Logic',
      effort: 'MEDIUM',
      parts: [
        { title: 'Number Systems: Binary, Octal, Decimal, Hexadecimal & Base Conversions', minutes: 60 },
        { title: 'Character Representation (ASCII, Unicode), Boolean Operators, Truth Tables & Logic Gates', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Components of the Computer System',
      effort: 'LOW',
      parts: [
        { title: 'Hardware Components: CPU Registers, ALU, Control Unit & Memory Hierarchy (RAM, ROM, Cache)', minutes: 50 },
        { title: 'Input/Output Devices, Motherboard Ports & Operating System Functions', minutes: 50 },
      ],
    },
    {
      num: 4,
      name: 'Principles of Programming & Problem Solving',
      effort: 'HIGH',
      parts: [
        { title: 'Problem Solving Cycle, Algorithms Conception & Flowcharting Symbols', minutes: 55 },
        { title: 'Translators: Assemblers, Compilers, Interpreters, IDEs & Programming Paradigms', minutes: 60 },
      ],
    },
    {
      num: 5,
      name: 'Introduction to C++ Programming',
      effort: 'MEDIUM',
      parts: [
        { title: 'C++ Tokens, Keywords, Identifiers, Literals & Basic C++ Program Structure', minutes: 55 },
        { title: 'Input/Output Streams (cin, cout), Cascading Operators & Header Files', minutes: 60 },
      ],
    },
    {
      num: 6,
      name: 'Data Types and Operators',
      effort: 'MEDIUM',
      parts: [
        { title: 'Fundamental Data Types, Modifiers, Variable Declaration & Initialization', minutes: 55 },
        { title: 'Arithmetic, Relational, Logical, Assignment Operators & Type Conversions (Implicit/Explicit)', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Control Statements',
      effort: 'HIGH',
      parts: [
        { title: 'Decision Statements: if, if-else, nested if & switch-case with break', minutes: 65 },
        { title: 'Iteration Statements: for loop, while loop, do-while loop & Jump Statements (break, continue)', minutes: 70 },
      ],
    },
    {
      num: 8,
      name: 'Arrays',
      effort: 'HIGH',
      parts: [
        { title: '1D Array Declaration, Memory Allocation, Traversing & Linear Search Algorithm', minutes: 65 },
        { title: 'Bubble Sort Algorithm, 2D Arrays Declaration & Matrix Input/Output Operations', minutes: 70 },
      ],
    },
    {
      num: 9,
      name: 'Functions',
      effort: 'HIGH',
      parts: [
        { title: 'Built-in String/Math Functions, User Defined Functions Prototype & Definitions', minutes: 65 },
        { title: 'Function Arguments: Call by Value vs Call by Reference, Scope of Variables & Recursion', minutes: 70 },
      ],
    },
    {
      num: 10,
      name: 'Computer Networks',
      effort: 'MEDIUM',
      parts: [
        { title: 'Network Topologies (Star, Bus, Ring, Mesh) & Network Categories (LAN, MAN, WAN)', minutes: 55 },
        { title: 'Guided/Unguided Media, Network Devices (Hub, Switch, Router, Gateway) & IP Address', minutes: 60 },
      ],
    },
  ],

  Botany: [
    {
      num: 1,
      name: 'Biological Classification',
      effort: 'MEDIUM',
      parts: [
        { title: 'Five Kingdom Classification: Kingdom Monera, Protista, Fungi Characteristics', minutes: 60 },
        { title: 'Viruses, Viroids, Prions & Lichens Ecological Significance', minutes: 55 },
      ],
    },
    {
      num: 2,
      name: 'Plant Kingdom',
      effort: 'HIGH',
      parts: [
        { title: 'Algae, Bryophytes & Pteridophytes Classification, Life Cycles & Alternation of Generations', minutes: 65 },
        { title: 'Gymnosperms & Angiosperms Features, Seed Habits & Double Fertilization Outline', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Morphology of Flowering Plants',
      effort: 'HIGH',
      parts: [
        { title: 'Roots, Stems & Leaves Modifications (Storage, Support, Photosynthesis)', minutes: 60 },
        { title: 'Inflorescence (Racemose/Cymose), Flower Parts, Placentation & Fruit/Seed Morphology', minutes: 70 },
      ],
    },
    {
      num: 4,
      name: 'Anatomy of Flowering Plants',
      effort: 'MEDIUM',
      parts: [
        { title: 'Meristematic & Permanent Tissues (Simple vs Complex: Xylem, Phloem)', minutes: 60 },
        { title: 'Anatomy of Dicot & Monocot Root, Stem & Leaf with Secondary Growth Concept', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Cell: The Unit of Life',
      effort: 'MEDIUM',
      parts: [
        { title: 'Prokaryotic vs Eukaryotic Cells, Cell Wall & Fluid Mosaic Membrane Model', minutes: 60 },
        { title: 'Endomembrane System: ER, Golgi, Lysosomes, Mitochondria, Chloroplasts & Nucleus Structure', minutes: 65 },
      ],
    },
    {
      num: 6,
      name: 'Cell Cycle and Cell Division',
      effort: 'MEDIUM',
      parts: [
        { title: 'Cell Cycle Phases: Interphase (G1, S, G2) & Mitosis Stages (Prophase to Telophase)', minutes: 60 },
        { title: 'Meiosis I & Meiosis II Phases, Crossing Over & Biological Significance of Meiosis', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Photosynthesis in Higher Plants',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Photosynthetic Pigments, Light Reaction, Electron Transport (Z-Scheme) & Photophosphorylation', minutes: 70 },
        { title: 'Chemiosmotic Hypothesis, Calvin Cycle (C3 Pathway) & C4 Dicarboxylic Acid Pathway', minutes: 75 },
        { title: "Photorespiration, Factors Affecting Photosynthesis & Blackman's Law of Limiting Factors", minutes: 65 },
      ],
    },
    {
      num: 8,
      name: 'Respiration in Plants',
      effort: 'HIGH',
      parts: [
        { title: 'Glycolysis (EMP Pathway) Steps, Net ATP Yield & Fermentation (Lactic Acid, Alcoholic)', minutes: 65 },
        { title: 'TCA Cycle (Krebs Cycle), Electron Transport System (ETS), Oxidative Phosphorylation & RQ', minutes: 75 },
      ],
    },
    {
      num: 9,
      name: 'Plant Growth and Development',
      effort: 'LOW',
      parts: [
        { title: 'Growth Characteristics, Differentiation & Plant Growth Regulators (Auxin, Gibberellin, Cytokinin)', minutes: 55 },
        { title: 'Inhibitory Hormones (Ethylene, Abscisic Acid), Photoperiodism & Vernalization', minutes: 55 },
      ],
    },
  ],

  Zoology: [
    {
      num: 1,
      name: 'The Living World',
      effort: 'LOW',
      parts: [
        { title: 'Characteristics of Living Organisms, Binomial Nomenclature Rules & Taxonomic Hierarchy', minutes: 50 },
      ],
    },
    {
      num: 2,
      name: 'Animal Kingdom',
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Basis of Classification (Symmetry, Coelom, Segmentation) & Non-Chordates: Porifera to Aschelminthes', minutes: 70 },
        { title: 'Higher Non-Chordates: Annelida, Arthropoda, Mollusca, Echinodermata & Hemichordata', minutes: 75 },
        { title: 'Phylum Chordata: Cyclostomata, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia', minutes: 80 },
      ],
    },
    {
      num: 3,
      name: 'Structural Organisation in Animals',
      effort: 'MEDIUM',
      parts: [
        { title: 'Animal Tissues: Epithelial, Connective (Bone, Cartilage, Blood), Muscular & Neural', minutes: 60 },
        { title: 'Morphology and Anatomy of Frog: Digestive, Circulatory, Respiratory & Excretory Systems', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'Biomolecules',
      effort: 'HIGH',
      parts: [
        { title: 'Primary & Secondary Metabolites, Biomacromolecules, Amino Acids & Protein Structures', minutes: 65 },
        { title: 'Enzymes: Chemical Nature, Mechanism of Action, Factors Affecting Activity & Co-factors', minutes: 70 },
      ],
    },
    {
      num: 5,
      name: 'Breathing and Exchange of Gases',
      effort: 'MEDIUM',
      parts: [
        { title: 'Human Respiratory System Anatomy, Mechanism of Breathing, Respiratory Volumes & Capacities', minutes: 60 },
        { title: 'Gas Exchange in Alveoli, Transport of O2 and CO2 (Oxygen Dissociation Curve) & Disorders', minutes: 65 },
      ],
    },
    {
      num: 6,
      name: 'Body Fluids and Circulation',
      effort: 'HIGH',
      parts: [
        { title: 'Blood Composition, Blood Groups (ABO, Rh System) & Blood Coagulation Mechanism', minutes: 60 },
        { title: 'Human Circulatory System: Cardiac Cycle, Heart Sounds, ECG Interpretation & Disorders (Hypertension, CAD)', minutes: 75 },
      ],
    },
    {
      num: 7,
      name: 'Excretory Products and their Elimination',
      effort: 'HIGH',
      parts: [
        { title: 'Modes of Excretion (Ammonotelic, Ureotelic, Uricotelic) & Human Nephron Structure', minutes: 65 },
        { title: 'Mechanism of Urine Formation (Filtration, Reabsorption, Secretion), Counter-Current Mechanism & Regulation', minutes: 75 },
      ],
    },
    {
      num: 8,
      name: 'Locomotion and Movement',
      effort: 'MEDIUM',
      parts: [
        { title: 'Types of Movement, Skeletal Muscle Structure & Sliding Filament Mechanism of Muscle Contraction', minutes: 65 },
        { title: 'Human Skeletal System (Axial vs Appendicular), Joints & Musculoskeletal Disorders', minutes: 60 },
      ],
    },
    {
      num: 9,
      name: 'Neural Control and Coordination',
      effort: 'HIGH',
      parts: [
        { title: 'Neuron Structure, Nerve Impulse Generation, Conduction & Synaptic Transmission', minutes: 65 },
        { title: 'Central Nervous System: Forebrain, Midbrain, Hindbrain & Reflex Action', minutes: 65 },
      ],
    },
    {
      num: 10,
      name: 'Chemical Coordination and Integration',
      effort: 'MEDIUM',
      parts: [
        { title: 'Endocrine Glands: Hypothalamus, Pituitary, Thyroid, Parathyroid, Adrenal, Pancreas Hormones', minutes: 65 },
        { title: 'Mechanism of Hormone Action (Peptide vs Steroid Hormones) & Endocrine Disorders', minutes: 60 },
      ],
    },
  ],
};

import { createCanonicalTasks } from './syllabus-plus-two.js';

export const PLUS_ONE_SYLLABUS = [
  ...createCanonicalTasks('Physics', '+1', PLUS_ONE_CHAPTERS.Physics),
  ...createCanonicalTasks('Chemistry', '+1', PLUS_ONE_CHAPTERS.Chemistry),
  ...createCanonicalTasks('Mathematics', '+1', PLUS_ONE_CHAPTERS.Mathematics),
  ...createCanonicalTasks('Computer Science', '+1', PLUS_ONE_CHAPTERS['Computer Science']),
  ...createCanonicalTasks('Botany', '+1', PLUS_ONE_CHAPTERS.Botany),
  ...createCanonicalTasks('Zoology', '+1', PLUS_ONE_CHAPTERS.Zoology),
];
