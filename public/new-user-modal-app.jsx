const { useState, useEffect, useRef, useCallback } = React;

// ---------- Data ----------
const ACCOUNTS = [
  { id: 'pizza', name: 'Pizza Palace Restaurant with a long Name',
    locations: [
      { id: 'pp1', name: '1200 Market St' },
      { id: 'pp2', name: '88 Oak Avenue' },
      { id: 'pp3', name: '410 Vine Street' },
      { id: 'pp4', name: '27 Harbor Way' },
    ]},
  { id: 'downtown', name: 'Downtown Diner',
    locations: [
      { id: 'dd1', name: '5th & Main' },
      { id: 'dd2', name: '218 River Rd' },
    ]},
  { id: 'jz', name: 'JZ Tacos',
    locations: [
      { id: 'jz1', name: '123 Buckle Drive' },
      { id: 'jz2', name: '4512 Tomato Alley' },
      { id: 'jz3', name: '544 Florin Rd' },
    ]},
];

const ACCOUNT_TYPES = [
  { id: 'admin',   name: 'Admin',       desc: 'Allow access to anything and everything, overrides all permissions' },
  { id: 'dealer',  name: 'Dealer',      desc: 'Allow dealer-level access' },
  { id: 'call',    name: 'Call Center', desc: 'Allow users to place a call center order' },
];

// Permissions depend on account type. Keep simple: same list here, could diverge.
const PERMISSIONS = [
  { id: 'menu', name: 'Menu Admin' },
  { id: 'loc',  name: 'Location Admin' },
  { id: 'kds',  name: 'KDS Access' },
  { id: 'rpt',  name: 'Reports' },
];

const LANGUAGES = ['Location Default', 'English (US)', 'English (UK)', 'Español', 'Français', 'Deutsch', '日本語'];

// ---------- Icons ----------
const Icon = {
  X: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Chevron: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 9l6 6 6-6"/></svg>,
  Check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12l5 5L20 7"/></svg>,
  Trash: (p) => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6"/></svg>,
  Plus: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  TinyX: (p) => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>,
};

// ---------- Popover hook: close on outside click ----------
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

// ---------- Generic Select (single-value via label) ----------
function SelectBox({ value, placeholder, onClick, open, children, valueRenderer }) {
  return (
    <button type="button" className={`select${open ? ' open' : ''}`} onClick={onClick}>
      <span className={`val${value == null || value === '' ? ' placeholder' : ''}`}>
        {valueRenderer ? valueRenderer() : (value || placeholder)}
      </span>
      <span className="caret"><Icon.Chevron /></span>
      {children}
    </button>
  );
}

