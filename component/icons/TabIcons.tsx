import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface IconProps {
  color: string;
  size?: number;
}

export const HomeIcon = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="home" size={size} color={color} />
);

export const VideoIcon = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="play-circle" size={size} color={color} />
);

export const LiveIcon = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="radio" size={size} color={color} />
);

export const QuizIcon = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="game-controller" size={size} color={color} />
);

export const ProfileIcon = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="person" size={size} color={color} />
);
