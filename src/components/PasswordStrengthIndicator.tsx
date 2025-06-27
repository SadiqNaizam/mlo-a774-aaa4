import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  /** The password string to evaluate. */
  password?: string;
}

interface RequirementProps {
  met: boolean;
  text: string;
}

/**
 * A small component to render a single password requirement status.
 */
const Requirement: React.FC<RequirementProps> = ({ met, text }) => (
  <div className={`flex items-center text-sm transition-colors ${met ? 'text-emerald-600' : 'text-muted-foreground'}`}>
    {met ? (
      <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
    ) : (
      <XCircle className="h-4 w-4 mr-2 flex-shrink-0" />
    )}
    <span>{text}</span>
  </div>
);

/**
 * A visual component that provides real-time feedback on password strength.
 * It checks for length, uppercase, numbers, and special characters.
 */
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="p-4 bg-muted/50 rounded-lg border space-y-2">
      <p className="text-sm font-medium text-foreground mb-2">Password must contain:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        <Requirement met={checks.length} text="At least 8 characters" />
        <Requirement met={checks.uppercase} text="An uppercase letter (A-Z)" />
        <Requirement met={checks.number} text="A number (0-9)" />
        <Requirement met={checks.specialChar} text="A special character (!@#$%)" />
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;