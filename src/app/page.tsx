"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setGuid } from "../store/reducer";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const [localGuid, setLocalGuid] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("useEffect setting: ", localGuid);
    dispatch(setGuid(localGuid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localGuid]);

  function localUpdater() {
    setLocalGuid(inputRef.current?.value);
  }

  return (
    <div className="flex h-screen w-screen flex-col place-items-center px-8 py-4">
      <input
        ref={inputRef}
        placeholder={"guid"}
        className="mt-12 w-1/2 border px-2"
      />
      <div className="mt-8 flex w-1/2 justify-evenly">
        <button
          onClick={localUpdater}
          className="mx-auto my-2 rounded-md bg-blue-400 px-6 py-2 text-white active:scale-95"
        >
          Set
        </button>
        <Link
          href={"/dependantPage"}
          className="mx-auto my-2 rounded-md bg-blue-400 px-6 py-2 text-white active:scale-95"
        >
          Go to dependantPage
        </Link>
      </div>
    </div>
  );
}
