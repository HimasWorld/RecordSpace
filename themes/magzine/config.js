const CONFIG = {
  // First screen information bar button text
  MAGZINE_HOME_BANNER_ENABLE: true, // Top right corner promotional area
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: 'Learn More',

  MAGZINE_HOME_HIDDEN_CATEGORY: 'Sharing Essays', // Categories that should not be displayed on the homepage, separated by commas

  MAGZINE_HOME_TITLE: 'Start your online business now. Completely free.',
  MAGZINE_HOME_DESCRIPTION:
    'With NotionNext, get all the tools and help you need to start, run, and grow your business.',
  MAGZINE_HOME_TIPS: 'The AI era is here — a grand celebration for super individuals!',

  // Recommended posts at the bottom of the homepage, e.g., [Recommended], max six posts; if left blank '', recent updated articles will be recommended
  MAGZINE_RECOMMEND_POST_TAG: 'Recommended',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: 'Recommended Articles',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // Recommended posts sorting; if `true`, it will force sort by last modified time in descending order

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // Right panel dark mode

  MAGZINE_POST_LIST_COVER: true, // Show article cover image in list
  MAGZINE_POST_LIST_PREVIEW: true, // Show article preview in list
  MAGZINE_POST_LIST_CATEGORY: true, // Show article category in list
  MAGZINE_POST_LIST_TAG: true, // Show article tags in list

  MAGZINE_POST_DETAIL_CATEGORY: true, // Show category in article details
  MAGZINE_POST_DETAIL_TAG: true, // Show tags in article details

  // Article page contact card
  MAGZINE_SOCIAL_CARD: true, // Show right side "Join the Community" button
  MAGZINE_SOCIAL_CARD_TITLE_1: 'Communication Channel',
  MAGZINE_SOCIAL_CARD_TITLE_2: 'Join the community discussion and sharing',
  MAGZINE_SOCIAL_CARD_TITLE_3: 'Click to join the community',
  MAGZINE_SOCIAL_CARD_URL: 'https://discord.gg/aJRYdN9c2F',
/*
  // Footer menu
  MAGZINE_FOOTER_LINKS: [
    {
      name: 'Friend Links',
      menus: [
        {
          title: "Tangly's Study Notes",
          href: 'https://blog.tangly1024.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: 'Developers',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: 'Development Help',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: 'Feature Feedback',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: 'Technical Discussion',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: 'About the Author',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    },
    {
      name: 'Support',
      menus: [
        {
          title: 'Community for Webmasters',
          href: 'https://docs.tangly1024.com/article/chat-community'
        },
        {
          title: 'Consultation & Customization',
          href: 'https://docs.tangly1024.com/article/my-service'
        },
        {
          title: 'Upgrade Manual',
          href: 'https://docs.tangly1024.com/article/my-service'
        },
        {
          title: 'Installation Tutorial',
          href: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { title: 'SEO Promotion', href: 'https://seo.tangly1024.com/' }
      ]
    },
    {
      name: 'Solutions',
      menus: [
        { title: 'Website Building Tools', href: 'https://www.tangly1024.com/' },
        { title: 'NotionNext', href: 'https://docs.tangly1024.com/about' }
      ]
    }
  ],
*/
  // Old version top menu
  MAGZINE_MENU_CATEGORY: true, // Show category
  MAGZINE_MENU_TAG: true, // Show tags
  MAGZINE_MENU_ARCHIVE: true, // Show archive
  MAGZINE_MENU_SEARCH: true, // Show search

  MAGZINE_WIDGET_TO_TOP: true // Scroll to top
}
export default CONFIG
