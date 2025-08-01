import { useState, type ReactNode } from "react";

type Tab = {
    label: string;
    content: ReactNode;
};

interface BasicTabsProps {
    tabs: Tab[];
}

export const BasicTabs = ({ tabs }: BasicTabsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="overflow-x-auto">
            <div className="tabs tabs-border flex">
                {tabs.map((tab, i) => (
                    <label
                        key={i}
                        className={`tab text-sm cursor-pointer px-2 py-1 ${i === activeIndex ? "tab-active" : ""
                            }`}
                        onClick={() => setActiveIndex(i)}
                        role="tab"
                        aria-selected={i === activeIndex}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
                        }}
                    >
                        {tab.label}
                    </label>
                ))}
            </div>
            <div className="mt-1">
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
};
