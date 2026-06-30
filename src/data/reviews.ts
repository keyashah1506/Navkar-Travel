/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Amitabh Sharma',
    rating: 5,
    text: 'I compared quotes with three top-tier portals for a family package to Kashmir, but Navkar offered the exact same luxury hotel itinerary at a whopping 25% lower rate! Their secret is that they completely customized the package—customized vegetarian meals and a private driver who spoke perfect Hindi. Truly professional service.',
    date: 'May 14, 2026',
    tripType: 'Kashmir Valley Custom',
    likes: 54,
    avatarSeed: 'amitabh',
    isVerified: true,
    reply: 'Thank you Amitabh Ji for trusting Navkar! Our direct contracts with Kashmir hoteliers allow us to give you the lowest price, and customizing every single meal (no onion, no garlic) is our absolute pleasure!'
  },
  {
    id: 'rev-2',
    name: 'Priyanka Sen',
    rating: 5,
    text: 'For our Maldives honeymoon, Navkar Travels crafted a bespoke package that felt completely personal. We wanted an overwater villa with a private water-slide and direct reef access. Navkar built this custom selection and managed the cheapest flight connections from Delhi. Unbeatable pricing and exquisite customer care!',
    date: 'April 02, 2026',
    tripType: 'Maldives Overwater Escape',
    likes: 41,
    avatarSeed: 'priyanka',
    isVerified: true,
    reply: 'Congratulations on your marriage, Priyanka! Providing bespoke honeymoons at lowest rates is our company’s signature service. Wishing you a beautiful journey ahead.'
  },
  {
    id: 'rev-3',
    name: 'Vikram Malhotra',
    rating: 5,
    text: 'Normally, travel agents force you into rigid group tour schedules. Navkar is completely different. For our Ladakh tour, we wanted to ride bikes for 3 days and shift to luxury SUVs for the rest of the time. They custom-built the exact itinerary, arranged direct oxygen support, and gave us rates that no other agency could match!',
    date: 'January 28, 2026',
    tripType: 'Ladakh SUV & Bike Expedition',
    likes: 33,
    avatarSeed: 'vikram',
    isVerified: true,
    reply: 'Vikram, our main goal is full custom flexibility. Letting you choose exactly which days you ride and which days you cruise in comfort—at the lowest rates—makes Navkar Travels the default choice for adventurers!'
  },
  {
    id: 'rev-4',
    name: 'Dr. Anjali Deshmukh',
    rating: 5,
    text: 'We planned a multi-generational family retreat to Udaipur (14 members!). Navkar did an outstanding job providing a custom luxury coach, Jain meals, and boutique booking by Lake Pichola. Since we booked as a group, they gave us special wholesale pricing that saved us nearly ₹1.2 Lakhs! Outstanding value.',
    date: 'September 12, 2025',
    tripType: 'Udaipur Lakeside Royal',
    likes: 22,
    avatarSeed: 'anjali',
    isVerified: true,
    reply: 'Thank you, Dr. Anjali! Dealing with large Indian families is our core specialty. We are glad our group package discount kept your expenses low and memories high!'
  }
];
