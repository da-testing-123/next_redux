"use client";
interface dependantProps {
  guid?: string;
}
export default function DependantComponent({ guid }: dependantProps) {
  if (!guid) {
    throw new Error("missing guid!");
  }
  return <div>Current guid: {guid}</div>;
}
