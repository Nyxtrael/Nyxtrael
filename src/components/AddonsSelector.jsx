"use client";

import { useState } from "react";
import { Info } from "lucide-react";

const addonsData = { /* same as before */ };
const availabilityRules = { /* same as before */ };
const popularBundles = { /* same as before */ };

export function AddonsSelector({ type, selected, handleChange, webPackage, style }) {
  const [tooltipKey, setTooltipKey] = useState(null);

  const data = addonsData[type];
  const bundle = popularBundles[type];
  if (!data) return null;

  const allowedAddons =
    type === "web" && webPackage
      ? availabilityRules[webPackage] || []
      : data.map((addon) => addon.key);

  const visibleAddons = data.filter((addon) => allowedAddons.includes(addon.key));

  const toggleBundle = () => {
    for (const addon of bundle) {
      if (!selected.includes(addon)) {
        handleChange({
          target: {
            name:
              type === "video"
                ? "videoAddons"
                : type === "web"
                ? "webOptions"
                : "imageAddons",
            value: addon,
            type: "checkbox",
            checked: true,
          },
        });
      }
    }
  };

  const handleAddonClick = (e, isDisabled, label) => {
    if (isDisabled) {
      e.preventDefault();
      alert(`${label} is only available for a different package or style. Maybe upgrade? 🧙‍♀️`);
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h4 className="text-md font-bold text-purple-300 mb-2">📦 Optional Add-ons:</h4>
      {bundle && (
        <button
          type="button"
          onClick={toggleBundle}
          className="text-sm bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-xl text-white font-semibold mb-4"
        >
          ⭐ Apply Popular Setup
        </button>
      )}

      {visibleAddons.map(({ key, label, description, price, tooltip, allowedStyles }) => {
        const isDisabled =
          type === "image" && style && allowedStyles && !allowedStyles.includes(style);

        return (
          <div key={key} className="relative">
            <label
              className={`block cursor-pointer bg-[#1a1320] p-3 rounded-xl border border-[#2d223e] transition-all relative ${
                isDisabled ? "opacity-40 cursor-not-allowed" : "hover:border-purple-400"
              }`}
              onClick={(e) => handleAddonClick(e, isDisabled, label)}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-white font-medium flex items-center gap-2">
                    {label}
                    {tooltip && <Info size={14} className="text-purple-300" />}
                  </span>
                  <span className="text-sm text-neutral-400">{description}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-300 font-semibold">+{price}€</span>
                  <input
                    type="checkbox"
                    name={
                      type === "video"
                        ? "videoAddons"
                        : type === "web"
                        ? "webOptions"
                        : "imageAddons"
                    }
                    value={key}
                    checked={selected.includes(key)}
                    onChange={handleChange}
                    disabled={isDisabled}
                    className="accent-purple-500 h-5 w-5 disabled:opacity-30"
                  />
                </div>
              </div>
            </label>
            {tooltipKey === key && tooltip && (
              <div className="absolute left-0 top-full mt-2 text-xs bg-black text-white p-2 rounded shadow-lg max-w-xs w-full z-10">
                {tooltip}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AddonsSelector;
