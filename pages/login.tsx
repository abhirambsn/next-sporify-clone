//@ts-nocheck
import { getProviders, signIn } from "next-auth/react";
import { NextPageContext } from "next";
import Image from "next/image";
import React from "react";

function login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Text"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login With {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps(context: NextPageContext) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
