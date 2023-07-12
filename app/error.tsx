"use client";
import EmptyState from "./components/EmptyState";

export default function ErrorPage() {
  return (
    <EmptyState
      title={
        <div className="flex flex-col items-center">
          <span className="text-6xl block">404</span>
          <br /> 화면을 못찾았습니다.
        </div>
      }
    />
  );
}
