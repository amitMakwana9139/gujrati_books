import React from 'react'
import { translations } from '../Constant';
import { BookOpen, Globe } from 'lucide-react';

const Header = ({ language, setLanguage }) => {
    const t = translations[language];
    return (
        <div>
            <header className="bg-white shadow-sm border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
                                <p className="text-sm text-gray-600">{t.subtitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setLanguage(language === 'english' ? 'gujarati' : 'english')}
                            className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="font-medium">
                                {language === 'english' ? 'ગુજરાતી' : 'English'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
