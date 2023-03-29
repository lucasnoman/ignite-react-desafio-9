import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import avatar from 'public/images/avatar.svg';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏼 Hey, welcome!</span>
          <h1>
            News aboute the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={avatar} alt='Girl coding' priority />
      </main>
    </>
  );
}

// NOTE - Apesar de mais rápido, é menos dinâmico em relação do getServerSideProps
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Mih5qHTwSJSILQmFStBCp7j');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100), // REVIEW - coloquei o ! para dizer que sempre terá valor. Ficar de olho.
  };

  return {
    props: {
      product,
    },
    // NOTE - Tempo em segundos que uma página se mantem sem ser revalidada/reconstruída
    // Caso haja uma mudança no código da página, após o tempo definido, ele aparecerá lá
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
