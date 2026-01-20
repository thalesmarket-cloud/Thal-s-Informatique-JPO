
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  consent: boolean;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email.includes('@')) {
      setError('Veuillez entrer une adresse email professionnelle valide.');
      return;
    }
    if (!formData.consent) {
      setError('Veuillez accepter d\'être contacté pour valider votre inscription.');
      return;
    }

    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check-circle text-5xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande reçue !</h3>
        <p className="text-slate-600">
          Merci <strong>{formData.firstName}</strong>. Un consultant Thalès Informatique vous contactera rapidement pour confirmer votre participation.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-blue-600 font-semibold hover:underline"
        >
          Modifier mes informations
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase px-1">Prénom</label>
          <input
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
            placeholder="Jean"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase px-1">Nom</label>
          <input
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Email Professionnel</label>
        <input
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="email@entreprise.ma"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase px-1">Société</label>
          <input
            required
            name="company"
            value={formData.company}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
            placeholder="Nom de l'entreprise"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase px-1">Téléphone</label>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase px-1">Fonction</label>
        <input
          name="position"
          value={formData.position}
          onChange={handleChange}
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
          placeholder="Ex: DAF, Responsable Comptable..."
        />
      </div>

      <div className="pt-2">
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-slate-500 leading-tight group-hover:text-slate-700 transition-colors">
            J'accepte d'être contacté par Thalès Informatique & Sage Maroc dans le cadre de cet événement.
          </span>
        </label>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100 flex items-center">
          <i className="fas fa-exclamation-circle mr-2"></i>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 btn-gradient text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i> Envoi...
          </span>
        ) : "Confirmer ma participation"}
      </button>
    </form>
  );
};

export default RegistrationForm;
