'use client'

import { 
  FiMenu, 
  FiX, 
  FiSun, 
  FiMoon, 
  FiMail, 
  FiCalendar,
  FiExternalLink,
  FiChevronDown,
  FiChevronRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiAward,
  FiUsers,
  FiGlobe,
  FiHeart,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiBookOpen,
  FiBriefcase,
  FiMapPin
} from 'react-icons/fi'

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter
} from 'react-icons/fa6'

export const Icons = {
  menu: FiMenu,
  close: FiX,
  sun: FiSun,
  moon: FiMoon,
  mail: FiMail,
  calendar: FiCalendar,
  externalLink: FiExternalLink,
  chevronDown: FiChevronDown,
  chevronRight: FiChevronRight,
  arrowRight: FiArrowRight,
  arrowUpRight: FiArrowUpRight,
  check: FiCheck,
  award: FiAward,
  users: FiUsers,
  globe: FiGlobe,
  heart: FiHeart,
  target: FiTarget,
  shield: FiShield,
  trendingUp: FiTrendingUp,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  mapPin: FiMapPin,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
}

export type IconType = keyof typeof Icons
