import React from 'react';

export default function page() {
  const cards = [
    {
      title: "Adobe Photoshop",
      category: "Design",
      time: "in 3 days",
      color: "bg-blue-50",
      textColor: "text-cyan-900",
      icon: "🎨",
      size: "col-span-2 md:col-span-1",
      avatars: true,
    },
    {
      title: "DALL·E 2, Midjourney, Stable Diffusion",
      category: "AI",
      time: "in 5 days",
      color: "bg-green-50",
      textColor: "text-green-900",
      icon: "🤖",
      size: "col-span-2 md:col-span-1",
      avatars: true,
      star: true,
    },
    {
      title: "Figma",
      category: "Design",
      time: "8 hours ago",
      color: "bg-purple-50",
      textColor: "text-purple-900",
      icon: "🎨",
      size: "col-span-2 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Python",
      category: "Codding",
      time: "2 days ago",
      color: "bg-orange-50",
      textColor: "text-orange-900",
      icon: " </> ",
      size: "col-span-2 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Sketch",
      category: "Design",
      time: "4 days ago",
      color: "bg-pink-50",
      textColor: "text-pink-900",
      icon: "🎨",
      size: "col-span-2 md:col-span-1 lg:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {/* Container Utama */}
      <div className="max-w-5xl mx-auto">
        
        {/* Logo Atas (Placeholder) */}
        <div className="mb-8 opacity-50">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L35 30H5L20 5Z" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} ${card.size} ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} 
              rounded-3xl p-8 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2 opacity-80">
                    <span className="text-sm">{card.icon}</span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${card.textColor}`}>
                      {card.category}
                    </span>
                  </div>
                  {card.star && <span className="text-gray-400">★</span>}
                </div>
                
                <h2 className={`text-2xl font-bold leading-tight ${card.textColor} mb-2`}>
                  {card.title}
                </h2>
                <p className={`${card.textColor} opacity-60 text-sm font-medium`}>
                  {card.time}
                </p>
              </div>

              {card.avatars && (
                <div className="flex justify-end -space-x-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${card.title}${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                    9+
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-right text-gray-400 text-sm font-medium">
          Day 020 / 365
        </div>
      </div>
    </div>
  );
}