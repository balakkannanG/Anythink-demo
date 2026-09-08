"use client";

import { useState } from "react";

import { submitContactForm } from "@/lib/contact";
import type { ContactFormErrors, ContactFormValues } from "@/lib/types";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Tell us your name so we know who to write back to.";
  }

  if (!values.email.trim()) {
    errors.email = "An email helps us keep the idea moving.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "A phone number helps us reach you quickly.";
  } else if (!/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.company.trim()) {
    errors.company = "Tell us which company or brand you represent.";
  }

  if (!values.message.trim()) {
    errors.message = "Give us a first thought, even if it is still taking shape.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateField = (field: keyof ContactFormValues) => {
    const fieldErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitContactForm(values);
      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (field: keyof ContactFormValues) => errors[field];

  return (
    <form className="chalk-frame paper-grain p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="flex items-start justify-between gap-5 border-b borderbgimagebottom pb-6">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.23em] text-mustard">Your turn</p>
          <h2 className="mt-3 font-chalk text-4xl leading-none text-chalk sm:text-5xl">What are you thinking?</h2>
        </div>
        <span className="font-chalk text-3xl text-mustard" aria-hidden="true">
          ↘
        </span>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          placeholder="Your name"
          value={values.name}
          error={fieldError("name")}
          onChange={(value) => updateField("name", value)}
          onBlur={() => validateField("name")}
              className="borderbgimagebottom"
          required
    
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          value={values.email}
          error={fieldError("email")}
          onChange={(value) => updateField("email", value)}
          onBlur={() => validateField("email")}
          required
              className="borderbgimagebottom"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          value={values.phone}
          error={fieldError("phone")}
          onChange={(value) => updateField("phone", value)}
          onBlur={() => validateField("phone")}
          autoComplete="tel"
          required
          className="borderbgimagebottom"
        />
        <Field
          id="company"
          label="Company"
          placeholder="Your company or brand"
          value={values.company}
          error={fieldError("company")}
          onChange={(value) => updateField("company", value)}
          onBlur={() => validateField("company")}
          className="sm:col-span-1 borderbgimagebottom"
          required
        />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/80 ">
            What are you thinking about? <span className="text-mustard">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="A campaign, a story, an event, something new…"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            onBlur={() => validateField("message")}
            required
            aria-invalid={Boolean(fieldError("message"))}
            aria-describedby={fieldError("message") ? "message-error" : undefined}
            className={`input-line borderbgimagebottom resize-y ${fieldError("message") ? "border-red-400" : ""}`}
          />
          {fieldError("message") ? (
            <p id="message-error" className="mt-2 text-xs text-red-300" role="alert">
              {fieldError("message")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 border-t borderbgimagetop pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-chalk text-lg text-white/80">No big words. Just good ideas.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center gap-4 border border-mustard/70 borderbgimageyellow px-6 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-mustard transition-colors hover:bg-mustard hover:text-ink disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Let’s talk"}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="mt-5 min-h-6" aria-live="polite" aria-atomic="true">
        {status === "success" ? <p className="text-sm text-mustard">Thank you. We’ll be in touch soon.</p> : null}
        {status === "error" ? <p className="text-sm text-red-300">Something went quiet. Please try again.</p> : null}
      </div>
    </form>
  );
}

interface FieldProps {
  id: keyof ContactFormValues;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  className?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  type = "text",
  required = false,
  className = "",
  onChange,
  onBlur,
  autoComplete,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/80 ">
        {label} {required ? <span className="text-mustard">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`input-line ${error ? "border-red-400" : ""}`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
