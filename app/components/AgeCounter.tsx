"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Select from "react-select";
import { LuDog } from "react-icons/lu";

interface AgeCounter {
  value: number;
  monthValue?: any;
  showMonth?: boolean;
  renderSelctMonth?: boolean;
  onChange: (age: number) => void;
  onMonthChange: (month: number) => void;
  onToggle?: () => void;
}

export default function AgeCounter({
  onMonthChange,
  monthValue,
  renderSelctMonth = true,
  value,
  showMonth,
  onChange,
  onToggle
}: AgeCounter) {
  const increaseAge = () => {
    onChange(value + 1);
  };
  const decreaseAge = () => {
    if (value === 1) return;
    onChange(value - 1);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center">
        <button
          className="
          border
          border-solid
          rounded-full
          border-neutral-400"
          onClick={decreaseAge}
        >
          <AiOutlineMinus size={30} />
        </button>
        <span className="mx-3 text-2xl">{value}&nbsp;살</span>
        <button
          className="
          border
          border-solid
          rounded-full
          border-neutral-400"
          onClick={increaseAge}
        >
          <AiOutlinePlus size={30} />
        </button>
        <div className="ml-4">
          <Select
            onChange={(value) => onMonthChange(value)}
            value={monthValue}
            placeholder="개월 수 선택"
            options={[
              { month: "1 개월" },
              { month: "2 개월" },
              { month: "3 개월" },
              { month: "4 개월" },
              { month: "5 개월" },
              { month: "6 개월" },
              { month: "7 개월" },
              { month: "8 개월" },
              { month: "9 개월" },
              { month: "10 개월" },
              { month: "11 개월" },
              { month: "12 개월" }
            ]}
            formatOptionLabel={(option: any) => (
              <div className="flex flex-row items-center gap-3">
                <div className="text-neutral-500 ml-1">{option.month}</div>
              </div>
            )}
            theme={(theme) => ({
              ...theme,
              borderRadious: 6,
              colors: {
                ...theme.colors,
                primary: "black",
                primary25: "#ffe4e6"
              }
            })}
          />
        </div>
      </div>
    </div>
  );
}
