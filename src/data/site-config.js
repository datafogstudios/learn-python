export const SITE_CONFIG = {
  name: 'Learn Python',
  tagline: 'Master Python programming through interactive lessons',
  url: 'https://learnpython.com',
  
  // Copyright with auto-updating year
  copyright: {
    owner: 'DataFog Studios',
    trademark: 'Learn Python™',
    getCurrentYear: () => new Date().getFullYear(),
    getFullText: function() {
      return \© \ \. All rights reserved.\;
    },
    getTrademarkText: function() {
      return \\ is a registered trademark of \\;
    }
  },
  
  // Brand Information
  brand: {
    legalName: 'DataFog Studios',
    trademark: 'Learn Python™',
    registrationNumber: 'TM-XXXX-XXXX',
    registrationDate: '2026',
    jurisdiction: 'United States',
  },
  
  // Contact Information
  contact: {
    email: {
      general: 'hello@learnpython.com',
      support: 'support@learnpython.com',
      legal: 'legal@learnpython.com',
      privacy: 'privacy@learnpython.com',
      dmca: 'dmca@learnpython.com',
      dpo: 'dpo@learnpython.com',
      gdpr: 'gdpr@learnpython.com',
    },
    address: {
      street: '123 Education Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'United States',
    },
    phone: '1-800-XXX-XXXX',
  },
  
  // Social Media
  social: {
    twitter: 'https://twitter.com/LearnPython',
    github: 'https://github.com/LearnPython',
    discord: 'https://discord.gg/LearnPython',
    linkedin: 'https://linkedin.com/company/learn-python',
    instagram: 'https://instagram.com/LearnPython',
    youtube: 'https://youtube.com/@LearnPython',
  },
  
  // Statistics
  stats: {
    students: '10,000+',
    projects: '500+',
    satisfaction: '95%',
    lessons: '60+',
    modules: 7,
  },
  
  // Legal Documents
  legal: {
    privacy: '/pages/legal/privacy.html',
    terms: '/pages/legal/terms.html',
    cookies: '/pages/legal/cookies.html',
    gdpr: '/pages/legal/gdpr.html',
    ccpa: '/pages/legal/ccpa.html',
  },
  
  // Donation Options
  donations: {
    stripe: {
      enabled: true,
      publicKey: 'pk_test_YOUR_KEY_HERE',
      presetAmounts: [5, 10, 25, 50, 100],
    },
    crypto: {
      enabled: true,
      wallets: {
        bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        ethereum: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        usdc: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        solana: 'DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK',
      },
    },
    coffee: {
      enabled: true,
      amounts: [
        { coffees: 1, price: 3, label: 'One Coffee' },
        { coffees: 2, price: 6, label: 'Two Coffees' },
        { coffees: 3, price: 9, label: 'Three Coffees' },
        { coffees: 4, price: 20, label: 'Coffee for the Team' },
      ],
    },
  },
  
  // Ad Placeholders (Hidden by default)
  ads: {
    enabled: false,
    placeholders: [
      { id: 'ad-hero', position: 'hero-bottom', size: 'leaderboard' },
      { id: 'ad-sidebar', position: 'sidebar-right', size: 'skyscraper' },
      { id: 'ad-content-1', position: 'content-middle', size: 'rectangle' },
      { id: 'ad-content-2', position: 'content-bottom', size: 'rectangle' },
      { id: 'ad-footer', position: 'footer-top', size: 'leaderboard' },
    ],
  },
};

// Helper functions
export const getCurrentYear = () => SITE_CONFIG.copyright.getCurrentYear();
export const getCopyrightText = () => SITE_CONFIG.copyright.getFullText();
export const getTrademarkText = () => SITE_CONFIG.copyright.getTrademarkText();
