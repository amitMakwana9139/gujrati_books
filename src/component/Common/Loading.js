import React from 'react'
import { translations } from '../Constant';
import { Loader } from 'lucide-react';

const Loading = ({ language }) => {
    const t = translations[language];
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center">
            <div className="text-center">
                <Loader className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
                <p className="text-lg text-gray-700">{t.loading}</p>
            </div>
        </div>
    )
}

export default Loading
