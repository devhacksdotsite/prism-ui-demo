<script setup lang="ts">
import { ref } from 'vue'
import {
  PrButton, PrInput, PrTextarea, PrSelect, PrCheckbox,
  PrToggle, PrBadge, PrTag, PrAvatar, PrCard, PrDivider,
  PrDialog, PrTooltip, PrProgressBar, PrAccordion,
  PrTabs, PrChip, PrBreadcrumb,
} from 'prism-ui'

// State
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const contactPlan = ref(null)
const newsletter = ref(false)
const darkMode = ref(false)
const demoDialogOpen = ref(false)

const planOptions = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise' },
]

const faqItems = [
  { label: 'Is Prism UI free to use?', content: 'Yes! Prism UI is MIT licensed and free for personal and commercial projects.' },
  { label: 'Does it support dark mode?', content: 'Absolutely. Add data-theme="dark" to your html element and all components adapt automatically.' },
  { label: 'Can I customize the color palette?', content: 'Every color is a CSS custom property. Override them in your own stylesheet to match your brand.' },
  { label: 'What browsers are supported?', content: 'All modern browsers — Chrome, Firefox, Safari, and Edge. We use standard CSS features with no polyfills needed.' },
]

const docTabs = [
  { label: 'npm', value: 'npm' },
  { label: 'pnpm', value: 'pnpm' },
  { label: 'yarn', value: 'yarn' },
]

