export default function checkEnvironment(): string {
  const envUrl =
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:3000'
    //   : 'https://peaceful-tor-06418.herokuapp.com';
    'http://trello-appunik-qzfu5.ondigitalocean.app';

  return envUrl;
}
