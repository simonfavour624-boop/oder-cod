import {FormEvent, useState} from 'react';
import {CheckCircle2, ShieldCheck, Truck} from 'lucide-react';
import {BUNDLE_OPTIONS, BundleOption} from '../data/skincareData';

export interface ConfirmedOrder {
  orderNumber: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  bundle: BundleOption;
  total: number;
  etaText: string;
}

interface CodOrderFormProps {
  selectedBundleId: BundleOption['id'];
  onSelectBundle: (id: BundleOption['id']) => void;
  idPrefix?: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
}

function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`;
}

export function CodOrderForm({
  selectedBundleId,
  onSelectBundle,
  idPrefix = 'cod',
}: CodOrderFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(null);

  const selectedBundle =
    BUNDLE_OPTIONS.find((item) => item.id === selectedBundleId) ?? BUNDLE_OPTIONS[1];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name for the courier.';
    }
    const normalizedPhone = phone.replace(/[\s-]/g, '');
    if (!/^(09\d{9}|\+639\d{9})$/.test(normalizedPhone)) {
      nextErrors.phone = 'Enter a valid PH mobile number (e.g. 0917 123 4567).';
    }
    if (address.trim().length < 6) {
      nextErrors.address = 'Please include your house/unit no., street, and barangay.';
    }
    if (city.trim().length < 2) {
      nextErrors.city = 'Please enter your city or province.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomCode = Math.floor(1000 + Math.random() * 8999);
    const isMetroManila = /manila|quezon|makati|pasig|taguig|bgc|mandaluyong|pasay|paranaque|alabang/i.test(
      city
    );

    setConfirmedOrder({
      orderNumber: `LUM-${randomCode}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      city: city.trim(),
      postalCode: postalCode.trim() || '—',
      bundle: selectedBundle,
      total: selectedBundle.price,
      etaText: isMetroManila
        ? '2–3 business days (Metro Manila Courier)'
        : '3–5 business days (Luzon / Visayas / Mindanao Express)',
    });
  };

  if (confirmedOrder) {
    return (
      <div
        className="rounded-2xl border border-[#F0C8D7] bg-white p-6 sm:p-8"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-6 w-6 shrink-0 text-[#D8316F]"
            aria-hidden="true"
          />
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#A62353]">
              Cash on Delivery Order Received
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-[#24141B]">
              Order #{confirmedOrder.orderNumber} Confirmed
            </h3>
            <p className="mt-1 text-sm text-[#6B4A57]">
              Preparing shipment for {confirmedOrder.fullName}. Keep your phone open for our SMS
              dispatch update.
            </p>
          </div>
        </div>

        <dl className="mt-6 divide-y divide-[#F7E5EC] border-y border-[#F7E5EC] text-sm">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-[#6B4A57]">Package</dt>
            <dd className="font-medium text-[#24141B] text-right">
              {confirmedOrder.bundle.name}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-[#6B4A57]">Delivery Address</dt>
            <dd className="font-medium text-[#24141B] text-right">
              {confirmedOrder.address}, {confirmedOrder.city}{' '}
              {confirmedOrder.postalCode !== '—' ? confirmedOrder.postalCode : ''}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-[#6B4A57]">Mobile</dt>
            <dd className="font-medium text-[#24141B] tabular-nums">{confirmedOrder.phone}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-[#6B4A57]">Estimated Arrival</dt>
            <dd className="font-medium text-[#24141B] text-right">{confirmedOrder.etaText}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-[#6B4A57]">Shipping Fee</dt>
            <dd className="font-semibold text-[#A62353]">FREE</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3.5 text-base">
            <dt className="font-semibold text-[#24141B]">Amount Due on Delivery</dt>
            <dd className="font-bold text-[#D8316F] tabular-nums">
              {formatPeso(confirmedOrder.total)}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setConfirmedOrder(null)}
          className="mt-6 w-full min-h-[44px] rounded-xl border border-[#EAC6D4] bg-[#FFF8FA] px-5 py-3 text-sm font-semibold text-[#24141B] transition-colors hover:bg-[#FCE7EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F]"
        >
          Place Another COD Order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <span className="block text-xs font-semibold tracking-wide text-[#6B4A57]">
          1. Choose Your Glow Bundle
        </span>
        <div className="mt-2.5 grid gap-2.5">
          {BUNDLE_OPTIONS.map((bundle) => {
            const isSelected = bundle.id === selectedBundle.id;
            return (
              <button
                key={bundle.id}
                type="button"
                onClick={() => onSelectBundle(bundle.id)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F] ${
                  isSelected
                    ? 'border-[#D8316F] bg-[#FFF4F8] ring-1 ring-[#D8316F]'
                    : 'border-[#EED8E1] bg-white hover:border-[#DCAEC0]'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#24141B]">
                      {bundle.name}
                    </span>
                    {bundle.id === 'duo' && (
                      <span className="text-xs font-semibold text-[#C2255E]">
                        · Best Seller
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-[#6B4A57]">{bundle.subtitle}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-base font-bold text-[#24141B] tabular-nums">
                    {formatPeso(bundle.price)}
                  </div>
                  <div className="text-xs text-[#8D6C78] line-through tabular-nums">
                    {formatPeso(bundle.originalPrice)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3.5">
        <span className="block text-xs font-semibold tracking-wide text-[#6B4A57]">
          2. Cash on Delivery Shipping Details
        </span>

        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-sm font-medium text-[#24141B]"
          >
            Full Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            autoComplete="name"
            placeholder="e.g. Angel Mendoza"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#E7CED8] bg-white px-3.5 py-2.5 text-sm text-[#24141B] placeholder:text-[#A58994] focus:border-[#D8316F] focus:outline-none focus:ring-2 focus:ring-[#D8316F]/20"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs font-medium text-[#B4234E]">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="block text-sm font-medium text-[#24141B]"
          >
            Mobile Number (for rider SMS)
          </label>
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            autoComplete="tel"
            placeholder="0917 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#E7CED8] bg-white px-3.5 py-2.5 text-sm text-[#24141B] placeholder:text-[#A58994] focus:border-[#D8316F] focus:outline-none focus:ring-2 focus:ring-[#D8316F]/20 tabular-nums"
          />
          {errors.phone && (
            <p className="mt-1 text-xs font-medium text-[#B4234E]">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-address`}
            className="block text-sm font-medium text-[#24141B]"
          >
            House / Unit No., Street & Barangay
          </label>
          <input
            id={`${idPrefix}-address`}
            type="text"
            autoComplete="street-address"
            placeholder="e.g. 24 Mabini St., Brgy. Lahug"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            aria-invalid={Boolean(errors.address)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#E7CED8] bg-white px-3.5 py-2.5 text-sm text-[#24141B] placeholder:text-[#A58994] focus:border-[#D8316F] focus:outline-none focus:ring-2 focus:ring-[#D8316F]/20"
          />
          {errors.address && (
            <p className="mt-1 text-xs font-medium text-[#B4234E]">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label
              htmlFor={`${idPrefix}-city`}
              className="block text-sm font-medium text-[#24141B]"
            >
              City / Province
            </label>
            <input
              id={`${idPrefix}-city`}
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Cebu City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-invalid={Boolean(errors.city)}
              className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#E7CED8] bg-white px-3.5 py-2.5 text-sm text-[#24141B] placeholder:text-[#A58994] focus:border-[#D8316F] focus:outline-none focus:ring-2 focus:ring-[#D8316F]/20"
            />
            {errors.city && (
              <p className="mt-1 text-xs font-medium text-[#B4234E]">{errors.city}</p>
            )}
          </div>
          <div>
            <label
              htmlFor={`${idPrefix}-postal`}
              className="block text-sm font-medium text-[#24141B]"
            >
              Postal Code
            </label>
            <input
              id={`${idPrefix}-postal`}
              type="text"
              autoComplete="postal-code"
              placeholder="6000"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#E7CED8] bg-white px-3.5 py-2.5 text-sm text-[#24141B] placeholder:text-[#A58994] focus:border-[#D8316F] focus:outline-none focus:ring-2 focus:ring-[#D8316F]/20 tabular-nums"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#F3D8E3] bg-[#FFF7FA] p-4 text-sm">
        <div className="flex items-center justify-between text-[#6B4A57]">
          <span>Shipping Nationwide</span>
          <span className="font-semibold text-[#A62353]">FREE</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-base font-bold text-[#24141B]">
          <span>Total Due on Delivery</span>
          <span className="tabular-nums">{formatPeso(selectedBundle.price)}</span>
        </div>
        <div className="mt-2.5 flex items-center gap-2 border-t border-[#F3D8E3] pt-2.5 text-xs text-[#6B4A57]">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#D8316F]" aria-hidden="true" />
          <span>Pay in cash only when your sealed parcel arrives at your doorstep.</span>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full min-h-[54px] items-center justify-center rounded-xl bg-[#D8316F] px-6 py-4 text-sm sm:text-base font-bold tracking-wide text-white shadow-[0_12px_28px_-6px_rgba(216,49,111,0.42)] transition-all duration-150 hover:bg-[#BC235C] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F] whitespace-nowrap"
        >
          ORDER NOW - CASH ON DELIVERY
        </button>
        <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs sm:text-sm font-medium text-[#6B4A57]">
          <Truck className="h-4 w-4 shrink-0 text-[#D8316F]" aria-hidden="true" />
          <span>Free Shipping Today Only | COD Available Nationwide</span>
        </p>
      </div>
    </form>
  );
}
