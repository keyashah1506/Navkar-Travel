/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Destination {
  id: string;
  title: string;
  description: string;
  category: 'luxury' | 'adventure' | 'heritage' | 'beach';
  region: string;
  price: string;
  duration: string;
  image: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  bestTime: string;
  rating: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  tripType: string;
  likes: number;
  avatarSeed: string;
  isVerified: boolean;
  reply?: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  destinationInterest: string;
  departureDate: string;
  travelersCount: number;
  classPreference: 'business' | 'first' | 'bespoke';
  specialRequirements?: string;
  submittedAt: string;
}

