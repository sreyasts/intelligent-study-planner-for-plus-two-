/**
 * Canonical Plus Two (+2) Syllabus Data
 * Verified against Kerala SCERT & DHSE Scheme of Work.
 * Each part features concrete syllabus subtopics and evidence-based study minutes.
 */

export const PLUS_TWO_CHAPTERS = {
  Physics: [
    {
      num: 1,
      name: 'Electric Charges and Fields',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: "Electric Charges, Conductors & Coulomb's Law", minutes: 65 },
        { title: "Electric Field Lines, Dipoles & Gauss's Law Applications", minutes: 75 },
      ],
    },
    {
      num: 2,
      name: 'Electrostatic Potential and Capacitance',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Electrostatic Potential, Equipotential Surfaces & Work Done', minutes: 60 },
        { title: 'Parallel Plate Capacitors, Dielectrics & Stored Energy', minutes: 70 },
      ],
    },
    {
      num: 3,
      name: 'Current Electricity',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: "Ohm's Law, Drift Velocity, Mobility & Resistivity", minutes: 60 },
        { title: "Kirchhoff's Rules & Wheatstone Bridge Network", minutes: 70 },
        { title: 'Cells in Series/Parallel, EMF & Internal Resistance', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'Moving Charges and Magnetism',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Biot-Savart Law, Circular Loops & Ampere Circuital Law', minutes: 70 },
        { title: 'Magnetic Force, Solenoids & Moving Coil Galvanometer', minutes: 75 },
      ],
    },
    {
      num: 5,
      name: 'Magnetism and Matter',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Magnetic Dipole Moment, Earth Magnetism & Materials', minutes: 55 },
      ],
    },
    {
      num: 6,
      name: 'Electromagnetic Induction',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: "Magnetic Flux, Faraday's Law & Lenz's Law of Induction", minutes: 60 },
        { title: 'Motional EMF, Eddy Currents & Mutual/Self Inductance', minutes: 70 },
      ],
    },
    {
      num: 7,
      name: 'Alternating Current',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'AC Applied to Resistor, Inductor, Capacitor & Phasors', minutes: 65 },
        { title: 'Series LCR Circuit, Resonance, Power Factor & Transformers', minutes: 75 },
      ],
    },
    {
      num: 8,
      name: 'Electromagnetic Waves',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Displacement Current, EM Wave Properties & Spectrum', minutes: 50 },
      ],
    },
    {
      num: 9,
      name: 'Ray Optics and Optical Instruments',
      term: 2,
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Spherical Mirrors, Refraction & Total Internal Reflection', minutes: 70 },
        { title: 'Refraction at Spherical Surfaces, Thin Lenses & Prisms', minutes: 80 },
        { title: 'Optical Instruments: Microscopes & Astronomical Telescopes', minutes: 75 },
      ],
    },
    {
      num: 10,
      name: 'Wave Optics',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: "Huygens Principle, Wavefronts & Wave Refraction/Reflection", minutes: 65 },
        { title: "Young's Double Slit Interference & Single Slit Diffraction", minutes: 80 },
      ],
    },
    {
      num: 11,
      name: 'Dual Nature of Radiation and Matter',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: "Photoelectric Effect, Hertz/Lenard Experiments & Einstein's Equation", minutes: 60 },
        { title: 'De Broglie Wavelength of Matter Waves & Wave-Particle Duality', minutes: 60 },
      ],
    },
    {
      num: 12,
      name: 'Atoms',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: "Alpha-Particle Scattering, Rutherford Model & Bohr Atom Model", minutes: 65 },
        { title: 'Hydrogen Spectral Lines, Energy Levels & De Broglie Explanation', minutes: 65 },
      ],
    },
    {
      num: 13,
      name: 'Nuclei',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Nuclear Size, Binding Energy Curve, Nuclear Fission & Fusion', minutes: 55 },
      ],
    },
    {
      num: 14,
      name: 'Semiconductor Electronics: Materials, Devices and Simple Circuits',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Energy Bands, Intrinsic & Extrinsic Semiconductors (p-type, n-type)', minutes: 60 },
        { title: 'p-n Junction Diode Characteristics & Half/Full Wave Rectifiers', minutes: 70 },
        { title: 'Special Diodes (Zener, Photodiode, LED, Solar Cell) & Logic Circuits', minutes: 65 },
      ],
    },
  ],

  Chemistry: [
    {
      num: 1,
      name: 'Solutions',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: "Solubility, Henry's Law, Raoult's Law & Ideal Solutions", minutes: 60 },
        { title: 'Colligative Properties: Elevation of Boiling Point & Depression of Freezing Point', minutes: 70 },
        { title: "Osmotic Pressure, Reverse Osmosis & Van 't Hoff Factor", minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Electrochemistry',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Galvanic Cells, Nernst Equation & Standard Hydrogen Electrode', minutes: 70 },
        { title: "Kohlrausch's Law of Independent Migration & Molar Conductivity", minutes: 65 },
        { title: 'Electrolysis, Batteries (Primary/Secondary) & Fuel Cells', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Chemical Kinetics',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Rate of Reaction, Order, Molecularity & Rate Law Expressions', minutes: 60 },
        { title: 'Integrated Rate Equations (Zero/First Order), Half-Life & Arrhenius Activation Energy', minutes: 70 },
      ],
    },
    {
      num: 4,
      name: 'The d- and f-Block Elements',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'General Properties of Transition Elements & Electronic Configurations', minutes: 65 },
        { title: 'Lanthanoid Contraction, Actinoids & Important Compounds (KMnO4, K2Cr2O7)', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Coordination Compounds',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: "Werner's Theory, Ligands, Coordination Number & IUPAC Nomenclature", minutes: 65 },
        { title: 'Valence Bond Theory, Crystal Field Theory & Isomerism in Complexes', minutes: 75 },
      ],
    },
    {
      num: 6,
      name: 'Haloalkanes and Haloarenes',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Nomenclature, Nature of C-X Bond & Methods of Preparation', minutes: 60 },
        { title: 'Nucleophilic Substitution Mechanisms: SN1 vs SN2 Reactions', minutes: 75 },
        { title: 'Elimination Reactions, Polyhalogen Compounds & Organometallic Reagents', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Alcohols, Phenols and Ethers',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Classification, Preparation of Alcohols and Phenols & Physical Properties', minutes: 60 },
        { title: 'Chemical Reactions: Lucas Test, Kolbe Reaction, Reimer-Tiemann Reaction', minutes: 75 },
        { title: "Preparation of Ethers (Williamson Synthesis) & Chemical Cleavage", minutes: 60 },
      ],
    },
    {
      num: 8,
      name: 'Aldehydes, Ketones and Carboxylic Acids',
      term: 2,
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Nomenclature, Preparation of Aldehydes & Ketones (Rosenmund, Gattermann-Koch)', minutes: 70 },
        { title: 'Nucleophilic Addition, Aldol Condensation & Cannizzaro Reaction', minutes: 80 },
        { title: 'Carboxylic Acids: Acid Strength, HVZ Reaction & Decarboxylation', minutes: 70 },
      ],
    },
    {
      num: 9,
      name: 'Amines',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Classification, Gabriel Phthalimide Synthesis & Hoffmann Bromamide Degradation', minutes: 65 },
        { title: 'Basic Character, Carbylamine Reaction, Hinsberg Test & Diazonium Salts', minutes: 70 },
      ],
    },
    {
      num: 10,
      name: 'Biomolecules',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Carbohydrates: Monosaccharides (Glucose, Fructose), Glycosidic Linkage', minutes: 60 },
        { title: 'Amino Acids, Peptide Bond, Protein Structure & Nucleic Acids (DNA, RNA)', minutes: 65 },
      ],
    },
  ],

  Mathematics: [
    {
      num: 1,
      name: 'Relations and Functions',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Types of Relations: Reflexive, Symmetric, Transitive & Equivalence', minutes: 60 },
        { title: 'Types of Functions: One-One (Injective), Onto (Surjective) & Bijective', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Inverse Trigonometric Functions',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Principal Value Branches, Domain, Range & Simplified Evaluations', minutes: 55 },
      ],
    },
    {
      num: 3,
      name: 'Matrices',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Matrix Algebra: Addition, Scalar & Matrix Multiplication Properties', minutes: 60 },
        { title: 'Transpose, Symmetric/Skew-Symmetric Matrices & Invertibility', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'Determinants',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Determinants Expansion, Minors, Cofactors & Area of Triangles', minutes: 60 },
        { title: 'Adjoint of a Matrix, Inverse of Matrix & Solving Systems of Linear Equations', minutes: 70 },
      ],
    },
    {
      num: 5,
      name: 'Continuity and Differentiability',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Continuity of Functions, Algebra of Continuous Functions & Limits', minutes: 65 },
        { title: 'Chain Rule, Implicit Differentiation & Derivatives of Inverse Trig Functions', minutes: 75 },
        { title: 'Logarithmic Differentiation, Parametric Functions & Second Order Derivatives', minutes: 75 },
      ],
    },
    {
      num: 6,
      name: 'Application of Derivatives',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Rate of Change of Quantities & Increasing/Decreasing Functions', minutes: 65 },
        { title: 'Maxima and Minima, First & Second Derivative Tests with Applied Problems', minutes: 80 },
      ],
    },
    {
      num: 7,
      name: 'Integrals',
      term: 2,
      effort: 'VERY_HIGH',
      parts: [
        { title: 'Indefinite Integrals: Integration by Substitution & Trigonometric Identities', minutes: 75 },
        { title: 'Integrals of Special Rational Functions & Partial Fractions', minutes: 80 },
        { title: 'Integration by Parts & Definite Integrals Evaluation', minutes: 75 },
        { title: 'Fundamental Theorem of Calculus & Properties of Definite Integrals', minutes: 85 },
      ],
    },
    {
      num: 8,
      name: 'Application of Integrals',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Area under Simple Curves: Circles, Parabolas, Ellipses & Lines', minutes: 65 },
      ],
    },
    {
      num: 9,
      name: 'Differential Equations',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Order, Degree & General/Particular Solutions of Differential Equations', minutes: 60 },
        { title: 'Separable Variable Method & First-Order Linear Differential Equations', minutes: 75 },
      ],
    },
    {
      num: 10,
      name: 'Vector Algebra',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Types of Vectors, Direction Cosines, Addition & Components of Vectors', minutes: 60 },
        { title: 'Scalar (Dot) Product and Vector (Cross) Product with Applications', minutes: 70 },
      ],
    },
    {
      num: 11,
      name: 'Three Dimensional Geometry',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Direction Cosines & Direction Ratios of a Line in 3D Space', minutes: 65 },
        { title: 'Equation of a Line in Vector/Cartesian Form & Shortest Distance Between Skew Lines', minutes: 75 },
      ],
    },
    {
      num: 12,
      name: 'Linear Programming',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Mathematical Formulation, Graphical Feasible Region & Corner Point Method', minutes: 60 },
      ],
    },
    {
      num: 13,
      name: 'Probability',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Conditional Probability, Multiplication Rule & Independent Events', minutes: 65 },
        { title: "Bayes' Theorem & Law of Total Probability", minutes: 75 },
        { title: 'Random Variables, Probability Distributions & Mean Calculations', minutes: 70 },
      ],
    },
  ],

  'Computer Science': [
    {
      num: 1,
      name: 'Structures and Pointers',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Structure Definition, Declaration, Nested Structures & Array of Structures', minutes: 55 },
        { title: 'Pointers: Pointer Variables, Address Operator, Pointer Arithmetic & Dynamic Memory', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Concepts of Object-Oriented Programming',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'OOP Principles: Data Abstraction, Encapsulation, Inheritance & Polymorphism', minutes: 50 },
      ],
    },
    {
      num: 3,
      name: 'Data Structures and Operations',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Classification of Data Structures: Static vs Dynamic, Linear vs Non-linear', minutes: 55 },
        { title: 'Stack Operations: PUSH, POP, Algorithms & Underflow/Overflow Conditions', minutes: 65 },
        { title: 'Queue Operations: Insertion, Deletion & Applications of Linear Lists', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'Web Technology',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Client-Server Architecture, Web Servers, Browsers & Communication Protocols', minutes: 50 },
        { title: 'Port Numbers, DNS Concept, Static vs Dynamic Web Pages', minutes: 50 },
      ],
    },
    {
      num: 5,
      name: 'Web Designing using HTML',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Basic HTML Tags, Structure, Lists (Ordered/Unordered) & Hyperlinks', minutes: 55 },
        { title: 'Tables in HTML: Table Headers, Rows, Data, Cellpadding & Spanning', minutes: 60 },
        { title: 'HTML Forms: Form Elements, Input Types, Buttons & Form Actions', minutes: 60 },
      ],
    },
    {
      num: 6,
      name: 'Client Side Scripting using JavaScript',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'JavaScript Fundamentals: Variables, Data Types & Operators', minutes: 60 },
        { title: 'Control Structures (if, switch, for, while) & Built-in String/Math Functions', minutes: 70 },
        { title: 'DOM Events, Event Handlers & Form Validation in JavaScript', minutes: 70 },
      ],
    },
    {
      num: 7,
      name: 'Web Hosting',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Domain Registration, Web Hosting Types, Shared vs Dedicated & FTP Deployment', minutes: 50 },
      ],
    },
    {
      num: 8,
      name: 'Database Management System',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'DBMS Advantages over File Systems, Data Abstraction Levels & Data Independence', minutes: 55 },
        { title: 'Relational Model: Relations, Tuples, Keys (Candidate, Primary, Foreign)', minutes: 60 },
      ],
    },
    {
      num: 9,
      name: 'Structured Query Language (SQL)',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'SQL Data Types, DDL Commands: CREATE, ALTER, DROP Table', minutes: 65 },
        { title: 'DML Commands: INSERT, UPDATE, DELETE & SELECT Queries with Conditions', minutes: 70 },
        { title: 'Aggregate Functions, GROUP BY, HAVING, ORDER BY & Multi-table Queries', minutes: 75 },
      ],
    },
    {
      num: 10,
      name: 'Server Side Scripting using PHP',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'PHP Execution, Variables, Superglobals ($_GET, $_POST) & Operators', minutes: 60 },
        { title: 'PHP Arrays (Indexed, Associative), Loops & Custom Functions', minutes: 65 },
        { title: 'Connecting PHP to MySQL Database, Executing Queries & Displaying Records', minutes: 75 },
      ],
    },
    {
      num: 11,
      name: 'Advances in Computing',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Distributed Computing, Cloud Models (IaaS, PaaS, SaaS), Grid & IoT Concepts', minutes: 50 },
      ],
    },
    {
      num: 12,
      name: 'ICT and Society',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Cyber Crimes, IT Act 2000, Intellectual Property Rights & Cyber Security Best Practices', minutes: 50 },
      ],
    },
  ],

  Botany: [
    {
      num: 1,
      name: 'Sexual Reproduction in Flowering Plants',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Flower Structure, Microsporogenesis & Pollen Grain Development', minutes: 60 },
        { title: 'Megasporogenesis, Embryo Sac & Pollination Mechanisms (Agents, Outbreeding)', minutes: 65 },
        { title: 'Double Fertilization, Endosperm, Embryo Development, Apomixis & Polyembryony', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Biotechnology: Principles and Processes',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Recombinant DNA Technology: Restriction Enzymes, Ligases & Cloning Vectors', minutes: 65 },
        { title: 'Competent Host Transformation, Polymerase Chain Reaction (PCR) & Bioreactors', minutes: 70 },
      ],
    },
    {
      num: 3,
      name: 'Biotechnology and its Applications',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Biotechnological Applications in Agriculture: Bt Cotton, RNA Interference', minutes: 60 },
        { title: 'Medical Applications: Genetically Engineered Insulin, Gene Therapy & Transgenic Animals', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'Organisms and Populations',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Organism Adaptations, Population Attributes: Natality, Mortality & Age Pyramids', minutes: 60 },
        { title: 'Population Growth Models (Exponential, Logistic) & Species Interactions', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Ecosystem',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Ecosystem Structure, Productivity (GPP, NPP) & Decomposition Process', minutes: 55 },
        { title: 'Energy Flow, Trophic Levels, Ecological Pyramids & Nutrient Cycling', minutes: 60 },
      ],
    },
  ],

  Zoology: [
    {
      num: 1,
      name: 'Human Reproduction',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Male & Female Reproductive Systems, Anatomy & Histology of Gonads', minutes: 65 },
        { title: 'Gametogenesis (Spermatogenesis, Oogenesis) & Menstrual Cycle Phases', minutes: 75 },
        { title: 'Fertilization, Blastocyst Implantation, Pregnancy & Parturition', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Reproductive Health',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Population Stabilization, Contraceptive Methods & MTP Regulations', minutes: 50 },
        { title: 'Sexually Transmitted Infections & Assisted Reproductive Technologies (ART, IVF, ZIFT)', minutes: 55 },
      ],
    },
    {
      num: 3,
      name: 'Principles of Inheritance and Variation',
      term: 1,
      effort: 'VERY_HIGH',
      parts: [
        { title: "Mendel's Laws of Inheritance: Monohybrid, Dihybrid Crosses & Incomplete Dominance", minutes: 70 },
        { title: 'Codominance (ABO Blood Groups), Chromosomal Theory & Linkage/Recombination', minutes: 75 },
        { title: 'Sex Determination, Mutation & Genetic Disorders (Mendelian vs Chromosomal)', minutes: 75 },
      ],
    },
    {
      num: 4,
      name: 'Molecular Basis of Inheritance',
      term: 2,
      effort: 'VERY_HIGH',
      parts: [
        { title: 'DNA Structure, Packaging of DNA Helix & Search for Genetic Material', minutes: 70 },
        { title: 'DNA Replication Mechanism, Transcription Unit & RNA Processing', minutes: 75 },
        { title: 'Genetic Code, Translation Process, Lac Operon Regulation & DNA Fingerprinting', minutes: 80 },
      ],
    },
    {
      num: 5,
      name: 'Evolution',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Origin of Life, Biological Evolution Evidence: Paleontological & Embryological', minutes: 60 },
        { title: "Darwinian Natural Selection, Hardy-Weinberg Principle & Human Evolution Lineage", minutes: 65 },
      ],
    },
    {
      num: 6,
      name: 'Human Health and Disease',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Common Diseases in Humans: Typhoid, Pneumonia, Malaria (Plasmodium Life Cycle)', minutes: 65 },
        { title: 'Innate & Acquired Immunity, Antibodies Structure, Vaccination & Autoimmunity', minutes: 70 },
        { title: 'AIDS Pathology, Cancer Causes/Diagnosis & Drugs/Alcohol Abuse', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Microbes in Human Welfare',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Microbes in Household Food, Industrial Products (Antibiotics, Enzymes) & Sewage Treatment', minutes: 55 },
        { title: 'Biogas Production, Biocontrol Agents & Biofertilizers', minutes: 50 },
      ],
    },
    {
      num: 8,
      name: 'Biodiversity and Conservation',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Levels of Biodiversity, Patterns of Diversity & Species-Area Relationship', minutes: 55 },
        { title: 'Biodiversity Loss Causes ("The Evil Quartet") & Conservation (In-situ vs Ex-situ)', minutes: 55 },
      ],
    },
  ],
  Accountancy: [
    {
      num: 1,
      name: 'Accounting for Partnership: Basic Concepts',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Partnership Deed, Provisions Affecting Accounting & Capital Accounts (Fixed vs Fluctuating)', minutes: 65 },
        { title: 'Distribution of Profit, P&L Appropriation Account & Past Adjustments', minutes: 75 },
      ],
    },
    {
      num: 2,
      name: 'Reconstitution of a Partnership Firm: Admission of a Partner',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'New Profit Sharing Ratio, Sacrificing Ratio & Goodwill Valuation/Accounting', minutes: 70 },
        { title: 'Revaluation of Assets, Liabilities & Adjustment of Capitals', minutes: 75 },
      ],
    },
    {
      num: 3,
      name: 'Reconstitution: Retirement/Death of a Partner',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Gaining Ratio, Goodwill Treatment & Revaluation upon Retirement', minutes: 65 },
        { title: 'Settlement of Amount Due to Retiring Partner & Deceased Partner Profit Calculation', minutes: 70 },
      ],
    },
    {
      num: 4,
      name: 'Dissolution of a Partnership Firm',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Modes of Dissolution, Settlement of Accounts & Realisation Account', minutes: 70 },
        { title: 'Partners Loan, Capital Accounts & Cash/Bank Account on Dissolution', minutes: 75 },
      ],
    },
    {
      num: 5,
      name: 'Accounting for Share Capital',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Issue of Shares at Par/Premium, Calls in Arrear & Calls in Advance', minutes: 70 },
        { title: 'Forfeiture of Shares Issued at Par & Premium', minutes: 75 },
        { title: 'Reissue of Forfeited Shares & Capital Reserve Transfer', minutes: 70 },
      ],
    },
    {
      num: 6,
      name: 'Issue and Redemption of Debentures',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Issue of Debentures for Cash, Consideration Other Than Cash & Collateral Security', minutes: 65 },
        { title: 'Terms of Issue & Redemption, Interest on Debentures & Writing off Loss', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Financial Statements of a Company',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Balance Sheet of a Company as per Schedule III Part I', minutes: 65 },
        { title: 'Statement of Profit and Loss as per Schedule III Part II', minutes: 60 },
      ],
    },
    {
      num: 8,
      name: 'Analysis of Financial Statements',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Meaning, Significance & Tools: Comparative & Common Size Statements', minutes: 55 },
      ],
    },
    {
      num: 9,
      name: 'Accounting Ratios',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Liquidity Ratios (Current, Quick) & Solvency Ratios (Debt-Equity, Total Assets to Debt)', minutes: 65 },
        { title: 'Activity/Turnover Ratios (Inventory, Trade Receivables/Payables) & Profitability Ratios (Gross, Net, ROI)', minutes: 75 },
      ],
    },
    {
      num: 10,
      name: 'Cash Flow Statement',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Operating Activities: Calculation of Cash from Operations under Indirect Method', minutes: 75 },
        { title: 'Investing & Financing Activities, Final Cash & Cash Equivalents Reconciliation', minutes: 70 },
      ],
    },
  ],
  'Business Studies': [
    {
      num: 1,
      name: 'Nature and Significance of Management',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Concept, Objectives, Importance & Management as Art, Science, Profession', minutes: 60 },
        { title: 'Levels of Management, Functions & Coordination Nature and Importance', minutes: 60 },
      ],
    },
    {
      num: 2,
      name: 'Principles of Management',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: "Fayol's 14 Principles of General Management", minutes: 65 },
        { title: "Taylor's Scientific Management: Principles and Techniques", minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Business Environment',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Meaning, Dimensions (Economic, Social, Tech, Political, Legal) & Demonetization', minutes: 55 },
      ],
    },
    {
      num: 4,
      name: 'Planning',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Concept, Importance, Limitations & Planning Process Steps', minutes: 60 },
      ],
    },
    {
      num: 5,
      name: 'Organising',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Concept, Organising Process & Organizational Structure (Functional vs Divisional)', minutes: 65 },
        { title: 'Formal vs Informal Organization, Delegation & Decentralization', minutes: 65 },
      ],
    },
    {
      num: 6,
      name: 'Staffing',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Concept, Importance, Staffing as Part of HRM & Staffing Process', minutes: 60 },
        { title: 'Recruitment Sources (Internal/External), Selection Process & Training Methods', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Directing',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Concept, Supervision, Motivation (Maslow Hierarchy, Financial/Non-Financial)', minutes: 65 },
        { title: 'Leadership Styles (Autocratic, Democratic, Laissez-faire) & Communication Barriers', minutes: 65 },
      ],
    },
    {
      num: 8,
      name: 'Controlling',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Concept, Importance, Relationship with Planning & Controlling Process Steps', minutes: 55 },
      ],
    },
    {
      num: 9,
      name: 'Financial Management',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Meaning, Objectives, Financial Decisions (Investment, Financing, Dividend)', minutes: 65 },
        { title: 'Financial Planning, Capital Structure Factors & Fixed/Working Capital Requirements', minutes: 70 },
      ],
    },
    {
      num: 10,
      name: 'Financial Markets',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Money Market Instruments & Capital Market (Primary vs Secondary)', minutes: 65 },
        { title: 'Stock Exchange Functions, Trading Procedure & SEBI Objectives/Functions', minutes: 65 },
      ],
    },
    {
      num: 11,
      name: 'Marketing',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Marketing Philosophies & Marketing Mix: Product (Branding, Packaging, Labelling)', minutes: 65 },
        { title: 'Price Determination, Physical Distribution Channels & Promotion Mix (Advertising, Sales, PR)', minutes: 70 },
      ],
    },
    {
      num: 12,
      name: 'Consumer Protection',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Importance, Consumer Rights, Responsibilities & Redressal Agencies under CPA 2019', minutes: 55 },
      ],
    },
  ],
  Economics: [
    {
      num: 1,
      name: 'Introduction to Microeconomics',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Central Problems of an Economy, Production Possibility Frontier & Opportunity Cost', minutes: 55 },
      ],
    },
    {
      num: 2,
      name: 'Theory of Consumer Behaviour',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Utility Analysis (Total vs Marginal, Law of Diminishing Marginal Utility)', minutes: 65 },
        { title: 'Indifference Curve Analysis, Budget Set/Line & Consumer Equilibrium', minutes: 70 },
        { title: 'Demand Curve, Law of Demand, Elasticity of Demand & Determinants', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Production and Costs',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Production Function, TP, MP, AP & Law of Variable Proportions / Returns to Scale', minutes: 65 },
        { title: 'Short Run Costs (TFC, TVC, TC, AFC, AVC, AC, MC) & Long Run Cost Curves', minutes: 70 },
      ],
    },
    {
      num: 4,
      name: 'Theory of the Firm Under Perfect Competition',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Features of Perfect Competition, Total, Average & Marginal Revenue', minutes: 60 },
        { title: 'Profit Maximisation Conditions & Short Run/Long Run Supply Curve of a Firm', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Market Equilibrium',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Equilibrium Price and Quantity Determination & Shift in Demand/Supply', minutes: 65 },
        { title: 'Applications of Demand-Supply: Price Ceiling and Price Floor', minutes: 60 },
      ],
    },
    {
      num: 6,
      name: 'Non-Competitive Markets',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Simple Monopoly, Monopolistic Competition & Oligopoly Key Characteristics', minutes: 55 },
      ],
    },
    {
      num: 7,
      name: 'Introduction to Macroeconomics',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Emergence of Macroeconomics, Context & Circular Flow of Income in a 2-Sector Economy', minutes: 55 },
      ],
    },
    {
      num: 8,
      name: 'National Income Accounting',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Basic Aggregates: GDP, GNP, NDP, NNP at Market Price and Factor Cost', minutes: 70 },
        { title: 'Measurement of National Income: Value Added, Income & Expenditure Methods', minutes: 75 },
        { title: 'Nominal vs Real GDP, GDP Deflator & GDP as Welfare Indicator Limitations', minutes: 60 },
      ],
    },
    {
      num: 9,
      name: 'Money and Banking',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Functions of Money, Demand for Money & Motives for Holding Cash', minutes: 60 },
        { title: 'Commercial Banks Credit Creation Process & Money Multiplier', minutes: 65 },
        { title: 'Central Bank (RBI) Functions & Quantitative/Qualitative Credit Control Tools', minutes: 65 },
      ],
    },
    {
      num: 10,
      name: 'Determination of Income and Employment',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Aggregate Demand, Aggregate Supply, Propensity to Consume (APC, MPC, APS, MPS)', minutes: 65 },
        { title: 'Short Run Equilibrium Output, Investment Multiplier & Deficient/Excess Demand', minutes: 75 },
      ],
    },
    {
      num: 11,
      name: 'Government Budget and the Economy',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Meaning, Objectives, Revenue vs Capital Receipts & Expenditure Classification', minutes: 60 },
        { title: 'Measures of Government Deficit: Revenue, Fiscal, Primary Deficit & Implications', minutes: 65 },
      ],
    },
    {
      num: 12,
      name: 'Open Economy Macroeconomics',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Balance of Payments (Current vs Capital Account) & Autonomous/Accommodating Items', minutes: 65 },
        { title: 'Foreign Exchange Rate (Fixed vs Flexible) & Determination in Open Markets', minutes: 60 },
      ],
    },
  ],
  'Computer Applications': [
    {
      num: 1,
      name: 'Review of C++ Programming',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Data Types, Operators, Expressions & Control Structures Review', minutes: 60 },
      ],
    },
    {
      num: 2,
      name: 'Arrays and Strings',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Single & Multidimensional Arrays, String Manipulation & Applications in Business', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Functions',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Function Declaration, Parameter Passing (Value vs Reference) & Scope Rules', minutes: 60 },
      ],
    },
    {
      num: 4,
      name: 'Web Technology',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Client-Server Architecture, Web Servers, Browsers & Communication Protocols', minutes: 60 },
      ],
    },
    {
      num: 5,
      name: 'Web Designing using HTML',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'HTML Structural Tags, Text Formatting, Lists & Hyperlinks', minutes: 65 },
        { title: 'Tables, Forms, Input Controls & Multimedia Embedding', minutes: 70 },
      ],
    },
    {
      num: 6,
      name: 'Client Side Scripting using JavaScript',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'JavaScript Syntax, Variables, Operators & Control Structures', minutes: 65 },
        { title: 'DOM Manipulation, Event Handling & Client-Side Form Validation', minutes: 70 },
      ],
    },
    {
      num: 7,
      name: 'Web Hosting',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Domain Registration, DNS, Hosting Types & FTP Publishing', minutes: 55 },
      ],
    },
    {
      num: 8,
      name: 'Database Management System',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Database Concepts, Relational Data Model, Keys & Normalization Fundamentals', minutes: 65 },
      ],
    },
    {
      num: 9,
      name: 'Structured Query Language (SQL)',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'DDL Commands (CREATE, ALTER, DROP) & Table Constraints', minutes: 65 },
        { title: 'DML Commands (INSERT, UPDATE, DELETE) & Queries (SELECT, WHERE, GROUP BY, ORDER BY)', minutes: 70 },
      ],
    },
    {
      num: 10,
      name: 'Enterprise Resource Planning (ERP)',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Concept, Modules of ERP, Benefits & ERP Implementation in Modern Business', minutes: 55 },
      ],
    },
  ],
  History: [
    {
      num: 1,
      name: 'Bricks, Beads and Bones',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Harappan Civilisation: Urban Planning, Craft Production & Trade Networks', minutes: 65 },
        { title: 'Social Differences, Harappan Script, Weights & Causes of Decline', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Kings, Farmers and Towns',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Sixteen Mahajanapadas, Magadha Rise & Mauryan Administration', minutes: 65 },
        { title: 'Inscriptions Decipherment (Ashokan Edicts) & Post-Mauryan Kingdoms', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Kinship, Caste and Class',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'Social Stratification, Varna/Jati Rules & Gender Access to Property in Mahabharata Period', minutes: 60 },
        { title: 'The Critical Edition of the Mahabharata & Social Differences Beyond Caste', minutes: 60 },
      ],
    },
    {
      num: 4,
      name: 'Thinkers, Beliefs and Buildings',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Philosophical Currents, Jainism Philosophy & Early Buddhist Teachings', minutes: 65 },
        { title: 'Buddhist Stupas (Sanchi Architecture), Mahayana Growth & Early Hindu Temples', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Through the Eyes of Travellers',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Al-Biruni (Kitab-ul-Hind) on Caste System & Ibn Battuta (Rihla) on Indian Cities', minutes: 65 },
        { title: 'Francois Bernier on Mughal Ownership of Land & Eastern Despotism Comparison', minutes: 60 },
      ],
    },
    {
      num: 6,
      name: 'Bhakti-Sufi Traditions',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Early Traditions in South India (Alvars & Nayanars), Virashaiva Movement', minutes: 65 },
        { title: 'Sufism Principles, Khanqah Life & Popular Silsilas in India', minutes: 65 },
        { title: 'Voices of Rejection: Kabir, Guru Nanak & Mirabai Composites', minutes: 60 },
      ],
    },
    {
      num: 7,
      name: 'An Imperial Capital: Vijayanagara',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Discovery of Hampi, Water Resources, Fortifications & Royal Centre', minutes: 65 },
        { title: 'Mahanavami Dibba, Sacred Centre Temples (Virupaksha, Vittala) & Amara-Nayaka System', minutes: 70 },
      ],
    },
    {
      num: 8,
      name: 'Peasants, Zamindars and the State',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Agrarian Society in 16th-17th Centuries, Village Community & Role of Women', minutes: 60 },
        { title: 'Zamindari Power, Ain-i-Akbari of Abul Fazl & Revenue System', minutes: 65 },
      ],
    },
    {
      num: 9,
      name: 'Colonialism and the Countryside',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Permanent Settlement in Bengal, Jotedars Rise & Fifth Report', minutes: 65 },
        { title: 'The Ryotwari System, Deccan Riots of 1875 & Cotton Boom Repercussions', minutes: 65 },
      ],
    },
    {
      num: 10,
      name: 'Rebels and the Raj',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: '1857 Revolt Outbreak, Pattern of Rebellion, Leaders & Causes', minutes: 65 },
        { title: 'British Repression, Visual Images of 1857 & Nationalist Hero Representation', minutes: 65 },
      ],
    },
    {
      num: 11,
      name: 'Mahatma Gandhi and the Nationalist Movement',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Champaran to Non-Cooperation Movement, Khilafat Movement & Satyagraha Technique', minutes: 65 },
        { title: 'Salt March (Dandi), Round Table Conferences & Quit India Movement', minutes: 70 },
      ],
    },
    {
      num: 12,
      name: 'Framing the Constitution',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Constituent Assembly Composition, Vision of the Constitution & Objectives Resolution', minutes: 65 },
        { title: 'Debates on Rights, Federal Powers, Language Question & Dr. Ambedkar Draft', minutes: 65 },
      ],
    },
  ],
  'Political Science': [
    {
      num: 1,
      name: 'The End of Bipolarity',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Soviet System Features, Gorbachev Reforms & Disintegration Causes/Consequences', minutes: 65 },
        { title: 'Shock Therapy and Its Consequences, Post-Communist Regimes & India-Russia Relations', minutes: 65 },
      ],
    },
    {
      num: 2,
      name: 'Contemporary Centres of Power',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'European Union Political/Economic Influence & ASEAN Economic Community', minutes: 65 },
        { title: 'Rise of Chinese Economy, Market Reforms & Sino-Indian Relations', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Contemporary South Asia',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Democracy in Pakistan and Bangladesh & Monarchy to Democracy in Nepal', minutes: 65 },
        { title: 'Ethnic Conflict in Sri Lanka, India-Pakistan Conflicts & SAARC / SAFTA', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'International Organisations',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Need for International Organisations, UN Evolution, Principal Organs & Agencies', minutes: 65 },
        { title: 'UN Security Council Reform Debates, Jurisdiction & Unipolar World Context', minutes: 65 },
      ],
    },
    {
      num: 5,
      name: 'Security in the Contemporary World',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Traditional Security Notions (Internal/External) vs Non-Traditional (Human & Global Security)', minutes: 60 },
      ],
    },
    {
      num: 6,
      name: 'Environment and Natural Resources',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Global Commons, Common But Differentiated Responsibilities & Indigenous Peoples Rights', minutes: 55 },
      ],
    },
    {
      num: 7,
      name: 'Globalisation',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Concept, Causes & Political, Economic, Cultural Consequences of Globalisation', minutes: 55 },
      ],
    },
    {
      num: 8,
      name: 'Challenges of Nation-Building',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Three Challenges of Independent India & Partition: Legacy, Process, Consequences', minutes: 65 },
        { title: 'Integration of Princely States (Sardar Patel, Hyderabad, Kashmir) & States Reorganisation', minutes: 70 },
      ],
    },
    {
      num: 9,
      name: 'Era of One-Party Dominance',
      term: 1,
      effort: 'MEDIUM',
      parts: [
        { title: 'First Three General Elections, Nature of Congress Dominance & Social/Ideological Coalition', minutes: 65 },
        { title: 'Opposition Parties Emergence: Socialist, BJS, CPI, Swatantra Party', minutes: 60 },
      ],
    },
    {
      num: 10,
      name: 'Politics of Planned Development',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Planning Commission, First vs Second Five Year Plans & Agricultural vs Industrial Debate', minutes: 65 },
      ],
    },
    {
      num: 11,
      name: "India's External Relations",
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Nehru Foreign Policy Principles, Non-Aligned Movement & Panchsheel Framework', minutes: 65 },
        { title: 'Wars with China (1962) and Pakistan (1965, 1971), Nuclear Policy Evolution', minutes: 70 },
      ],
    },
    {
      num: 12,
      name: 'Challenges to and Restoration of the Congress System',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Political Succession (Shastri, Indira Gandhi), 1967 General Elections & Non-Congressism', minutes: 65 },
        { title: 'Congress Split 1969, Abolition of Privy Purses & 1971 Election Restoration', minutes: 65 },
      ],
    },
    {
      num: 13,
      name: 'The Crisis of Democratic Order',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Economic Context, Gujarat & Bihar Movements, Railway Strike & Declaration of Emergency', minutes: 65 },
        { title: 'Controversies Regarding Emergency, Shah Commission & 1977 Lok Sabha Elections', minutes: 65 },
      ],
    },
    {
      num: 14,
      name: 'Regional Aspirations',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Jammu and Kashmir Issue, Punjab Crisis & Anandpur Sahib Resolution', minutes: 65 },
        { title: 'North-East Demands for Autonomy, Secessionist Movements & Assam Accord', minutes: 65 },
      ],
    },
    {
      num: 15,
      name: 'Recent Developments in Indian Politics',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Era of Coalitions, Mandal Commission Recommendations & Implementation Politics', minutes: 65 },
        { title: 'New Economic Policy Consensus, Ayodhya Dispute & Contemporary Coalition Governance', minutes: 70 },
      ],
    },
  ],
  Sociology: [
    {
      num: 1,
      name: 'Introducing Indian Society',
      term: 1,
      effort: 'LOW',
      parts: [
        { title: 'Colonialism, Nationalism, Class and Community & Sociological Perspective', minutes: 55 },
      ],
    },
    {
      num: 2,
      name: 'The Demographic Structure of Indian Society',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Theories of Demography (Malthus, Demographic Transition) & Common Concepts', minutes: 65 },
        { title: 'Size and Growth of India Population, Age Structure, Declining Sex Ratio & Literacy', minutes: 65 },
      ],
    },
    {
      num: 3,
      name: 'Social Institutions: Continuity and Change',
      term: 1,
      effort: 'HIGH',
      parts: [
        { title: 'Caste and Caste System: Traditional Characteristics & Colonial/Modern Transformations', minutes: 65 },
        { title: 'Tribal Communities Classification, Integration vs Isolation & Family and Kinship Types', minutes: 65 },
      ],
    },
    {
      num: 4,
      name: 'The Market as a Social Institution',
      term: 2,
      effort: 'MEDIUM',
      parts: [
        { title: 'Sociological Perspectives on Markets, Weekly Tribal Markets (Dhorai) & Caste Capitalists', minutes: 60 },
        { title: 'Commoditisation and Consumption in the Age of Globalisation', minutes: 60 },
      ],
    },
    {
      num: 5,
      name: 'Patterns of Social Inequality and Exclusion',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Social Stratification Concepts, Untouchability Prejudices & Dalit/Adivasi Struggles', minutes: 65 },
        { title: 'Other Backward Classes (OBC), Adivasi Struggles & Women Equality Movements', minutes: 65 },
      ],
    },
    {
      num: 6,
      name: 'The Challenges of Cultural Diversity',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Cultural Diversity in India, Cultural Communities, Nation-State & Assimilation/Integration', minutes: 65 },
        { title: 'Communalism, Secularism, Nation-State Minorities & Civil Society Initiatives', minutes: 65 },
      ],
    },
    {
      num: 7,
      name: 'Structural Change',
      term: 2,
      effort: 'LOW',
      parts: [
        { title: 'Colonialism Impact, Urbanisation and Industrialisation Patterns in Independent India', minutes: 55 },
      ],
    },
    {
      num: 8,
      name: 'Cultural Change',
      term: 2,
      effort: 'HIGH',
      parts: [
        { title: 'Social Reform Movements in 19th & 20th Centuries, Sanskritisation & Westernisation', minutes: 65 },
        { title: 'Modernisation and Secularisation Dynamics in Contemporary India', minutes: 60 },
      ],
    },
    {
      num: 9,
      name: 'The Story of Indian Democracy',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Constitutional Values, Grassroots Democracy & 73rd/74th Constitutional Amendments', minutes: 65 },
      ],
    },
    {
      num: 10,
      name: 'Change and Development in Rural Society',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Agrarian Structure, Land Reforms in Kerala and India & Green Revolution Social Consequences', minutes: 65 },
        { title: 'Commercialisation of Agriculture, Rural Indebtedness & Farmers Suicide Issues', minutes: 65 },
      ],
    },
    {
      num: 11,
      name: 'Change and Development in Industrial Society',
      term: 3,
      effort: 'MEDIUM',
      parts: [
        { title: 'Industrialisation in India, Working Conditions in Organised vs Unorganised Sectors', minutes: 60 },
        { title: 'Strike Actions, Trade Unions & Globalisation and Disinvestment Impacts', minutes: 60 },
      ],
    },
    {
      num: 12,
      name: 'Globalisation and Social Change',
      term: 3,
      effort: 'LOW',
      parts: [
        { title: 'Dimensions of Globalisation (Economic, Electronic, Cultural) & Corporate Media Impacts', minutes: 55 },
      ],
    },
    {
      num: 13,
      name: 'Social Movements',
      term: 3,
      effort: 'HIGH',
      parts: [
        { title: 'Features and Theories of Social Movements (Resource Mobilisation, Relative Deprivation)', minutes: 65 },
        { title: 'Peasant Movements, Workers Movements, Tribal Movements & Women Movements in India', minutes: 70 },
      ],
    },
  ],
};

