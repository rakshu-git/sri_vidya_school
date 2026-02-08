import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, MapPin, Clock, Info } from 'lucide-react';

export function About() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Temple images - using beautiful Indian temple photos
    const templeImages = [
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop',
    ];

    // Auto-play slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % templeImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % templeImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + templeImages.length) % templeImages.length);
    };

    return (
        <Layout>
            <div className="space-y-8">
                {/* Page Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                        {t('aboutTemple')}
                    </h1>
                    <p className="text-gray-600">{t('templeSubtitle')}</p>
                </div>

                {/* Photo Slider */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="relative h-96 md:h-[500px]">
                        {templeImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Temple view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
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

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {templeImages.map((_, index) => (
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

                {/* Temple Information Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* History Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <Info className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('templeHistory')}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {t('templeHistoryText')}
                        </p>
                    </div>

                    {/* Deity Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center text-2xl">
                                🕉️
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('deity')}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {t('deityText')}
                        </p>
                    </div>

                    {/* Timings Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t('timings')}</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">{t('morningDarshan')}</span>
                                <span className="text-gray-800 font-semibold">6:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">{t('eveningDarshan')}</span>
                                <span className="text-gray-800 font-semibold">4:00 PM - 9:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600 font-medium">{t('specialPuja')}</span>
                                <span className="text-gray-800 font-semibold">{t('onRequest')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <MapPin className="w-4 h-4" />
                            {t('viewOnMap')}
                        </a>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('templeFeatures')}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🙏', title: t('dailyPuja'), desc: t('dailyPujaDesc') },
                            { icon: '📿', title: t('festivals'), desc: t('festivalsDesc') },
                            { icon: '🍛', title: t('prasadam'), desc: t('prasadamDesc') },
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
