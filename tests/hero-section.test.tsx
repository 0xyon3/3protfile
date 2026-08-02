import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { HeroSection } from '../components/sections/HeroSection';

describe('HeroSection', () => {
  it('renders the headline and keeps CTA navigation wired', () => {
    const clickHandler = vi.fn((event: React.MouseEvent) => event.preventDefault());
    const onScrollTo = vi.fn(() => clickHandler);

    render(<HeroSection onScrollTo={onScrollTo} reducedMotion />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/YONE/i);
    expect(heading).toHaveTextContent(/SYSTEMS/i);
    expect(screen.getByText(/Software engineer working across AI tooling/i)).toBeInTheDocument();
    expect(screen.getByText(/OPEN TO WORK/i)).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', { name: /view work/i });
    const contactLink = screen.getByRole('link', { name: /get in touch/i });

    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');

    fireEvent.click(projectsLink);
    expect(onScrollTo).toHaveBeenCalledWith('projects');
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