export const createCanonicalTasks = (subject, grade, chapters) => {
  const list = [];
  chapters.forEach((ch, idx) => {
    const chapNumber = ch.num || (idx + 1);
    const totalParts = Array.isArray(ch.parts) ? ch.parts.length : (ch.parts || 2);
    const chapId = `${grade}_${subject.replace(/\s+/g, '_')}_${chapNumber}`;
    const effort = ch.effort || (totalParts >= 3 ? 'HIGH' : 'MEDIUM');

    for (let p = 1; p <= totalParts; p++) {
      const taskId = `${chapId}_P${p}`;
      const prereqId = p > 1 ? `${chapId}_P${p - 1}` : null;

      let topicTitle;
      let estimatedMinutes = 60;
      if (Array.isArray(ch.parts) && ch.parts[p - 1]) {
        const partObj = ch.parts[p - 1];
        topicTitle = typeof partObj === 'string' ? partObj : (partObj.title || '');
        estimatedMinutes = (typeof partObj === 'object' && partObj.minutes) ? partObj.minutes : 60;
      } else {
        if (totalParts === 1) {
          topicTitle = 'Part 1/1 (Full Chapter): Core Concepts & Problems';
        } else if (p === totalParts) {
          topicTitle = `Part ${p}/${totalParts} (Full Chapter): Exercise Problems & PYQs`;
        } else if (p === 1) {
          topicTitle = `Part 1/${totalParts}: Core Concepts & Theory`;
        } else {
          topicTitle = `Part ${p}/${totalParts}: Mechanisms & Practice`;
        }
      }

      const taskType = (p === totalParts || p > 1) ? 'PRACTICE' : 'LEARN';

      list.push({
        id: taskId,
        chapId: chapId,
        grade: grade,
        subject: subject,
        chapNumber: chapNumber,
        chapterName: ch.name,
        part: p,
        totalParts: totalParts,
        topicTitle: topicTitle,
        term: ch.term || 1,
        taskType: taskType,
        prerequisiteId: prereqId,
        estimatedEffort: effort,
        estimatedMinutes: estimatedMinutes,
      });
    }
  });
  return list;
};

