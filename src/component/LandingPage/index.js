// pages/index.js
import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Play, Headphones, BookOpen, Grid } from 'lucide-react';
import { categories, getMockData, translations } from '../Constant';
import Header from '../Header';
import Loading from '../Common/Loading';

export default function Landingpage() {
    const [language, setLanguage] = useState('english');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const t = translations[language];

    // REPLACE THESE WITH YOUR AIRTABLE CREDENTIALS
    const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID; // Get from Airtable URL
    const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;; // Get from Airtable Account Settings
    const AIRTABLE_TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;; // Your table name

    const fetchBooks = async () => {
        if (AIRTABLE_BASE_ID === 'YOUR_BASE_ID' || AIRTABLE_API_KEY === 'YOUR_API_KEY') {
            setBooks(getMockData());
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
                {
                    headers: {
                        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const formattedBooks = data.records.map((record, index) => ({
                id: record.id,
                title: record.fields.Title || '',
                titleGujarati: record.fields['Title Gujarati'] || '',
                author: record.fields.Author || '',
                category: record.fields.Category?.toLowerCase() || '',
                subcategory: record.fields.Subcategory || '',
                hasAudio: !!record.fields['RSS Audio URL'],
                hasVideo: !!record.fields['YouTube ID'],
                youtubeId: record.fields['YouTube ID'] || '',
                rssAudioUrl: record.fields['RSS Audio URL'] || '',
                description: record.fields.Description || '',
                coverImage: record.fields['Cover Image']?.[0]?.url || '',
                thumbnail: record.fields.Thumbnail?.[0]?.url || '',
                authorPhoto: record.fields['Author Photo']?.[0]?.url || ''
            }));

            setBooks(formattedBooks);
        } catch (err) {
            setError(err.message);
            setBooks(getMockData());
        } finally {
            setLoading(false);
        }
    };

    const handleViewContent = (item) => {
        if (item.hasVideo && item.youtubeId) {
            window.open(`https://www.youtube.com/watch?v=${item.youtubeId}`, '_blank');
        } else if (item.hasAudio && item.rssAudioUrl) {
            window.open(item.rssAudioUrl, '_blank');
        } else {
            alert(language === 'gujarati' ? 'સામગ્રી ટૂંક સમયમાં ઉપલબ્ધ થશે!' : 'Content coming soon!');
        }
    };

    const filteredContent = useMemo(() => {
        let filtered = books;

        if (searchQuery) {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.titleGujarati.includes(searchQuery) ||
                item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        if (selectedSubcategory !== 'all') {
            filtered = filtered.filter(item => item.subcategory === selectedSubcategory);
        }

        return filtered;
    }, [books, searchQuery, selectedCategory, selectedSubcategory]);

    if (error && books.length > 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚠️</span>
                    </div>
                    <p className="text-lg text-gray-700">{t.error}</p>
                </div>
            </div>
        );
    }

    // Fetch data from Airtable
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            {
                loading ?
                    <Loading language={language} /> : (
                        <>
                            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
                                {/* Header */}
                                <Header
                                    language={language}
                                    setLanguage={setLanguage}
                                />

                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    {/* Search and Filters */}
                                    <div className="mb-8 space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                placeholder={t.search}
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full text-black pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white shadow-sm"
                                            />
                                        </div>

                                        <div className="flex flex-wrap gap-4 items-center">
                                            <div className="flex items-center space-x-2">
                                                <Filter className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm font-medium text-gray-700">{t.filters + ':'}</span>
                                            </div>

                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => {
                                                    setSelectedCategory(e.target.value);
                                                    setSelectedSubcategory('all');
                                                }}
                                                className="px-3 py-2 border text-black border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange-500"
                                            >
                                                <option value="all">{t.all}</option>
                                                <option value="fiction">{t.fiction}</option>
                                                <option value="nonfiction">{t.nonfiction}</option>
                                            </select>

                                            {selectedCategory !== 'all' && (
                                                <select
                                                    value={selectedSubcategory}
                                                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                                                    className="text-black px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange-500"
                                                >
                                                    <option value="all">{t.all}</option>
                                                    {Object.entries(categories[selectedCategory].subcategories).map(([key, sub]) => (
                                                        <option key={key} value={key}>{sub[language]}</option>
                                                    ))}
                                                </select>
                                            )}
                                        </div>
                                    </div>

                                    {/* Books Grid */}
                                    <div className="mb-6">
                                        <div className="flex items-center space-x-2 mb-6">
                                            <Grid className="w-5 h-5 text-orange-500" />
                                            <h2 className="text-xl font-bold text-gray-900">
                                                {selectedCategory === 'all' ? t.allBooks :
                                                    (categories[selectedCategory]?.[language] || '') + ' ' + (language === 'gujarati' ? 'પુસ્તકો' : 'Books')}
                                            </h2>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {filteredContent.length}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {filteredContent.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                                                >
                                                    <div
                                                        className="relative group"
                                                        onClick={() => handleViewContent(item)}
                                                    >
                                                        {item.thumbnail
                                                            ? <img
                                                                src={item.thumbnail}
                                                                alt={item.title}
                                                                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                                                            />
                                                            : <div className="w-full h-48 bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center group-hover:bg-opacity-90 transition-colors">
                                                                <BookOpen className="w-12 h-12 text-orange-600 group-hover:scale-110 transition-transform" />
                                                            </div>
                                                        }

                                                        {/* Media type indicators overlay */}
                                                        <div className="absolute top-3 right-3 flex space-x-1">
                                                            {item.hasVideo && (
                                                                <div className="bg-red-500 bg-opacity-90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                                    <Play className="w-3 h-3" />
                                                                    <span>{t.video}</span>
                                                                </div>
                                                            )}
                                                            {item.hasAudio && (
                                                                <div className="bg-blue-500 bg-opacity-90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                                    <Headphones className="w-3 h-3" />
                                                                    <span>{t.audio}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="p-4">
                                                        <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">
                                                            {language === 'gujarati' ? item.titleGujarati : item.title}
                                                        </h3>
                                                        <p className="text-xs text-gray-600 mb-3">{item.author}</p>

                                                        {item.description && (
                                                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                                                        )}

                                                        <div className="flex justify-between items-center">
                                                            <div className="flex space-x-2">
                                                                {item.hasAudio && (
                                                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                                        <Headphones className="w-3 h-3 text-blue-600" />
                                                                    </div>
                                                                )}
                                                                {item.hasVideo && (
                                                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                                                        <Play className="w-3 h-3 text-red-600" />
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleViewContent(item);
                                                                }}
                                                                className="cursor-pointer px-3 py-1 bg-orange-500 text-white rounded-lg text-xs hover:bg-orange-600 transition-colors font-medium"
                                                            >
                                                                {t.view}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {filteredContent.length === 0 && (
                                        <div className="text-center py-16">
                                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <BookOpen className="w-10 h-10 text-gray-400" />
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">{t.noResults}</h3>
                                            <p className="text-gray-600 max-w-md mx-auto">{t.tryAdjusting}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    );
}