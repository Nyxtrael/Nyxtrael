import { supabase } from '@/lib/supabaseClient'

const handleSubmit = async (e) => {
  e.preventDefault()

  // walidacja...

  const { data, error } = await supabase
    .from('orders')
    .insert([{
      name: formData.name,
      email: formData.email,
      projectType,
      details: formData.prompt,
      created_at: new Date().toISOString()
    }])

  if (error) {
    console.error('💥 Supabase error:', error)
    return
  }

  alert("Dzięki, dodano do bazy!")
  router.push('/thanks')
}
