import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, MapPin, Clock, Info, School } from 'lucide-react';

export function About() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const schoolImages = [
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=600&fit=crop', // Classroom
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop', // Student learning
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop', // Teacher/Classroom
        'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=600&fit=crop', // School building
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&h=600&fit=crop', // Library
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % schoolImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % schoolImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + schoolImages.length) % schoolImages.length);
    };

    return (
        <Layout>
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                        {t('aboutSchool')}
                    </h1>
                    <p className="text-gray-600">{t('schoolSubtitle')}</p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="relative h-96 md:h-[500px]">
                        {schoolImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`School view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {schoolImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                <Info className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('schoolHistory')}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {t('schoolHistoryText')}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                                <School className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('deity')}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {t('deityText')}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('timings')}</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">{t('morningDarshan')}</span>
                                <span className="text-gray-800 font-semibold">8:00 AM - 12:30 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">{t('eveningDarshan')}</span>
                                <span className="text-gray-800 font-semibold">1:00 PM - 3:30 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600 font-medium">{t('specialPuja')}</span>
                                <span className="text-gray-800 font-semibold">9:00 AM - 4:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('location')}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {t('locationText')}
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <MapPin className="w-4 h-4" />
                            {t('viewOnMap')}
                        </a>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('schoolFeatures')}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '💻', title: t('dailyPuja'), desc: t('dailyPujaDesc') },
                            { icon: '🎨', title: t('festivals'), desc: t('festivalsDesc') },
                            { icon: '📚', title: t('prasadam'), desc: t('prasadamDesc') },
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
