import {useEffect} from 'react';
import {X} from 'lucide-react';
import {BundleOption} from '../data/skincareData';
import {CodOrderForm} from './CodOrderForm';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBundleId: BundleOption['id'];
  onSelectBundle: (id: BundleOption['id']) => void;
}

export function CheckoutDrawer({
  isOpen,
  onClose,
  selectedBundleId,
  onSelectBundle,
}: CheckoutDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#24141B]/45 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cod-drawer-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex h-full w-full max-w-lg flex-col overflow-y-auto bg-[#FFF9FB] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#F3D8E3] bg-white px-6 py-4">
          <div>
            <h2
              id="cod-drawer-title"
              className="font-display text-xl font-semibold text-[#24141B]"
            >
              Express Cash on Delivery
            </h2>
            <p className="text-xs text-[#6B4A57]">
              Lumina 14-Day Brightening Glow Serum · 30ml
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout drawer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EED8E1] text-[#24141B] transition-colors hover:bg-[#FCE7EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 p-6">
          <CodOrderForm
            selectedBundleId={selectedBundleId}
            onSelectBundle={onSelectBundle}
            idPrefix="drawer-cod"
          />
        </div>
      </div>
    </div>
  );
}
