create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  reference_code text not null unique default ('OBT-' || upper(left(replace(gen_random_uuid()::text, '-', ''), 6))),
  source text not null check (source in ('contact', 'quote')),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  location text,
  property_type text,
  message text not null,
  contact_method text not null default 'phone' check (contact_method in ('phone', 'email', 'whatsapp')),
  status text not null default 'new',
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.enquiries TO anon;
GRANT SELECT, UPDATE, DELETE ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit enquiries"
  ON public.enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Signed-in staff can view enquiries"
  ON public.enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Signed-in staff can update enquiries"
  ON public.enquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Signed-in staff can delete enquiries"
  ON public.enquiries
  FOR DELETE
  TO authenticated
  USING (true);