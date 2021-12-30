import React from "react";
import { BarLoader, HashLoader } from "react-spinners";

export function FallbackLoading() {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <img className="h-10 mb-2" src="/images/logo.png" alt="logo" />
      <BarLoader height={4} width={100} color="#FF2800" />
    </div>
  );
}

export function HashLoading() {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <HashLoader height={50} width={50} color="#FF2800" />
    </div>
  );
}

export function PulseLoading() {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <PulseLoading height={50} width={50} color="#FF2800" />
    </div>
  );
}
