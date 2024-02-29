"use client";
import DependantComponent from "@/components/dependantComponent";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// default state
//export default function DependantPage() {
//const guid = useSelector((state: RootState) => state.guid.guid);

//return (
//<div className="flex h-screen w-screen flex-col place-items-center px-8 py-4">
//<DependantComponent guid={guid} />
//</div>
//);
//}

// proposed solution #1
//export default function DependantPage() {
//const guid = useSelector((state: RootState) => state.guid.guid);

//if (!guid) {
//return <div>Loading...</div>; // Or a more specific error message
//}

//return (
//<div className="flex h-screen w-screen flex-col place-items-center px-8 py-4">
//<DependantComponent guid={guid} />
//</div>
//);
//}

// proposed solution #2
//export default function DependantPage() {
//const [isLoading, setIsLoading] = useState(true);
//const guid = useSelector((state: RootState) => state.guid.guid);

//useEffect(() => {
//if (guid) {
//// Check if GUID is in Redux
//setIsLoading(false);
//}
//}, [guid]);

//if (!guid) {
//return <div>Loading...</div>; // Or a more specific error message
//}

//return (
//<div className="flex h-screen w-screen flex-col place-items-center px-8 py-4">
//<DependantComponent guid={guid} />
//</div>
//);
//}

// proposed solution #3
const fetchAndStoreGuid = () => (dispatch) => {
  // Simulate an API call to fetch the GUID
  fetch("/api/guid")
    .then((response) => response.json())
    .then((data) => dispatch(setGuid(data.guid)));
};

export default function DependantPage() {
  const guid = useSelector((state: RootState) => state.guid.guid);

  return (
    <div className="flex h-screen w-screen flex-col place-items-center px-8 py-4">
      <DependantComponent guid={guid} />
    </div>
  );
}
