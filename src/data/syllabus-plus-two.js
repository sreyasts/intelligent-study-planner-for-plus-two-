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
];
