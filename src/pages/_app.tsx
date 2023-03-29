import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/global.scss';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // NOTE - Ao atualizar a página, as informações da sessão ativa do usuário chega pelo pageProps
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
