'use client';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Select from 'react-select';
import { LuDog } from 'react-icons/lu';

interface AgeCounter {
  value: number;
  monthValue?: any;
  showMonth: boolean;
  onChange: (age: number) => void;
  onMonthChange: (month:number) => void;
  onToggle: () => void;
}

export default function AgeCounter({ onMonthChange, monthValue ,value, showMonth, onChange, onToggle }: AgeCounter) {

  const increaseAge = () => {
    onChange(value + 1);
  }
  const decreaseAge = () => {
    if (value === 1) return;
    onChange(value - 1);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center">
        <button
          className="
          border
          border-solid
          rounded-full
          border-neutral-400"
          onClick={decreaseAge}>
          <AiOutlineMinus size={30} />
        </button>
        <span className="mx-3 text-2xl">{value}</span>
        <button
          className="
          border
          border-solid
          rounded-full
          border-neutral-400"
          onClick={increaseAge}>
          <AiOutlinePlus size={30} />
        </button>
      </div>

      <div>
        <button onClick={onToggle} className="text-sm p-4 flex flex-col items-center border-2  rounded-md border-neutral-400">
          <span>개월 수 선택하기</span>
          <LuDog size={30} />
        </button>
        {showMonth &&
          (<div className="absolute">
            <Select
              onChange={(value)=>onMonthChange(value as any)}
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
                { month: "12 개월" },
              ]}
              formatOptionLabel={(option: any) => (
                <div className='flex flex-row items-center gap-3'>
                  <div className="text-neutral-500 ml-1">{option.month}</div>
                </div>
              )}
              theme={(theme) => ({
                ...theme,
                borderRadious: 6,
                colors: {
                  ...theme.colors,
                  primary: 'black',
                  primary25: '#ffe4e6'
                }
              })} />
          </div>)}
      </div>
    </div>
  )
}
