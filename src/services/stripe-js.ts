import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
  // NOTE - variáveis de ambiente que precisam ser carregadas diretamente no browser, precisam ser públicas.
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STIPE_PUBLIC_KEY!);

  return stripeJs;
}
