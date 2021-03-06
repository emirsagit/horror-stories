import Head from "next/head";
import { Layout } from "../../components";
import { SettingsComponent } from "../../components";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Ayarlar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SettingsComponent />
      </Layout>
    </>
  );
}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       mustVerified: true,
//     },
//   };
// }
