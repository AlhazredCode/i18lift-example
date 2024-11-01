import BackButton from './BackButton';
import styles from '../page.module.css';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import Header from '@/components/Header';
const i18nNamespaces = ['about'];

async function Subscription({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className={styles.main}>
      <Header type="secondary" />
      </main>
    </TranslationsProvider>
  );
}

export default Subscription;
