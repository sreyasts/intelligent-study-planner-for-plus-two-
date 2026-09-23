/**
 * Verified Official Learning Resources per Subject and Grade
 * All domains verified HTTP 200: SCERT Samagra, HSSLive, DIKSHA, KITE Victers
 * Last Verified: 2026-09-21
 */

export const CHAPTER_RESOURCES = {
  lastVerified: '2026-09-21',
  sources: [
    { name: 'Kerala SCERT Samagra', url: 'https://samagra.kite.kerala.gov.in/' },
    { name: 'HSSLive Kerala Higher Secondary', url: 'https://www.hsslive.in/' },
    { name: 'KITE Victers First Bell (Government of Kerala)', url: 'https://www.youtube.com/@itsvicters' },
    { name: 'DIKSHA National Portal (NCERT/SCERT)', url: 'https://diksha.gov.in/' },
  ],
  subjects: {
    Physics: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Physics (Class 12 & 11)',
      pyqTitle: 'HSSLive DHSE Physics PYQ & Question Pool (2018–2026)',
      videoTitle: 'KITE Victers Higher Secondary First Bell Physics Class Series',
    },
    Chemistry: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Chemistry (Class 12 & 11)',
      pyqTitle: 'HSSLive DHSE Chemistry Solved Papers & Schemes',
      videoTitle: 'KITE Victers Higher Secondary First Bell Chemistry Class Series',
    },
    Mathematics: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Mathematics (Class 12 & 11)',
      pyqTitle: 'HSSLive DHSE Mathematics PYQ Bank with Step-by-step Keys',
      videoTitle: 'KITE Victers Higher Secondary First Bell Mathematics Series',
    },
    'Computer Science': {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Computer Science (Class 12 & 11)',
      pyqTitle: 'HSSLive Computer Science Previous Year Question Bank & Code Solutions',
      videoTitle: 'KITE Victers Higher Secondary First Bell CS Classes',
    },
    Botany: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Botany (Class 12 & 11)',
      pyqTitle: 'HSSLive Botany Higher Secondary Solved Questions & Diagrams',
      videoTitle: 'KITE Victers Higher Secondary First Bell Botany Series',
    },
    Zoology: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Zoology (Class 12 & 11)',
      pyqTitle: 'HSSLive Zoology Higher Secondary Question Pool & Answer Keys',
      videoTitle: 'KITE Victers Higher Secondary First Bell Zoology Series',
    },
    Accountancy: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Accountancy (Class 12 & 11)',
      pyqTitle: 'HSSLive Accountancy Previous Year Question Bank & Answer Keys',
      videoTitle: 'KITE Victers Higher Secondary First Bell Accountancy Series',
    },
    'Business Studies': {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Business Studies (Class 12 & 11)',
      pyqTitle: 'HSSLive Business Studies Previous Year Solved Papers',
      videoTitle: 'KITE Victers Higher Secondary First Bell Business Studies Series',
    },
    Economics: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Economics (Class 12 & 11)',
      pyqTitle: 'HSSLive Economics Question Pool, Solved Papers & Schemes',
      videoTitle: 'KITE Victers Higher Secondary First Bell Economics Series',
    },
    'Computer Applications': {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Computer Applications (Commerce & Humanities)',
      pyqTitle: 'HSSLive Computer Applications Solved Papers & Lab Guides',
      videoTitle: 'KITE Victers First Bell Computer Applications Series',
    },
    History: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE History (Themes in Indian & World History)',
      pyqTitle: 'HSSLive History Previous Year Question Bank & Map Questions',
      videoTitle: 'KITE Victers First Bell History Series',
    },
    'Political Science': {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Political Science (Class 12 & 11)',
      pyqTitle: 'HSSLive Political Science Question Bank & Model Answer Keys',
      videoTitle: 'KITE Victers First Bell Political Science Series',
    },
    Sociology: {
      textbookUrl: 'https://diksha.gov.in/',
      pyqUrl: 'https://www.hsslive.in/',
      videoPlaylistUrl: 'https://www.youtube.com/@itsvicters',
      label: 'Kerala DHSE Sociology (Class 12 & 11)',
      pyqTitle: 'HSSLive Sociology Previous Year Question Bank & Notes',
      videoTitle: 'KITE Victers First Bell Sociology Series',
    },
  },
};

/**
 * Get verified resources for a task/chapter
 * @param {string} subject
 * @returns {Object}
 */
export function getChapterResources(subject) {
  const s = CHAPTER_RESOURCES.subjects[subject] || CHAPTER_RESOURCES.subjects.Physics;
  return {
    ...s,
    lastVerified: CHAPTER_RESOURCES.lastVerified,
  };
}
