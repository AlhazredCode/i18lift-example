'use client';

import styles from './page.module.css';
import LandingPage from '../../views/home/page';
import Customize from '@/components/customize';
import Downloads from '@/views/downloads';
import Header from '@/components/Header';
import Footer from '@/components/footer/footer';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Background from '@/components/Background';
import Preloader from './Preloader';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import { Resource } from 'i18next';

const i18nNamespaces = ['home'];

const Home: React.FC<{ params: { locale: string } }> = ({ params: { locale } }) => {
  const theme = useTheme(); // Ahora puedes usar useTheme aquí
  const [activeView, setActiveView] = useState('landing');
  const [isLoading, setIsLoading] = useState(true);
  const [t, setT] = useState<(key: string) => string>(() => (key: string) => key);
  const [resources, setResources] = useState<Resource | undefined>(undefined);

  useEffect(() => {
    const loadTranslations = async () => {
      const { t: translationFunction, resources: loadedResources } = await initTranslations(locale, i18nNamespaces);
      setT(translationFunction);
      setResources(loadedResources);
      setIsLoading(false);
    };

    loadTranslations();
  }, [locale]);

  if (!locale || !resources) {
    return <Preloader isLoading={true} />;
  }

  const handleSelectView = (view: string) => {
    setActiveView(view);
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
          <Background />
          <Header  type="primary"  activeView={activeView} onSelectView={handleSelectView} />
          <Box>
            {activeView === 'landing' && <LandingPage />}
           
            {activeView === 'customize' && <Customize />}
            {activeView === 'download' && <Downloads />}
          </Box>
          <Footer />
        </TranslationsProvider>
      )}
    </>
  );
};

export default Home;