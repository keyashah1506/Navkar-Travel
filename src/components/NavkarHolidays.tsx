/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Plane, Hotel, Heart, Shield, Globe2, FileText, Sailboat } from 'lucide-react';
import Logo from './Logo';

const BUSINESS_SERVICES = [
  { title: 'International / Domestic Air Ticket', Icon: Plane },
  { title: 'Holidays & Hotel Booking', Icon: Hotel },
  { title: 'Honeymoon Packages', Icon: Heart },
  { title: 'Travel Insurance', Icon: Shield },
  { title: 'Visas', Icon: Globe2 },
  { title: 'Passport', Icon: FileText },
  { title: 'Cruise Booking', Icon: Sailboat },
];

export default function NavkarHolidays() {
  return (
    <section className="bg-med-navy text-[#FAF6F0]" id="navkar-holidays-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-med-ocean/30 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-sky-400 font-display font-semibold">
              NAVKAR Holidays
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-5">
                <Logo className="text-white" showTagline={true} />
              </div>
              <div className="space-y-5 max-w-3xl">
                <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal italic tracking-tight text-white leading-tight">
                  NAVKAR Holidays
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                  A polished business information page for the Ahmedabad office of NAVKAR Holidays, presented in the same premium travel style as the existing Navkar Travels website.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-med-ocean/40 p-8 shadow-[0_20px_80px_-45px_rgba(0,0,0,0.8)]">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.45em] text-sky-400 font-display font-semibold">Office Address</p>
              <address className="not-italic text-sm sm:text-base text-slate-100 leading-relaxed space-y-2">
                <p>206, Iscon Avenue,</p>
                <p>Opp. Choice Restaurant,</p>
                <p>C.G. Road, Navrangpura,</p>
                <p>Ahmedabad - 380009.</p>
              </address>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.45em] text-sky-400 font-display font-semibold">Business Card Services</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white tracking-tight leading-tight">
                Seven core services from the NAVKAR Holidays business card.
              </h2>
            </div>
            <div className="rounded-full border border-white/10 bg-med-ocean/30 px-4 py-3 text-[10px] uppercase tracking-[0.4em] text-slate-300 font-semibold font-display">
              Ahmedabad Travel Services
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {BUSINESS_SERVICES.map(({ title, Icon }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-med-ocean/40 p-6 transition-all duration-300 hover:border-med-terracotta/40 hover:bg-med-ocean/80"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-400 transition-colors duration-300 group-hover:bg-sky-400/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-white">{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_45%)] p-8 sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] items-start">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.45em] text-sky-400 font-display font-semibold">Digital Business Identity</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white tracking-tight leading-tight">
                Presenting NAVKAR Holidays in a grown-up travel-agency format.
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
                This page uses the existing Navkar visual language, typography, and spacing to elevate the business card content without overstating it.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-med-navy/80 p-6 text-slate-200 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.7)]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400 font-display font-semibold mb-4">Address Details</p>
              <address className="not-italic space-y-2 text-sm leading-relaxed text-slate-100">
                <p>206, Iscon Avenue,</p>
                <p>Opp. Choice Restaurant,</p>
                <p>C.G. Road, Navrangpura,</p>
                <p>Ahmedabad - 380009.</p>
              </address>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-med-ocean/40 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-sky-400 font-semibold">
            Digital Business Card Presentation
          </div>
          <h3 className="mt-6 font-serif text-3xl text-white font-normal italic tracking-tight leading-tight">
            NAVKAR Holidays
          </h3>
          <p className="mt-4 text-sm text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            A simple, premium page that keeps the focus on brand identity, address, and the seven services offered by NAVKAR Holidays.
          </p>
        </section>
      </div>
    </section>
  );
}