// Account dropdown
function AccountSelect({ value, onChange, excludeIds = [], autoOpen = false }) {
  const [open, setOpen] = useState(autoOpen);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  const selected = ACCOUNTS.find(a => a.id === value);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <SelectBox
        value={selected?.name}
        placeholder="Select an Account"
        open={open}
        onClick={() => setOpen(o => !o)}
      />
      {open && (
        <div className="pop">
          {ACCOUNTS.map(a => {
            const disabled = excludeIds.includes(a.id) && a.id !== value;
            return (
              <div
                key={a.id}
                className={`pop-item${a.id === value ? ' active' : ''}`}
                style={disabled ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                onClick={() => {
                  if (disabled) return;
                  onChange(a.id);
                  setOpen(false);
                }}
              >
                <span className="check">{a.id === value && <Icon.Check />}</span>
                <span className="label-text" style={{ flex: 1 }}>{a.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Locations single-select
function LocationSelect({ accountId, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  const account = ACCOUNTS.find(a => a.id === accountId);
  const options = account?.locations || [];
  const selected = options.find(o => o.id === value);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        className={`select${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        disabled={!accountId}
        style={!accountId ? { opacity: 0.6, cursor: 'not-allowed', background: '#fafafa' } : {}}
      >
        <span className={`val${selected ? '' : ' placeholder'}`}>{selected ? selected.name : 'Select a Location'}</span>
        <span className="caret"><Icon.Chevron /></span>
      </button>
      {open && accountId && (
        <div className="pop">
          {options.map(o => (
            <div
              key={o.id}
              className={`pop-item${o.id === value ? ' active' : ''}`}
              onClick={() => { onChange(o.id); setOpen(false); }}
            >
              <span className="check">{o.id === value && <Icon.Check />}</span>
              <span className="label-text" style={{ flex: 1 }}>{o.name}</span>
            </div>
          ))}
          {options.length === 0 && <div className="pop-item placeholder">No locations</div>}
        </div>
      )}
    </div>
  );
}

// Account-type multi-select with descriptions
function AccountTypeSelect({ values, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  const toggle = (id) => {
    if (values.includes(id)) onChange(values.filter(v => v !== id));
    else onChange([...values, id]);
  };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" className={`select${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        {values.length === 0
          ? <span className="val placeholder">Select Account Type</span>
          : (
            <span className="chips">
              {values.map(id => {
                const t = ACCOUNT_TYPES.find(x => x.id === id);
                return (
                  <span key={id} className="chip">
                    {t?.name}
                    <span className="x" onClick={(e) => { e.stopPropagation(); onChange(values.filter(v => v !== id)); }}>
                      <Icon.TinyX />
                    </span>
                  </span>
                );
              })}
            </span>
          )
        }
        <span className="caret"><Icon.Chevron /></span>
      </button>
      {open && (
        <div className="pop" style={{ minWidth: 280 }}>
          {ACCOUNT_TYPES.map(t => (
            <div key={t.id} className="pop-item" onClick={() => toggle(t.id)}>
              <span className={`pop-check${values.includes(t.id) ? ' on' : ''}`}>
                {values.includes(t.id) && <Icon.Check />}
              </span>
              <div style={{ flex: 1 }}>
                <div className="label-text">{t.name}</div>
                <div className="desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Permissions multi-select (simpler)
function PermissionSelect({ values, onChange, disabled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  const toggle = (id) => {
    if (values.includes(id)) onChange(values.filter(v => v !== id));
    else onChange([...values, id]);
  };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        className={`select${open ? ' open' : ''}`}
        onClick={() => !disabled && setOpen(o => !o)}
        disabled={disabled}
        style={disabled ? { opacity: 0.6, cursor: 'not-allowed', background: '#fafafa' } : {}}
      >
        {values.length === 0
          ? <span className="val placeholder">Select Permissions</span>
          : values.length === 1
          ? <span className="val">{PERMISSIONS.find(p => p.id === values[0])?.name}</span>
          : <span className="val">{values.length} selected</span>
        }
        <span className="caret"><Icon.Chevron /></span>
      </button>
      {open && !disabled && (
        <div className="pop">
          {PERMISSIONS.map(p => (
            <div key={p.id} className={`pop-item${values.includes(p.id) ? ' active' : ''}`} onClick={() => toggle(p.id)}>
              <span className="check">{values.includes(p.id) && <Icon.Check />}</span>
              <span className="label-text" style={{ flex: 1 }}>{p.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Language select (simple)
function LanguageSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <SelectBox value={value} open={open} onClick={() => setOpen(o => !o)} />
      {open && (
        <div className="pop">
          {LANGUAGES.map(l => (
            <div key={l} className={`pop-item${l === value ? ' active' : ''}`} onClick={() => { onChange(l); setOpen(false); }}>
              <span className="check">{l === value && <Icon.Check />}</span>
              <span className="label-text">{l}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Access row ----------
function AccessCard({ access, onChange, onRemove, canRemove, otherAccountIds }) {
  const { accountId, locationId, accountTypes, permissions } = access;

  return (
    <div className="account-card">
      <div className="field" style={{ marginBottom: 10 }}>
        <div className="label">Account</div>
        <div className="account-row">
          <AccountSelect
            value={accountId}
            onChange={(id) => onChange({ ...access, accountId: id, locationId: null, accountTypes: [], permissions: [] })}
            excludeIds={otherAccountIds}
          />
          <button className="trash" onClick={onRemove} disabled={!canRemove} title={canRemove ? "Remove access" : "At least one account required"}>
            <Icon.Trash />
          </button>
        </div>
      </div>

      {accountId && (
        <div className="row triple">
          <div className="field">
            <div className="label">Locations <span className="req">*</span></div>
            <LocationSelect
              accountId={accountId}
              value={locationId}
              onChange={(v) => onChange({ ...access, locationId: v })}
            />
          </div>
          <div className="field">
            <div className="label">Account Type <span className="req">*</span></div>
            <AccountTypeSelect
              values={accountTypes}
              onChange={(v) => onChange({ ...access, accountTypes: v })}
            />
          </div>
          <div className="field">
            <div className="label">Permissions <span className="req">*</span></div>
            <PermissionSelect
              values={permissions}
              onChange={(v) => onChange({ ...access, permissions: v })}
              disabled={accountTypes.length === 0}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Root modal ----------
function NewUserModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [autoLogout, setAutoLogout] = useState('0');
  const [language, setLanguage] = useState('Location Default');

  const [accesses, setAccesses] = useState([
    { id: 1, accountId: null, locationId: null, accountTypes: [], permissions: [] },
  ]);

  const addAccess = () => {
    setAccesses(a => [...a, { id: Date.now(), accountId: null, locationId: null, accountTypes: [], permissions: [] }]);
  };

  const updateAccess = (id, next) => setAccesses(a => a.map(x => x.id === id ? next : x));
  const removeAccess = (id) => setAccesses(a => a.length > 1 ? a.filter(x => x.id !== id) : a);

  // Validation
  const isEmailValid = email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const requiredUserOk = firstName.trim() && lastName.trim() && email.trim() && isEmailValid;
  const firstAccess = accesses[0];
  const firstAccessOk = firstAccess.accountId
    && firstAccess.locationId
    && firstAccess.accountTypes.length > 0
    && firstAccess.permissions.length > 0;
  const canSave = requiredUserOk && firstAccessOk;

  const selectedAccountIds = accesses.map(a => a.accountId).filter(Boolean);

  const onSave = () => {
    if (!canSave) return;
    window.showToast(`${firstName} ${lastName} saved · ${accesses.filter(a => a.accountId).length} account${accesses.length > 1 ? 's' : ''}`);
  };

  const canAddAnother = accesses.every(a => a.accountId) && selectedAccountIds.length < ACCOUNTS.length;

  return (
    <div className="modal" role="dialog" aria-labelledby="m-title" data-screen-label="01 New User Modal">
      <div className="modal-head">
        <div className="modal-title" id="m-title">New User</div>
        <button className="icon-btn" aria-label="Close"><Icon.X /></button>
      </div>

      <div className="modal-body">
        {/* User Information */}
        <div className="section">
          <div className="section-title">User Information</div>
          <div className="row two">
            <div className="field">
              <div className="label">Name <span className="req">*</span></div>
              <input className="input" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="field">
              <div className="label">Last Name <span className="req">*</span></div>
              <input className="input" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <div className="label">Email <span className="req">*</span></div>
              <input
                className="input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={!isEmailValid ? { borderColor: 'var(--danger)' } : {}}
              />
              {!isEmailValid && <div style={{ fontSize: 11, color: 'var(--danger)', marginTop: 2 }}>Enter a valid email</div>}
            </div>
          </div>
          <div className="row two">
            <div className="field">
              <div className="label">Auto Logout Time</div>
              <input
                className="input"
                type="number"
                min="0"
                value={autoLogout}
                onChange={e => setAutoLogout(e.target.value)}
              />
            </div>
            <div className="field">
              <div className="label">Language</div>
              <LanguageSelect value={language} onChange={setLanguage} />
            </div>
          </div>
        </div>

        {/* Access and Permissions */}
        <div className="section">
          <div className="section-title">Access and Permissions</div>
          {accesses.map((a, i) => (
            <AccessCard
              key={a.id}
              access={a}
              onChange={(next) => updateAccess(a.id, next)}
              onRemove={() => removeAccess(a.id)}
              canRemove={accesses.length > 1}
              otherAccountIds={accesses.filter(x => x.id !== a.id).map(x => x.accountId).filter(Boolean)}
            />
          ))}
          <div className="footer-add">
            <button
              className="btn-add-account"
              onClick={addAccess}
              disabled={!canAddAnother}
              style={!canAddAnother ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              <span className="plus"><Icon.Plus /></span>
              {accesses.length >= ACCOUNTS.length
                ? 'All accounts added'
                : accesses.every(a => a.accountId)
                ? 'Add another account'
                : 'Finish current account to add another'}
            </button>
          </div>
        </div>
      </div>

      <div className="modal-foot">
        <button className="btn btn-text">Cancel</button>
        <button className="btn btn-primary" onClick={onSave} disabled={!canSave}>Save</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<NewUserModal />);
