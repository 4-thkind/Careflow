import React, { useState } from 'react';
import { UserProfile } from '../types';

interface ProfileFormProps {
  initialData?: UserProfile | null;
  onSave: (profile: UserProfile) => void;
}

export default function ProfileForm({ initialData, onSave }: ProfileFormProps) {
  const [formData, setFormData] = useState<UserProfile>(initialData || {
    name: '',
    age: 25,
    gender: 'male',
    height: 170,
    weight: 70,
    goal: 'maintenance',
    activityLevel: 'moderate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const totalInches = Math.round((formData.height || 0) / 2.54);
  const displayFeet = isNaN(totalInches) ? '' : Math.floor(totalInches / 12);
  const displayInches = isNaN(totalInches) ? '' : totalInches % 12;

  const handleHeightChange = (type: 'feet' | 'inches', value: string) => {
    let newFeet = typeof displayFeet === 'number' ? displayFeet : 0;
    let newInches = typeof displayInches === 'number' ? displayInches : 0;

    if (type === 'feet') newFeet = parseInt(value, 10);
    if (type === 'inches') newInches = parseInt(value, 10);

    if (isNaN(newFeet) && isNaN(newInches)) {
      setFormData({ ...formData, height: NaN as any });
      return;
    }
    
    newFeet = isNaN(newFeet) ? 0 : newFeet;
    newInches = isNaN(newInches) ? 0 : newInches;

    const totalNewInches = (newFeet * 12) + newInches;
    const cm = Math.round(totalNewInches * 2.54);
    setFormData({ ...formData, height: cm });
  };

  return (
    <div className="card w-full max-w-2xl mx-auto border border-[#3a3a3f] bg-[#0a0a0a]">
      <div className="mb-8">
        <h2 className="display-xl mb-2">INITIALIZE PROFILE</h2>
        <p className="caption-text text-[#f0f0fa]">CONFIGURE YOUR BIOMETRIC PARAMETERS TO COMMENCE TRACKING.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="eyebrow block">DESIGNATION / NAME</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
              placeholder="ENTER NAME"
            />
          </div>

          <div className="space-y-2">
            <label className="eyebrow block">AGE</label>
            <input
              type="number"
              required
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="eyebrow block">HEIGHT</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  type="number"
                  required
                  min="0"
                  value={displayFeet}
                  onChange={(e) => handleHeightChange('feet', e.target.value)}
                  className="w-full pr-8"
                  placeholder="FT"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#5a5a5f] font-bold pointer-events-none">FT</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  required
                  min="0"
                  max="11"
                  value={displayInches}
                  onChange={(e) => handleHeightChange('inches', e.target.value)}
                  className="w-full pr-8"
                  placeholder="IN"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#5a5a5f] font-bold pointer-events-none">IN</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="eyebrow block">MASS (KG)</label>
            <input
              type="number"
              required
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="eyebrow block">GENDER</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
              className="w-full"
            >
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
              <option value="other">OTHER</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="eyebrow block">PRIMARY OBJECTIVE</label>
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value as any })}
              className="w-full"
            >
              <option value="weight-loss">MASS REDUCTION</option>
              <option value="muscle-gain">MUSCLE HYPERTROPHY</option>
              <option value="maintenance">MAINTAIN ORBIT</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="eyebrow block mb-2">ACTIVITY LEVEL</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {(['sedentary', 'light', 'moderate', 'active', 'very-active'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, activityLevel: level })}
                  className={`border border-[#3a3a3f] py-3 px-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    formData.activityLevel === level
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-[#f0f0fa] hover:border-white'
                  }`}
                >
                  {level.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#3a3a3f]">
          <button type="submit" className="btn-ghost w-full">
            {initialData ? 'UPDATE PARAMETERS' : 'COMMENCE SEQUENCE'}
          </button>
        </div>
      </form>
    </div>
  );
}
