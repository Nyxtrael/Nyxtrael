'use client';

import AddonsSelector from '@/components/AddonsSelector';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import TermsAgreement from '@/components/TermsAgreement';
import FileUpload from '@/components/FileUpload';

function OrderForm() {
  const [projectType, setProjectType] = useState('image');
  const [formData, setFormData] = useState({
    name: '',
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
    imageAddons: [],
    webPackage: '',
    webOptions: [],
    webBrief: '',
    commercial: false,
  });
  const [priceEstimate, setPriceEstimate] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [priceAnimation, setPriceAnimation] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [referenceFiles, setReferenceFiles] = useState([]);



  useEffect(() => {
    const presetType = searchParams.get('type') || 'image';
    const presetStyle = searchParams.get('style');
    const presetImages = searchParams.get('images');
    const presetPackage = searchParams.get('package');

    setProjectType(presetType);
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

  useEffect(() => {
    let base = 0;
    let addonsTotal = 0;
    if (projectType === 'image') {
      const prices = { mini: 5, scene: 9, divine: 16 };
      base = prices[formData.style] || 0;
      if (formData.specialIdea) addonsTotal += 2.5;
      if (formData.commercial) base *= 1.3;

      const addonPrices = {
        revision: 3,
        prompthelp: 5,
        colorgrading: 3,
        animatedexport: 10,
        sourceprompt: 2,
        commercial: 15
      };

      for (const addon of formData.imageAddons || []) {
        addonsTotal += addonPrices[addon] || 0;
      }
    } else if (projectType === 'video') {
      const prices = { shortspark: 30, narrative: 60, feature: 95 };
      const addonPrices = { music: 15, fx: 15, render4k: 5 };
      base = prices[formData.videoPackage] || 0;
      for (const addon of formData.videoAddons || []) addonsTotal += addonPrices[addon] || 0;
    } else if (projectType === 'web') {
      const prices = { onepager: 90, portfolio: 140, magic: 220 };
      const addonPrices = { animation: 20, cms: 50, domain: 20, ecommerce: 100 };
      base = prices[formData.webPackage] || 0;
      for (const opt of formData.webOptions || []) addonsTotal += addonPrices[opt] || 0;
    }
    setPriceAnimation(true);
    setTimeout(() => setPriceAnimation(false), 1000);
    setPriceEstimate(base + addonsTotal);
  }, [formData, projectType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'videoAddons') {
        setFormData(prev => ({
          ...prev,
          videoAddons: checked ? [...prev.videoAddons, value] : prev.videoAddons.filter(v => v !== value)
        }));
      } else if (name === 'webOptions') {
        setFormData(prev => ({
          ...prev,
          webOptions: checked ? [...prev.webOptions, value] : prev.webOptions.filter(v => v !== value)
        }));
      } else if (name === 'imageAddons') {
        setFormData(prev => ({
          ...prev,
          imageAddons: checked ? [...prev.imageAddons, value] : prev.imageAddons.filter(v => v !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
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
      imageAddons: [],
      webPackage: '',
      webOptions: [],
      webBrief: '',
      commercial: false,
      paymentMethod: ''
    });
    setProjectType('image');
    setErrors({});
    setPriceEstimate(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.prompt || formData.prompt.trim().length < 5) {
      newErrors.prompt = "You wrote nothing. I’ll just assume your project is a telepathic transmission.";
    }
    if (!formData.email.includes('@')) newErrors.email = 'Email seems invalid. Even for an interdimensional address.';
    if (!formData.name) newErrors.name = "Please enter your name. Unless you're mysterious on purpose.";
    if (!agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the Terms & Refund Policy before proceeding.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    alert("Thank you, Nyx. Your request has been submitted into the starry void. I’ll contact you soon.");
    router.push('/thanks');
  };

  const projectTypes = [
    { key: 'image', label: '🎨 Illustration' },
    { key: 'video', label: '✂️ Video Editing' },
    { key: 'web', label: '🌐 Web Design' }
  ];

  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-8">🛒 Start Your Project</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1525] p-6 rounded-xl">
          <div className="flex gap-4 justify-center">
            {projectTypes.map(pt => (
              <motion.button
                key={pt.key}
                type="button"
                onClick={() => setProjectType(pt.key)}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-2 px-4 rounded-xl border ${
                  projectType === pt.key ? 'bg-purple-600 text-white' : 'bg-[#2d223e] text-neutral-300'
                }`}
              >
                {pt.label}
              </motion.button>
            ))}
          </div>
          {projectType && (
            <motion.div
              key={projectType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2d223e] p-4 rounded-xl text-neutral-200"
            >
              <h3 className="text-lg font-semibold mb-3">Select a Package:</h3>
              {projectType === 'image' && (
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#1a1320] text-white"
                >
                  <option value="">-- Choose a package --</option>
                  <option value="mini">🌱 Mini – 5€</option>
                  <option value="scene">🌄 Scene – 9€</option>
                  <option value="divine">🌌 Divine Bundle – 16€</option>
                </select>
              )}
              {projectType === 'video' && (
                <select
                  name="videoPackage"
                  value={formData.videoPackage}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#1a1320] text-white"
                >
                  <option value="">-- Choose a video plan --</option>
                  <option value="shortspark">Short Spark – 30€</option>
                  <option value="narrative">Narrative Flow – 60€</option>
                  <option value="feature">Full Feature – 95€</option>
                </select>
              )}
              {projectType === 'web' && (
                <select
                  name="webPackage"
                  value={formData.webPackage}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#1a1320] text-white"
                >
                  <option value="">-- Choose a web package --</option>
                  <option value="onepager">One-Pager – 90€</option>
                  <option value="portfolio">Mini Portfolio – 140€</option>
                  <option value="magic">Magic Site – 220€</option>
                </select>
              )}
            </motion.div>
          )}
          <AddonsSelector
  type={projectType}
  selected={
    projectType === 'video'
      ? formData.videoAddons
      : projectType === 'web'
      ? formData.webOptions
      : formData.imageAddons
  }
  handleChange={handleChange}
  webPackage={formData.webPackage}
  videoPackage={formData.videoPackage}
  style={formData.style}
/>
          <div className="text-center text-neutral-400 text-sm italic">
            {projectType === '' && 'Select a project type to begin.'}
          </div>

          <div>
            <label className="block mb-1 mt-4">Describe your vision</label>
            <textarea
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#2d223e] text-white"
              placeholder="Tell me what your project is about. What mood, what elements, what should absolutely NOT be there? Be dramatic."
            />
            {errors.prompt && <p className="text-red-400 text-sm mt-1 italic">{errors.prompt}</p>}
          </div>
         <FileUpload
  files={referenceFiles}
  onRemove={(index) =>
    setReferenceFiles((prev) => prev.filter((_, i) => i !== index))
  }
  onChange={(e) => {
    const newFiles = Array.from(e.target.files);

    const totalSize = [...referenceFiles, ...newFiles].reduce(
      (acc, f) => acc + f.size,
      0
    );

    if (referenceFiles.length + newFiles.length > 5) {
      alert('You can only upload up to 5 files.');
      return;
    }

    if (totalSize > 50 * 1024 * 1024) {
      alert('Total file size must be under 50MB.');
      return;
    }

    const filtered = newFiles.filter(
      (f) => f.size <= 20 * 1024 * 1024
    );
    if (filtered.length !== newFiles.length) {
      alert('Some files exceeded the 20MB individual limit.');
    }

    setReferenceFiles((prev) => [...prev, ...filtered]);
  }}
/>



          <div>
            <label className="block mb-1 mt-4">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#2d223e] text-white"
              placeholder="What should I call you? (other than 'client #342')"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1 italic">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#2d223e] text-white"
              placeholder="Where should I send my mystical replies?"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 italic">{errors.email}</p>}
			<p className="text-sm text-neutral-400 mt-2 italic">
  💳 Payment will be securely processed via Stripe after your request is reviewed.
</p>

          </div>
          <motion.p
            key={priceEstimate}
            animate={{ color: priceAnimation ? '#a3e635' : '#e9d5ff' }}
            transition={{ duration: 0.5 }}
            className="text-lg text-right font-semibold"
          >
            💸 Total: {priceEstimate?.toFixed(2)}€
          </motion.p>

          <div className="bg-[#2d223e] rounded p-4 text-sm text-purple-200">
            <h3 className="font-semibold mb-2">🧾 Order Summary:</h3>
            <ul className="space-y-1">
              <li>• Project: {projectType || '–'}</li>
              <li>• Package: {formData.style || formData.videoPackage || formData.webPackage || '–'}</li>
              <li>• Add-ons: {[
                ...(formData.imageAddons || []),
                ...(formData.videoAddons || []),
                ...(formData.webOptions || []),
                formData.specialIdea ? 'Special Idea' : '',
                formData.commercial ? 'Commercial Use' : ''
              ].filter(Boolean).join(', ') || '—'}</li>
              <li>• Contact: {formData.email || '–'}</li>
              <li>• Total: {priceEstimate?.toFixed(2)}€</li>
            </ul>
          </div>

          <TermsAgreement
            agreed={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
            error={errors.agreedToTerms}
          />

          <div className="flex justify-between gap-4">
            <button type="button" onClick={handleReset} className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded">🗑️ Reset</button>
            <button type="submit" className="flex-1 px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center space-x-2">
              <span>✨ {projectType === 'image' ? 'Summon Artwork' : projectType === 'video' ? 'Spark the Cut' : 'Forge the Code'}</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading form...</div>}>
      <OrderForm />
    </Suspense>
  );
}
