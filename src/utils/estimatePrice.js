export function estimatePrice({ formData, projectType }) {
  let base = 0;
  let addonsTotal = 0;

  if (projectType === 'image') {
    const prices = { mini: 5, scene: 9, divine: 16 };
    const addonPrices = {
      revision: 3,
      grading: 3,
      animation: formData.style === 'divine' ? 10 : 0,
      promptfile: 2,
      commercial: 15
    };

    base = prices[formData.style] || 0;
    if (formData.specialIdea) addonsTotal += 2.5;
    for (const addon of formData.illustrationAddons || []) {
      addonsTotal += addonPrices[addon] || 0;
    }

  } else if (projectType === 'video') {
    const prices = { shortspark: 30, narrative: 60, feature: 95 };
    const addonPrices = { music: 15, fx: 15, render4k: 5 };
    base = prices[formData.videoPackage] || 0;
    for (const addon of formData.videoAddons || []) {
      addonsTotal += addonPrices[addon] || 0;
    }

  } else if (projectType === 'web') {
    const prices = { onepager: 90, portfolio: 140, magic: 220 };
    const addonPrices = {
      animation: 20,
      cms: 50,
      domain: 20,
      ecommerce: 100,
      source: 25,
      rush: 30,
      branding: 40
    };
    base = prices[formData.webPackage] || 0;
    for (const opt of formData.webOptions || []) {
      addonsTotal += addonPrices[opt] || 0;
    }
  }

  return base + addonsTotal;
}
