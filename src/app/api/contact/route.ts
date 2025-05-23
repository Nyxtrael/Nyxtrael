import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Proszę podać imię'),
  email: z.string().email('Proszę podać poprawny email'),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków'),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    // Pokaż toast z sonner
  };

  return (
    <form data-netlify="true" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          placeholder="Imię"
          className="w-full bg-neutral-200/50 border border-primary/50 focus:border-primary rounded-lg p-3"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      {/* Pozostałe pola */}
      <button type="submit" className="btn-primary">Wyślij</button>
    </form>
  );
}