const navLinks = [
  { label: 'Home', url: '#' },
  { label: 'Features', url: '#features' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
]
</script>

<template>
  <div class="min-h-screen bg-surface-0 text-text">

    <!-- Nav -->
    <nav class="sticky top-0 z-40 bg-surface-0/80 backdrop-blur-md border-b border-surface-2">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xl font-bold">
            <span class="text-pink">P</span><span class="text-purple">r</span><span class="text-blue">i</span><span class="text-mint">s</span><span class="text-coral">m</span>
          </span>
          <PrBadge value="v0.1" color="purple" />
        </div>
        <div class="hidden md:flex items-center gap-6">
          <a v-for="link in navLinks" :key="link.label" :href="link.url" class="text-sm text-text-muted hover:text-text transition-colors">{{ link.label }}</a>
          <PrToggle v-model="darkMode" label="Dark" color="purple" />
          <PrButton label="Get Started" color="purple" size="sm" />
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="py-24 text-center px-6">
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-center gap-2 mb-6">
          <PrChip label="Vue 3" color="mint" />
          <PrChip label="PrimeVue 4" color="purple" />
          <PrChip label="Tailwind v4" color="blue" />
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build beautiful apps<br />
          <span class="text-purple">in record time</span>
        </h1>
        <p class="text-lg text-text-muted mb-10 max-w-xl mx-auto">
          A vibrant pastel design system with 24 production-ready components. Accessible, themeable, and delightful.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <PrButton label="Browse Components" color="purple" size="lg" />
          <PrButton label="View on GitHub" color="purple" variant="outline" size="lg" />
        </div>
        <div class="mt-12 flex justify-center gap-6 text-sm text-text-muted">
          <span class="flex items-center gap-2"><PrBadge value="24" color="pink" /> Components</span>
          <span class="flex items-center gap-2"><PrBadge value="7" color="blue" /> Colors</span>
          <span class="flex items-center gap-2"><PrBadge value="0" color="mint" /> Dependencies*</span>
        </div>
      </div>
    </section>

    <PrDivider color="purple" />

    <!-- Install -->
    <section class="py-20 px-6">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Get started in seconds</h2>
        <PrTabs :tabs="docTabs">
          <template #npm>
            <code class="block bg-surface-1 border border-surface-2 rounded-lg p-4 text-sm font-mono text-text-muted">npm install prism-ui vue primevue</code>
          </template>
          <template #pnpm>
            <code class="block bg-surface-1 border border-surface-2 rounded-lg p-4 text-sm font-mono text-text-muted">pnpm add prism-ui vue primevue</code>
          </template>
          <template #yarn>
            <code class="block bg-surface-1 border border-surface-2 rounded-lg p-4 text-sm font-mono text-text-muted">yarn add prism-ui vue primevue</code>
          </template>
        </PrTabs>
      </div>
    </section>

    <PrDivider color="mint" />

    <!-- Features -->
    <section id="features" class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">Why teams love Prism</h2>
        <p class="text-text-muted text-center mb-12 max-w-lg mx-auto">Everything you need to ship polished interfaces without fighting your component library.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrCard title="Pastel Palette" subtitle="7 curated colors" color="pink">
            <div class="flex flex-wrap gap-2">
              <span v-for="c in ['pink','purple','blue','mint','yellow','coral','lilac']" :key="c" class="w-8 h-8 rounded-full" :class="`bg-${c}`" />
            </div>
          </PrCard>
          <PrCard title="Accessible" subtitle="WAI-ARIA compliant" color="blue">
            <p class="text-sm text-text-muted">Built on PrimeVue's accessible foundation with keyboard navigation and screen reader support.</p>
            <template #footer>
              <PrTag value="WCAG 2.1 AA" color="blue" />
            </template>
          </PrCard>
          <PrCard title="Themeable" subtitle="CSS custom properties" color="purple">
            <p class="text-sm text-text-muted">Override any color token to match your brand. Dark mode included out of the box.</p>
            <template #footer>
              <div class="flex gap-2">
                <PrTag value="Light" color="yellow" />
                <PrTag value="Dark" color="lilac" />
              </div>
            </template>
          </PrCard>
        </div>
      </div>
    </section>

    <PrDivider color="blue" />

    <!-- Social Proof -->
    <section class="py-20 px-6 bg-surface-1">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-12">Loved by developers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrCard color="pink">
            <div class="flex items-center gap-3 mb-3">
              <PrAvatar label="Sarah Chen" size="sm" color="pink" />
              <div class="text-left">
                <p class="text-sm font-semibold">Sarah Chen</p>
                <p class="text-xs text-text-muted">Frontend Lead</p>
              </div>
            </div>
            <p class="text-sm text-text-muted italic">"Prism UI cut our design-to-code time in half. The pastel palette is gorgeous."</p>
          </PrCard>
          <PrCard color="purple">
            <div class="flex items-center gap-3 mb-3">
              <PrAvatar label="Marcus Rivera" size="sm" color="purple" />
              <div class="text-left">
                <p class="text-sm font-semibold">Marcus Rivera</p>
                <p class="text-xs text-text-muted">Indie Hacker</p>
              </div>
            </div>
            <p class="text-sm text-text-muted italic">"Finally a Vue component library that doesn't look like every other Bootstrap clone."</p>
          </PrCard>
          <PrCard color="mint">
            <div class="flex items-center gap-3 mb-3">
              <PrAvatar label="Aiko Tanaka" size="sm" color="mint" />
              <div class="text-left">
                <p class="text-sm font-semibold">Aiko Tanaka</p>
                <p class="text-xs text-text-muted">Design Engineer</p>
              </div>
            </div>
            <p class="text-sm text-text-muted italic">"The accessibility defaults are excellent. I don't have to bolt on a11y after the fact."</p>
          </PrCard>
        </div>
      </div>
    </section>

    <PrDivider color="coral" />

    <!-- Pricing -->
    <section id="pricing" class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">Simple pricing</h2>
        <p class="text-text-muted text-center mb-12">Open source core. Premium support for teams that need it.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrCard title="Starter" subtitle="Free forever" color="mint">
            <p class="text-3xl font-bold mb-4">$0<span class="text-sm text-text-muted font-normal">/mo</span></p>
            <ul class="text-sm text-text-muted space-y-2 mb-6">
              <li>✓ All 24 components</li>
              <li>✓ MIT license</li>
              <li>✓ Community support</li>
            </ul>
            <template #footer>
              <PrButton label="Get Started" color="mint" variant="soft" size="sm" />
            </template>
          </PrCard>
          <PrCard title="Pro" subtitle="For growing teams" color="purple">
            <PrBadge value="Popular" color="purple" />
            <p class="text-3xl font-bold mb-4 mt-2">$29<span class="text-sm text-text-muted font-normal">/mo</span></p>
            <ul class="text-sm text-text-muted space-y-2 mb-6">
              <li>✓ Everything in Starter</li>
              <li>✓ Priority support</li>
              <li>✓ Figma design kit</li>
              <li>✓ Premium templates</li>
            </ul>
            <template #footer>
              <PrButton label="Start Free Trial" color="purple" size="sm" />
            </template>
          </PrCard>
          <PrCard title="Enterprise" subtitle="Custom solutions" color="pink">
            <p class="text-3xl font-bold mb-4">Custom</p>
            <ul class="text-sm text-text-muted space-y-2 mb-6">
              <li>✓ Everything in Pro</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom components</li>
              <li>✓ SLA guarantee</li>
            </ul>
            <template #footer>
              <PrButton label="Contact Sales" color="pink" variant="outline" size="sm" />
            </template>
          </PrCard>
        </div>
      </div>
    </section>

    <PrDivider color="lilac" />

    <!-- Stats -->
    <section class="py-16 px-6 bg-surface-1">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Growing fast</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p class="text-2xl font-bold text-pink">2.4k</p>
            <p class="text-sm text-text-muted">GitHub Stars</p>
            <PrProgressBar :value="80" color="pink" class="mt-2" />
          </div>
          <div>
            <p class="text-2xl font-bold text-purple">12k</p>
            <p class="text-sm text-text-muted">Weekly Downloads</p>
            <PrProgressBar :value="65" color="purple" class="mt-2" />
          </div>
          <div>
            <p class="text-2xl font-bold text-blue">340</p>
            <p class="text-sm text-text-muted">Contributors</p>
            <PrProgressBar :value="45" color="blue" class="mt-2" />
          </div>
          <div>
            <p class="text-2xl font-bold text-mint">99%</p>
            <p class="text-sm text-text-muted">Satisfaction</p>
            <PrProgressBar :value="99" color="mint" class="mt-2" />
          </div>
        </div>
      </div>
    </section>

    <PrDivider color="pink" />

    <!-- FAQ -->
    <section id="faq" class="py-20 px-6">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">Frequently asked questions</h2>
        <p class="text-text-muted text-center mb-10">Can't find what you're looking for? Reach out to our team.</p>
        <PrAccordion :items="faqItems" />
      </div>
    </section>

    <PrDivider color="purple" />

    <!-- Contact -->
    <section class="py-20 px-6 bg-surface-1">
      <div class="max-w-lg mx-auto">
        <h2 class="text-3xl font-bold text-center mb-2">Get in touch</h2>
        <PrBreadcrumb :items="[{ label: 'Home', url: '#' }, { label: 'Contact' }]" class="justify-center mb-8" />
        <div class="space-y-4">
          <PrInput v-model="contactName" placeholder="Your name" />
          <PrInput v-model="contactEmail" placeholder="Email address" />
          <PrSelect v-model="contactPlan" :options="planOptions" option-label="label" option-value="value" placeholder="Interested in..." />
          <PrTextarea v-model="contactMessage" placeholder="Tell us about your project..." :maxlength="500" :rows="4" />
          <PrCheckbox v-model="newsletter" label="Subscribe to product updates" />
          <PrButton label="Send Message" color="purple" size="lg" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to build something beautiful?</h2>
      <p class="text-text-muted mb-8">Join thousands of developers using Prism UI.</p>
      <div class="flex justify-center gap-4 flex-wrap">
        <PrTooltip text="It's free!">
          <PrButton label="Start Building" color="pink" size="lg" />
        </PrTooltip>
        <PrButton label="See a Demo" color="purple" variant="outline" size="lg" @click="demoDialogOpen = true" />
      </div>
    </section>

    <!-- Demo Dialog -->
    <PrDialog v-model="demoDialogOpen" header="Live Demo">
      <p class="text-text-muted mb-4">Here's a quick look at what you can build with Prism UI components.</p>
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <PrAvatar label="Demo User" size="sm" color="purple" />
          <div class="flex-1">
            <p class="text-sm font-semibold">Demo User</p>
            <p class="text-xs text-text-muted">Just shipped a new feature ✨</p>
          </div>
          <PrBadge value="New" color="mint" />
        </div>
        <PrDivider color="purple" />
        <div class="flex gap-2 flex-wrap">
          <PrTag value="vue" color="mint" />
          <PrTag value="design-system" color="purple" />
          <PrTag value="open-source" color="pink" />
        </div>
      </div>
      <template #footer>
        <PrButton label="Close" variant="ghost" color="coral" @click="demoDialogOpen = false" />
        <PrButton label="Get Started" color="purple" @click="demoDialogOpen = false" />
      </template>
    </PrDialog>

    <!-- Footer -->
    <footer class="border-t border-surface-2 py-10 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="text-sm text-text-muted">© 2026 Prism UI. Built with Vue 3, PrimeVue 4 & Tailwind CSS v4.</span>
        <div class="flex gap-3">
          <PrChip label="GitHub" color="purple" />
          <PrChip label="Discord" color="blue" />
          <PrChip label="Twitter" color="pink" />
        </div>
      </div>
    </footer>

  </div>
</template>
