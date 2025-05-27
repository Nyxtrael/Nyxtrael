import Link from 'next/link';
   import { CheckCircle, Star } from 'lucide-react';

   const pricingPlans = [
     {
       name: 'Basic',
       description: 'Perfect for small businesses starting their online journey.',
       price: '$99',
       features: [
         'Custom Website Design',
         'Basic SEO Optimization',
         '1 Month Support',
         'Up to 5 Pages',
       ],
       ctaLink: '/contact?plan=basic',
       isPopular: false,
     },
     {
       name: 'Pro',
       description: 'Ideal for growing businesses needing advanced features.',
       price: '$299',
       features: [
         'Custom Website Design',
         'Advanced SEO Optimization',
         '3 Months Support',
         'Up to 15 Pages',
         'E-commerce Integration',
         'Performance Analytics',
       ],
       ctaLink: '/contact?plan=pro',
       isPopular: true,
     },
     {
       name: 'Premium',
       description: 'Comprehensive solution for enterprises with custom needs.',
       price: '$599',
       features: [
         'Custom Website Design',
         'Premium SEO Optimization',
         '6 Months Support',
         'Unlimited Pages',
         'E-commerce Integration',
         'Performance Analytics',
         'Custom Features',
         'Priority Support',
       ],
       ctaLink: '/contact?plan=premium',
       isPopular: false,
     },
   ];

   const faqs = [
     {
       question: 'Can I upgrade my plan later?',
       answer: 'Yes, you can upgrade your plan at any time by contacting us. We’ll adjust your services and pricing accordingly.',
     },
     {
       question: 'Do you offer custom plans?',
       answer: 'Absolutely! If none of these plans meet your needs, we can create a custom plan tailored to your requirements. Reach out to discuss your project.',
     },
     {
       question: 'What does support include?',
       answer: 'Support includes updates, bug fixes, and assistance with any issues related to your website. The duration varies by plan.',
     },
   ];

   export default function PricingPage() {
     return (
       <main role="main" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
         {/* Background with Parallax */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-gradient-x"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow parallax-bg"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow-delayed parallax-bg"></div>
           <div className="absolute inset-0 bg-[url(/images/tech-pattern.svg)] opacity-10 bg-repeat"></div>
         </div>

         {/* Hero Section */}
         <section className="section-spacing container mx-auto text-center relative z-10">
           <div className="animate-fade-in">
             <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 heading-underline bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
               Pricing
             </h1>
             <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter leading-relaxed animate-fade-in-delay">
               Choose the plan that best fits your needs and let’s build something amazing together.
             </p>
           </div>
         </section>

         {/* Pricing Plans */}
         <section className="section-spacing container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {pricingPlans.map((plan) => (
               <div
                 key={plan.name}
                 className={`card overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 relative group animate-slide-up ${
                   plan.isPopular
                     ? 'border-teal-500 bg-gray-800/90 scale-105'
                     : 'border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20'
                 }`}
               >
                 {plan.isPopular && (
                   <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white text-center py-2">
                     <span className="flex items-center justify-center gap-2 font-montserrat font-semibold">
                       <Star className="h-5 w-5" /> Most Popular
                     </span>
                   </div>
                 )}
                 <div className={`p-6 ${plan.isPopular ? 'pt-12' : ''} text-center`}>
                   <h3 className="text-2xl font-semibold text-white mb-2 font-montserrat">{plan.name}</h3>
                   <p className="text-gray-400 text-sm font-inter mb-4">{plan.description}</p>
                   <p className="text-4xl font-bold text-white mb-6 font-montserrat">{plan.price}</p>
                   <ul className="text-left space-y-2 mb-6">
                     {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-center gap-2 text-gray-300 font-inter">
                         <CheckCircle className="h-5 w-5 text-teal-400" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                   <Link
                     href={plan.ctaLink}
                     className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:from-purple-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
                   >
                     Choose Plan
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </section>

         {/* FAQ Section */}
         <section className="section-spacing container mx-auto">
           <h2 className="text-3xl font-montserrat font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
           <div className="space-y-6 max-w-3xl mx-auto">
             {faqs.map((faq, index) => (
               <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 animate-slide-up">
                 <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">{faq.question}</h3>
                 <p className="text-gray-400 font-inter">{faq.answer}</p>
               </div>
             ))}
           </div>
         </section>

         {/* Footer with CTA */}
         <footer className="py-10 bg-gray-800/50 text-gray-400 text-center border-t border-purple-500/20">
           <div className="container mx-auto space-y-4">
             <h3 className="text-lg font-semibold text-white font-montserrat">Need a Custom Plan?</h3>
             <p className="text-sm font-inter">Let’s create a tailored solution for your business.</p>
             <Link
               href="/contact"
               className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:from-purple-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
             >
               Contact Us
             </Link>
           </div>
         </footer>
       </main>
     );
   }