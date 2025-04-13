'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OrderPage() {
  const [projectType, setProjectType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    style: '',
    images: '2',
    prompt: '',
    specialIdea: false,
    specialIdeaText: '',
    videoPackage: '',
    videoLength: '',
    videoDescription: '',
    videoLink: '',
    videoAddons: [],
    webPackage: '',
    webOptions: [],
    webBrief: '',
    commercial: false
  });
  const [priceEstimate, setPriceEstimate] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const presetType = searchParams.get('type');
    const presetStyle = searchParams.get('style');
    const presetImages = searchParams.get('images');
    const presetPackage = searchParams.get('package');

    if (presetType) setProjectType(presetType);
    if (presetStyle) setFormData(prev => ({ ...prev, style: presetStyle }));
    if (presetImages) setFormData(prev => ({ ...prev, images: presetImages }));
    if (presetPackage) {
      setFormData(prev => ({
        ...prev,
        videoPackage: presetType === 'video' ? presetPackage : '',
        webPackage: presetType === 'web' ? presetPackage : ''
      }));
    }
  }, [searchParams]);

  const imagePackagePrices = {
    1: 3.0,
    2: 5.0,
    4: 9.0,
    8: 16.0,
    10: 20.0,
    12: 23.0,
    15: 27.0
  };

  const videoAddonPrices = {
    music: 15,
    fx: 15,
    render4k: 5,
    social: 10,
    rush: 20
  };

  useEffect(() => {
    if (projectType === 'image') {
      const quantity = parseInt(formData.images);
      const basePrice = imagePackagePrices[quantity] || quantity * 3;
      const specialFee = formData.specialIdea ? 2.5 : 0;
      const commercialFee = formData.commercial ? basePrice * 0.3 : 0;
      setPriceEstimate(basePrice + specialFee + commercialFee);
    } else if (projectType === 'video') {
      const basePrices = {
        shortspark: 30,
        narrative: 60,
        feature: 95
      };
      let total = basePrices[formData.videoPackage] || 0;
      for (const addon of formData.videoAddons) {
        total += videoAddonPrices[addon] || 0;
      }
      setPriceEstimate(total);
    } else if (projectType === 'web') {
      const basePrices = {
        onepager: 90,
        portfolio: 140,
        magic: 220
      };
      const optionPrices = {
        animation: 20,
        cms: 50,
        domain: 20,
        ecommerce: 100
      };
      let total = basePrices[formData.webPackage] || 0;
      for (const opt of formData.webOptions) {
        total += optionPrices[opt] || 0;
      }
      setPriceEstimate(total);
    } else {
      setPriceEstimate(null);
    }
  }, [formData, projectType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'webOptions') {
      setFormData(prev => ({
        ...prev,
        webOptions: checked
          ? [...prev.webOptions, value]
          : prev.webOptions.filter(opt => opt !== value)
      }));
    } else if (type === 'checkbox' && name === 'videoAddons') {
      setFormData(prev => ({
        ...prev,
        videoAddons: checked
          ? [...prev.videoAddons, value]
          : prev.videoAddons.filter(opt => opt !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (projectType === 'image' && parseInt(formData.images) < 1) {
      newErrors.images = 'Select at least one image';
    }
    if ((projectType === 'image' || projectType === 'video') && !formData.prompt && !formData.videoDescription) {
      newErrors.prompt = 'Please provide a brief description';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    alert('✨ We got your request. You’ll hear back within 24h.');
    router.push('/thanks');
  };

  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-4">🛒 Start Your Project</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1525] p-6 rounded-xl">
          <div>
            <label className="block mb-1">Project Type *</label>
            <select name="projectType" value={projectType} onChange={(e) => setProjectType(e.target.value)} required className="w-full px-4 py-2 rounded bg-[#2d223e] text-white">
              <option value="">Select a type</option>
              <option value="image">Image Generation</option>
              <option value="video">Video Editing</option>
              <option value="web">Web Design</option>
            </select>
          </div>

          {projectType === 'image' && (
            <>
              <div>
                <label className="block mb-1">Style / Type</label>
                <select name="style" value={formData.style} onChange={handleChange} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white">
                  <option value="sunroom">Sunroom Diaries</option>
                  <option value="redrequiem">Red Requiem</option>
                  <option value="divines">Astral Divines</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Images (1–15)</label>
                <select name="images" value={formData.images} onChange={handleChange} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white">
                  {[1, 2, 4, 8, 10, 12, 15].map(i => (
                    <option key={i} value={i}>{i} image(s)</option>
                  ))}
                </select>
                {errors.images && <p className="text-red-400 text-sm mt-1">{errors.images}</p>}
              </div>
              <div>
                <label className="block mb-1">Prompt / Idea</label>
                <textarea name="prompt" value={formData.prompt} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white" />
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="specialIdea" checked={formData.specialIdea} onChange={handleChange} />
                  <span>I have a special image idea (+2.5€)</span>
                </label>
                {formData.specialIdea && (
                  <textarea name="specialIdeaText" value={formData.specialIdeaText} onChange={handleChange} rows={3} className="w-full mt-2 px-4 py-2 rounded bg-[#2d223e] text-white" />
                )}
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="commercial" checked={formData.commercial} onChange={handleChange} />
                  <span>I need commercial rights (+30%)</span>
                </label>
              </div>
            </>
          )}

          {projectType === 'video' && (
            <>
              <div>
                <label className="block mb-1">Video Package</label>
                <select name="videoPackage" value={formData.videoPackage} onChange={handleChange} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white">
                  <option value="shortspark">Short Spark – 30€</option>
                  <option value="narrative">Narrative Flow – 60€</option>
                  <option value="feature">Full Feature – 95€</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Video Description</label>
                <textarea name="videoDescription" value={formData.videoDescription} onChange={handleChange} rows={3} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white" />
              </div>
              <div>
                <label className="block mb-1">Add-ons</label>
                <div className="space-y-1">
                  <label className="flex items-center"><input type="checkbox" name="videoAddons" value="music" checked={formData.videoAddons.includes('music')} onChange={handleChange} /> <span className="ml-2">Licensed music track (+15€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="videoAddons" value="fx" checked={formData.videoAddons.includes('fx')} onChange={handleChange} /> <span className="ml-2">Sound design FX (+15€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="videoAddons" value="render4k" checked={formData.videoAddons.includes('render4k')} onChange={handleChange} /> <span className="ml-2">4K render (+5€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="videoAddons" value="social" checked={formData.videoAddons.includes('social')} onChange={handleChange} /> <span className="ml-2">Social cuts (15s, 30s) (+10€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="videoAddons" value="rush" checked={formData.videoAddons.includes('rush')} onChange={handleChange} /> <span className="ml-2">Rush delivery (24h) (+20€)</span></label>
                </div>
              </div>
            </>
          )}

          {projectType === 'web' && (
            <>
              <div>
                <label className="block mb-1">Web Package</label>
                <select name="webPackage" value={formData.webPackage} onChange={handleChange} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white">
                  <option value="onepager">One-Pager</option>
                  <option value="portfolio">Mini Portfolio</option>
                  <option value="magic">Custom Magic Site</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Add-ons</label>
                <div className="space-y-1">
                  <label className="flex items-center"><input type="checkbox" name="webOptions" value="animation" checked={formData.webOptions.includes('animation')} onChange={handleChange} /> <span className="ml-2">Add animation pack (+20€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="webOptions" value="cms" checked={formData.webOptions.includes('cms')} onChange={handleChange} /> <span className="ml-2">CMS/editable backend (+50€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="webOptions" value="domain" checked={formData.webOptions.includes('domain')} onChange={handleChange} /> <span className="ml-2">Domain & hosting help (+20€)</span></label>
                  <label className="flex items-center"><input type="checkbox" name="webOptions" value="ecommerce" checked={formData.webOptions.includes('ecommerce')} onChange={handleChange} /> <span className="ml-2">E-commerce integration (+100€)</span></label>
                </div>
              </div>
              <div>
                <label className="block mb-1">Project Brief</label>
                <textarea name="webBrief" value={formData.webBrief} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white" />
              </div>
            </>
          )}

          {priceEstimate !== null && (
            <div className="text-sm text-purple-300 pt-4">
              💰 Estimated Price: {priceEstimate.toFixed(2)}€
            </div>
          )}

          <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-[#2d223e] text-white" />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}

          <input type="text" name="contact" placeholder="Discord / Instagram / Alt contact" value={formData.contact} onChange={handleChange} className="w-full px-4 py-2 rounded bg-[#2d223e] text-white" />

          <button type="submit" className="w-full px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white">
            ✨ Submit Request
          </button>

          <p className="text-sm text-neutral-400 text-center pt-4">
            💳 Available Payment Options: Stripe (Card, Apple Pay, Google Pay, Bank Transfer, Klarna*)
          </p>
        </form>
      </section>
    </main>
  );
}
