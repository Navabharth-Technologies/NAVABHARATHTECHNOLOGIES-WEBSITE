import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { clients } from "@/data/clients";
import InstagramReelPlayer from "@/components/InstagramReelPlayer";

export function generateStaticParams() {
  return clients.map((client) => ({
    slug: client.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = clients.find((c) => c.slug === slug);
  if (!client) return { title: "Not Found" };

  return {
    title: `${client.name} | Portfolio | NAVABHARATH TECHNOLOGIES`,
    description: `Learn how NAVABHARATH TECHNOLOGIES supports ${client.name} with digital solutions including website maintenance, social media management, or application development.`,
  };
}

export default async function ClientDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = clients.find((c) => c.slug === slug);

  if (!client) {
    notFound();
  }

  const Icon = client.icon;

  return (
    <main className="bg-[#f8fbff] dark:bg-[#020617] min-h-screen text-[#0b1220] dark:text-slate-200 selection:bg-[#D48D30]/30 selection:text-[#D48D30] dark:selection:text-[#F5A623]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Gradient Background Based on Client Theme */}
        <div className={`absolute inset-0 bg-gradient-to-br ${client.colorTheme.primary} ${client.colorTheme.secondary} opacity-5 dark:opacity-10 mix-blend-multiply transition-colors duration-500`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-b ${client.colorTheme.primary} to-transparent blur-[100px] opacity-10 dark:opacity-20 pointer-events-none transition-opacity duration-500`} />
        
        {/* Watermark Logo */}
        <div className="absolute right-0 bottom-0 opacity-5 dark:opacity-[0.02] pointer-events-none w-96 h-96 translate-x-1/3 translate-y-1/4">
          <Image src="/navabharath-portfolio/logo-wbg.png" alt="" fill className="object-contain" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12">
              {/* Logo / Icon */}
              {client.logoUrl ? (
                <div className="relative w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl shrink-0 transition-colors duration-500">
                  <Image src={client.logoUrl} alt={`${client.name} logo`} fill className="object-cover" sizes="96px" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-inner shrink-0 transition-colors duration-500">
                  <Icon className="w-12 h-12 text-[#D48D30] dark:text-[#F5A623]" />
                </div>
              )}
              
              {/* Header Info */}
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 bg-white dark:bg-[#0f172a] text-[#0b1220] dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm rounded-full uppercase tracking-wider mb-4 transition-colors duration-500`}>
                  {client.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0b1220] dark:text-white mb-4 transition-colors duration-500">
                  {client.name}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl transition-colors duration-500">
                  {client.shortDescription}
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col gap-6 mb-16">
              <div className="flex flex-wrap gap-4">
                {client.links.website && (
                  <a href={client.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all border border-blue-200 dark:border-blue-800/50 shadow-sm transform-gpu">
                    Visit Website <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {client.links.instagram && (
                  <a href={client.links.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 font-medium hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-all border border-pink-200 dark:border-pink-800/50 shadow-sm transform-gpu">
                    View Instagram <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {client.links.app && (
                  <a href={client.links.app} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
                    Get the App <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              {/* Multiple Apps Rendering */}
              {client.links.apps && client.links.apps.length > 0 && (
                <div className="flex flex-col gap-4 mt-2">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Applications</h3>
                  <div className="flex flex-wrap gap-6">
                    {client.links.apps.map((app, idx) => (
                      <div key={idx} className="flex flex-col gap-3 p-5 bg-white/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <span className="text-[#0b1220] dark:text-white font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {app.name}
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {app.androidUrl && (
                            <a href={app.androidUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all border border-emerald-200 dark:border-emerald-800/50 transform-gpu">
                              Android <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {app.macUrl && (
                            <a href={app.macUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all border border-purple-200 dark:border-purple-800/50 transform-gpu">
                              Mac <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800/50 shadow-lg shadow-slate-200/50 dark:shadow-black/20 transition-colors duration-500">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-[#0b1220] dark:text-white mb-6">Project Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {client.longDescription}
              </p>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Type</h3>
                <p className="text-[#0b1220] dark:text-slate-200 font-medium">{client.projectType}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {client.technologiesUsed.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-700 transition-colors duration-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Highlight / Instagram Reels */}
      {client.instagramVideos && client.instagramVideos.length > 0 && (
        <section className="container mx-auto px-6 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-[#0b1220] dark:text-white">Social Media Highlights</h2>
              <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full border border-pink-200 dark:border-pink-800/50 uppercase tracking-wider">
                Instagram Reels
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {client.instagramVideos.map((videoSrc, idx) => (
                <InstagramReelPlayer key={idx} src={videoSrc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services & Highlights Grid */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Services Provided */}
          <div>
            <h2 className="text-2xl font-bold text-[#0b1220] dark:text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#D48D30] rounded-full"></span>
              Services Provided
            </h2>
            <div className="space-y-4">
              {client.services.map((service, idx) => (
                <div key={idx} className="bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 dark:border-slate-800/50 shadow-sm flex items-start gap-4 hover:border-[#D48D30]/30 dark:hover:border-[#F5A623]/30 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-[#D48D30] dark:text-[#F5A623] shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-[#0b1220] dark:text-slate-200">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
             <h2 className="text-2xl font-bold text-[#0b1220] dark:text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#F5A623] rounded-full"></span>
              Key Highlights
            </h2>
            <ul className="space-y-4">
              {client.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-slate-800/20 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/30">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${client.colorTheme.primary} ${client.colorTheme.secondary}`} />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results / Impact Section */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#0b1220] dark:text-white mb-12">Impact & Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {client.results.map((result, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800/50 text-center shadow-lg shadow-slate-200/40 dark:shadow-black/30 hover:-translate-y-1 transition-transform duration-300 transform-gpu">
                <div className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${client.colorTheme.primary} ${client.colorTheme.secondary} mb-2`}>
                  {result.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      {client.logoUrl && (
        <section className="container mx-auto px-6 py-12 mb-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="relative w-full aspect-square md:aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-300/30 dark:shadow-black/50 group bg-white dark:bg-slate-900 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image 
                  src={client.logoUrl} 
                  alt={`${client.name} logo`} 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                  sizes="(max-width: 1200px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-transparent transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D48D30]/10 dark:bg-[#D48D30]/5 rounded-full blur-[120px] -z-10 transition-colors duration-500" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1220] dark:text-white mb-6">
            Want a digital solution like this?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            NAVABHARATH TECHNOLOGIES can help you build, maintain, and grow your digital presence with websites, social media, and application solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#D48D30] px-8 font-medium text-white transition-colors hover:bg-blue-500 shadow-lg shadow-[#D48D30]/20"
            >
              Contact Us
            </a>
            <a
              href="/#portfolio"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-8 font-medium text-slate-700 dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
