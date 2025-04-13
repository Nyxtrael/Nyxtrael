'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function OrderForm() {
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
          {/* ...rest of form UI stays unchanged... */}
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
