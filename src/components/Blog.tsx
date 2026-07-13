import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, Clock, Calendar, ArrowRight, X, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Blog({ darkMode, onOpenModal }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Beauty' | 'Hair Care' | 'Wellness' | 'Trends'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Beauty', 'Hair Care', 'Wellness', 'Trends'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury blog journal background"
          className="absolute inset-0 w-full h-full object-cover filter brightness-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Allure Editorial Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Beauty & Care Journal
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Blog list area */}
      <section className={`py-16 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters, Categories and Search row */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16" id="blog-filter-bar">
            {/* Categories */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`py-2 px-4.5 rounded-full text-3xs uppercase tracking-[0.2em] font-bold border transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-gold-600 to-gold-400 border-gold-400 text-white'
                      : darkMode
                      ? 'border-gold-400/10 text-gold-200/70 hover:text-white bg-gold-500/5'
                      : 'border-gold-500/15 text-gold-800/80 hover:text-gold-950 bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or tags..."
                className={`w-full py-2.5 pl-10 pr-4 rounded-full text-xs outline-none border transition-all duration-300 font-light ${
                  darkMode
                    ? 'bg-[#101010] border-gold-400/20 text-white focus:border-gold-400 placeholder-gold-400/30'
                    : 'bg-white border-gold-500/15 text-[#1a1a1a] focus:border-gold-500 placeholder-gold-500/30'
                }`}
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
            </div>
          </div>

          {/* Articles listing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="blog-articles-grid">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedPost(post)}
                className={`group rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 glow-gold-hover cursor-pointer shadow-lg ${
                  darkMode
                    ? 'bg-[#121212] border-gold-400/10 hover:border-gold-400/30 text-gold-100'
                    : 'bg-white border-gold-500/10 hover:border-gold-500/30 text-[#1a1a1a]'
                }`}
              >
                <div>
                  {/* Photo cover with zoom */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 text-4xs uppercase tracking-widest font-semibold text-white bg-black/70 border border-gold-400/30 rounded">
                      {post.category}
                    </span>
                  </div>

                  {/* Body information */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center gap-4 text-4xs uppercase tracking-widest text-gold-400 font-light">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className={`font-serif text-lg font-light leading-snug tracking-wide group-hover:text-gold-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-[#1a1a1a]'
                    }`}>
                      {post.title}
                    </h3>

                    <p className={`text-3xs leading-relaxed font-light ${
                      darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'
                    }`}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer section of card */}
                <div className={`p-6 pt-4 border-t flex items-center justify-between ${
                  darkMode ? 'border-gold-400/5' : 'border-gold-500/5'
                }`}>
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7.5 h-7.5 rounded-full object-cover border border-gold-400/35"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] tracking-wide font-medium opacity-85">
                      {post.author.name}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500 flex items-center gap-1 group-hover:text-gold-300 transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Empty check */}
            {filteredPosts.length === 0 && (
              <div className="col-span-full py-16 text-center space-y-2">
                <p className="text-sm italic opacity-60">No articles match your search criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="text-2xs uppercase tracking-widest text-gold-400 font-bold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Full Post Reader Modal overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Background click close */}
            <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`relative w-full max-w-3xl rounded-2xl overflow-hidden border shadow-2xl z-10 flex flex-col my-8 ${
                darkMode
                  ? 'bg-[#121212]/95 border-gold-400/20 text-gold-100'
                  : 'bg-[#faf8f2]/95 border-gold-500/20 text-[#1a1a1a]'
              }`}
            >
              {/* Cover visual header */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10" />
                
                {/* Close Button overlay */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:text-gold-400 border border-white/10 z-20 transition-colors cursor-pointer"
                  aria-label="Close article reader"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover caption details */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-2">
                  <span className="px-3 py-1 bg-gold-600 text-white text-4xs uppercase tracking-widest rounded font-semibold border border-gold-400/20">
                    {selectedPost.category} JOURNAL
                  </span>
                  <h2 className="font-serif text-xl sm:text-3xl font-extralight tracking-wide uppercase text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Author & reading duration line */}
              <div className={`p-6 sm:px-8 py-4 border-b flex items-center justify-between text-2xs uppercase tracking-widest font-light ${
                darkMode ? 'bg-gold-500/5 border-gold-400/5 text-gold-200' : 'bg-gold-50/50 border-gold-500/5 text-gold-800'
              }`}>
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-gold-400/35"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold">{selectedPost.author.name}</p>
                    <p className="text-[9px] opacity-70 mt-0.5">{selectedPost.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 opacity-80 text-[10px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[40vh] space-y-6 font-light leading-relaxed text-xs sm:text-sm">
                <p className="italic font-normal opacity-90 border-l-2 border-gold-400 pl-4">
                  {selectedPost.excerpt}
                </p>
                <p>{selectedPost.content}</p>
                <p>
                  To maximize treatments and protect cellular structural proteins, we recommend consulting our styling directors on botanical care lines and scheduling customized moisture diagnostics quarterly.
                </p>

                {/* Tags footer */}
                <div className="pt-4 flex flex-wrap gap-2.5 items-center">
                  <Tag className="w-3.5 h-3.5 text-gold-500" />
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-4xs uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        darkMode ? 'bg-gold-500/10 text-gold-300' : 'bg-gold-500/5 text-gold-800 border border-gold-500/10'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className={`p-6 border-t text-center ${darkMode ? 'border-gold-400/5 bg-[#151515]' : 'border-gold-500/5 bg-[#faf8f2]'}`}>
                <button
                  onClick={() => { setSelectedPost(null); onOpenModal('booking'); }}
                  className="py-3 px-8 rounded-lg text-2xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-md shadow-gold-500/15 cursor-pointer"
                >
                  Consult This Author
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
