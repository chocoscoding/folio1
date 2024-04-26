import Head from "next/head";
import { NextStudio } from "next-sanity/studio";
// import { metadata } from 'next-sanity/studio/metadata'
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <>
      <Head>next sanity</Head>
      <NextStudio config={config} />
    </>
  );
}
