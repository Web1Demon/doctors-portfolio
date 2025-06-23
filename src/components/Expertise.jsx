import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Plus, Minus, Instagram, Facebook } from 'lucide-react';
import Trademark from './Trademark';

export default function Expertise() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const expertiseItems = [
    {
      id: 'clinical-psychology',
      title: 'Clinical Psychology',
      content: 'Assessment and treatment of emotional, behavioral, and mental health disorders using evidence-based interventions.'
    },
    {
      id: 'forensic-psychology',
      title: 'Forensic Psychology',
      content: 'Psychological evaluations and expert witness services within legal and criminal justice systems.'
    },
    {
      id: 'health-psychology',
      title: 'Health Psychology',
      content: 'Supporting patients coping with chronic illnesses, pain, and mind-body connections to improve well-being.'
    },
    {
      id: 'life-career',
      title: 'LIFE & CAREER',
      content: 'Career transitions, life changes, goal setting, personal development, decision-making support, and finding purpose and fulfillment.'
    },
    {
      id: 'cultural',
      title: 'CULTURAL ISSUES',
      content: 'Multicultural counseling, identity exploration, acculturation challenges, intergenerational conflicts, and culturally sensitive therapy approaches.'
    },
    {
      id: 'grief',
      title: 'GRIEF & LOSS',
      content: 'Bereavement counseling, loss processing, complicated grief, life transitions, and support through difficult times of change and loss.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300 p-8" id='#consultation'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

         {/* The Rest Section */}
        <div className="space-y-8 pt-12">
          <h2 className="text-3xl font-light tracking-wider text-gray-400 mb-8">Dr. Jasmine Osadebay</h2>
          
          <div className="space-y-6 text-sm">   
            {/* <div>
              <p className="text-gray-300 leading-relaxed">
                Dr.Jasmine Osadebay North County office in Carmel Valley conveniently services Carmel Valley, 4S Ranch, Rancho Bernardo, Sorrento Valley, Black Mountain Ranch, Del Mar, Del Sur, La Jolla, Rancho Santa Fe, & Solana Beach.
              </p>
            </div> */}
            
            <div>
              <p className="text-gray-300">California Psychology License #20112 (Replace with her actual license)</p>
            </div>
            
            <div className="flex space-x-4 py-4">
              <Instagram size={20} className="text-gray-500 hover:text-teal-400 cursor-pointer transition-colors duration-300" />
              <Facebook size={20} className="text-gray-500 hover:text-teal-400 cursor-pointer transition-colors duration-300" />
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-400">- phone: <span className="text-gray-500">+234 806.44440.099</span></p>
              <p className="text-gray-400">- email: <span className="text-gray-500">nnekaosadebay@gmail.com</span></p>
            </div>
            
            <div>
              <p className="text-gray-300">
                Abuja, Nigeria
              </p>
            </div>
          </div>
        </div>
        

        {/* Expertise Section */}
        <div className="space-y-6 pt-12">
          <h2 className="text-xl font-light tracking-wider text-gray-400 mb-8">PRACTICE</h2>
          
          <div className="space-y-4">
            {expertiseItems.map((item) => (
              <div key={item.id} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full flex justify-between items-center py-4 text-left hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-gray-400 font-light tracking-wide">{item.title}</span>
                  <div className="text-teal-400">
                    {expandedSections[item.id] ? (
                      <Minus size={26} />
                    ) : (
                      <Plus size={26} />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedSections[item.id] 
                    ? 'max-h-96 opacity-100 pb-4' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 text-lg leading-10">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

         
        <Trademark />

       
      </div>
    </div>
  );
}