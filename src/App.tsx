import React from 'react';
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { Input } from './components/Input';
import { Select } from './components/Select';
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';
import { Navigation } from './components/Navigation';
import { TypingText } from './components/TypingText';
import { StatCounter } from './components/StatCounter';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Alert } from './components/Alert';
import { Avatar } from './components/Avatar';
import { Modal } from './components/Modal';
import { Tooltip } from './components/Tooltip';

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm mt-4 font-mono">
      <code>{code}</code>
    </pre>
  );
}

function Section({ id, title, description, children }: { id: string, title: string, description?: string, children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 relative z-10">
      <h2 className="text-3xl font-semibold text-slate-900 mb-2 font-display">{title}</h2>
      {description && <p className="text-slate-600 mb-6 font-sans text-lg">{description}</p>}
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
}

function ComponentPreview({ title, children, code }: { title: string, children: React.ReactNode, code: string }) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/20 bg-white/30">
        <h3 className="font-medium text-slate-900 font-sans">{title}</h3>
      </div>
      <div className="p-6 flex flex-wrap gap-4 items-end relative">
        {children}
      </div>
      <div className="px-6 pb-6">
        <CodeBlock code={code} />
      </div>
    </div>
  );
}

function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Confirm Action"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Are you sure you want to proceed with this action? This cannot be undone.</p>
      </Modal>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row relative overflow-hidden font-sans">
      {/* Decorative Background Blobs for Glassmorphism */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 left-1/2 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Sidebar */}
      <aside className="w-full md:w-64 glass-panel border-r border-white/40 shrink-0 md:h-screen md:sticky md:top-0 overflow-y-auto z-20">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-8 font-display">Design System</h1>
          
          <nav className="space-y-6">
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Foundation</h2>
              <ul className="space-y-2">
                <li><a href="#principles" className="text-sm text-slate-700 hover:text-primary transition-colors">Design Principles</a></li>
                <li><a href="#colors" className="text-sm text-slate-700 hover:text-primary transition-colors">Colors</a></li>
                <li><a href="#spacing" className="text-sm text-slate-700 hover:text-primary transition-colors">Spacing</a></li>
                <li><a href="#typography" className="text-sm text-slate-700 hover:text-primary transition-colors">Typography</a></li>
                <li><a href="#radius" className="text-sm text-slate-700 hover:text-primary transition-colors">Border Radius</a></li>
                <li><a href="#grid" className="text-sm text-slate-700 hover:text-primary transition-colors">Grid Layout</a></li>
                <li><a href="#elevation" className="text-sm text-slate-700 hover:text-primary transition-colors">Elevation & Shadows</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Motion & Effects</h2>
              <ul className="space-y-2">
                <li><a href="#glass-blurs" className="text-sm text-slate-700 hover:text-primary transition-colors">Glass & Blurs</a></li>
                <li><a href="#typing" className="text-sm text-slate-700 hover:text-primary transition-colors">Typing Text</a></li>
                <li><a href="#counters" className="text-sm text-slate-700 hover:text-primary transition-colors">Stat Counters</a></li>
                <li><a href="#hover-effects" className="text-sm text-slate-700 hover:text-primary transition-colors">Hover Animations</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Components</h2>
              <ul className="space-y-2">
                <li><a href="#banners" className="text-sm text-slate-700 hover:text-primary transition-colors">Banners</a></li>
                <li><a href="#buttons" className="text-sm text-slate-700 hover:text-primary transition-colors">Buttons</a></li>
                <li><a href="#cards" className="text-sm text-slate-700 hover:text-primary transition-colors">Cards & Badges</a></li>
                <li><a href="#icons" className="text-sm text-slate-700 hover:text-primary transition-colors">Icons</a></li>
                <li><a href="#navigation" className="text-sm text-slate-700 hover:text-primary transition-colors">Navigation</a></li>
                <li><a href="#avatars" className="text-sm text-slate-700 hover:text-primary transition-colors">Avatars</a></li>
                <li><a href="#alerts" className="text-sm text-slate-700 hover:text-primary transition-colors">Feedback & Alerts</a></li>
                <li><a href="#modals" className="text-sm text-slate-700 hover:text-primary transition-colors">Modals</a></li>
                <li><a href="#tooltips" className="text-sm text-slate-700 hover:text-primary transition-colors">Tooltips</a></li>
                <li><a href="#inputs" className="text-sm text-slate-700 hover:text-primary transition-colors">Inputs</a></li>
                <li><a href="#dropdowns" className="text-sm text-slate-700 hover:text-primary transition-colors">Dropdowns</a></li>
                <li><a href="#checkbox-radio" className="text-sm text-slate-700 hover:text-primary transition-colors">Checkbox & Radio</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-5xl relative z-10">
        <div className="mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 font-display">Design System Documentation</h1>
          <p className="text-xl text-slate-600 font-sans max-w-3xl">A comprehensive guide to the design tokens and components used in our application, featuring <span className="text-emphasis">Burgundia</span> for emphasis and Avignon Pro for clarity.</p>
        </div>

        {/* FOUNDATION */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-200/50 pb-2 font-display">Foundation</h2>
          
          <Section id="principles" title="Design Principles">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <Icon name="palette" className="text-primary mb-4" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2 font-display text-2xl">Harmonious</h3>
                <p className="text-sm text-slate-600">Colors and spacing work together to create a balanced, pleasing interface inspired by art and nature.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <Icon name="accessibility_new" className="text-secondary mb-4" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2 font-display text-2xl">Accessible</h3>
                <p className="text-sm text-slate-600">Components are built with accessibility in mind, ensuring everyone can use the interface comfortably.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <Icon name="widgets" className="text-slate-700 mb-4" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2 font-display text-2xl">Reusable</h3>
                <p className="text-sm text-slate-600">A modular approach allows components to be combined and reused across different contexts.</p>
              </div>
            </div>
          </Section>

          <Section id="colors" title="Colors" description="Our core color palette consists of a primary pink, a secondary green, and plenty of white space.">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-panel p-4 rounded-xl space-y-4">
                <div className="h-24 rounded-lg bg-primary shadow-sm border border-white/20"></div>
                <div>
                  <div className="font-medium text-slate-900 font-display text-xl">Primary</div>
                  <div className="text-xs text-slate-500 font-mono">#fdafbf • 10%</div>
                  <div className="text-xs text-slate-400 mt-1">bg-primary</div>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-xl space-y-4">
                <div className="h-24 rounded-lg bg-secondary shadow-sm border border-white/20"></div>
                <div>
                  <div className="font-medium text-slate-900 font-display text-xl">Secondary</div>
                  <div className="text-xs text-slate-500 font-mono">#96a35c • 30%</div>
                  <div className="text-xs text-slate-400 mt-1">bg-secondary</div>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-xl space-y-4">
                <div className="h-24 rounded-lg bg-white shadow-sm border border-slate-200/50"></div>
                <div>
                  <div className="font-medium text-slate-900 font-display text-xl">Background</div>
                  <div className="text-xs text-slate-500 font-mono">#ffffff • 60%</div>
                  <div className="text-xs text-slate-400 mt-1">bg-white</div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="spacing" title="Spacing" description="We use the default Tailwind CSS spacing scale.">
            <div className="glass-panel rounded-xl p-6 overflow-x-auto">
              <div className="min-w-[600px]">
                {[0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96].map((space) => (
                  <div key={space} className="flex items-center gap-4 py-2 border-b border-slate-200/50 last:border-0">
                    <div className="w-16 text-sm font-mono text-slate-500">{space}</div>
                    <div className="w-24 text-sm text-slate-600">{space * 0.25}rem</div>
                    <div className="w-24 text-sm text-slate-600">{space * 4}px</div>
                    <div className="flex-1">
                      <div className="h-4 bg-primary/80 rounded-sm" style={{ width: `${space * 4}px` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="typography" title="Typography" description="Custom fonts for distinct brand identity.">
            <div className="glass-panel rounded-xl p-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-semibold">Display Font (Headings)</div>
                  <div className="text-4xl font-medium text-slate-900 font-display">Burgundia personal use</div>
                  <p className="text-sm text-slate-500 mt-2">Used for titles and <span className="text-emphasis">emphasis</span>.</p>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-semibold">Body Font (Paragraphs)</div>
                  <div className="text-3xl font-medium text-slate-900 font-sans">Avignon Pro</div>
                  <p className="text-sm text-slate-500 mt-2">Used for body copy, UI elements, and general text.</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-200/50">
                <div className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">Sizes & Hierarchy</div>
                <div className="flex items-end gap-4 border-b border-slate-200/50 pb-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-4xl</div>
                  <div className="text-4xl font-bold text-slate-900 font-display">Heading 1</div>
                </div>
                <div className="flex items-end gap-4 border-b border-slate-200/50 pb-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-3xl</div>
                  <div className="text-3xl font-semibold text-slate-900 font-display">Heading 2</div>
                </div>
                <div className="flex items-end gap-4 border-b border-slate-200/50 pb-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-2xl</div>
                  <div className="text-2xl font-semibold text-slate-900 font-display">Heading 3</div>
                </div>
                <div className="flex items-end gap-4 border-b border-slate-200/50 pb-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-xl</div>
                  <div className="text-xl font-medium text-slate-900 font-display">Heading 4</div>
                </div>
                <div className="flex items-end gap-4 border-b border-slate-200/50 pb-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-base</div>
                  <div className="text-base font-normal text-slate-900 font-sans">Body text. The quick brown fox jumps over the lazy dog.</div>
                </div>
                <div className="flex items-end gap-4">
                  <div className="w-24 text-sm text-slate-500 font-mono">text-sm</div>
                  <div className="text-sm font-normal text-slate-900 font-sans">Small text. The quick brown fox jumps over the lazy dog.</div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="radius" title="Border Radius" description="We use rounded corners to create a friendly, approachable interface.">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { name: 'rounded-none', class: 'rounded-none' },
                { name: 'rounded-sm', class: 'rounded-sm' },
                { name: 'rounded-md', class: 'rounded-md' },
                { name: 'rounded-lg', class: 'rounded-lg' },
                { name: 'rounded-xl', class: 'rounded-xl' },
                { name: 'rounded-2xl', class: 'rounded-2xl' },
                { name: 'rounded-3xl', class: 'rounded-3xl' },
                { name: 'rounded-full', class: 'rounded-full' },
              ].map((radius) => (
                <div key={radius.name} className="flex flex-col items-center gap-3 glass-panel p-4 rounded-xl">
                  <div className={`w-16 h-16 bg-secondary/80 ${radius.class}`}></div>
                  <div className="text-xs text-slate-600 font-mono">{radius.name}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="grid" title="Grid Layout" description="Responsive grid system: 12 columns on desktop, 4 columns on mobile.">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Desktop (12 Columns)</h3>
                <div className="grid grid-cols-12 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-12 bg-primary/20 rounded-md border border-primary/30 flex items-center justify-center text-xs text-primary font-mono hidden md:flex">
                      1
                    </div>
                  ))}
                  <div className="col-span-12 h-12 bg-secondary/20 rounded-md border border-secondary/30 flex items-center justify-center text-xs text-secondary font-mono hidden md:flex">
                    12
                  </div>
                  <div className="col-span-6 h-12 bg-blue-500/20 rounded-md border border-blue-500/30 flex items-center justify-center text-xs text-blue-600 font-mono hidden md:flex">
                    6
                  </div>
                  <div className="col-span-6 h-12 bg-blue-500/20 rounded-md border border-blue-500/30 flex items-center justify-center text-xs text-blue-600 font-mono hidden md:flex">
                    6
                  </div>
                  <div className="col-span-4 h-12 bg-purple-500/20 rounded-md border border-purple-500/30 flex items-center justify-center text-xs text-purple-600 font-mono hidden md:flex">
                    4
                  </div>
                  <div className="col-span-4 h-12 bg-purple-500/20 rounded-md border border-purple-500/30 flex items-center justify-center text-xs text-purple-600 font-mono hidden md:flex">
                    4
                  </div>
                  <div className="col-span-4 h-12 bg-purple-500/20 rounded-md border border-purple-500/30 flex items-center justify-center text-xs text-purple-600 font-mono hidden md:flex">
                    4
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4 hidden md:block">Resize your browser to see the mobile grid.</p>
              </div>
              
              <div className="md:hidden">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Mobile (4 Columns)</h3>
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-12 bg-primary/20 rounded-md border border-primary/30 flex items-center justify-center text-xs text-primary font-mono">
                      1
                    </div>
                  ))}
                  <div className="col-span-4 h-12 bg-secondary/20 rounded-md border border-secondary/30 flex items-center justify-center text-xs text-secondary font-mono">
                    4
                  </div>
                  <div className="col-span-2 h-12 bg-blue-500/20 rounded-md border border-blue-500/30 flex items-center justify-center text-xs text-blue-600 font-mono">
                    2
                  </div>
                  <div className="col-span-2 h-12 bg-blue-500/20 rounded-md border border-blue-500/30 flex items-center justify-center text-xs text-blue-600 font-mono">
                    2
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="elevation" title="Elevation & Shadows" description="Shadows create depth and establish visual hierarchy.">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'shadow-sm', class: 'shadow-sm' },
                { name: 'shadow', class: 'shadow' },
                { name: 'shadow-md', class: 'shadow-md' },
                { name: 'shadow-lg', class: 'shadow-lg' },
              ].map((shadow) => (
                <div key={shadow.name} className={`h-32 bg-white rounded-xl flex flex-col items-center justify-center gap-2 ${shadow.class}`}>
                  <div className="text-sm font-medium text-slate-900">{shadow.name}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* MOTION & EFFECTS */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-200/50 pb-2 font-display">Motion & Effects</h2>
          
          <Section id="glass-blurs" title="Glassmorphism & Blurs" description="Layered translucent effects to create depth and visual interest.">
            <ComponentPreview 
              title="Glass Panels" 
              code={`<div className="glass-panel p-6 rounded-xl">
  <h3 className="font-display text-2xl">Glass Effect</h3>
</div>`}
            >
              <div className="relative w-full h-64 bg-slate-200/50 rounded-xl overflow-hidden flex items-center justify-center p-8 border border-white/50">
                {/* Background blobs for contrast */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/60 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/60 rounded-full blur-3xl"></div>
                
                <div className="glass-panel p-8 rounded-xl w-full max-w-md relative z-10 text-center">
                  <h3 className="font-display text-3xl mb-2 text-slate-900">Glass Effect</h3>
                  <p className="text-slate-700 font-sans">This panel uses backdrop-blur and semi-transparent backgrounds to create depth.</p>
                </div>
              </div>
            </ComponentPreview>
          </Section>

          <Section id="typing" title="Typing Text" description="Animated text that types and deletes strings sequentially.">
            <ComponentPreview 
              title="Typing Effect" 
              code={`<h3 className="text-3xl font-display">
  <TypingText 
    prefix="A arte pode mudar " 
    strings={['tudo', 'o mundo', 'você']} 
  />
</h3>`}
            >
              <h3 className="text-2xl md:text-4xl text-slate-900 font-display">
                <TypingText 
                  prefix="A arte pode mudar " 
                  strings={['tudo', 'o mundo', 'você']} 
                />
              </h3>
            </ComponentPreview>
          </Section>

          <Section id="counters" title="Stat Counters" description="Numbers that animate from zero when scrolled into view.">
            <ComponentPreview 
              title="Animated Counter" 
              code={`<StatCounter 
  end={160} 
  prefix="+de " 
  label="Projetos concluidos" 
/>`}
            >
              <div className="w-full flex justify-center py-8">
                <StatCounter 
                  end={160} 
                  prefix="+de " 
                  label="Projetos concluidos" 
                />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="hover-effects" title="Hover Animations" description="Subtle interactions for links, buttons, and images.">
            <ComponentPreview 
              title="Grow & Float" 
              code={`<Button className="hover:scale-110 transition-transform duration-300">Grow</Button>
<div className="animate-[float_3s_ease-in-out_infinite]">Floating Element</div>
<a href="#" className="link-underline-hover">Underlined Link</a>`}
            >
              <div className="flex flex-wrap items-center gap-8 w-full justify-around py-8">
                <Button className="hover:scale-110 transition-transform duration-300">Grow on Hover</Button>
                
                <div className="animate-[float_3s_ease-in-out_infinite] glass-panel p-4 rounded-full">
                  <Icon name="favorite" className="text-primary" />
                </div>

                <a href="#" className="text-xl font-medium text-slate-900 link-underline-hover font-display">
                  Underlined Link
                </a>
              </div>
            </ComponentPreview>
          </Section>
        </div>

        {/* COMPONENTS */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-200/50 pb-2 font-display">Components</h2>

          <Section id="banners" title="Banners">
            <ComponentPreview 
              title="Announcement Bar" 
              code={`<AnnouncementBar 
  text="20% DE DESCONTO e FRETE GRÁTIS em TODO SITE" 
/>`}
            >
              <div className="w-full rounded-lg overflow-hidden">
                <AnnouncementBar text="20% DE DESCONTO e FRETE GRÁTIS em TODO SITE" />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="buttons" title="Buttons">
            <ComponentPreview 
              title="Variants" 
              code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
            >
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </ComponentPreview>

            <ComponentPreview 
              title="Sizes" 
              code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
            >
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </ComponentPreview>

            <ComponentPreview 
              title="States" 
              code={`<Button variant="primary">Default</Button>
<Button variant="primary" disabled>Disabled</Button>`}
            >
              <Button variant="primary">Default</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </ComponentPreview>
          </Section>

          <Section id="cards" title="Cards & Badges">
            <ComponentPreview 
              title="Product Card with Ken Burns Hover" 
              code={`<Card 
  image="https://picsum.photos/seed/art1/600/800"
  title="Flores Selvagens II"
  price="R$ 50,00"
  badge="Esgotado"
  badgeVariant="dark"
  actionText="Adquirir peça única"
/>`}
            >
              <div className="w-full flex justify-center bg-slate-100/50 p-8 rounded-lg">
                <Card 
                  image="https://picsum.photos/seed/art1/600/800"
                  title="Flores Selvagens II"
                  price="R$ 50,00"
                  badge="Esgotado"
                  badgeVariant="dark"
                  actionText="Adquirir peça única"
                />
              </div>
            </ComponentPreview>

            <ComponentPreview 
              title="Product Card with Sale Price" 
              code={`<Card 
  image="https://picsum.photos/seed/art2/600/800"
  title="Obra A mente mentindo"
  price="R$ 1.152,22"
  originalPrice="R$ 1.440,28"
  badge="Promoção"
  badgeVariant="primary"
/>`}
            >
              <div className="w-full flex justify-center bg-slate-100/50 p-8 rounded-lg">
                <Card 
                  image="https://picsum.photos/seed/art2/600/800"
                  title="Obra A mente mentindo"
                  price="R$ 1.152,22"
                  originalPrice="R$ 1.440,28"
                  badge="Promoção"
                  badgeVariant="primary"
                />
              </div>
            </ComponentPreview>

            <ComponentPreview 
              title="Badges" 
              code={`<Badge variant="primary">Promoção</Badge>
<Badge variant="secondary">Novo</Badge>
<Badge variant="dark">Esgotado</Badge>
<Badge variant="outline">Destaque</Badge>`}
            >
              <div className="flex gap-4">
                <Badge variant="primary">Promoção</Badge>
                <Badge variant="secondary">Novo</Badge>
                <Badge variant="dark">Esgotado</Badge>
                <Badge variant="outline">Destaque</Badge>
              </div>
            </ComponentPreview>
          </Section>

          <Section id="icons" title="Icons" description="Using Material Symbols Outlined with weight 200.">
            <ComponentPreview 
              title="Sizes" 
              code={`<Icon name="favorite" size={16} />
<Icon name="favorite" size={20} />
<Icon name="favorite" size={24} />
<Icon name="favorite" size={32} />
<Icon name="favorite" size={40} />`}
            >
              <div className="flex items-end gap-6 text-slate-700">
                <div className="flex flex-col items-center gap-2"><Icon name="favorite" size={16} /><span className="text-xs text-slate-400">16</span></div>
                <div className="flex flex-col items-center gap-2"><Icon name="favorite" size={20} /><span className="text-xs text-slate-400">20</span></div>
                <div className="flex flex-col items-center gap-2"><Icon name="favorite" size={24} /><span className="text-xs text-slate-400">24</span></div>
                <div className="flex flex-col items-center gap-2"><Icon name="favorite" size={32} /><span className="text-xs text-slate-400">32</span></div>
                <div className="flex flex-col items-center gap-2"><Icon name="favorite" size={40} /><span className="text-xs text-slate-400">40</span></div>
              </div>
            </ComponentPreview>
          </Section>

          <Section id="navigation" title="Menu / Navigation">
            <ComponentPreview 
              title="Top Navigation" 
              code={`<Navigation />`}
            >
              <div className="w-full border border-slate-200 rounded-lg overflow-hidden">
                <Navigation />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="avatars" title="Avatars">
            <ComponentPreview 
              title="Sizes" 
              code={`<Avatar size="sm" src="https://picsum.photos/seed/user1/200/200" />
<Avatar size="md" src="https://picsum.photos/seed/user2/200/200" />
<Avatar size="lg" src="https://picsum.photos/seed/user3/200/200" />`}
            >
              <div className="flex items-end gap-4">
                <Avatar size="sm" src="https://picsum.photos/seed/user1/200/200" />
                <Avatar size="md" src="https://picsum.photos/seed/user2/200/200" />
                <Avatar size="lg" src="https://picsum.photos/seed/user3/200/200" />
              </div>
            </ComponentPreview>

            <ComponentPreview 
              title="Initials Fallback" 
              code={`<Avatar size="md" initials="JD" />
<Avatar size="lg" initials="AB" />`}
            >
              <div className="flex items-end gap-4">
                <Avatar size="md" initials="JD" />
                <Avatar size="lg" initials="AB" />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="alerts" title="Feedback & Alerts">
            <ComponentPreview 
              title="Variants" 
              code={`<Alert variant="info" title="Information">This is an info alert.</Alert>
<Alert variant="success" title="Success">Your changes have been saved.</Alert>
<Alert variant="warning" title="Warning">Please check your connection.</Alert>
<Alert variant="error" title="Error">Failed to save changes.</Alert>`}
            >
              <div className="w-full flex flex-col gap-4">
                <Alert variant="info" title="Information">This is an info alert.</Alert>
                <Alert variant="success" title="Success">Your changes have been saved.</Alert>
                <Alert variant="warning" title="Warning">Please check your connection.</Alert>
                <Alert variant="error" title="Error">Failed to save changes.</Alert>
              </div>
            </ComponentPreview>
          </Section>

          <Section id="modals" title="Modals">
            <ComponentPreview 
              title="Basic Modal" 
              code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Confirm Action"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed with this action? This cannot be undone.</p>
</Modal>`}
            >
              <div className="w-full flex justify-center py-4">
                <ModalDemo />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="tooltips" title="Tooltips">
            <ComponentPreview 
              title="Positions" 
              code={`<Tooltip content="Tooltip on top" position="top">
  <Button variant="outline">Top</Button>
</Tooltip>`}
            >
              <div className="flex flex-wrap gap-8 justify-center w-full py-8">
                <Tooltip content="Tooltip on top" position="top">
                  <Button variant="outline">Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip on bottom" position="bottom">
                  <Button variant="outline">Bottom</Button>
                </Tooltip>
                <Tooltip content="Tooltip on left" position="left">
                  <Button variant="outline">Left</Button>
                </Tooltip>
                <Tooltip content="Tooltip on right" position="right">
                  <Button variant="outline">Right</Button>
                </Tooltip>
              </div>
            </ComponentPreview>
          </Section>

          <Section id="inputs" title="Inputs">
            <ComponentPreview 
              title="Text Input" 
              code={`<Input label="Email" placeholder="Enter your email" />
<Input label="Username" placeholder="Enter username" disabled />
<Input label="Password" type="password" error="Password is required" />`}
            >
              <div className="w-full max-w-sm space-y-4">
                <Input label="Email" placeholder="Enter your email" />
                <Input label="Username" placeholder="Enter username" disabled />
                <Input label="Password" type="password" error="Password is required" defaultValue="123" />
              </div>
            </ComponentPreview>

            <ComponentPreview 
              title="Search Input" 
              code={`<Input type="search" placeholder="Search..." icon="search" />`}
            >
              <div className="w-full max-w-sm">
                <Input type="search" placeholder="Search..." icon="search" />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="dropdowns" title="Dropdowns / Select">
            <ComponentPreview 
              title="Select" 
              code={`<Select 
  label="Country" 
  options={[
    { label: 'Brazil', value: 'br' },
    { label: 'United States', value: 'us' },
    { label: 'Portugal', value: 'pt' }
  ]} 
/>`}
            >
              <div className="w-full max-w-sm space-y-4">
                <Select 
                  label="Country" 
                  options={[
                    { label: 'Brazil', value: 'br' },
                    { label: 'United States', value: 'us' },
                    { label: 'Portugal', value: 'pt' }
                  ]} 
                />
                <Select 
                  label="Disabled" 
                  disabled
                  options={[
                    { label: 'Option 1', value: '1' }
                  ]} 
                />
              </div>
            </ComponentPreview>
          </Section>

          <Section id="checkbox-radio" title="Checkboxes & Radio Buttons">
            <ComponentPreview 
              title="Checkbox" 
              code={`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" defaultChecked />
<Checkbox label="Disabled option" disabled />`}
            >
              <div className="flex flex-col gap-3">
                <Checkbox label="Accept terms and conditions" />
                <Checkbox label="Subscribe to newsletter" defaultChecked />
                <Checkbox label="Disabled option" disabled />
              </div>
            </ComponentPreview>

            <ComponentPreview 
              title="Radio Button" 
              code={`<Radio name="plan" label="Free Plan" defaultChecked />
<Radio name="plan" label="Pro Plan" />
<Radio name="plan" label="Enterprise Plan" disabled />`}
            >
              <div className="flex flex-col gap-3">
                <Radio name="plan" label="Free Plan" defaultChecked />
                <Radio name="plan" label="Pro Plan" />
                <Radio name="plan" label="Enterprise Plan" disabled />
              </div>
            </ComponentPreview>
          </Section>

        </div>
      </main>
    </div>
  );
}
