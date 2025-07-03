export const translations = {
    english: {
        title: 'Gujarati Books & Reviews',
        subtitle: 'Discover amazing books through audio & video summaries',
        search: 'Search books, authors, or topics...',
        all: 'All',
        fiction: 'Fiction',
        nonfiction: 'Nonfiction',
        latest: 'Latest',
        filters: 'Filters',
        audio: 'Audio',
        video: 'Video',
        loading: 'Loading amazing content...',
        error: 'Unable to load content. Please try again later.',
        noResults: 'No results found',
        tryAdjusting: 'Try adjusting your search or filters',
        allBooks: 'All Books',
        view: 'View'
    },
    gujarati: {
        title: 'ગુજરાતી પુસ્તકો અને સમીક્ષાઓ',
        subtitle: 'ઓડિયો અને વિડિયો સારાંશ દ્વારા અદ્ભુત પુસ્તકો શોધો',
        search: 'પુસ્તકો, લેખકો અથવા વિષયો શોધો...',
        all: 'બધું',
        fiction: 'કાલ્પનિક',
        nonfiction: 'અકાલ્પનિક',
        latest: 'નવીનતમ',
        filters: 'ફિલ્ટર',
        audio: 'ઓડિયો',
        video: 'વિડિયો',
        loading: 'અદ્ભુત સામગ્રી લોડ કરી રહ્યા છીએ...',
        error: 'સામગ્રી લોડ કરવામાં અસમર્થ. કૃપા કરીને પછીથી પ્રયાસ કરો.',
        noResults: 'કોઈ પરિણામ મળ્યું નથી',
        tryAdjusting: 'કૃપા કરીને તમારી શોધ અથવા ફિલ્ટર બદલવાનો પ્રયાસ કરો',
        allBooks: 'બધા પુસ્તકો',
        view: 'જુઓ'
    }
};

export const categories = {
    fiction: {
        english: 'Fiction',
        gujarati: 'કાલ્પનિક',
        subcategories: {
            'original-language': { english: 'Original Language', gujarati: 'મૂળ ભાષા' },
            'nobel-winners': { english: 'Nobel Prize Winners', gujarati: 'નોબેલ પુરસ્કાર વિજેતા' },
            'booker-winners': { english: 'Booker Prize Winners', gujarati: 'બુકર પુરસ્કાર વિજેતા' }
        }
    },
    nonfiction: {
        english: 'Nonfiction',
        gujarati: 'અકાલ્પનિક',
        subcategories: {
            'essential-knowledge': { english: 'Essential Knowledge Series', gujarati: 'આવશ્યક જ્ઞાન શ્રેણી' },
            'oxford-short': { english: 'Oxford Very Short Introductions', gujarati: 'ઓક્સફોર્ડ ટૂંકા પરિચય' },
            'what-everyone-needs': { english: 'What Everyone Needs To Know', gujarati: 'દરેકને જાણવાની જરૂર' },
            'autobiography': { english: 'Autobiographies', gujarati: 'આત્મકથા' },
            'philosophy': { english: 'Philosophy', gujarati: 'દર્શનશાસ્ત્ર' },
            'personal-development': { english: 'Personal Development', gujarati: 'વ્યક્તિત્વ વિકાસ' },
            'psychology': { english: 'Psychology', gujarati: 'મનોવિજ્ઞાન' },
            'productivity': { english: 'Productivity', gujarati: 'ઉત્પાદકતા' },
            'career-success': { english: 'Career & Success', gujarati: 'કારકિર્દી અને સફળતા' },
            'leadership': { english: 'Management & Leadership', gujarati: 'મેનેજમેન્ટ અને નેતૃત્વ' },
            'science': { english: 'Science', gujarati: 'વિજ્ઞાન' },
            'motivation': { english: 'Motivation & Inspiration', gujarati: 'પ્રેરણા અને પ્રેરણા' },
            'mindfulness': { english: 'Mindfulness & Happiness', gujarati: 'સચેતતા અને ખુશી' },
            'money-investments': { english: 'Money & Investments', gujarati: 'પૈસા અને રોકાણ' },
            'communication': { english: 'Communication Skills', gujarati: 'સંદેશાવ્યવહાર કુશળતા' }
        }
    }
};

export const getMockData = () => [
    {
        id: 1,
        title: 'Atomic Habits',
        titleGujarati: 'અણુ આદતો',
        author: 'James Clear',
        category: 'nonfiction',
        subcategory: 'personal-development',
        hasAudio: true,
        hasVideo: true,
        youtubeId: 'U_nzqnXWvSo',
        rssAudioUrl: 'https://example.com/audio1.mp3',
        description: 'Transform your life with tiny changes that create remarkable results',
        coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 2,
        title: 'The Midnight Library',
        titleGujarati: 'મધ્યરાત્રિ પુસ્તકાલય',
        author: 'Matt Haig',
        category: 'fiction',
        subcategory: 'original-language',
        hasAudio: true,
        hasVideo: false,
        youtubeId: '',
        rssAudioUrl: 'https://example.com/audio2.mp3',
        description: 'A novel about all the choices that go into a life well lived',
        coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 3,
        title: 'Sapiens',
        titleGujarati: 'સેપિયન્સ',
        author: 'Yuval Noah Harari',
        category: 'nonfiction',
        subcategory: 'science',
        hasAudio: true,
        hasVideo: true,
        youtubeId: 'nzj7Wg4DAbs',
        rssAudioUrl: 'https://example.com/audio3.mp3',
        description: 'A brief history of humankind',
        coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 4,
        title: 'The Power of Now',
        titleGujarati: 'અત્યારની શક્તિ',
        author: 'Eckhart Tolle',
        category: 'nonfiction',
        subcategory: 'mindfulness',
        hasAudio: false,
        hasVideo: true,
        youtubeId: 'aAVPDYhW_nw',
        rssAudioUrl: '',
        description: 'A guide to spiritual enlightenment',
        coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 5,
        title: 'Never Let Me Go',
        titleGujarati: 'મને ક્યારેય જવા ન દો',
        author: 'Kazuo Ishiguro',
        category: 'fiction',
        subcategory: 'nobel-winners',
        hasAudio: true,
        hasVideo: true,
        youtubeId: 'NjKlDbulegs',
        rssAudioUrl: 'https://example.com/audio5.mp3',
        description: 'A haunting tale of love, loss, and what makes us human',
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 6,
        title: 'Think Fast and Slow',
        titleGujarati: 'ઝડપથી અને ધીમે વિચારો',
        author: 'Daniel Kahneman',
        category: 'nonfiction',
        subcategory: 'psychology',
        hasAudio: true,
        hasVideo: false,
        youtubeId: '',
        rssAudioUrl: 'https://example.com/audio6.mp3',
        description: 'The frailties of human judgment and decision-making',
        coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop',
        authorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
];