import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Home, Settings, History, Menu, X, Info } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export function Layout({ children }: { children: React.ReactNode }) {
  const { profile, signOut } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">

            <div className="flex items-center lg:hidden z-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="flex items-center lg:space-x-10 absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none">
              <Link
                to="/dashboard"
                className="group flex items-center space-x-2 shrink-0"
              >
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:brightness-110 transition whitespace-nowrap">
                  {t('schoolName')}
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-2">
                {[
                  { to: '/dashboard', label: t('dashboard'), icon: Home },
                  { to: '/about', label: t('about'), icon: Info },
                  { to: '/history', label: t('history'), icon: History },
                  { to: '/settings', label: t('settings'), icon: Settings },
                ].map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${isActive(to)
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}

                    {!isActive(to) && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 z-10">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-semibold text-gray-800">
                  {profile?.name}
                </p>
                <p className="text-xs text-gray-500">
                  {profile?.email}
                </p>
              </div>

              <button
                onClick={handleSignOut}
                className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-red-600
                     hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50
                     hover:text-red-700 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                <span className="hidden lg:inline">{t('signOut')}</span>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[
                { to: '/dashboard', label: t('dashboard'), icon: Home },
                { to: '/about', label: t('about'), icon: Info },
                { to: '/history', label: t('history'), icon: History },
                { to: '/settings', label: t('settings'), icon: Settings },
              ].map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all
                  ${isActive(to)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Icon className={`w-5 h-5 ${isActive(to) ? 'text-blue-500' : 'text-gray-400'}`} />
                  {label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {profile?.name?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{profile?.name}</p>
                    <p className="text-xs text-gray-500">{profile?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