export const createTasks = createCanonicalTasks;

export const PLUS_TWO_SYLLABUS = [
  ...createCanonicalTasks('Physics', '+2', PLUS_TWO_CHAPTERS.Physics),
  ...createCanonicalTasks('Chemistry', '+2', PLUS_TWO_CHAPTERS.Chemistry),
  ...createCanonicalTasks('Mathematics', '+2', PLUS_TWO_CHAPTERS.Mathematics),
  ...createCanonicalTasks('Computer Science', '+2', PLUS_TWO_CHAPTERS['Computer Science']),
  ...createCanonicalTasks('Botany', '+2', PLUS_TWO_CHAPTERS.Botany),
  ...createCanonicalTasks('Zoology', '+2', PLUS_TWO_CHAPTERS.Zoology),
  ...createCanonicalTasks('Accountancy', '+2', PLUS_TWO_CHAPTERS.Accountancy),
  ...createCanonicalTasks('Business Studies', '+2', PLUS_TWO_CHAPTERS['Business Studies']),
  ...createCanonicalTasks('Economics', '+2', PLUS_TWO_CHAPTERS.Economics),
  ...createCanonicalTasks('Computer Applications', '+2', PLUS_TWO_CHAPTERS['Computer Applications']),
  ...createCanonicalTasks('History', '+2', PLUS_TWO_CHAPTERS.History),
  ...createCanonicalTasks('Political Science', '+2', PLUS_TWO_CHAPTERS['Political Science']),
  ...createCanonicalTasks('Sociology', '+2', PLUS_TWO_CHAPTERS.Sociology),
];
